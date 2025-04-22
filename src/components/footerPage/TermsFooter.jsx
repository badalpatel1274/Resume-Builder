import React, { useEffect } from 'react'
import '../css/footerTerms.css'

const TermsFooter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="terms-container">
      <h2 className="terms-title">Terms of Service</h2>
      <div className="terms-content">
        <p className="terms-intro">
          Welcome to our Resume Builder. By using our platform, you agree to comply with the following terms and conditions.
        </p>
        
        <h3 className="terms-subheading">1. Acceptance of Terms</h3>
        <p>
          By accessing or using the Resume Builder service, you agree to these Terms of Service. If you do not agree, please refrain from using the service.
        </p>
        
        <h3 className="terms-subheading">2. User Responsibilities</h3>
        <p>
          You are responsible for providing accurate information and ensuring that your use of the service complies with all applicable laws.
        </p>
        
        <h3 className="terms-subheading">3. Account Registration and Security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
        </p>
        
        <h3 className="terms-subheading">4. Content Ownership</h3>
        <p>
          You retain ownership of the content you create on the platform, but we may use your content for promotional purposes.
        </p>
        
        <h3 className="terms-subheading">5. Use of Service</h3>
        <p>
          You agree to use the service for lawful purposes only. Any misuse, including spamming, hacking, or illegal activities, is prohibited.
        </p>
        
        <h3 className="terms-subheading">6. Privacy Policy</h3>
        <p>
          Our Privacy Policy governs the collection and use of your personal information. Please refer to it for more details.
        </p>
        
        <h3 className="terms-subheading">7. Limitation of Liability</h3>
        <p>
          We are not responsible for any damages, losses, or disruptions resulting from the use of the platform.
        </p>
        
        <h3 className="terms-subheading">8. Changes to Terms</h3>
        <p>
          We reserve the right to modify these Terms of Service. Please review them periodically for updates.
        </p>
        
        <h3 className="terms-subheading">9. Termination</h3>
        <p>
          We may suspend or terminate your account if you violate any of the terms listed here.
        </p>
        
        <h3 className="terms-subheading">10. Governing Law and Dispute Resolution</h3>
        <p>
          These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through [Arbitration/Other Methods].
        </p>
        
        <h3 className="terms-subheading">11. Contact Information</h3>
        <p>
          For questions or concerns about these terms, please contact us at <a href="mailto:resume.x12@gmail.com">resume.x12@gmail.com</a>.
        </p>
      </div>
    </section>
  )
}

export default TermsFooter
