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
      className='py-20 md:py-24 bg-[#15151c] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-7xl relative z-10'>
        {/* Section Heading */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-normal'>
            Core technologies and tools I leverage to build high-performance applications
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className='glass-card rounded-3xl p-8 border border-purple-500/20 hover:border-pink-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400'>
                    <skill.icon className='w-10 h-10 md:w-12 md:h-12' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white tracking-tight'>{skill.title}</h3>
                </div>
                <p className='text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-normal'>{skill.description}</p>
              </div>

              <div className='flex flex-wrap gap-2.5 pt-4 border-t border-gray-800/60'>
                {skill.tags.map((tech) => (
                  <span 
                    key={tech} 
                    className='px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-200 rounded-full text-sm md:text-base font-medium hover:border-pink-400 hover:text-pink-300 transition duration-300'
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

