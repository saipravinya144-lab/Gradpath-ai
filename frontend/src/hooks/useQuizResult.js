import { useCallback } from "react";

const API_URL = "https://gradpath-ai-backend.onrender.com/quiz-results";

function calculateAnswersScore(topic, answers) {
  if (!topic?.lesson?.quiz || !answers) return null;

  const quiz = topic.lesson.quiz;
  let score = 0;

  quiz.forEach((question, index) => {
    let selectedAnswer;

    if (answers[`${topic.id}-${index}`] !== undefined) {
      selectedAnswer = answers[`${topic.id}-${index}`];
    } else if (answers[topic.id]?.[index] !== undefined) {
      selectedAnswer = answers[topic.id][index];
    } else if (answers[topic.id]?.[String(index)] !== undefined) {
      selectedAnswer = answers[topic.id][String(index)];
    }

    if (selectedAnswer === question.answer) {
      score += 1;
    }
  });

  return score;
}

function useQuizResult() {
  const saveQuizResult = useCallback(async ({
    subject,
    role = null,
    topic,
    answers = null,
    score: providedScore = null,
  }) => {
    const token = localStorage.getItem("token");

    if (!token || !topic?.lesson?.quiz?.length) return;

    const totalQuestions = topic.lesson.quiz.length;
    const calculatedScore = calculateAnswersScore(topic, answers);
    const score =
      typeof providedScore === "number"
        ? providedScore
        : calculatedScore ?? 0;

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject,
          role,
          topic: topic.title || topic.name || topic.id,
          topicId: String(topic.id),
          score,
          totalQuestions,
          passed: score >= Math.ceil(totalQuestions * 0.6),
        }),
      });
    } catch (error) {
      console.error("Error saving quiz result:", error);
    }
  }, []);

  return { saveQuizResult };
}

export default useQuizResult;
