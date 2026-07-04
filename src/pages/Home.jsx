import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold mb-4">
          📚 StudyMate AI
        </h1>

        <p className="text-xl">
          Your Personal AI Learning Assistant powered by Google Gemini.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/chat"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            🤖 Start Chat
          </Link>

          <Link
            to="/notes"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            📝 My Notes
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;