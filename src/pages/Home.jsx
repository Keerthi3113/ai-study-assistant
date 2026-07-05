import { Link } from "react-router-dom";

import {
  FaRobot,
  FaBookOpen,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";

function Home() {
  return (
    <div className="space-y-10">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-10 shadow-xl">

        <h1 className="text-5xl font-extrabold mb-5">
          📚 StudyMate AI
        </h1>

        <p className="text-xl max-w-3xl">
          Your personal AI learning companion powered by Google Gemini.
          Chat with AI, summarize notes, generate quizzes, and organize
          your study materials—all in one place.
        </p>

        <div className="flex gap-5 mt-8">

          <Link
            to="/chat"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            🤖 Start Chat
          </Link>

          <Link
            to="/quiz"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
          >
            ❓ Generate Quiz
          </Link>

        </div>

      </div>

      {/* Features */}

      <div>

        <h2 className="text-3xl font-bold mb-6">
          🚀 Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
  to="/chat"
  className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition block"
>

            <FaComments
              className="text-blue-600 text-5xl mb-4"
            />

            <h3 className="font-bold text-xl">
              AI Chat
            </h3>

            <p className="text-gray-600 mt-2">
              Ask questions and learn concepts with Gemini AI.
            </p>

          </Link>

         <Link
  to="/notes"
  className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition block"
>
            <FaBookOpen
              className="text-green-600 text-5xl mb-4"
            />

            <h3 className="font-bold text-xl">
              Smart Notes
            </h3>

            <p className="text-gray-600 mt-2">
              Save and organize your study notes.
            </p>

          </Link>

          <Link
  to="/quiz"
  className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition block"
>

            <FaClipboardList
              className="text-orange-500 text-5xl mb-4"
            />

            <h3 className="font-bold text-xl">
              Quiz Generator
            </h3>

            <p className="text-gray-600 mt-2">
              Generate MCQs instantly from any topic.
            </p>

          </Link>

          <Link
  to="/summarizer"
  className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition block"
>

            <FaRobot
              className="text-purple-600 text-5xl mb-4"
            />

            <h3 className="font-bold text-xl">
              AI Summarizer
            </h3>

            <p className="text-gray-600 mt-2">
              Summarize long study materials in seconds.
            </p>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;