import React from "react";
// import { Link } from "react-router-dom";
import Typed from "react-typed";

// TODO
/// need to make css for styling

function Home() {
  return (
    <div id="home" className="homePage">
      <div classname="homeIntro">
        <Typed
          className="typed-text"
          string={[
            "Welcome! <br> I'm Jemel, <br> a Full Stack Developer. <br> click to links to learn more about me and my journey",
          ]}
          typeSpeed={50}
          backspeed={60}
          loop
        />

        <a
          href="#aboutMe"
          className="btn btn-primary btn-lg"
          role="button"
          data-bs-toggle="button"
        >
          About Me
        </a>
      </div>
    </div>
  );
}

export default Home;
