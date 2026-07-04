import MainLayout from "../layouts/MainLayout";
import QuizGenerator from "../components/quiz/QuizGenerator";

function Quiz() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        🧠 AI Quiz Generator
      </h1>

      <p className="text-gray-600 mb-6">
        Paste your study notes and generate practice questions.
      </p>

      <QuizGenerator />
    </MainLayout>
  );
}

export default Quiz;