import MainLayout from "../layouts/MainLayout";
import {
  FaReact,
  FaRobot,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function About() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg">

          <h1 className="text-4xl font-bold mb-3">
            🤖 About StudyMate AI
          </h1>

          <p className="text-lg">
            StudyMate AI is an AI-powered study assistant designed to help
            students learn faster through intelligent conversations,
            note-taking, summaries, and quiz generation.
          </p>

        </div>

        {/* Features */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-5">
            ✨ Features
          </h2>

          <ul className="space-y-3 list-disc ml-6">
            <li>🤖 AI Chat using Google Gemini</li>
            <li>📝 Create and manage study notes</li>
            <li>📄 Generate AI-powered summaries</li>
            <li>❓ Create quizzes automatically</li>
            <li>💾 Local Storage support</li>
            <li>📱 Responsive design</li>
            <li>⚡ Fast React + Vite application</li>
          </ul>

        </div>

        {/* Technologies */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            🛠 Technologies Used
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center p-6 rounded-xl bg-blue-50">
              <FaReact className="text-5xl mx-auto text-blue-500 mb-3" />
              <h3 className="font-bold">React</h3>
            </div>

            <div className="text-center p-6 rounded-xl bg-cyan-50">
              <SiTailwindcss className="text-5xl mx-auto text-cyan-500 mb-3" />
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>

            <div className="text-center p-6 rounded-xl bg-yellow-50">
              <SiVite className="text-5xl mx-auto text-yellow-500 mb-3" />
              <h3 className="font-bold">Vite</h3>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50">
              <FaRobot className="text-5xl mx-auto text-green-600 mb-3" />
              <h3 className="font-bold">Gemini AI</h3>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50">
              <FaDatabase className="text-5xl mx-auto text-purple-600 mb-3" />
              <h3 className="font-bold">Local Storage</h3>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-100">
              <FaGithub className="text-5xl mx-auto mb-3" />
              <h3 className="font-bold">GitHub</h3>
            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="text-center text-gray-600">

          <p className="text-lg">
            🎓 Capstone Project
          </p>

          <p>
            Built using React, Tailwind CSS, Vite and Google Gemini AI.
          </p>

        </div>

      </div>
    </MainLayout>
  );
}

export default About;