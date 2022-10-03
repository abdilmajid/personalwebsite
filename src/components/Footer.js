import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/abdilmajid-ibrahim"><LinkedInIcon /></a>
        <a href="https://github.com/abdilmajid"><GitHubIcon /></a>
        <a href="mailto:abdilwebdev@gmail.com"><EmailIcon /></a>
      </div>     
      <p> &copy; 2022 AbdilmajidIbrahim.com </p>
    </div>
  );
}

export default Footer