import React from "react";
import "./Projects.css";
import profile from "../../assets/profile.png"
import dataimg from '../../assets/data.png'
import cal from '../../assets/cal.png'
import mart from '../../assets/mart.jpg'

const projectsData = [
    {
        title: "E-commerce Website",
        description: "Full-stack e-commerce site with product listing, cart, and checkout functionality.",
        tech: ["HTML", "CSS", "Js", "React",],
        link: "https://yourprojectlink.com",
        image: mart,
    },
    {
        title: "Student Data Mangement System ",
        description: "Student Data Mangement system with CRUD operations, and availability management.",
        tech: ["HTML", "CSS", "Js", "React", "Express", "MongoDB"],
        link: "https://yourprojectlink.com",
        image: dataimg,
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing my skills, projects, and contact information.",
        tech: ["HTML", "CSS", "React", "Js"],
        link: "https://yourprojectlink.com",
        image: profile,
    },
    {
        title: "Personal Calculator",
        description: "Personal calculator showcasing numbers display and functionality.",
        tech: ["HTML", "CSS", "Js"],
        link: "https://yourprojectlink.com",
        image: cal,
    },
];

const skillLogos = {
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    Js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express: "https://tse1.mm.bing.net/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
};

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-img-container">
                            <img src={project.image} alt={project.title} className="project-img" />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <img key={idx} src={skillLogos[tech]} alt={tech} title={tech} className="tech-logo" />
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
