import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import flash from '../image/flash.png'
import template from '../image/template.png'
import HomeWork from './HomeWork'

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
                            <a href="/signup" className="btn btn-primary">Get Started Free →</a>
                            <a href="#" className="btn btn-secondary">View Templates</a>
                        </div>
                    </div>
                </header>

                {/* Feature Section - Comes in the second slide */}
                <section className="features">
                    <div className="feature-box">
                        <img src={flash} alt="AI Feature" className="feature-img" />
                        <h3>Easy with AI</h3>
                        <p>Let AI help you craft the perfect resume effortlessly.</p>
                    </div>
                    <div className="feature-box">
                        <img src={template} alt="Templates" className="feature-img" />
                        <h3>Professional Templates</h3>
                        <p>Choose from stunning, ready-made templates designed for success.</p>
                    </div>
                    <div className="feature-box">
                        <img src={flash} alt="Fast Resume" className="feature-img" />
                        <h3>A Better Resume in Minutes</h3>
                        <p>Build a high-quality resume quickly and easily.</p>
                    </div>
                </section>

            </div>
<HomeWork/>
            




        </>
    )
}

export default HomePage
