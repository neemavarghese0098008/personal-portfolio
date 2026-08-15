import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
import React from 'react'

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='skills'
      className='py-12 md:py-16 bg-[#15151c] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-5xl relative z-10'>
        {/* Section Heading */}
        <div className='text-center mb-8 md:mb-10'>
          <h2 className='text-2xl sm:text-3xl md:text-[2.1rem] font-extrabold text-white tracking-tight mb-2'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
          </h2>
          <p className='text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-normal'>
            Core technologies and tools I leverage to build high-performance applications
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className='glass-card rounded-2xl p-5 border border-purple-500/20 hover:border-pink-500/40 shadow-md transition-all duration-300 flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 rounded-lg bg-gradient-to-tr from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400'>
                    <skill.icon className='w-6 h-6 md:w-7 md:h-7' />
                  </div>
                  <h3 className='text-base md:text-lg font-bold text-white tracking-tight'>{skill.title}</h3>
                </div>
                <p className='text-gray-300 text-xs md:text-sm mb-4 leading-relaxed font-normal'>{skill.description}</p>
              </div>

              <div className='flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/60'>
                {skill.tags.map((tech) => (
                  <span 
                    key={tech} 
                    className='px-2.5 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:border-pink-400 hover:text-pink-300 transition duration-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills

