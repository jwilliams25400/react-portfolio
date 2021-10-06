import React from "React";
import { Link } from " react-scroll";
import Typed from "react-typed";

// TODO
/// need to make css for styling

const home = () => {
  return (
    <div id="home" className="homePage">
      <div classname="homeIntro">
        <Typed
          className="typed-text"
          string={[
            "Welcome! <br> I'm Jemel, <br> a Full stack Developer. <br> click to links to learn more about me and my journey",
          ]}
          typeSpeed={50}
          backspeed={60}
          loop
        />
        <link
          smooth={true}
          to="aboutMe"
          offset={-75}
          className="btn-main-offer"
          href="/#aboutMe"
        >
          About Me
        </link>
      </div>
    </div>
  );
};
