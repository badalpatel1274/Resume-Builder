import React, { useEffect } from 'react'
import '../css/footerPrivacy.css'

const PrivacyFooter = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      
      <div className="privacy-content">
        <p>
          At [Your Company Name], we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
        </p>

        <div className="privacy-subheading">1. Information We Collect</div>
        <p>
          We collect information that you provide directly to us, such as your name, email address, and other personal details when you register or use our services.
        </p>

        <div className="privacy-subheading">2. How We Use Your Information</div>
        <p>
          Your information is used to provide and improve our services, communicate with you, and comply with legal requirements.
        </p>

        <div className="privacy-subheading">3. Sharing Your Information</div>
        <p>
          We do not sell or share your personal information with third parties without your consent, except as required by law.
        </p>

        <div className="privacy-subheading">4. Security</div>
        <p>
          We implement security measures to protect your personal information, but no method of data transmission is completely secure.
        </p>

        <div className="privacy-subheading">5. Your Rights</div>
        <p>
          You have the right to access, update, or delete your personal information. You can also opt out of receiving marketing communications.
        </p>

        <div className="privacy-subheading">6. Changes to This Privacy Policy</div>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <div className="privacy-subheading">7. Contact Us</div>
        <p>
          If you have any questions or concerns about our Privacy Policy, feel free to contact us at <a href="mailto:resume.x12@gmail.com">resume.x12@gmail.com</a>.
        </p>
        
        <div className="privacy-float-btn">
          Accept Privacy Policy
        </div>
      </div>
    </div>
  )
}

export default PrivacyFooter
