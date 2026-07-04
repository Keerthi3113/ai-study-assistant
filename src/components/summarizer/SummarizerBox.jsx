import { useState } from "react";
import { askGemini } from "../../services/gemini";

function SummarizerBox() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) {
      alert("Please enter your notes.");
      return;
    }

    setLoading(true);

    const prompt = `
You are an AI Study Assistant.

Summarize the following notes.

Rules:
- Use simple English.
- Use bullet points.
- Highlight only important concepts.
- Keep it short and easy to revise.

Notes:

${text}
`;

    const result = await askGemini(prompt);

    setSummary(result);

const oldSummaries =
  JSON.parse(localStorage.getItem("summaries")) || [];

oldSummaries.push(result);

localStorage.setItem(
  "summaries",
  JSON.stringify(oldSummaries)
);

    setSummary(result);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <textarea
        rows="8"
        className="w-full border rounded-lg p-4"
        placeholder="Paste your notes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSummarize}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">
            🤖 AI Summary
          </h2>

          <div className="whitespace-pre-wrap">
            {summary}
          </div>
        </div>
      )}

    </div>
  );
}

export default SummarizerBox;