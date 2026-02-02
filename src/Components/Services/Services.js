import React from 'react'
import { FaCode, FaUikit } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";

const Services = () => {
  return (
    <section className='flex flex-col pt-24 md:pt-32'>
      <h1 className='text-3xl md:text-5xl text-center text-white mb-12'>My <span>Services</span></h1>

      {/* Services Cards Container */}
      <div className='flex flex-col md:flex-row justify-center gap-8 px-4 md:px-20 mt-12'>
        
        {/* Card 1 */}
        <div className='bg-[#0C2C55] p-6 rounded-2xl 
                  flex flex-col items-center text-center 
                  w-full md:w-1/3 sm:w-11/12
                  transition-transform duration-300 hover:scale-105 hover:outline hover:outline-2
                   hover:outline-[#0065F8] mx-auto'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><FaCode/></p>
          <h3 className='text-2xl md:text-3xl text-white mb-2'>Web Development</h3>
          <p className='text-white text-lg md:text-lg mt-2 max-w-[350px]'>
            As a Web Developer, I create dynamic and functional websites using Front-end and Backend Technologies.
            I specialize in building rxesponsive, user-friendly interfaces that enhance the user experience. Whether it’s
            an E-commerce site, a blog, or a custom web application, I bring ideas to life through code.
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#0C2C55] p-6 rounded-2xl 
                  flex flex-col items-center text-center 
                  w-full md:w-1/3
                  transition-transform duration-300 hover:scale-105 hover:outline hover:outline-2 hover:outline-[#0065F8] mx-auto'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><FaUikit /></p>
          <h3 className='text-2xl md:text-3xl text-white mb-2'>UI Development</h3>
          <p className='text-white text-lg md:text-lg mt-2 max-w-[350px]'>
            UI-User Interface development focuses on creating the visual elements of a website or application.
            I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript.
            My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.
          </p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#0C2C55] p-6 rounded-2xl 
                  flex flex-col items-center text-center 
                  w-full md:w-1/3
                  transition-transform duration-300 hover:scale-105 hover:outline hover:outline-2 hover:outline-[#0065F8] mx-auto'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><SiAdobeindesign /></p>
          <h3 className='text-2xl md:text-3xl text-white mb-2'>UI Designing</h3>
          <p className='text-white text-lg md:text-lg mt-2 max-w-[350px]'>
            UI Design is all about aesthetics and usability. As a UI Designer, I craft visually appealing layouts,
            choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing,
            and consistency. My design aims to enhance the overall look and feel of your digital product.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Services;
