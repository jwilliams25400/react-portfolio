import React from "react";
// import { Link } from "react-router-dom";
import Typed from "react-typed";

// TODO
/// need to make css for styling

function Home() {
  return (
    <div id="home" className="homePage">
      <div className="homeIntro">
        <div className="text-container d-grid gap-5 d-md-flex justify-content-md-center col-lg-12">
        <Typed
          className="typed-text"
          string={[
            "Welcome! <br> I'm Jemel, <br> a Full Stack Developer. <br> click to links to learn more about me and my journey",
          ]}
          typeSpeed={50}
          backspeed={60}
          attr="placehoolder"
          loop
          />
          "Welcome!  I'm Jemel, a Full Stack Developer. Click the About me link to learn more about my journey",
      
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <a
          href="#aboutMe"
          className="btn btn-primary btn-lg"
          role="button"
        >
          About Me
        </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
