import React from 'react';
import '../Home/Home.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import profile from '../../Assets/profile.jpeg';

const Home = () => {
  return (
    <section id="home" className='flex flex-col md:flex-row items-center px-6 md:px-12 mt-16 md:mt-10'>
      {/* Profile Image */}
      <div className='profile-img w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-6'>
        <img src={profile} alt='profile' className='max-w-[220px] sm:max-w-[220px] md:max-w-[380px] aspect-square object-cover rounded-2xl shadow-lg float-animation' />
      </div>

      {/* Text Content */}
      <div className='head-left px-4 md:px-0 flex flex-col items-start text-left font-manrope w-full md:w-1/2 order-2 md:order-1'>
        <span className='text-3xl md:text-4xl text-white'>👋 Hello, I am</span>
        <span className='text-4xl md:text-6xl text-white mt-1'>Mohan Raj S</span>
        <span className='text-4xl md:text-6xl text-white mt-1'>I'm a <span className='heead'>Frontend <br />Developer</span></span>
        
        <p className='text-white mt-3 text-lg'>I build responsive and user-friendly interfaces using React, Tailwind CSS, and modern JavaScript.</p>

        {/* Social Icons */}
        <div className='logo-btn mt-4'>
          <a href='https://www.linkedin.com/in/mohan-raj-745563391/' target="_blank" rel="noreferrer"><CiLinkedin /></a>
          <a href='https://github.com/Mohan-coder-143' target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href='mailto:mohanraj28110@gmail.com'><MdMailOutline /></a>
        </div>

        {/* Resume Button */}
        <div>
          <a href='/resume.pdf' download className='flex items-center justify-center gap-2 mt-6 bg-blue-500 px-5 py-2 rounded-lg w-fit'>
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
