import "./FooterStyles.css";
import {
  // FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:8310060176";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:talikotisaqib257@gmail.com";
  };





  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Shivbasav Nagar</p>
              <p>Belgaum, India</p>
            </div>
          </div>{" "}
          <div className="phone" onClick={handlePhoneClick}>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8310060176
            </h4>
          </div>
          <div className="email" onClick={handleEmailClick}>
            <h4>
              <FaMailBulk 
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              talikotisaqib257@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About</h4>
          <p>As a MERN stack developer, I'm passionate about creating efficient and engaging web applications. If you're looking to collaborate, have a project idea, or just want to say hello, feel free to reach out.</p>
          <div className="social">
          <a
              href="https://github.com/Saqeeb01"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
             />
            </a>
            <a
              href="https://twitter.com/Saqeeb_01"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-sakeeb-talikoti-a917b025b/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
