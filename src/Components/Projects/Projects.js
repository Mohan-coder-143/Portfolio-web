import React from 'react'
import cal from '../../Assets/calculator.png';
import weather from '../../Assets/Weather-Forecasting-Project-copy.webp';
import '../Projects/Projects.css';
import { LuExternalLink } from "react-icons/lu";



const Projects = () => {
  return (
    <section className='flex flex-col'>
     <h1 className='text-3xl text-center md:text-5xl text-white'>My <span>Projects</span></h1>

      {/*two images and content div*/}
     <div className='imges flex flex-col md:flex-row px-6 md:px-20 gap-10 mt-10'>

      {/*img1 and content total div*/ }
      <div className='img-1 relative group w-full md:w-1/3 h-60 overflow-hidden rounded-xl'>
        <img src={cal} alt='calculator' className='w-full h-full object-cover rounded-xl block'></img>

        {/*img1 content div */}
        <div className='content1 absolute inset-0 bg-black/70 w-[400px] rounded-xl flex flex-col items-center justify-center
        translate-y-full group-hover:translate-y-0 transition-all duration-500 overflow-hidden cursor-pointer'>
          <h1 className='text-white text-2xl md:text-3xl font-bold'>Calculator</h1>
          <p className='text-gray-300 text-sm md:text-lg py-5 px-4 text-center'>Built a responsive calculator using HTML, CSS,<br/>and JavaScript that performs basic arithmetic operations. 
            </p>
            <a href='https://thunderous-stardust-59defb.netlify.app/' className='text-white text-4xl'><LuExternalLink /></a>
        </div>
      </div>

      {/*img2 and content2 div*/}
      <div className='img-2 relative group w-full md:w-1/3 h-60 overflow-hidden rounded-xl box-border'>
        <img src={weather} alt='weather' className='w-full h-full object-cover rounded-xl block'></img>
        <div className='content2 absolute inset-0 bg-black/70 w-[400px] rounded-xl flex flex-col items-center justify-center
        translate-y-full group-hover:translate-y-0 transition-all duration-500 overflow-hidden cursor-pointer'>
          <h1 className='text-white text-2xl md:text-2xl font-bold'>Weather App</h1>
          <p className='text-gray-300 text-sm md:text-lg py-5 px-4 text-center'>Developed a weather application using JavaScript and a public Weather API to fetch real-time data. 
            Users can search by city to view temperature, weather conditions.</p>
            <a href='#weather' className='text-white text-4xl md:text-4xl'><LuExternalLink /></a>
        </div>
      </div>

     </div>

    </section>
  )
}

export default Projects