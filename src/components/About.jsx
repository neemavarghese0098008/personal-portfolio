import { motion } from 'framer-motion'
import React from 'react'
import { aboutInfo } from '../assets/assets'
import myPhoto from '../assets/myphoto.png';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-16 md:py-20 bg-[#121212] relative'
    > 
      <div className='container mx-auto px-6 md:px-12 max-w-6xl'>
        {/* Section Heading */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Me</span>
          </h2>
          <p className='text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal'>
            Get to know more about my background, passion, and design philosophy
          </p>
        </div>

        {/* Content Layout */}
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full lg:w-5/12 flex justify-center'
          >
            <div className='relative w-full max-w-sm aspect-4/5 rounded-3xl overflow-hidden glass-card p-2.5 border border-purple-500/30 shadow-[0_10px_30px_rgba(106,13,173,0.2)] group'>
              <div className='w-full h-full rounded-2xl overflow-hidden relative'>
                <img 
                  src={myPhoto} 
                  alt="Neema Varghese"
                  className='w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-40'></div>
              </div>
            </div>
          </motion.div>

          {/* Text & Feature Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full lg:w-7/12'
          >
            <div className='glass-card rounded-3xl p-6 md:p-8 mb-6 border border-purple-500/20 shadow-xl'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                <span>My Journey</span>
                <div className='h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
              </h3>
              <p className='text-gray-200 text-sm md:text-base leading-relaxed mb-4 font-normal'>
                I’m a full-stack developer passionate about building scalable and user-focused web applications. I have hands-on experience with React, Node.js, Express.js, MongoDB, MySQL, and PostgreSQL, and enjoy creating efficient solutions to real-world problems.
              </p>
              <p className='text-gray-300 text-sm md:text-base leading-relaxed font-normal'>
                I’ve developed projects like a Program Management Portal and bring strong problem-solving and communication skills from my experience as a Computer Science educator. I’m always learning, exploring new technologies, and striving to build better solutions.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {aboutInfo.map((data, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className='glass-card rounded-2xl p-5 border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 shadow-md'
                >
                  <div className='text-purple-400 text-2xl md:text-3xl mb-3 p-2.5 rounded-xl bg-purple-500/10 inline-block'>
                    <data.icon />
                  </div>
                  <h4 className='text-base md:text-lg font-bold text-white mb-1'>{data.title}</h4>
                  <p className='text-gray-400 text-xs md:text-sm leading-snug'>{data.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About

