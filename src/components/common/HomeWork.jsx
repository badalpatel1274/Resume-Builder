import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

const HomeWork = () => {
  return (
    <section className="works-section">
    <h2 className="works-title">How It Works</h2>

    <div className="works-steps-container">
      {/* Step 1 */}
      <div className="works-step">
        <div className="works-step-number">1</div>
        <h3 className="works-step-title">Choose a Template</h3>
        <p className="works-step-description">
          Browse our collection of professionally designed templates and
          select the one that best fits your style.
        </p>
      </div>

      {/* 🔹 Arrow */}
      <div className="works-arrow">→</div>

      {/* Step 2 */}
      <div className="works-step">
        <div className="works-step-number">2</div>
        <h3 className="works-step-title">Add Your Content</h3>
        <p className="works-step-description">
          Fill in your details, work experience, education, and skills using
          our intuitive form builder.
        </p>
      </div>

      {/* 🔹 Arrow */}
      <div className="works-arrow">→</div>

      {/* Step 3 */}
      <div className="works-step">
        <div className="works-step-number">3</div>
        <h3 className="works-step-title">Download & Apply</h3>
        <p className="works-step-description">
          Download your polished resume as a PDF, ready to send to employers
          and land your dream job.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <a href="#" className="works-button">
      Create Your Resume Now →
    </a>
  </section>

  )
}

export default HomeWork
