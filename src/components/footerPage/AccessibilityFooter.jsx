import React, { useEffect } from 'react'
import '../css/footerAccessibility.css'

const AccessibilityFooter = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="accessibility-container">
      <h1 className="accessibility-title">Accessibility Policy</h1>
      
      <div className="accessibility-content">
        <p>
          At [Your Company Name], we are committed to providing a website that is accessible to all individuals, including those with disabilities. This Accessibility Policy outlines our efforts to ensure accessibility and usability across our digital platforms.
        </p>

        <div className="accessibility-subheading">1. Accessibility Commitment</div>
        <p>
          We are dedicated to ensuring our website is accessible to the widest possible audience, regardless of technology or ability. We are constantly working to improve the accessibility of our website and services.
        </p>

        <div className="accessibility-subheading">2. Website Accessibility Features</div>
        <p>
          Our website includes several features designed to improve accessibility, such as text resizing, high-contrast mode, keyboard navigation, and screen reader compatibility.
        </p>

        <div className="accessibility-subheading">3. Compliance with WCAG 2.1</div>
        <p>
          We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines ensure our website is accessible to a broader range of users with disabilities.
        </p>

        <div className="accessibility-subheading">4. Testing and Monitoring</div>
        <p>
          We regularly conduct accessibility testing to identify and address any potential barriers. We are committed to ongoing improvements based on user feedback and accessibility audits.
        </p>

        <div className="accessibility-subheading">5. Contact Us</div>
        <p>
          If you encounter any difficulties accessing our website or have any questions regarding accessibility, please contact us at <a href="mailto:resume.x12@gmail.com">resume.x12@gmail.com</a>. We will work with you to address any concerns and provide assistance.
        </p>
        
        <div className="accessibility-float-btn">
          Acknowledge Accessibility Policy
        </div>
      </div>
    </div>
  )
}

export default AccessibilityFooter
