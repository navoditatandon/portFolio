import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size = {20} style = {{ color: "#fff", marginRight : "2rem"}}/>
                <div>
                    <p>Ecoworld, Bangalore</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size = {20} style = {{ color: "#fff", marginRight : "2rem"}}/>
                    1-2323-343-23
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size = {20} style = {{ color: "#fff", marginRight : "2rem"}}/>
                    info@gmailcom
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is me, Navodita Tandon, software developer at Myntra. I presently work in the app named "Smart Assist" which is used by cc agents at Myntra.</p>
            <div className="social">
                <FaFacebook size = {30} style = {{ color: "#fff", marginRight : "1rem"}}/>
                <FaTwitter size = {30} style = {{ color: "#fff", marginRight : "1rem"}}/>
                <FaLinkedin size = {30} style = {{ color: "#fff", marginRight : "1rem"}}/>
                <FaInstagram size = {30} style = {{ color: "#fff", marginRight : "1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
