import React from 'react'
import '../Home/Home.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import profile from '../../Assets/profile.jpeg';

const Home = () => {
  return (
    <section className='min-h-screen flex flex-col md:flex-row px-12 md:px-12'>

       {/*profile img*/}
      <div className='profile-img w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-6'>
        <img src={profile} alt='profile pht' className='max-w-[220px] sm:max-w-[220px] md:max-w-[380px]
        aspect-square object-cover rounded-2xl shadow-lg float-animation'></img>
      </div>
      
      {/*text content*/}
       <div className='head-left px-4 md:px-0 mt-6 md:mt-10 flex flex-col items-center
        font-manrope text-center md:text-left w-full md:w-1/2 order-2 md:order-1'>
      <span className='text-3xl md:text-4xl text-white'>👋 Hello, I am</span><br></br>
      <span className='text-5xl md:text-6xl text-white'>Mohan Raj S</span><br></br>
      <span className='text-5xl md:text-6xl text-white'>I'm a <span className='heead'>Frontend <br></br>Developer</span></span>
      <div className='para1'>
        <p className='text-white mt-3 text-lg flex flex-row md:flex-col'>I build responsive and user-friendly interfaces using 
          React,Tailwind<br/>CSS,and modern JavaScript.</p>
      </div>
      <div className='logo-btn flex'>
        <a href='https://www.linkedin.com/in/mohan-raj-745563391?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuTrGqqV1QpiPCgVX3oYx%2Bg%3D%3D'><CiLinkedin /></a>
        <a href='https://github.com/Mohan-coder-143'><FaGithub /></a>
        <a href='https://mail.google.com/mail/?view=cm&to=mohanraj28110@gmail.com&su=Job%20Opportunity&body=Hello%20Mohan'
        target='_blank' rel='noreferrer' >
        
        <MdMailOutline /></a>
      </div>
      <div>
        <a href='/resume.pdf' download className='flex items-center justify-center gap-2 mt-6 bg-blue-500 px-5 py-2 rounded-lg w-fit mx-auto md:mx-0' 
        id='res-btn'>Download Resume <FaDownload /></a>
      </div>
      </div>

      </section>
  )
}

export default Home