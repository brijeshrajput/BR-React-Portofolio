import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>brijeshch80580@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/its_brijesh_rajput/"><Insta color="white" size={"3rem"} /></a>
        <a href="https://www.linkedin.com/in/brijesh-chauhan-85b99b21b/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/brijeshrajput"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
