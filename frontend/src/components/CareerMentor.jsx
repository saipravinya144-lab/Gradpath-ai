import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./CareerMentor.css";

const STARTER_PROMPTS = [
    "What should I learn next for my career goal?",
    "Suggest a project that matches my current skills.",
    "Help me make a realistic 4-week learning plan.",
    "How can I prepare for internships this year?"
];

function normalizeMentorMarkdown(value = "") {
    return String(value)
        // Some model responses escape Markdown punctuation unnecessarily.
        .replace(/\\([#*_|])/g, "$1")
        .replace(/\\<br\s*\/?\s*>/gi, "\n")
        .replace(/<br\s*\/?\s*>/gi, "\n");
}

function MentorMessageContent({ content }) {
    return (
        <div className="mentor-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{normalizeMentorMarkdown(content)}</ReactMarkdown>
        </div>
    );
}

function CareerMentor({ student, selectedRole, onBack }) {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: `Hi${student?.name ? ` ${student.name}` : ""}! I'm your GradPath AI Career Mentor. I can help you plan what to learn next, choose projects, prepare for interviews, and work toward internships. What would you like help with?`
        }
    ]);
    const [draft, setDraft] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, sending]);

    const sendMessage = async (text = draft) => {
        const message = text.trim();
        if (!message || sending) return;

        const history = messages
            .filter((item) => item.role === "user" || item.role === "assistant")
            .slice(-10);
        setMessages((previous) => [...previous, { role: "user", content: message }]);
        setDraft("");
        setError("");
        setSending(true);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Your session has expired. Please log in again.");
            }

            const response = await fetch("https://gradpath-ai-backend.onrender.com/career-mentor/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    message,
                    history,
                    selectedRole: selectedRole || student?.targetRole || ""
                })
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(data.message || "The mentor couldn't respond. Please try again.");
            }
            setMessages((previous) => [...previous, { role: "assistant", content: data.reply }]);
        } catch (requestError) {
            setError(requestError.message || "Couldn't reach the AI Career Mentor. Check that the backend is running.");
        } finally {
            setSending(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    return (
        <main className="career-mentor">
            <div className="career-mentor-topbar">
                <button type="button" className="mentor-back" onClick={onBack}>← Back</button>
                <span className="mentor-status"><span className="mentor-status-dot" /> AI career guidance</span>
            </div>

            <section className="mentor-heading">
                <div className="mentor-symbol" aria-hidden="true">✦</div>
                <p className="mentor-eyebrow">YOUR PERSONAL CAREER GUIDE</p>
                <h2>AI Career Mentor</h2>
                <p>Get practical guidance shaped around your profile, learning progress, and quiz results.</p>
                <div className="mentor-context">
                    <span><strong>Role:</strong> {selectedRole || student?.targetRole || "Not selected yet"}</span>
                    <span><strong>Year:</strong> {student?.year || "—"}</span>
                    <span><strong>Branch:</strong> {student?.branch || "—"}</span>
                </div>
            </section>

            <section className="mentor-chat" aria-label="Career mentor conversation">
                <div className="mentor-messages" aria-live="polite">
                    {messages.map((item, index) => (
                        <div className={`mentor-message mentor-${item.role}`} key={`${item.role}-${index}`}>
                            {item.role === "assistant" && <span className="mentor-avatar" aria-hidden="true">✦</span>}
                            <div className="mentor-bubble">
                                <span className="mentor-message-label">{item.role === "assistant" ? "GradPath Mentor" : "You"}</span>
                                {item.role === "assistant" ? <MentorMessageContent content={item.content} /> : <p>{item.content}</p>}
                            </div>
                        </div>
                    ))}
                    {sending && (
                        <div className="mentor-message mentor-assistant">
                            <span className="mentor-avatar" aria-hidden="true">✦</span>
                            <div className="mentor-bubble"><span className="mentor-message-label">GradPath Mentor</span><p className="mentor-typing">Thinking through your next step…</p></div>
                        </div>
                    )}
                    <div ref={endRef} />
                </div>

                {messages.length === 1 && (
                    <div className="mentor-starters">
                        <p>Try asking</p>
                        {STARTER_PROMPTS.map((prompt) => (
                            <button type="button" key={prompt} onClick={() => sendMessage(prompt)} disabled={sending}>{prompt}<span>↗</span></button>
                        ))}
                    </div>
                )}

                {error && <div className="mentor-error" role="alert">{error}</div>}

                <form className="mentor-composer" onSubmit={handleSubmit}>
                    <label className="mentor-sr-only" htmlFor="mentor-message">Ask your career mentor</label>
                    <textarea
                        id="mentor-message"
                        value={draft}
                        onChange={(event) => setDraft(event.target.value)}
                        placeholder="Ask about skills, projects, internships, or your next step…"
                        maxLength={2000}
                        rows={2}
                        disabled={sending}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                event.preventDefault();
                                handleSubmit(event);
                            }
                        }}
                    />
                    <button type="submit" disabled={sending || !draft.trim()}>{sending ? "Thinking…" : "Send ↑"}</button>
                    <span className="mentor-composer-hint">Enter to send · Shift+Enter for a new line</span>
                </form>
            </section>
            <p className="mentor-disclaimer">Use the guidance as a starting point. Verify current job and internship requirements with official sources.</p>
        </main>
    );
}

export default CareerMentor;
