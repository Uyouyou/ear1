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
    <nav className='sticky top-0 w-screen h-auto bg-white'>
        <div className='max-w-[1366px] max-h-[152px] mx-auto bg-white flex justify-between items-center p-8 relative'>
            {/*Logo*/}
            <div className='w-[117px] h-[43px] top-[54px] left-[113px] flex justify-start items-center gap-2'>
                <img className='w-[36.52px] h-[42px]' src={Logo} alt="logo" />
                <h1 className='text-[#00070f] text-[30px] font-semibold font-poppins leading-normal'>ear1</h1>
            </div>

            <ul className='justify-between items-center gap-10 hidden md:flex'>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#about">About</a></li>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#faq">FAQs</a></li>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#contact">Contact us</a></li>
            </ul>

            {/**Toggle navigation */}
            <div onClick={handleToggle} className='text-2xl cursor-pointer md:hidden'>
            {open ? < MdClose /> :  <BiMenuAltLeft /> }
            </div>

            {/*Mobile screens*/}             
            <ul className={`justify-between items-center gap-10 absolute top-16 left-0 bg-white w-screen flex flex-col py-12 duration-700 z-[1] transition-all ${open ? 'top-20' : 'top-[-450px]'}`}>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#about">About</a></li>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#faq">FAQs</a></li>
                <li><a className='font-poppins text-base text-[#6a6a70] leading-[18.75px]' href="#contact">Contact us</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar