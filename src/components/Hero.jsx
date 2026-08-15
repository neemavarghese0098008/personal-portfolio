import { motion } from 'framer-motion'
import React from 'react'
import myPhoto from '../assets/myphoto.png';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='home'
      className='min-h-screen flex items-center pt-28 pb-20 bg-gradient-to-b from-[#121212] via-[#1a1824] to-[#121212] relative overflow-hidden'
    >
      {/* Background Subtle Glow Circles */}
      <div className='absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16'>
        {/* Left side text content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full lg:w-3/5 text-center lg:text-left'
        >
          <div className='inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md'>
            <span className='text-purple-300 font-medium text-base md:text-lg tracking-wide'>
              🚀 Welcome to my portfolio
            </span>
          </div>

          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tight mb-6 leading-none'>
            Hi, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]'>
              Neema Varghese
            </span>
          </h1>

          <div className='h-14 md:h-16 flex items-center justify-center lg:justify-start mb-6'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 typewriter'>
              Full Stack Developer
            </h2>
          </div>

          <p className='text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal'>
            I craft scalable, full-stack web applications with modern architecture, elegant UI design, and seamless user experiences.
          </p>

          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-5'>
            <a 
              href='#projects' 
              className='inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 group'
            >
              <span>View Work</span>
              <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
            </a>
            <a 
              href='#contact' 
              className='inline-flex items-center gap-3 border-2 border-purple-500/80 text-white text-lg font-semibold px-8 py-4 rounded-xl backdrop-blur-sm hover:bg-purple-500/20 hover:border-pink-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-md'
            >
              <FaEnvelope className='text-purple-400' />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right side profile photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='w-full lg:w-2/5 flex justify-center items-center'
        >
          <div className='relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[470px] lg:h-[470px] flex justify-center items-center'>
            {/* Glowing Backdrop Ring with soft pulsating blur */}
            <motion.div 
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' }}
              className='absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-purple-500 blur-xl pointer-events-none'
            ></motion.div>
            
            {/* Main Animated Photo Container with Gentle Floating, Subtle Glow & Hover Scale */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 0 30px rgba(106, 13, 173, 0.4), 0 0 15px rgba(255, 105, 180, 0.3)",
                  "0 0 50px rgba(255, 105, 180, 0.6), 0 0 25px rgba(106, 13, 173, 0.5)",
                  "0 0 30px rgba(106, 13, 173, 0.4), 0 0 15px rgba(255, 105, 180, 0.3)"
                ]
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' },
                boxShadow: { duration: 4, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' },
                scale: { duration: 0.4, ease: 'easeOut' }
              }}
              className='relative w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-600 z-10 cursor-pointer overflow-hidden'
            >
              <img 
                src={myPhoto} 
                alt="Neema Varghese - Full Stack Developer" 
                className='rounded-full w-full h-full object-cover border-4 border-[#121212] shadow-inner transition-transform duration-500'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero

