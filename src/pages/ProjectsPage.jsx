import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTech, setSelectedTech] = useState('All')

  // Collect unique technologies for filter tabs
  const allTechs = ['All', 'React.js', 'Node.js', 'Next.js', 'MySQL', 'MongoDB', 'JavaScript']

  // Filter projects dynamically based on search & category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesTech = 
      selectedTech === 'All' || 
      project.tech.some(t => t.toLowerCase() === selectedTech.toLowerCase())

    return matchesSearch && matchesTech
  })

  return (
    <div className='min-h-screen bg-[#121212] text-white flex flex-col justify-between pt-24'>
      {/* Header Banner */}
      <div className='container mx-auto px-6 md:px-12 max-w-5xl relative z-10 py-4'>
        {/* Back Link */}
        <div className='mb-5'>
          <Link 
            to='/' 
            className='inline-flex items-center gap-1.5 text-purple-400 hover:text-pink-400 text-xs md:text-sm font-semibold transition duration-300 group'
          >
            <FaArrowLeft className='text-[10px] group-hover:-translate-x-1 transition-transform duration-300' />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Title */}
        <div className='text-center max-w-xl mx-auto mb-6'>
          <h1 className='text-2xl sm:text-3xl md:text-[2.1rem] font-extrabold tracking-tight mb-2'>
            All <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500'>Projects</span>
          </h1>
          <p className='text-gray-300 text-xs sm:text-sm font-normal leading-relaxed'>
            A comprehensive catalog of my full-stack web applications, software engineering projects, and interactive demos.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className='glass-card rounded-2xl p-4 md:p-5 mb-8 border border-purple-500/20 shadow-lg max-w-5xl mx-auto flex flex-col md:flex-row gap-3.5 items-center justify-between'>
          {/* Search Box */}
          <div className='relative w-full md:w-64'>
            <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 text-xs' />
            <input 
              type="text"
              placeholder="Search projects or tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full bg-[#1a1a24] border border-purple-500/30 focus:border-pink-500 focus:outline-none text-white pl-9 pr-3 py-2 rounded-xl text-xs transition duration-300'
            />
          </div>

          {/* Tech Badges Tabs */}
          <div className='flex flex-wrap gap-1.5 justify-center md:justify-end w-full md:w-auto'>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  selectedTech === tech
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm shadow-purple-600/30'
                    : 'bg-purple-500/10 border border-purple-500/20 text-gray-300 hover:bg-purple-500/20 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='text-center py-20 glass-card rounded-3xl p-12 max-w-xl mx-auto border border-purple-500/20 mb-20'>
            <p className='text-2xl font-semibold text-gray-300 mb-4'>No projects found</p>
            <p className='text-gray-400 text-lg mb-6'>Try searching for a different keyword or resetting your filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTech('All'); }}
              className='px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition duration-300'
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default ProjectsPage
