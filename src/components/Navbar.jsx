import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <nav className='sticky top-0 w-full bg-white z-50'>
      <div className='max-w-[1366px] mx-auto flex justify-between items-center p-4 md:p-8'>
        {/* Logo */}
        <div className='flex items-center'>
          <img className='w-[36px] h-[42px]' src={Logo} alt="logo" />
          <h1 className='text-[#00070f] text-2xl md:text-3xl font-semibold ml-2 font-poppins'>ear1</h1>
        </div>

        {/* Full Menu for Tablets and Larger Screens */}
        <ul className='hidden md:flex space-x-8'>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#about">About</a></li>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#faq">FAQs</a></li>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#contact">Contact us</a></li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden text-3xl cursor-pointer' onClick={handleToggle}>
          {open ? <MdClose /> : <BiMenuAltLeft />}
        </div>

        {/* Mobile Menu */}
        <ul className={`absolute top-14 left-0 w-full bg-white flex flex-col items-center space-y-6 py-10 transition-all duration-300 ease-in-out md:hidden ${open ? 'block' : 'hidden'}`}>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#about" onClick={handleToggle}>About</a></li>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#faq" onClick={handleToggle}>FAQs</a></li>
          <li><a className='font-poppins text-lg text-[#6a6a70] hover:text-black transition' href="#contact" onClick={handleToggle}>Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
