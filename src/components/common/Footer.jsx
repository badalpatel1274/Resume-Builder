import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   
   <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Brand Name & About */}
        <div className="footer-brand">
          <h2 className="footer-logo">ResumeBuilder</h2>
          <p className="footer-text">
            Create professional resumes effortlessly with AI-powered templates.
            Stand out and land your dream job.
          </p>
        </div>

        {/* Center Section - Quick Link  s */}
        <div className="footer-Link  s">
          <h3>Quick Links</h3>
          <ul>
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/template">Templates</Link></li>
          </ul>
        </div>

        {/* Right Section - Social MediLink  */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <Link  to="#"><FaFacebook /></Link>
            <Link  to="#"><FaTwitter /></Link>
            <Link  to="#"><FaLinkedin /></Link>
            <Link  to="#"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>© 2025 ResumeBuilder. All Rights Reserved.</p>
      </div>
    </footer>
   
   </>
  )
}

export default Footer
