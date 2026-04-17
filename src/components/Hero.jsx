import { motion } from 'framer-motion'
import React from 'react'
// import {assets} from '../assets/assets'
import myPhoto from '../assets/myphoto.png';

function Hero() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#393232] via-[#2d2d2d] to-[#0c0c0c]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
        <h1 className='text-4xl md:text-6xl  text-white font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Neema Varghese</span>
        </h1>
        <h2 className='text-2xl md:text-4xl font-semibold  text-white mb-6 typewriter'>
            Full Stack Developer
        </h2>
        <p className='text-lg text-gray-300 mb-8'>
            I create stunning web experiences with modern technologies and innovative design.
        </p>
        <div className='flex space-x-4'>
            <a href='#projects' className='bg-purple text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300'>
                View Work
            </a>
            <a href='#contact' className='border border-purple text-purple px-6 py-3 rounded-lg hover:bg-purple hover:text-white transition duration-300'>
                Contact Me
            </a>
        </div>
        </div>
        {/* right side image */}
        <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink and animate-pulse-slow opacity-70'>
                    <motion.img 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity,repeatType: "loop", ease: 'easeInOut' }}
                    className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                     src={myPhoto} alt="Profile" />
                </div>

            </div>
            
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
