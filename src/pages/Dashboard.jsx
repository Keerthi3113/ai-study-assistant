import MainLayout from "../layouts/MainLayout";
import {
  FaStickyNote,
  FaComments,
  FaClipboardList,
  FaFileAlt,
} from "react-icons/fa";

function Dashboard() {
  // Get data from localStorage
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const chats = JSON.parse(localStorage.getItem("chatHistory") || "[]");
  const quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
  const summaries = JSON.parse(localStorage.getItem("summaries") || "[]");

  const cards = [
    {
      title: "Notes",
      value: notes.length,
      icon: <FaStickyNote size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Chat Messages",
      value: chats.length,
      icon: <FaComments size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Quizzes",
      value: quizzes.length,
      icon: <FaClipboardList size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Summaries",
      value: summaries.length,
      icon: <FaFileAlt size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-8">
          📊 Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${card.color}`}
              >
                {card.icon}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {card.title}
              </h2>

              <p className="text-4xl font-bold mt-2">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-3">
            🎯 Welcome to StudyMate AI
          </h2>

          <p className="text-gray-600">
            Keep learning! Use AI Chat to ask questions, save important notes,
            summarize long content, and generate quizzes to test your knowledge.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;