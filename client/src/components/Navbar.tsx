import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-white font-medium text-lg">
        Movie Search
      </Link>
      <Link
        to="/watchlistcenter"
        className="text-white float-right font-medium text-lg"
      >
        Watchlist
      </Link>
    </nav>
  );
};

export default Navbar;
