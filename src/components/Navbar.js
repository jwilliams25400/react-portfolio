import React from "react";
import { Link } from "react-router-dom";

// need to make a css page an import some styling

const Navbar = () => {
    return (
     <div className="Navbar-wrapper">
       <nav className="navbar navbar-expand-lg light-blue darken-4 navbar-fixed">
         <div className="name">
           <h1 className="name-logo" >Jemel</h1> 
         </div>    
         <ul className="nav-items">
            <li className="nav-item" id="home"><Link to="/Home" className="nav-link active" onClick={}></Link>Home</li>
            <li className="nav-item" id="aboutMe"><Link to="/aboutme" className="nav-link active" onClick={}></Link>About Me</li>
            <li className="nav-item" id="portfolio"><Link to="/portfolio" className="nav-link active" onClick={}></Link>Portfolio</li>
            <li className="nav-item" id="contact"><Link to="/contact" className="nav-link active" onClick={}></Link>Contact</li>
            
        </ul>    
        
      </nav>    
        
     </div>
    )
};
export default Navbar;