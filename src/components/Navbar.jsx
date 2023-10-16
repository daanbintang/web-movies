import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-gradient-to-r from-zinc-950 via-red-950 to-zinc-950 text-white">
        <h1>WebMovies</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
