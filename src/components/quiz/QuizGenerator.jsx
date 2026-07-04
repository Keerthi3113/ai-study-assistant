import { useState } from "react";
import { askGemini } from "../../services/gemini";

function QuizGenerator() {
  const [text, setText] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!text.trim()) {
      alert("Please enter study notes.");
      return;
    }

    setLoading(true);

    const prompt = `
You are an AI Teacher.

Generate 5 multiple-choice questions.

Rules:
- Four options.
- Mention the correct answer.
- Questions should be based ONLY on the notes.

Notes:

${text}
`;

    const result = await askGemini(prompt);

    setQuiz(result);

const oldQuizzes =
  JSON.parse(localStorage.getItem("quizzes")) || [];

oldQuizzes.push(result);

localStorage.setItem(
  "quizzes",
  JSON.stringify(oldQuizzes)
);

    setQuiz(result);

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <textarea
        rows="8"
        className="w-full border rounded-lg p-4"
        placeholder="Paste study notes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generateQuiz}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quiz && (
        <div className="mt-6 bg-gray-100 rounded-lg p-4">

          <h2 className="text-xl font-bold mb-3">
            📝 AI Generated Quiz
          </h2>

          <div className="whitespace-pre-wrap">
            {quiz}
          </div>

        </div>
      )}

    </div>
  );
}

export default QuizGenerator;