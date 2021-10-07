import React from "react";
import { Link } from "react-router-dom";

// need to make a css page an import some styling

function Navbar () {
    return (
     <div className="Navbar-wrapper">
       <nav className="navbar navbar-expand-lg light-blue darken-4 navbar-fixed">
         <div className="name">
           <h1 className="name-logo" >Jemel</h1> 
         </div>    
         <ul className="nav-items">
            <Link to="/Home" className="nav-item" id="home">HomePage</Link>
            <a className="nav-item" href="http://linkedin.com/in/jemel-williamsicams-a5b14014/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/aboutme" className="nav-item" id="aboutMe">About Me</Link>
            <Link to="/portfolio" className="nav-item" id="portfolio">Portfolio</Link>
            <Link to="/contact" className="nav-item" id="contact">Contact</Link>
            
        </ul>    
        
      </nav>    
        
     </div>
    )
};
export default Navbar;