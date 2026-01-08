import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <div className="text-sm text-gray-600">Admin</div>
    </div>
  );
};

export default Navbar;
