import React from "react";
import profilePhoto from "../images/profile.jpg";


function AboutMe () {
    return (
        <div className="aboutme-wrapper">
            <div className="container">
                <div className="photo-container col-lg-4 col-xm-12">
                    <img className="profile-photo" src={profilePhoto} />
                </div>
                <div className="col-lg-7 col-xm-12">
                    <h2 className="about-me">About Me</h2>
                    <p>My name is Jemel, I hold a Bachelors degree in finance from Seton
            Hall University. I've worked in the financial industry for 7+ years,
            Most recently as a wealth management advisor. I am currently enrolled in Rutgers University fullstack Coding Bootcamp. I have a rubost knowledge of HTML, CSS, Javascript, jquery, nodejs, mongo & react. In the Rutgers Coding Bootcamp I have learned hands on experience in building state of the art, easy to use, responsive, user-friendly applications. As I learn more and acquire new skills I will continue to update my portfolio with my latest work. I pride myself on being detailed oriented, analytical and
            driven.</p>
                </div>

            </div>

        </div>
    )
}
export default AboutMe