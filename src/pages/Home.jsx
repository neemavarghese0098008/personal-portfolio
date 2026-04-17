import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Education from '../components/Education'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/> 
      <Work/>
      <Education/>
      <Content/>  
      <Footer/>    
    </div>
  )
}

export default Home
