import React from 'react'
import html from '../../Assets/html logo.png';
import css from '../../Assets/css logo.webp';
import js from '../../Assets/javascript-logo.png';
import react from '../../Assets/react-logo.png';
import btstrap from '../../Assets/Bootstrap-logo-removebg-preview.png';
import tail from '../../Assets/tailwind-logo-removebg-preview.png';
import psd from '../../Assets/Adobe-Photoshop-Logo.png';
import indesign from '../../Assets/Adobe_InDesign logo.png';
import '../Skills/Skills.css'

const Skills = () => {
  return (
    <section className='flex flex-col'>
      <div className='skills'>
        <h1 className='text-3xl text-center md:text-5xl text-white'>Technical <span>Skills</span></h1>
        <div className='skills-logo grid grid-cols-2 md:grid-cols-4 mt-5 text-center gap-x-2 gap-y-6'>

          <div className='logo-1 flex flex-col  items-center'>
            <img src={html} alt='html-logo' className='w-32 h-32 md:w-32 md:h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>HTML</p>
          </div>
          
          <div className='logo-2 flex flex-col items-center'>
          <img src={css} alt='css-logo' className='w-32 h-32 md:w-32 object-contain'></img>
          <p className='mt-5 text-white font-bold text-xl'>CSS</p>
          </div>

          <div className='logo-3 flex flex-col items-center'>
            <img src={btstrap} alt='bootsrap-logo' className='w-32 md:w-32 h-32 object-contain' ></img>
            <p className='mt-5 text-white font-bold text-xl'>BootStrap</p>
          </div>

          <div className='logo-4 flex flex-col items-center'>
            <img src={tail} alt='tailwind-logo' className='w-32 md:w-32 h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>Tailwind</p>
          </div>

          <div className='logo-5 flex flex-col items-center md:mt-5'>
            <img src={js} alt='javascript-logo' className='w-32 md:w-32 h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>Javascript</p>
          </div>

          <div className='logo-6 flex flex-col items-center md:mt-5'>
            <img src={react} alt='react-logo' className='w-32 md:w-32 h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>React</p>
          </div>

          <div className='logo-7 flex flex-col items-center md:mt-5'>
            <img src={psd} alt='psd-logo' className='w-32 md:w-32 h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>PhotoShop</p>
          </div>

          <div className='logo-8 flex flex-col items-center md:mt-5'>
            <img src={indesign} alt='indesign-logo' className='w-32 md:w-32 h-32 object-contain'></img>
            <p className='mt-5 text-white font-bold text-xl'>Indesign</p>
          </div>
          
        </div>


      </div>
    </section>
  )
}

export default Skills