import React, { useEffect } from 'react'
import '../css/footerCookie.css'
const CookieFooter = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cookie-container">
      <h1 className="cookie-title">Cookie Policy</h1>
      
      <div className="cookie-content">
        <p>
          This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website or use our services.
        </p>

        <div className="cookie-subheading">1. What Are Cookies?</div>
        <p>
          Cookies are small text files that are stored on your device or computer when you visit a website. They help websites remember your preferences, settings, and usage patterns.
        </p>

        <div className="cookie-subheading">2. How We Use Cookies</div>
        <p>
          We use cookies to improve your user experience, analyze website traffic, and provide tailored content. Cookies also help us to enhance website functionality and ensure the security of our platform.
        </p>

        <div className="cookie-subheading">3. Types of Cookies We Use</div>
        <p>
          We use both **session cookies** (temporary cookies that expire once you close your browser) and **persistent cookies** (cookies that remain on your device until they expire or are deleted).
        </p>

        <div className="cookie-subheading">4. Third-Party Cookies</div>
        <p>
          We may allow third-party service providers (such as advertisers and analytics providers) to place cookies on our website. These cookies help us analyze site usage and deliver personalized advertisements.
        </p>

        <div className="cookie-subheading">5. Managing Cookies</div>
        <p>
          You can control and manage cookies through your browser settings. You can choose to block cookies, delete cookies, or receive alerts when cookies are being used. However, please note that blocking or deleting cookies may affect the functionality of our website.
        </p>

        <div className="cookie-subheading">6. Changes to This Cookie Policy</div>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <div className="cookie-subheading">7. Contact Us</div>
        <p>
          If you have any questions or concerns about our Cookie Policy, feel free to contact us at <a href="mailto:resume.x12@gmail.com">resume.x12@gmail.com</a>.
        </p>
        
        <div className="cookie-float-btn">
          Accept Cookie Policy
        </div>
      </div>
    </div>
  )
}

export default CookieFooter
