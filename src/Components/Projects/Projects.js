import React from 'react';
import cal from '../../Assets/calculator.png';
import weather from '../../Assets/Weather-Forecasting-Project-copy.webp';
import '../Projects/Projects.css';
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col pt-28 md:pt-32 px-6 md:px-12'>
      <h1 className='text-3xl md:text-5xl text-white text-center mb-12'>My <span className='text-blue-500'>Projects</span></h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Project 1 */}
        <div className='relative group rounded-xl overflow-hidden shadow-lg cursor-pointer'>
          <img src={cal} alt="Calculator" className='w-full h-64 md:h-80 object-cover rounded-xl' />
          <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <h2 className='text-white text-2xl md:text-3xl font-bold'>Calculator</h2>
            <p className='text-gray-300 mt-2'>Responsive calculator using HTML, CSS, and JS</p>
            <a href='https://thunderous-stardust-59defb.netlify.app/' className='text-white text-3xl mt-2'><LuExternalLink /></a>
          </div>
        </div>

        {/* Project 2 */}
        <div className='relative group rounded-xl overflow-hidden shadow-lg cursor-pointer'>
          <img src={weather} alt="Weather App" className='w-full h-64 md:h-80 object-cover rounded-xl' />
          <div className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <h2 className='text-white text-2xl md:text-3xl font-bold'>Weather App</h2>
            <p className='text-gray-300 mt-2'>Weather app fetching real-time data from public API</p>
            <a href='#weather' className='text-white text-3xl mt-2'><LuExternalLink /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
