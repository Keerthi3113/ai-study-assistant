import { useState, useEffect, useRef } from "react";
import { askGemini } from "../../services/gemini";
import ReactMarkdown from "react-markdown";

function ChatBot() {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // Save chat + Auto Scroll
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "You",
      text: question,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    // Conversation History
    const conversation = updatedMessages
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");

    // Load Saved Notes
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];

    const notesText = savedNotes
      .map(
        (note) =>
          `Title: ${note.title}\nContent: ${note.content}`
      )
      .join("\n\n");

    // Prompt
    const prompt = `
You are StudyMate AI, an intelligent tutor for students.

The user has these saved notes:

${notesText}

Instructions:

- Answer in simple English.
- Keep answers between 80–120 words unless more detail is requested.
- Use headings and bullet points.
- Give one practical example.
- If programming is involved, include short code examples.
- If the user says "Explain more", continue the previous answer.
- If the user asks about "my notes", use the saved notes above.
- If asked to summarize, create concise revision notes.
- If asked for quiz questions, generate exactly 5 MCQs with answers.

Conversation:

${conversation}
`;

    try {
      const reply = await askGemini(prompt);

      const aiMessage = {
        sender: "AI",
        text: reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "❌ Something went wrong while contacting Gemini.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold">
          🤖 StudyMate AI
        </h2>

        <button
          onClick={() => {
            setMessages([]);
            localStorage.removeItem("chatHistory");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          🗑 Clear Chat
        </button>

      </div>

      {/* Chat Window */}

      <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 bg-gray-50">

        {messages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            👋 Ask me anything about programming or your notes.
          </p>
        ) : (
          messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "You"
                  ? "justify-end"
                  : "justify-start"
              } mb-4`}
            >

              <div
                className={`max-w-[80%] rounded-xl p-4 shadow ${
                  msg.sender === "You"
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >

                <p className="font-bold mb-2">
                  {msg.sender === "You"
                    ? "👤 You"
                    : "🤖 StudyMate AI"}
                </p>

                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>
                </div>

                <div className="flex justify-between items-center mt-3">

                  <p className="text-xs opacity-70">
                    {msg.time}
                  </p>

                  {msg.sender === "AI" && (
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(msg.text)
                      }
                      className="text-xs text-blue-600 hover:underline"
                    >
                      📋 Copy
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))
        )}

        {loading && (

          <div className="flex items-center gap-3 text-blue-600 font-semibold">

            <span className="animate-pulse text-2xl">
              🤖
            </span>

            <span>
              StudyMate AI is thinking...
            </span>

          </div>

        )}

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className={`px-6 rounded-lg text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default ChatBot;