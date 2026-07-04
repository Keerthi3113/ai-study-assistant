import MainLayout from "../layouts/MainLayout";
import {
  FaStickyNote,
  FaRobot,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const chats = JSON.parse(localStorage.getItem("chatHistory")) || [];
  const summaries = JSON.parse(localStorage.getItem("summaries")) || [];
  const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

  const cards = [
    {
      title: "Notes",
      count: notes.length,
      icon: <FaStickyNote size={35} />,
      color: "bg-blue-500",
      link: "/notes",
    },
    {
      title: "AI Chats",
      count: chats.length,
      icon: <FaRobot size={35} />,
      color: "bg-green-500",
      link: "/chat",
    },
    {
      title: "Summaries",
      count: summaries.length,
      icon: <FaFileAlt size={35} />,
      color: "bg-purple-500",
      link: "/summary",
    },
    {
      title: "Quizzes",
      count: quizzes.length,
      icon: <FaQuestionCircle size={35} />,
      color: "bg-orange-500",
      link: "/quiz",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Welcome Banner */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold">
            👋 Welcome to StudyMate AI
          </h1>

          <p className="mt-3 text-lg">
            Your AI-powered study companion for notes,
            summaries, quizzes and intelligent learning.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, index) => (

            <Link
              key={index}
              to={card.link}
            >

              <div
                className={`${card.color} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 cursor-pointer`}
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-lg font-semibold">
                      {card.title}
                    </h2>

                    <p className="text-4xl font-bold mt-3">
                      {card.count}
                    </p>

                  </div>

                  {card.icon}

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            🚀 Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <Link
              to="/notes"
              className="bg-blue-100 rounded-xl p-5 hover:bg-blue-200 transition"
            >
              <h3 className="font-bold text-lg">
                📝 Notes
              </h3>

              <p>Add and manage study notes.</p>
            </Link>

            <Link
              to="/chat"
              className="bg-green-100 rounded-xl p-5 hover:bg-green-200 transition"
            >
              <h3 className="font-bold text-lg">
                🤖 AI Chat
              </h3>

              <p>Ask StudyMate anything.</p>
            </Link>

            <Link
              to="/summary"
              className="bg-purple-100 rounded-xl p-5 hover:bg-purple-200 transition"
            >
              <h3 className="font-bold text-lg">
                📄 Summary
              </h3>

              <p>Generate AI summaries.</p>
            </Link>

            <Link
              to="/quiz"
              className="bg-orange-100 rounded-xl p-5 hover:bg-orange-200 transition"
            >
              <h3 className="font-bold text-lg">
                ❓ Quiz
              </h3>

              <p>Create quizzes instantly.</p>
            </Link>

          </div>

        </div>

        {/* Recent Notes */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            📚 Recent Notes
          </h2>

          {notes.length === 0 ? (
            <p className="text-gray-500">
              No notes available.
            </p>
          ) : (
            <div className="space-y-4">

              {notes.slice(-5).reverse().map((note) => (

                <div
                  key={note.id}
                  className="border rounded-xl p-4 hover:bg-gray-50"
                >

                  <h3 className="font-bold text-lg">
                    {note.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {note.content.length > 100
                      ? note.content.substring(0, 100) + "..."
                      : note.content}
                  </p>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;