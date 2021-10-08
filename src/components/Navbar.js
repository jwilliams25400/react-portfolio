import React from "react";
import { Link } from "react-router-dom";

// need to make a css page an import some styling

function Navbar() {
  return (
    <div className="Navbar-wrapper">
      <nav className="navbar navbar-expand-lg light-blue darken-4 navbar-fixed">
        <div className="name">
          <h1 className="name-logo">Jemel</h1>
        </div>
        <ul className="nav-items">
          <Link
            to="/Home"
            exact
            activeClassName="active"
            className="nav-item"
            id="home"
            onClick={click}
          >
            HomePage
          </Link>
          <a
            className="nav-item"
            exact
            activeClassName="active"
            href="http://linkedin.com/in/jemel-williamsicams-a5b14014/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={click}
          >
            LinkedIn
          </a>
          <Link
            to="/aboutme"
            exact
            activeClassName="active"
            className="nav-item"
            id="aboutMe"
            onClick={click}
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            exact
            activeClassName="active"
            className="nav-item"
            id="portfolio"
            onClick={click}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            exact
            activeClassName="active"
            className="nav-item"
            id="contact"
            onClick={click}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
