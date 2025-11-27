import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/skills/Skills'
import Projects from './components/project/ProjectsData'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App