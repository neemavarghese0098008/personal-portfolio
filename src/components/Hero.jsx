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
      className='min-h-screen flex items-center pt-28 lg:pt-32 pb-10 lg:pb-12 bg-gradient-to-b from-[#121212] via-[#1a1824] to-[#121212] relative overflow-hidden'
    >
      {/* Background Subtle Glow Circles */}
      <div className='absolute top-1/4 left-1/10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-1/4 right-1/10 w-[380px] h-[380px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none'></div>

      <div className='container mx-auto px-6 md:px-12 max-w-6xl relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10'>
        {/* Left side text content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full lg:w-3/5 text-center lg:text-left'
        >
          <div className='inline-block mb-3 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md'>
            <span className='text-purple-300 font-medium text-xs md:text-sm tracking-wide'>
              🚀 Welcome to my portfolio
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] text-white font-extrabold tracking-tight mb-3 leading-tight'>
            Hi, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]'>
              Neema Varghese
            </span>
          </h1>

          <div className='h-8 md:h-10 flex items-center justify-center lg:justify-start mb-4'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 typewriter'>
              Full Stack Developer
            </h2>
          </div>

          <p className='text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0 font-normal'>
            I craft scalable, full-stack web applications with modern architecture, elegant UI design, and seamless user experiences.
          </p>

          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-3.5'>
            <a 
              href='#projects' 
              className='inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 group'
            >
              <span>View Work</span>
              <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform duration-300' />
            </a>
            <a 
              href='#contact' 
              className='inline-flex items-center gap-2.5 border-2 border-purple-500/80 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-xl backdrop-blur-sm hover:bg-purple-500/20 hover:border-pink-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-md'
            >
              <FaEnvelope className='text-purple-400 text-xs' />
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
          <div className='relative w-56 h-56 sm:w-72 sm:h-72 md:w-[290px] md:h-[290px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] flex justify-center items-center shrink-0'>
            {/* Glowing Backdrop Ring with soft pulsating blur */}
            <motion.div 
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' }}
              className='absolute -inset-2.5 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-purple-500 blur-lg pointer-events-none'
            ></motion.div>
            
            {/* Main Animated Photo Container with Gentle Floating, Subtle Glow & Hover Scale */}
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 25px rgba(106, 13, 173, 0.4), 0 0 12px rgba(255, 105, 180, 0.3)",
                  "0 0 40px rgba(255, 105, 180, 0.5), 0 0 20px rgba(106, 13, 173, 0.4)",
                  "0 0 25px rgba(106, 13, 173, 0.4), 0 0 12px rgba(255, 105, 180, 0.3)"
                ]
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' },
                boxShadow: { duration: 4, repeat: Infinity, repeatType: "loop", ease: 'easeInOut' },
                scale: { duration: 0.4, ease: 'easeOut' }
              }}
              className='relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-600 z-10 cursor-pointer overflow-hidden'
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

