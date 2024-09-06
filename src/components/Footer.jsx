import React from 'react';
import Logofooter from '../assets/logofooter.png';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='w-full bg-[#39393f] py-8 lg:py-12'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between items-center'>
        
        {/* First Section - Logo and Copyright */}
        <div className='flex flex-col items-center lg:items-start lg:ml-16 text-center lg:text-left mb-8 lg:mb-0'>
          <img src={Logofooter} alt="footer-logo" className='mb-4' />
          <p className='text-[#fcfcfc] text-[18px] lg:text-[20px] font-poppins'>&copy; 2020 ear1Social</p>
          <span className='text-[#bbbbbb] text-base font-poppins mt-2'>
            <a href="#privacy" className='mr-2'>Privacy Policy</a> | 
            <a href="#terms" className='ml-2'>Terms of Service</a>
          </span>
        </div>

        {/* Second Section - Company Links */}
        <div className='flex flex-col items-center lg:items-start lg:ml-0 lg:mr-16 mb-8 lg:mb-0'>
          <h3 className='font-poppins text-[18px] lg:text-[20px] text-[#fcfcfc] mb-4'>Company</h3>
          <a href="#about" className='text-[#bbbbbb] text-[16px] lg:text-[18px] font-poppins mb-2'>About Us</a>
          <a href="#faq" className='text-[#bbbbbb] text-[16px] lg:text-[18px] font-poppins mb-2'>FAQs</a>
          <a href="#contact" className='text-[#bbbbbb] text-[16px] lg:text-[18px] font-poppins'>Contact Us</a>
        </div>

        {/* Third Section - Get in Touch */}
        <div className='flex flex-col items-center lg:items-start lg:mr-16 text-center lg:text-left'>
          <h3 className='font-poppins text-[18px] lg:text-[20px] text-[#fcfcfc] mb-4'>Get in touch</h3>
          <p className='text-[#bbbbbb] text-base lg:text-[18px] font-poppins mb-4'>
            Questions or feedback? We <br /> would love to hear from you.
          </p>
          {/* Social Media Icons */}
          <div className='flex justify-center lg:justify-start gap-4'>
            <FaFacebookSquare className='cursor-pointer text-[#d4d4d4] w-6 h-6' />
            <AiFillTwitterCircle className='cursor-pointer text-[#d4d4d4] w-6 h-6' />
            <AiFillInstagram className='cursor-pointer text-[#d4d4d4] w-6 h-6' />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
