import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='glass-card rounded-3xl overflow-hidden border border-purple-500/20 hover:border-pink-500/50 shadow-xl transition-all duration-500 flex flex-col justify-between group'>
      <div>
        {/* Image Container with Zoom effect */}
        <div className='w-full h-48 sm:h-52 md:h-56 overflow-hidden relative bg-[#1a1a24]'>
          <img 
            src={image} 
            alt={title} 
            className='w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60'></div>
        </div> 

        {/* Card Body */}
        <div className='p-6'>
          <h3 className='text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition duration-300'>
            {title}
          </h3>
          <p className='text-gray-300 text-xs sm:text-sm md:text-base mb-4 leading-relaxed font-normal line-clamp-3'>
            {description}
          </p>

          {/* Tech Badges */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {tech.map((item, index) => (
              <span 
                key={index} 
                className='px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:border-pink-400 transition duration-300'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className='px-6 pb-6 pt-0 flex gap-3'>
        <a 
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className='flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-300'
        >
          <span>View Demo</span>
          <FaExternalLinkAlt className='text-xs' />
        </a>

        <a 
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className='flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm border-2 border-purple-500/80 text-white hover:bg-purple-500/20 hover:border-pink-400 hover:scale-[1.02] active:scale-95 transition-all duration-300'
        >
          <FaGithub className='text-sm' />
          <span>Code</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
