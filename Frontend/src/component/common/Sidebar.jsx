import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Candidates", path: "/candidates", icon: <FiUsers /> },
    { name: "Interviews", path: "/interviews", icon: <FiCalendar /> },
    { name: "Hired", path: "/hired", icon: <FiCheckCircle /> },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-900 text-gray-100 transition-all duration-300 flex flex-col`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-blue-300">
            Admin Panel
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-300 hover:text-white"
        >
          {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 hover:bg-gray-700 transition
                ${isActive ? "bg-gray-800 text-blue-400" : ""}`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">
                  {item.name}
                </span>
              )}
            </Link>

          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
