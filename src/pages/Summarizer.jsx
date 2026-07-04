import MainLayout from "../layouts/MainLayout";
import SummarizerBox from "../components/summarizer/SummarizerBox";

function Summarizer() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        🤖 AI Note Summarizer
      </h1>

      <p className="mb-6 text-gray-600">
        Paste your study notes below and generate a quick summary.
      </p>

      <SummarizerBox />

    </MainLayout>
  );
}

export default Summarizer;