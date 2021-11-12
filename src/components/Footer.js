import React from "react";
import email from "../images/email.jpg";
import github from "../images/github.jpg";
import phone from "../images/phone.jpg";

function Footer() {
  return (
    <footer className="sticky-bottom">
      <br />
      <br />
      <div className="container is-fluid">
        <div className="d-grid gap-2 d-md-flex justify-content-md-center col-lg-12">

        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end"> */}
        <img src={phone} 
        alt="foot-img"/>
          <h5>917-941-6748</h5>
          <br />
          <img src={email}
          alt="foot-img" />
          <h5>JWilliams25400@yahoo.com</h5>
          <br />
          <img src={github} 
          alt="foot-img"/>
          <h5>github.com/jwilliams25400</h5>
        </div>
        <br />
        <div className="d-md-flex justify-content-md-center col-lg-12">
          <h6> &#169; Jemel Williams 2021</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
