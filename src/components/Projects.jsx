import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../assets/assets'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Projects() {
  // Display only top 4 featured projects on homepage
  const featuredProjects = projects.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      id='projects'
      className='py-20 md:py-24 bg-[#121212] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-7xl relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Projects</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-normal'>
            A showcase of my recent full-stack applications and engineering work
          </p>
        </div>

        {/* 2x2 Responsive Grid for Featured Projects */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 max-w-7xl mx-auto mb-16'>
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />  
            </motion.div>
          ))}
        </div>

        {/* Prominent View More Projects CTA Button */}
        <div className='text-center mt-12'>
          <Link 
            to='/projects' 
            className='inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg md:text-xl text-white bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_30px_rgba(106,13,173,0.4)] hover:shadow-[0_0_40px_rgba(255,105,180,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 group border border-purple-400/30'
          >
            <span>View More Projects</span>
            <FaArrowRight className='text-lg group-hover:translate-x-1.5 transition-transform duration-300' />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

