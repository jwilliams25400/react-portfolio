import React from "react";
import profilePhoto from "../../images/profile.jpg";

function AboutMe() {
  return (
    <div className="aboutme-wrapper">
      <div className="container">
        <div className="photo-container col-lg-4 col-xm-12">
          <img
            className="profile-img"
            src={profilePhoto}
            alt="Profile cap"
            width="300"
            height="300"
          />
        </div>
        <div className="col-lg-7 col-xm-12">
          <h2 className="about-me">About Me</h2>
          <p>
            My name is Jemel, I hold a Bachelors degree in finance from Seton
            Hall University. I've worked in the financial industry for 7+ years,
            Most recently as a Private Client Wealth Advisor. I am currently
            enrolled in Rutger's University Fullstack Coding Bootcamp. I have
            rubost knowledge of HTML, CSS, Javascript, jquery, nodejs, mongo &
            react. In the Rutgers Coding Bootcamp I have learned hands on
            experience in building state of the art, easy to use, responsive,
            user-friendly applications. I pride myself on being detailed oriented, 
            analytical and driven. As I learn more and acquire new skills I
            will continue to update my portfolio with my latest work. 
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
