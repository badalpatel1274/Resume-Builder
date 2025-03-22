import React, { useState } from "react";
import "../css/faq.css";

const HomeFaq = () => {
    const faqs = [
        {
            question: "How do I get started with creating my resume?",
            answer:
                "Simply sign up for a free account, choose a template that matches your style, and follow our guided process to fill in your information. Our intuitive builder will help you create a professional resume in minutes.",
        },
        {
            question: "Are the resumes created with your builder ATS-friendly?",
            answer:
                "Yes, all of our templates are designed to be ATS-friendly. We use standard formatting and avoid complex design elements that might confuse applicant tracking systems, ensuring your resume gets past the initial screening.",
        },
        {
            question: "Can I download my resume in different formats?",
            answer:
                "Every resume can be downloaded in various formats such as PDF, Word, or even plain text, making it easy for you to submit applications anywhere.",
        },
        {
            question: "Is my data secure on your platform?",
            answer:
                "Absolutely! We use industry-standard encryption and security measures to protect your personal data. Your information is never shared with third parties without your consent.",
        },
        {
            question: "Do you offer cover letter templates as well?",
            answer:
                "Yes, along with resumes, we provide professionally designed cover letter templates that match your resume style for a complete job application package.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
                Find answers to common questions about our resume builder
            </p>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="faq-question">{faq.question}</h3>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeFaq;
