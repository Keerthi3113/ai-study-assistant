import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaStickyNote,
  FaFileAlt,
  FaQuestionCircle,
  FaRobot,
  FaInfoCircle,
  FaGraduationCap,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: <FaStickyNote />,
    },
    {
      name: "Summarizer",
      path: "/summarizer",
      icon: <FaFileAlt />,
    },
    {
      name: "Quiz",
      path: "/quiz",
      icon: <FaQuestionCircle />,
    },
    {
      name: "AI Chat",
      path: "/chat",
      icon: <FaRobot />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaInfoCircle />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-700 to-indigo-800 text-white shadow-xl">

      {/* Logo */}
      <div className="p-6 text-center border-b border-blue-500">

        <FaGraduationCap className="text-5xl mx-auto mb-3 text-yellow-300" />

        <h1 className="text-2xl font-bold">
          StudyMate AI
        </h1>

        <p className="text-sm text-blue-100 mt-2">
          AI Powered Learning
        </p>

      </div>

      {/* Menu */}
      <nav className="mt-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all duration-300 ${
                isActive
                  ? "bg-white text-blue-700 font-bold border-r-4 border-yellow-400"
                  : "hover:bg-blue-600"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}
      <div className="absolute bottom-5 w-64 text-center text-sm text-blue-200">
        Version 1.0 🚀
      </div>

    </aside>
  );
}

export default Sidebar;