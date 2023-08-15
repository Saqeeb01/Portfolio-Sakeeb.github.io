import "./AboutContentStyles.css"

import React from 'react'

import { Link } from "react-router-dom"

import react1 from "../assests/react1.jpg"

import react2 from "../assests/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>Hello there! 👋 I'm Mohammad Sakeeb, a passionate and innovative full-stack web developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. As a fresher in the industry, I bring a fresh perspective, a hunger for learning, and a dedication to creating seamless and user-friendly web applications.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stacktop top">
                    <img src={react1} className="img" alt="true" />
                </div>
                <div className="img-stacktop bottom">
                    <img src={react2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
