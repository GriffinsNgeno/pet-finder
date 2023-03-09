import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar component */}
      <nav className="NAVBAR">
        {/* Container for navigation links */}
        <div className="navbar-links">
          {/* Link to homepage */}
          <Link to="/">
            {/* Logo image */}
            <img
              alt=""
              src="https://i.pinimg.com/236x/4f/a8/b7/4fa8b7ae78cc4ed871f29c768f533397.jpg"
              className="img-nav"
            />
          </Link>
          {/* Link to animal list page */}
          <Link className="img-nav" to="/animalList">
            FIND PET
          </Link>
          {/* Link to login page */}
          <Link className="img-nav" to="/login">
            LOG IN
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
