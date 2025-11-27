import React from "react";
import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://react.dev/learn" },
        { name: "J Query", logo: "https://w7.pngwing.com/pngs/606/221/png-transparent-jquery-original-logo-icon.png", link: "https://www.w3schools.com/jquery/jquery_intro.asp" },
        { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org/api/all.html" },
        { name: "Express JS", logo: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", link: "https://expressjs.com/" },
        { name: "Python", logo: "https://tse2.mm.bing.net/th/id/OIP.sG0ldBtaRH4QI9DGgtzTFgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", link: "https://www.geeksforgeeks.org/python/python-programming-language-tutorial/" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", link: "https://www.mongodb.com/docs/?msockid=2b51f649ac6266853d58e2f3ad7d6747" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
        { name: "Tailwind", logo: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png?v=1957907763835204384", link: "https://tailwindcss.com/docs/installation/using-vite" },
        { name: "Git & GitHub", logo: "https://tse3.mm.bing.net/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "Postman", logo: "https://tse2.mm.bing.net/th/id/OIP.ev0hMHHlKjpQ19nJ23TSmwHaGq?rs=1&pid=ImgDetMain&o=7&rm=3", link: "https://www.postman.com/" },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="section-title">My Skills</h2>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <img src={skill.logo} alt={skill.name} className="skill-icon" />
                        <h3><a className="links" href={skill.link}>{skill.name}</a></h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
