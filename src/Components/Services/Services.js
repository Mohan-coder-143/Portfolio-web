import React from 'react';
import { FaCode, FaUikit } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";

const Services = () => {
  return (
    <section id="services" className='flex flex-col pt-20 md:pt-32 px-6 md:px-12 lg:px-20'>
      <h1 className='text-3xl md:text-5xl text-center text-white mb-12 md:mb-16'>
        My <span className='text-blue-500'>Services</span>
      </h1>

      {/* Services Cards Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto w-full'>

        {/* Card 1 - Web Development */}
        <div className='bg-[#0C2C55] p-6 md:p-8 rounded-2xl flex flex-col items-center text-center 
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 
                        border-2 border-transparent hover:border-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-4 text-[#0065F8]'><FaCode /></p>
          <h3 className='text-xl md:text-2xl lg:text-3xl text-white mb-4 font-bold'>Web Development</h3>
          <p className='text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed'>
            I develop modern and responsive websites using HTML, CSS, JavaScript, React, and Tailwind. 
            My projects include e-commerce sites, dashboards, blogs, and interactive web apps. 
            I focus on performance, clean code, and user-friendly interfaces.
          </p>
        </div>

        {/* Card 2 - UI Development */}
        <div className='bg-[#0C2C55] p-6 md:p-8 rounded-2xl flex flex-col items-center text-center 
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 
                        border-2 border-transparent hover:border-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-4 text-[#0065F8]'><FaUikit /></p>
          <h3 className='text-xl md:text-2xl lg:text-3xl text-white mb-4 font-bold'>UI Development</h3>
          <p className='text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed'>
            I create clean and interactive user interfaces using HTML, CSS, and React. 
            I turn design mockups into functional UI components that are fully responsive
            across devices and screen sizes. User experience is my priority.
          </p>
        </div>

        {/* Card 3 - UI/UX Design */}
        <div className='bg-[#0C2C55] p-6 md:p-8 rounded-2xl flex flex-col items-center text-center 
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 
                        border-2 border-transparent hover:border-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-4 text-[#0065F8]'><SiAdobeindesign /></p>
          <h3 className='text-xl md:text-2xl lg:text-3xl text-white mb-4 font-bold'>UI/UX Design</h3>
          <p className='text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed'>
            I design visually appealing UI/UX layouts focusing on usability and aesthetics. 
            I work on wireframes, prototypes, and final designs with attention to typography,
            spacing, and color harmony for an amazing user experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;