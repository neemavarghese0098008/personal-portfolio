import React from 'react'

const Footer = () => {
  return (
    <footer className='py-10 bg-[#0d0d12] border-t border-purple-500/10'>
      <div className='container mx-auto px-6 text-center max-w-7xl'>
        <p className='text-gray-400 text-lg font-medium tracking-wide'>
          © {new Date().getFullYear()} Created By <span className='text-purple-400 font-semibold'>Neema Varghese</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

