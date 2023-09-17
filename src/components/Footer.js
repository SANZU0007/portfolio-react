import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https:wa.me/qr/CLHH3IS3MS2HE1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>

        <a
          href="https://www.instagram.com/san.___j.__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-m-sanjay-89688825a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 SanjayWeb.com</p>
    </div>
  );
}

export default Footer;
