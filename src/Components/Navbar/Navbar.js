import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(false)

  return(
<nav className="w-full sticky top-0 z-50 ">
  <div className="bg-white shadow rounded-lg mt-5 max-w-7xl mx-auto px-6 py-4 relative">

    {/* TOP BAR (Logo + Hamburger) */}
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer
            hover:scale-105
            hover:[#0065F8]
            transition'">Portfolio</h1>

      {/* Hamburger - Mobile Only */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu />
      </button>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-xl font-medium mr-5">
        <li className='hover:text-violet-500'><a href="#home">Home</a></li>
        <li className='hover:text-violet-500'><a href="#about">About</a></li>
        <li className='hover:text-violet-500'><a href="#skills">Skills</a></li>
        <li className='hover:text-violet-500'><a href="#projects">Projects</a></li>
        <li className='hover:text-violet-500'><a href="#certificates">Certificates</a></li>
        <li className='hover:text-violet-500'><a href="#services">Services</a></li>
        <li className='hover:text-violet-500'><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* MOBILE MENU */}

    {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg">
            <ul className="flex flex-col items-center gap-4 py-6 text-xl">
              <li><a href="#home" onClick={handleClick}>Home</a></li>
              <li><a href="#about" onClick={handleClick}>About</a></li>
              <li><a href="#skills" onClick={handleClick}>Skills</a></li>
              <li><a href="#projects" onClick={handleClick}>Projects</a></li>
              <li><a href="#certificates" onClick={handleClick}>Certificates</a></li>
              <li><a href="#services" onClick={handleClick}>Services</a></li>
              <li><a href="#contact" onClick={handleClick}>Contact</a></li>
            </ul>
          </div>
        )}


  </div>
</nav>
  )
};


  

export default Navbar