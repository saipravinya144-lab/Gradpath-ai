import { useCallback, useEffect, useMemo, useState } from "react";

const API_BASE = "https://gradpath-ai-backend.onrender.com";

function useLearningProgress(namespace, subtopics = []) {
    const [completed, setCompleted] = useState([]);
    const [loading, setLoading] = useState(true);
    const [savingIds, setSavingIds] = useState([]);

    // Depend on the IDs, not the array identity, so a recreated subtopics
    // array does not trigger unnecessary progress requests.
    const topicIds = useMemo(
        () => subtopics.map((topic) => String(topic.id)),
        [subtopics]
    );
    const topicIdsKey = topicIds.join("\u001f");

    useEffect(() => {
        let cancelled = false;
        const controller = new AbortController();

        const fetchProgress = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setCompleted([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(`${API_BASE}/learning-progress`, {
                    headers: { Authorization: `Bearer ${token}` },
                    signal: controller.signal,
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || "Failed to load learning progress");
                }

                const saved = new Set(data.completedTopics || []);
                const savedForThisModule = topicIds.filter((id) =>
                    saved.has(`${namespace}-${id}`)
                );
                if (!cancelled) setCompleted(savedForThisModule);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error loading learning progress:", error);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchProgress();
        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [namespace, topicIdsKey]);

    const markComplete = useCallback(async (id) => {
        const localId = String(id);
        if (completed.includes(localId) || savingIds.includes(localId)) return false;

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Cannot save learning progress: no login token found.");
            return false;
        }

        setSavingIds((previous) => previous.includes(localId) ? previous : [...previous, localId]);
        try {
            const response = await fetch(`${API_BASE}/learning-progress/complete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ topicId: `${namespace}-${localId}` }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to save learning progress");
            }

            setCompleted((previous) => previous.includes(localId) ? previous : [...previous, localId]);
            return true;
        } catch (error) {
            console.error("Error saving learning progress:", error);
            return false;
        } finally {
            setSavingIds((previous) => previous.filter((savedId) => savedId !== localId));
        }
    }, [namespace, completed, savingIds]);

    return { completed, markComplete, loading, savingIds };
}

export default useLearningProgress;
