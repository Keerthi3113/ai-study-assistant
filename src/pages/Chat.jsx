import MainLayout from "../layouts/MainLayout";
import ChatBot from "../components/chat/ChatBot";

function Chat() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        🤖 AI Study Chat
      </h1>

      <p className="mb-6 text-gray-600">
        Ask questions related to your study topics.
      </p>

      <ChatBot />

    </MainLayout>
  );
}

export default Chat;