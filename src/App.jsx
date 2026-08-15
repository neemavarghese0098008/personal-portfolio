import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import Navbar from './components/Navbar'

// ScrollToTop handler for smooth route transitions
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className='bg-[#121212] min-h-screen text-white selection:bg-purple-500 selection:text-white'>
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App

