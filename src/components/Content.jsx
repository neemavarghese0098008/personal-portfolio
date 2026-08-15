import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wlzrrhi",
      "template_k2o5vpf",
      form.current,
      "_Bv1_1l54KKofrnYO"
    )
    .then(() => {
      alert("Message sent successfully ✅");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send ❌");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      id='contact'
      className='py-16 md:py-20 bg-[#15151c] relative'
    >
      <div className='container mx-auto px-6 md:px-12 max-w-6xl relative z-10'>
        {/* Section Heading */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3'>
            Get In <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Touch</span>
          </h2>
          <p className='text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal'>
            Have a project in mind or want to collaborate? Feel free to reach out anytime!
          </p>
        </div>

        {/* Form and Info Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-start'>
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='glass-card rounded-3xl p-6 md:p-8 border border-purple-500/20 shadow-xl'
          >
            <form ref={form} onSubmit={sendEmail} className='space-y-4 font-normal'>
              <div>
                <label className='block text-gray-200 text-sm sm:text-base font-medium mb-1.5'>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className='w-full bg-[#1a1a24] border border-purple-500/20 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white text-sm md:text-base px-4 py-3 rounded-xl transition duration-300'
                />
              </div>

              <div>
                <label className='block text-gray-200 text-sm sm:text-base font-medium mb-1.5'>Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className='w-full bg-[#1a1a24] border border-purple-500/20 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white text-sm md:text-base px-4 py-3 rounded-xl transition duration-300'
                />
              </div>

              <div>
                <label className='block text-gray-200 text-sm sm:text-base font-medium mb-1.5'>Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className='w-full bg-[#1a1a24] border border-purple-500/20 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white text-sm md:text-base px-4 py-3 rounded-xl transition duration-300 resize-none'
                ></textarea>
              </div>

              <button 
                type='submit' 
                className='w-full py-3 px-6 rounded-xl font-semibold text-sm md:text-base text-white
                bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600
                hover:from-purple-500 hover:to-pink-500
                shadow-md shadow-purple-600/30 hover:shadow-purple-500/50
                hover:scale-[1.02] active:scale-95
                transition-all duration-300 cursor-pointer mt-2'
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6 lg:pl-4'
          >
            <div className='glass-card rounded-3xl p-6 md:p-8 border border-purple-500/20 shadow-xl space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xl md:text-2xl shrink-0'>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className='text-base md:text-lg font-bold text-white mb-0.5'>Location</h3>
                  <p className='text-gray-300 text-sm md:text-base'>Kochi, Kerala, India – 682006</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xl md:text-2xl shrink-0'>
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className='text-base md:text-lg font-bold text-white mb-0.5'>Email</h3>
                  <a href="mailto:vargheseneema053@gmail.com" className='text-gray-300 hover:text-purple-300 text-sm md:text-base transition duration-300'>
                    vargheseneema053@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xl md:text-2xl shrink-0'>
                  <FaPhone />
                </div>
                <div>
                  <h3 className='text-base md:text-lg font-bold text-white mb-0.5'>Phone</h3>
                  <a href="tel:+919037194895" className='text-gray-300 hover:text-purple-300 text-sm md:text-base transition duration-300'>
                    +91 9037194895
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='glass-card rounded-3xl p-6 border border-purple-500/20 shadow-xl'>
              <h3 className='text-base md:text-lg font-bold text-white mb-4'>Follow & Connect</h3>
              <div className='flex flex-wrap gap-3.5'>
                <a 
                  href="https://github.com/neemavarghese0098008"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className='w-11 h-11 rounded-xl bg-[#1a1a24] border border-purple-500/30 flex items-center justify-center text-white text-xl hover:bg-purple-600 hover:border-purple-400 hover:scale-110 transition-all duration-300 shadow-md'
                >
                  <FaGithub />
                </a>

                <a 
                  href="https://www.linkedin.com/in/neema-varghese-vazhuveli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className='w-11 h-11 rounded-xl bg-[#1a1a24] border border-purple-500/30 flex items-center justify-center text-white text-xl hover:bg-blue-600 hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-md'
                >
                  <FaLinkedin />
                </a>

                <a 
                  href="https://wa.me/919037194895"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className='w-11 h-11 rounded-xl bg-[#1a1a24] border border-purple-500/30 flex items-center justify-center text-white text-xl hover:bg-emerald-600 hover:border-emerald-400 hover:scale-110 transition-all duration-300 shadow-md'
                >
                  <FaWhatsapp />
                </a>

                <a 
                  href="https://www.instagram.com/neem.________/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className='w-11 h-11 rounded-xl bg-[#1a1a24] border border-purple-500/30 flex items-center justify-center text-white text-xl hover:bg-pink-600 hover:border-pink-400 hover:scale-110 transition-all duration-300 shadow-md'
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Content

