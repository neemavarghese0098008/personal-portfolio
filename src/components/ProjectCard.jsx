import React from 'react'


const ProjectCard = ({title,description,image,tech,demo, code}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
     <img src={image} alt={title} className='w-full h-60 object-cover'/> 
     <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
            {tech.map((item,index)=>(
                <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
                    {item}
                </span>
            ))}
        </div>
        <div className='flex gap-3 mt-4'>
  
            {/* View Demo Button */}
            <a 
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className='flex-1 text-center px-4 py-2 rounded-lg font-medium 
                bg-linear-to-r from-purple-500 to-purple-700 
                hover:from-purple-600 hover:to-purple-800 
                transition duration-300 text-white'
                >
                View Demo
                </a>

                <a 
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className='flex-1 text-center px-4 py-2 rounded-lg font-medium 
                border border-purple-500 text-white 
                hover:bg-purple-500/5 
                transition duration-300'
                >
                Code
                </a>

            </div>

            


     </div>
     
     
    </div>
  )
}

export default ProjectCard
