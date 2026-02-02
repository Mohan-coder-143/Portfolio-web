import React, { useState } from 'react';
import cal from '../../Assets/calculator.png';
import weather from '../../Assets/Weather-Forecasting-Project-copy.webp';
import { LuExternalLink } from "react-icons/lu";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className='flex flex-col pt-28 md:pt-32 px-4 sm:px-6 md:px-12'>
      <h1 className='text-3xl md:text-5xl text-white text-center mb-12'>
        My <span className='text-blue-500'>Projects</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto w-full'>
        {/* Project 1 - Calculator */}
        <div 
          className='relative group rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-800'
          onClick={() => handleProjectClick('calculator')}
        >
          <img 
            src={cal} 
            alt="Calculator" 
            className='w-full h-64 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' 
          />
          <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-500 ${
            activeProject === 'calculator' ? 'opacity-100' : 'opacity-0 md:opacity-0'
          } md:group-hover:opacity-100`}>
            <h2 className='text-white text-2xl md:text-3xl font-bold'>Calculator</h2>
            <p className='text-gray-300 mt-2 text-sm md:text-base'>
              Responsive calculator using HTML, CSS, and JS
            </p>
            <a 
              href='https://thunderous-stardust-59defb.netlify.app/' 
              target="_blank"
              rel="noopener noreferrer"
              className='text-white text-3xl mt-4 hover:text-blue-500 transition-colors'
              onClick={(e) => e.stopPropagation()}
            >
              <LuExternalLink />
            </a>
          </div>
        </div>

        {/* Project 2 - Weather App */}
        <div 
          className='relative group rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-800'
          onClick={() => handleProjectClick('weather')}
        >
          <img 
            src={weather} 
            alt="Weather App" 
            className='w-full h-64 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' 
          />
          <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-500 ${
            activeProject === 'weather' ? 'opacity-100' : 'opacity-0 md:opacity-0'
          } md:group-hover:opacity-100`}>
            <h2 className='text-white text-2xl md:text-3xl font-bold'>Weather App</h2>
            <p className='text-gray-300 mt-2 text-sm md:text-base'>
              Weather app fetching real-time data from public API
            </p>
            <a 
              href='https://weather-app-f90c0.web.app/' 
              className='text-white text-3xl mt-4 hover:text-blue-500 transition-colors'
              onClick={(e) => e.stopPropagation()}
            >
              <LuExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;