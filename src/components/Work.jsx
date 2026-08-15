import { motion } from 'framer-motion'
import React from 'react'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      id='experience'
      className='py-16 md:py-20 bg-[#15151c] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-5xl relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3'>
            Work <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Experience</span>
          </h2>
          <p className='text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal'>
            My professional career journey, roles, and key engineering achievements
          </p>
        </div>

        {/* Timeline Items */}
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-8 md:space-y-10'>
            {workData.map((data, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item relative pl-8 md:pl-12 
                before:content-[''] before:absolute before:left-0 before:top-2 
                before:w-[3px] before:h-[calc(100%+2.5rem)] before:bg-gradient-to-b before:from-purple-500 before:to-pink-500/30 
                last:before:h-full"
              >
                {/* Timeline Glow Dot */}
                <div className='absolute left-[-0.55rem] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_12px_#ff69b4] border-4 border-[#15151c]'></div>

                {/* Content Box */}
                <div className='glass-card rounded-3xl p-6 md:p-7 border border-purple-500/20 hover:border-pink-500/40 shadow-xl transition-all duration-300'>
                  <div className='flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-3'>
                    <div>
                      <h3 className='text-lg md:text-xl font-bold text-white tracking-tight'>{data.role}</h3>
                      <p className='text-purple-300 font-medium text-sm md:text-base mt-0.5'>{data.company}</p>
                    </div>
                    <div>
                      <span className='inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-xs md:text-sm font-semibold shadow-sm'>
                        {data.duration}
                      </span>
                    </div>
                  </div>

                  <p className='text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal'>
                    {data.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work

