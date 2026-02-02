import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="mx-4 mt-4">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-5xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold cursor-pointer hover:scale-105 transition flex-shrink-0">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#certificates" className="hover:text-blue-500 transition">Certificate</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-2xl sm:text-3xl text-gray-800 flex-shrink-0 z-50 p-1" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden mx-4 mt-2 bg-white shadow-2xl rounded-xl z-40 animate-slideDown">
          <ul className="flex flex-col items-center gap-5 py-8 text-lg font-semibold">
            <li><a href="#home" onClick={handleClick} className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" onClick={handleClick} className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" onClick={handleClick} className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" onClick={handleClick} className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#certificates" onClick={handleClick} className="hover:text-blue-500 transition">Certificate</a></li>
            <li><a href="#services" onClick={handleClick} className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#contact" onClick={handleClick} className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;