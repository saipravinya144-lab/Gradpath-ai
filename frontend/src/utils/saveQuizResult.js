const API_BASE = "https://gradpath-ai-backend.onrender.com";
const inFlightSaves = new Map();

/** Persist one completed quiz attempt for the authenticated student. */
export async function saveQuizResult({
    subject,
    role = null,
    topic,
    topicId = null,
    subtopic = null,
    score,
    totalQuestions
}) {
    const token = localStorage.getItem("token");
    const resolvedTopicId = topicId ?? subtopic;

    if (!token) {
        console.error("Cannot save quiz result: no login token found.");
        return { ok: false, reason: "unauthenticated" };
    }

    if (
        !subject || !topic || !resolvedTopicId ||
        !Number.isInteger(score) || !Number.isInteger(totalQuestions) ||
        totalQuestions < 1 || score < 0 || score > totalQuestions
    ) {
        console.error("Quiz result is invalid or missing required fields.");
        return { ok: false, reason: "invalid-result" };
    }

    const requestKey = JSON.stringify({
        token,
        subject,
        role,
        topic: String(topic),
        topicId: String(resolvedTopicId),
        score,
        totalQuestions
    });

    // A rapid double-click should share the same in-flight request, not create
    // duplicate history entries. A later intentional retry is still recorded.
    if (inFlightSaves.has(requestKey)) return inFlightSaves.get(requestKey);

    const request = (async () => {
        try {
            const response = await fetch(`${API_BASE}/quiz-results`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    subject,
                    role,
                    topic,
                    topicId: String(resolvedTopicId),
                    score,
                    totalQuestions,
                    passed: score >= Math.ceil(totalQuestions * 0.6)
                })
            });

            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                console.error("Failed to save quiz result:", data.message || response.statusText);
                return { ok: false, reason: "server-error", status: response.status };
            }

            return { ok: true, result: data.result };
        } catch (error) {
            console.error("Error saving quiz result:", error);
            return { ok: false, reason: "network-error" };
        } finally {
            inFlightSaves.delete(requestKey);
        }
    })();

    inFlightSaves.set(requestKey, request);
    return request;
}
