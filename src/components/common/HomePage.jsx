import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import flash from '../image/flash.png'
import template from '../image/template.png'
import HomeWork from './HomeWork'
import HomeFaq from './HomeFaq'
import HomeDream from './HomeDream'
import Footer from './Footer'

const HomePage = () => {
    return (
        <>

            <div className="home">
                <header className="hero">
                    <div className="hero-content">
                        <h1>Create Stunning Resumes That Get You Hired</h1>
                        <p>
                            Choose from professionally designed templates and customize your
                            resume with our easy-to-use builder. Stand out from the crowd and
                            land your dream job.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/signup" className="btn btn-primary">Get Started Free →</Link>
                            <Link to="/resume" className="btn btn-secondary">View Templates</Link>
                        </div>
                    </div>
                </header>

                {/* Feature Section - Comes in the second slide */}
                <section className="features-container">
      <h2 className="features-title">Why Choose Our Resume Builder</h2>
      <p className="features-subtitle">
        Our platform offers everything you need to create a professional resume that stands out
      </p>
      <div className="features-grid">
        <div className="features-card">
          <div className="features-icon">📄</div>
          <h3 className="features-card-title">Professional Templates</h3>
          <p className="features-card-text">
            Choose from a variety of professionally designed templates that stand out.
          </p>
        </div>
        <div className="features-card">
          <div className="features-icon">⚡</div>
          <h3 className="features-card-title">Easy to Use</h3>
          <p className="features-card-text">
            Our intuitive builder makes creating your resume simple and fast.
          </p>
        </div>
        <div className="features-card">
          <div className="features-icon">👥</div>
          <h3 className="features-card-title">ATS-Friendly</h3>
          <p className="features-card-text">
            Ensure your resume gets past applicant tracking systems.
          </p>
        </div>
      </div>
    </section>

            </div>
<HomeWork/>
<HomeFaq/>
<HomeDream/>
<Footer/>
            




        </>
    )
}

export default HomePage
