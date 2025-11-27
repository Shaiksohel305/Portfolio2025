import React from "react";
import "./About.css";
import image from '../../assets/sohelimg.jpg'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={image} alt="Profile" />
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <p>
                        Hi! I’m Shaik Sohel, a passionate MERN stack developer with expertise in React, Node.js, Express, MongoDB,and Python
                        I love building interactive and responsive web applications that solve real-world problems.
                    </p>
                    <p>
                        I’m continuously learning new technologies and improving my skills to deliver high-quality, user-friendly solutions.
                        I enjoy working on both frontend and backend development, and I’m always eager to contribute to challenging projects.
                    </p>
                    <ul className="about-list">
                        <li>💻 Full-stack Development</li>
                        <li>⚡ Problem Solving & Logical Thinking</li>
                        <li>🎨 Responsive & Modern UI Design</li>
                        <li>🌐 Hosting & Deployment Knowledge</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
