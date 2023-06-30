import "./AboutContentStyles.css"

import React from 'react'

import {Link} from "react-router-dom"

import React1 from "../assets/React1.png"
import React2 from "../assets/React2.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
            I am a react front-end developer. I create responsive secure websites for my clients.
        </p>
        <Link to = "/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="imgContainer">
            <div className="img-stacktop">
                <img src = {React1} className="img" alt = "true"/>
            </div>
            <div className="img-stacktop">
                <img src = {React2} className="img" alt = "true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
