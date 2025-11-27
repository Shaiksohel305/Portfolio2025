import React from "react";
import "./Home.css";
import sohel from '../../assets/sohelimg.jpg'
import resume from '../../assets/Sohel_Resume.pdf'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-left">
                <p className="intro">Hi, I am</p>
                <h1 className="name">Shaik Sohel</h1>

                <h2 className="role">
                    <span className="typing-text">Full Stack,MERN , UI, Python Developer</span>
                </h2>

                <p className="desc">
                    I build clean, modern and responsive websites using React, JavaScript,
                    MERN stack & Python. Passionate about UI development and full-stack development.
                </p>

                <div className="home-buttons">
                    <Link className="hire-btn" to="/contact">Hire Me</Link>
                    <a className="cv-btn" href={resume} target="blank">Resume</a>
                </div>
            </div>

            <div className="home-right">
                <div className="profile-circle">
                    <img
                        src={sohel}
                        alt="profile"
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
