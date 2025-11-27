import React from 'react'
import Navbar from '../Navbar'
import Home from '../Hero/Home'
import Skills from '../skills/Skills'
import Projects from '../project/ProjectsData'
import About from '../About/About'
import Contact from '../Contact/Contact'

const Main = () => {
    return (
        <div>
            <Home />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default Main