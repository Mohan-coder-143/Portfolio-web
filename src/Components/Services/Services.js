import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";


const Services = () => {
  return (
    <section className='flex flex-col'>
    <h1 className='text-3xl text-center md:text-5xl text-white'>My <span>Services</span></h1>
    
    {/*three content total div */}
    <div className='services flex flex-col md:flex-row justify-center gap-5 mt-10 cursor-pointer'>

      {/*content 1 div */}
      <div className='content-1 flex flex-col items-center text-center
                       bg-[#0C2C55]
                       p-6
                       w-full
                       max-w-[400px]
                       mx-auto
                       rounded-2xl
                       transition-all duration-300
                       hover:scale-105
                      hover:outline hover:outline-2 hover:outline-[#0065F8]'>

        <p className='text-5xl md:text-6xl mb-3 flex justify-center text-[#0065F8]'><FaCode/></p>
        <h1 className='text-2xl text-center md:text-3xl text-white'>Web Development</h1>
        <p className='text-white text-lg mt-3 md:text-lg max-w-[350px]'>As a Web Developer, I create Dynamic and Functional Websites using a combination of Front-end
          and Backend Technologies.I Specialize in building responsive,user-friendly interfaces that 
          enhance the user experience.Wheather its an E-commerce site,a blog, or a Custom Web Application.
          I bring ideas to life through code.
        </p>
      </div>

      {/*content 2 div */}
      <div className='content-2 flex flex-col items-center text-center
                       bg-[#0C2C55]
                       p-6
                       w-full
                       max-w-[400px]
                       mx-auto
                       rounded-2xl
                       transition-all duration-300
                       hover:scale-105
                      hover:outline hover:outline-2 hover:outline-[#0065F8]'>

      <p className='text-5xl md:text-6xl mb-3 flex justify-center text-[#0065F8]'><FaUikit /></p>
      <h1 className='text-2xl text-center md:text-3xl text-white'>UI Development</h1>
      <p className='text-white text-lg md:text-lg mt-3 max-w-[350px]'>UI-User Interface development focuses on creating the visual elements of a website or application
        I specialize in turning design mockups into interactive interfaces using HTML,CSS and JavaScript
        My Goal is to Ensure that users have a seamless and Enjoyable Experience While Interacting with your
        Product
      </p>
      </div>

      {/*content 3 div */}
      <div className='content-3 flex flex-col items-center text-center
                       bg-[#0C2C55]
                       p-6
                       w-full
                       max-w-[400px]
                       mx-auto
                       rounded-2xl
                       transition-all duration-300
                       hover:scale-105
                      hover:outline hover:outline-2 hover:outline-[#0065F8]'>

        <p className='text-5xl md:text-6xl mb-3 flex justify-center text-[#0065F8]'><SiAdobeindesign /></p>
        <h1 className='text-2xl text-center md:text-3xl text-white'>UI Designing</h1>
        <p className='text-white text-lg mt-3 md:text-lg max-w-[350px]'>UI Design is all about Aesthetics and usability. AS a UI Designer, I Craft Visually appealing
          Layouts,choose color schemes,and create intuitive navigation.I Pay attention to details like
          typography,spacing and consistency.My design aim to enhance the overall look and feel of your
          digital product
        </p>
      </div>


    </div>


    </section>
  )
}

export default Services