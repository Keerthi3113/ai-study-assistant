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
You are StudyMate AI, an expert study assistant.

Your task is to create clean and easy-to-read study notes.

Rules:
- Use simple English.
- Keep the summary between 100 and 150 words.
- Use short headings.
- Use bullet points where appropriate.
- Do NOT use Markdown symbols like ###, **, *, or code blocks.
- Do NOT include unnecessary introductions.
- Highlight only the important concepts.
- Make the notes suitable for quick revision.
- If definitions are needed, explain them in one or two sentences.
- End with a short "Key Takeaway".

Study Material:

${text}
`;

   const result = await askGemini(prompt);

// Clean unwanted Markdown symbols
const cleanResult = result
  .replace(/```[\s\S]*?```/g, "")      // Remove code blocks
  .replace(/#{1,6}\s?/g, "")           // Remove headings
  .replace(/\*\*/g, "")                // Remove bold
  .replace(/\*/g, "• ")                // Convert bullets
  .replace(/`/g, "")                   // Remove inline code
  .replace(/^\s*[-]\s/gm, "• ")        // Convert - to bullets
  .replace(/\n{3,}/g, "\n\n")          // Remove extra blank lines
  .trim();
const oldSummaries =
  JSON.parse(localStorage.getItem("summaries")) || [];

oldSummaries.push(cleanResult);

localStorage.setItem(
  "summaries",
  JSON.stringify(oldSummaries)
);

setSummary(cleanResult);
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

          <div className="whitespace-pre-wrap leading-7 text-gray-700">
            {summary}
          </div>
        </div>
      )}

    </div>
  );
}

export default SummarizerBox;