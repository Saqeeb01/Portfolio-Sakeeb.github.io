import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assests/ImgIntro.jpg";

// import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
      <img className="intro-img"
      src={IntroImg}  alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI, I'M Mohammad Sakeeb.</p>
            <h1>Web Developer.</h1>
            {/* <div>
                <Link to="/project"
                className="btn">Projec
                </Link>
                <Link to="/contact"
                className="btn btn-light">
                    Contact
                </Link>
            </div> */}
     </div>
     </div>
  )
}

export default HeroImg;
