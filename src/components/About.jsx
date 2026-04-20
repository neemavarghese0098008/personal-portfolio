import { motion } from 'framer-motion'
import React from 'react'
import { aboutInfo, assets } from '../assets/assets'
import myPhoto from '../assets/myphoto.png';


function About() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        id='about'
        className='py-20 bg-dark-100'
    > 
        <div className='max-w-6xl mx-auto px-6'>
    {/* heading */}
    <h2 className='text-4xl font-bold text-center mb-4 text-white'>
        About <span className='text-purple-500'>Me</span>
        </h2>
    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
    {/* image +my journey */}
    <div className='flex flex-col md:flex-row items-stretch gap-12'>
        {/* image */}
        <div>
            
        </div>
        {/* content */}
        <div className='md:w-1/2 w-full'>
            <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false ,amount: 0.2}}
                src={myPhoto} 
                alt="profile"
                className='w-full h-full object-cover rounded-2xl shadow-xl border border-gray-800'
            />
            </div>
        {/* text content */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false ,amount: 0.2}}
            className='md:w-1/2'>
                <div className='rounded-2xl p-8'>
                    <h3 className='text-3xl text-gray-100 font-semibold  mb-6'>My Journey</h3>
                    <p className='text-white mb-6'>I’m a full-stack developer passionate about building scalable and user-focused web applications. I have hands-on experience with React, Node.js, Express.js, MongoDB, and PostgreSQL, and enjoy creating efficient solutions to real-world problems.</p>
                    <p className='text-white mb-12'>I’ve developed projects like a Program Management Portal and bring strong problem-solving and communication skills from my experience as a Computer Science educator. I’m always learning, exploring new technologies, and striving to build better solutions.</p>
                
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        aboutInfo.map((data,index)=>(
                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 curser-pointer'>
                                <div className='text-purple text-4xl mb-4'>
                                    <data.icon/>
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                <p className='text-grey-400'>{data.description}</p>
                                
                            </div>
                        ))
                    }

                </div>

                

                </div>
            
            
        </motion.div>

    </div>
        </div>
    </motion.div>
  )
}

export default About
