import React from "react";
import "./navbar.scss";
import Screenshot from "../../Screenshot.png";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <img className="logo" src={Screenshot} alt="Logo TourMj" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              {" "}
              TourMj
            </a>
          </li>
          <li>
            <a href="/" className="nav-item active">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
