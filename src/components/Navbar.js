import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Blog Platform</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#create-post">Create Post</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
