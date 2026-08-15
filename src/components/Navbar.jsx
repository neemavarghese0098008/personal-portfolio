import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useLocation, Link } from 'react-router-dom'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const getNavHref = (sectionId) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  const navLinks = [
    { name: 'Home', href: getNavHref('home') },
    { name: 'About', href: getNavHref('about') },
    { name: 'Skills', href: getNavHref('skills') },
    { name: 'Projects', href: isHomePage ? '#projects' : '/projects' },
    { name: 'Experience', href: getNavHref('experience') },
    { name: 'Education', href: getNavHref('education') },
    { name: 'Contact', href: getNavHref('contact') },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#121212]/95 backdrop-blur-md py-3 px-6 md:px-12 border-b border-purple-500/30 shadow-[0_4px_25px_rgba(106,13,173,0.15)]' 
        : 'bg-[#121212]/80 backdrop-blur-sm py-4 px-6 md:px-12'
    }`}>
      <div className='container mx-auto flex justify-between items-center max-w-7xl'>
        <div>
          <Link to='/' className='flex items-center gap-2 group'>
            <span className='text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition duration-300'>
              Neema<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Varghese</span>
            </span>
            <div className='w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse'></div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative text-sm xl:text-base font-medium text-gray-200 transition-all duration-300 hover:text-purple-400 group py-1'
            >
              <span>{link.name}</span>
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#ff69b4]'></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden flex items-center'>
          <button 
            onClick={() => setShowMenu(!showMenu)} 
            className='p-2 text-white hover:text-purple-400 focus:outline-none transition duration-300'
            aria-label="Toggle menu"
          >
            {showMenu ? <FaXmark className='text-3xl' /> : <FaBars className='text-3xl' />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {showMenu && (
        <div className='lg:hidden mt-4 bg-[#1a1a1a]/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 flex flex-col space-y-5 text-center shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => setShowMenu(false)}
              href={link.href}
              className='text-xl font-medium text-gray-200 hover:text-purple-400 py-2 border-b border-gray-800/50 transition duration-300'
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar

