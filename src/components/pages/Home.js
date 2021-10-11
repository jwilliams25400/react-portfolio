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
            strings={[
              `Welcome! 
I'm Jemel, a Full Stack Developer. 
click the link to learn more about my journey!!`,
            ]}
            style={{fontSize: "150%", fontWeight: "bold"}}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input style={{ width: "960px", background: "none", border: "none" }} type="text" />
          </Typed>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <a href="#aboutMe" className="btn btn-primary btn-lg" role="button">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
