import { FaRobot } from "react-icons/fa";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <FaRobot className="text-blue-600 text-3xl" />
        <h1 className="text-2xl font-bold text-blue-700">
          StudyMate AI
        </h1>
      </div>

      <p className="text-gray-600">
        📅 {today}
      </p>
    </div>
  );
}

export default Navbar;