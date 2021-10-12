import React from "react";
// import { Link } from "react-router-dom";
import Typed from "react-typed";
import homephoto from "../../images/homephoto.jpg";

// TODO
/// need to make css for styling

function Home() {
  return (
    <div id="home" className="homePage">
      <div className="d-md-flex justify-content-md-center col-lg-12">
      <h4>So you're probably wondering how I got here</h4>
      </div>
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

        <div className="col-12">
          <div className="pjPhoto d-md-flex justify-content-md-center col-lg-12">
            <img
              className="rounded-circle profile-img"
              style={{alignContent:"center"}}
              src={homephoto}
              alt="Card cap"
              width="300"
              height="400"
            />
          </div>
          <div className="d-md-flex justify-content-md-center col-lg-12">
          <h4>You never change you life until you step out of your comfort zone; change begins where your comfort zone ends!! </h4>
          </div>
        </div>







        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <a href="#aboutMe" className="btn btn-primary btn-lg" role="button" target="_blank" onClick={ () => han("Aboute")}>
            About Me
          </a>
           <Link to={AboutMe}><button className="btn btn-primary btn-lg" role="button" target="_blank">About Me</button>
          </Link> 
        </div> */}
      </div>
    </div>
  );
}

export default Home;
