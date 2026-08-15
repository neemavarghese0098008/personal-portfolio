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
      className='py-16 md:py-20 bg-[#15151c] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-6xl relative z-10'>
        {/* Section Heading */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
          </h2>
          <p className='text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal'>
            Core technologies and tools I leverage to build high-performance applications
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className='glass-card rounded-3xl p-6 border border-purple-500/20 hover:border-pink-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center gap-3.5 mb-4'>
                  <div className='p-2.5 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400'>
                    <skill.icon className='w-7 h-7 md:w-8 md:h-8' />
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-white tracking-tight'>{skill.title}</h3>
                </div>
                <p className='text-gray-300 text-xs sm:text-sm md:text-base mb-5 leading-relaxed font-normal'>{skill.description}</p>
              </div>

              <div className='flex flex-wrap gap-2 pt-3 border-t border-gray-800/60'>
                {skill.tags.map((tech) => (
                  <span 
                    key={tech} 
                    className='px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-200 rounded-full text-xs md:text-sm font-medium hover:border-pink-400 hover:text-pink-300 transition duration-300'
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

