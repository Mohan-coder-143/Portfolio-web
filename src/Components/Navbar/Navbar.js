import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-3 left-5 right-5 z-50">
      {/* Card / Pill container */}
      <div className="bg-white shadow-lg rounded-xl w-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li className='hover:text-violet-500'><a href="#certificates">Certificates</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white shadow-lg rounded-b-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-xl">
            <li><a href="#home" onClick={handleClick}>Home</a></li>
            <li><a href="#about" onClick={handleClick}>About</a></li>
            <li><a href="#skills" onClick={handleClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleClick}>Projects</a></li>
            <li><a href="#projects" onClick={handleClick}>Projects</a></li>
            <li><a href="#services" onClick={handleClick}>Services</a></li>
            <li><a href="#contact" onClick={handleClick}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
