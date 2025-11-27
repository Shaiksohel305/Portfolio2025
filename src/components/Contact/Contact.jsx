import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <p>📧 Email: <a href="mailto:shaiksohel280@gmail.com" target="_blank" rel="noopener noreferrer">shaiksohel280@gmail.com</a></p>
                    <p>📞 Phone: +91 7680946925</p>
                    <div className="social-links">
                        <a href="https://github.com/Shaiksohel305" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/shaik-sohel1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
