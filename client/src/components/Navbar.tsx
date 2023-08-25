import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-white font-medium text-lg">
        Movie Search
      </Link>
      {isLoggedIn ? (
        <button onClick={onLogout} className="text-white font-medium">
          Logout
        </button>
      ) : (
        <Link to="/login" className="text-white font-medium">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;