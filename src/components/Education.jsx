import { motion } from 'framer-motion'
import React from 'react'
import { eduData } from '../assets/assets'

const Education = () => {

    //CREATE COLOR MAP 
  const colorClasses = {
    purple: "hover:text-purple-500",
    blue: "hover:text-blue-500",
    pink: "hover:text-pink-500",
  };
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true , amount:0.2}}
        id='education'
        className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-white text-center mb-4'>Edu
                <span className='text-purple'>cation</span>
            </h2>
            <p className='text-grey-400 text-center text-white max-w-2xl mx-auto mb-16'>My academic journey and qualifications.</p>
            <div className='max-w-3xl mx-auto'>
                <div className='space-y-20'>
                    {
                        eduData.map((data,index)=>(
                        <div 
                            key={index} 
                            className="timeline-item relative pl-12 
                            before:content-[''] before:absolute before:left-0 before:top-0 
                            before:w-[2px] before:h-full before:bg-purple-500 
                            cursor-pointer hover:-translate-y-2 transition-all duration-300"
                        >
                                {/* timeline */}
                                <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple'>

                                </div>
                                {/* box */}
                                <div className='bg-dark-200 rounded-2xl p-6'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <h3 className='text-white font-semibold text-lg'>{data.role}</h3>
                                        <span className='px-3 py-1 bg-blue-500/20 text-purple-400 rounded-full text-xs md:text-sm hover:bg-purple-500 hover:text-white transition duration-300'>
                                                        {data.duration}
                                                        </span>
                                        </div>
                                         <a 
                                        href={data.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                         className="text-purple-500 hover:text-purple-500 transition duration-300 cursor-pointer"
                                       >
                                       {data.company}
                                   </a>
                                    <p className="text-gray-400">{data.cgpa}</p>
                                    <p className='text-white mb-2'>{data.description}</p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
        
    </motion.div>
  )
}

export default Education
