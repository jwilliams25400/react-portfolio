import React from "react";
import { Link } from "react-router-dom";

// need to make a css page an import some styling

function Navbar({currentPage, handlePageChange}) {
  return (
    <div className="nav navbar-wrapper">
      <nav className="navbar navbar-expand-lg light-blue darken-4 navbar-fixed">
        <div className="name">
          <h1 className="name-logo">Jemel</h1>
        </div>
        <ul className="nav nav-items">
          <Link
            to="/Home"
            exact
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            // activeClassName="active"
            // className="nav-item"
            id="homepage"
            onClick={() => handlePageChange("Home")}
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
            onClick={() => handlePageChange("LinkedIn")}
          >
            LinkedIn
          </a>
          <Link
            to="/aboutMe"
            exact
            className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
            // activeClassName="active"
            // className="nav-item"
            id="aboutMe"
            onClick={() => handlePageChange("AbougtMe")}
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            exact
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
            // activeClassName="active"
            // className="nav-item"
            id="portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            exact
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            // activeClassName="active"
            // className="nav-item"
            id="contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
