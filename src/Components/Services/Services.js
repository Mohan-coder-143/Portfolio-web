import React from 'react';
import { FaCode, FaUikit } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";

const Services = () => {
  return (
    <section id="services" className='flex flex-col pt-20 md:pt-32 px-4 md:px-12 lg:px-20'>
      <h1 className='text-3xl md:text-5xl text-center text-white mb-12'>My <span>Services</span></h1>

      {/* Services Cards Container */}
      <div className='flex flex-wrap justify-center gap-10'>

        {/* Card 1 */}
        <div className='bg-[#0C2C55] p-8 rounded-2xl flex flex-col items-center text-center 
                        w-full md:w-[45%] lg:w-[30%] transition-transform duration-300 hover:scale-105 hover:outline-2 hover:outline hover:outline-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><FaCode /></p>
          <h3 className='text-2xl md:text-3xl text-white mb-3'>Web Development</h3>
          <p className='text-white text-lg mt-2'>
            I develop modern and responsive websites using HTML, CSS, JavaScript, React, and Tailwind. 
            My projects include e-commerce sites, dashboards, blogs, and interactive web apps. 
            I focus on performance, clean code, and user-friendly interfaces.
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#0C2C55] p-6 rounded-2xl flex flex-col items-center text-center 
                        w-full md:w-[32%] transition-transform duration-300 hover:scale-105 hover:outline-2 hover:outline hover:outline-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><FaUikit /></p>
          <h3 className='text-2xl md:text-3xl text-white mb-3'>UI Development</h3>
          <p className='text-white text-lg mt-2'>
            I create clean and interactive user interfaces using HTML, CSS, and React. 
            I turn design mockups into functional UI components that are fully responsive
            across devices and screen sizes. User experience is my priority.
          </p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#0C2C55] p-6 rounded-2xl flex flex-col items-center text-center 
                        w-full md:w-[32%] transition-transform duration-300 hover:scale-105 hover:outline-2 hover:outline hover:outline-[#0065F8]'>
          <p className='text-5xl md:text-6xl mb-3 text-[#0065F8]'><SiAdobeindesign /></p>
          <h3 className='text-2xl md:text-3xl text-white mb-3'>UI/UX Design</h3>
          <p className='text-white text-lg mt-2'>
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
