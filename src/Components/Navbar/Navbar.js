import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Added for better UX

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold cursor-pointer hover:scale-105 transition">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#certificates" className="hover:text-blue-500">Certificate</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Hamburger - Fixed visibility */}
        <button className="md:hidden text-3xl text-gray-800" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-xl transition-all duration-300 origin-top ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'} md:hidden`}>
          <ul className="flex flex-col items-center gap-5 py-8 text-lg font-semibold">
            <li><a href="#home" onClick={handleClick}>Home</a></li>
            <li><a href="#about" onClick={handleClick}>About</a></li>
            <li><a href="#skills" onClick={handleClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleClick}>Projects</a></li>
            <li><a href="#certificates" onClick={handleClick}>Certificate</a></li>
            <li><a href="#services" onClick={handleClick}>Services</a></li>
            <li><a href="#contact" onClick={handleClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar