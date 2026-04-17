import { motion } from 'framer-motion'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


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
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true , amount:0.2}}
        id='contact'
        className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4 text-white'>
                Get In <span className='text-purple-500'>Touch</span>
                </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Have a project in mind or want to collaborate? Let's talk!
                </p>
            {/* contact form */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label className='block text-gray-300 mb-2'>Your Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                className='w-full bg-dark-300 border border-gray-700 text-white px-4 py-3 rounded-lg'
                                />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email address</label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Email address"
                                className='w-full bg-dark-300 border border-gray-700 text-white px-4 py-3 rounded-lg'
                                />
                        </div>

                        <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message </label>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className='w-full h-40 bg-dark-300 border border-gray-700 text-white px-4 py-3 rounded-lg'
                                />
                        </div>
                        <button 
                            type='submit' 
                            className='w-full px-6 py-3 rounded-lg font-medium text-white
                            bg-gradient-to-r from-purple-500 to-purple-700
                            hover:from-purple-700 hover:to-purple-900
                            hover:scale-[1.02] active:scale-95
                            transition-all duration-300'
                            >
                            Send Message
                        </button>
                        
                    </form>
                </div>
                {/* content infomation */}
                <div className='space-y-8'>
                <div className='flex items-start'>
                    
                    {/* Icon */}
                    <div className='text-purple text-2xl mr-4 mt-1'>
                    <FaMapMarkerAlt />
                    </div>

                    {/* Text */}
                    <div >
                    <h3 className='text-lg font-semibold text-white mb-1'>Location</h3>
                    <p className='text-gray-400'>Kochi, Kerala, India – 682006</p>
                    </div>

                </div>

                <div className='flex items-start'>
                    
                    {/* Icon */}
                    <div className='text-purple text-2xl mr-4 mt-1'>
                    <FaEnvelope />
                    </div>

                    {/* Text */}
                    <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>Email</h3>
                    <p className='text-gray-400'>vargheseneema053@gmail.com</p>
                    </div>

                </div>

                <div className='flex items-start'>
                    
                    {/* Icon */}
                    <div className='text-purple text-2xl mr-4 mt-1'>
                    <FaPhone />
                    </div>

                    {/* Text */}
                    <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>Phone</h3>
                    <p className='text-gray-400'>+91 9037194895</p>
                    </div>

                </div>
                <div className='pt-4'>
                    <h3 className='text-lg font-semibold text-white mb-1'>Follow Me</h3>
                    <br/>
            <div className='flex space-x-4'>

                    {/* GitHub */}
                    <a 
                        href="https://github.com/neemavarghese0098008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-black hover:text-white transition duration-300'
                    >
                    <FaGithub/>
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/neema-varghese-vazhuveli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition duration-300'
                    >
                     <FaLinkedin/>
                    </a>

                    {/* WhatsApp */}
                    <a 
                        href="https://wa.me/919037194895"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-800 hover:text-white transition duration-300'
                    >
                        <FaWhatsapp/>
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/neem.________/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-red-400 hover:text-white transition duration-300'
                    >
                        <FaInstagram/>
                    </a>

                    </div>




                </div>
            </div>

        </div>
        </div>
    </motion.div>
  )
}

export default Content
