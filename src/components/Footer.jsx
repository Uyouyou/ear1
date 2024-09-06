import React from 'react';;
import Logofooter from '../assets/logofooter.png';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
   <footer className='h-[600px] top-[3048px] w-full lg:h-[344px] lg:top-[3215px] bg-[#39393f]'>
    <div className='flex flex-col lg:flex-row lg:justify-between items-center h-[600px] w-[375px] lg:w-[1139px] lg:h-[164px] top-[3305px] left-[111px] ml-[-7rem] lg:ml-[9rem]'>
    <div className='flex flex-col items-center w-[22px] h-[153px] ml-[1rem] lg:ml-[10rem] gap-3 mt-[2rem] lg:mt-[5rem]'>
      <img className='mr-[4rem] left-[113px] mb-[1.5rem]' src={Logofooter} alt="footer-logo" />
      <p className='text-[#fcfcfc] text-[18px] lg:text-[20px] leading-[15.23px] lg:leading-[16.92px] tracking-[-0.03em] text-nowrap ml-[4rem] font-poppins'>&copy;
      2020 ear1Social</p>
      <span className='text-[#bbbbbb] text-base leading-[13.54px] tracking-[0.03em] text-nowrap ml-[11.5rem] lg:ml-[10.5rem] font-poppins'>Privacy policy  |  Terms of service</span>
    </div>

    <div className='flex flex-col items-center w-[79px] h-[126px] lg:w-[87px] lg:h-[164px] top-[3305px] left-[27px] lg:left-[692px] gap-4 mt-1 lg:mt-[6rem] ml-[1rem] lg:ml-[13rem]'>
      <h3 className='font-poppins text-[18px] lg:text-[20px] leading-[15.23px] lg:leading-[16.92px] tracking-[-0.03em] text-[#fcfcfc]'>Company</h3>
      <a className='font-poppins text-[16px] lg:text-[18px] text-[#bbbbbb] leading-[20.58px] lg:leading-[23.15px] tracking-[0.03em] mr-[1rem] text-nowrap' href="#about">About Us</a>
      <a className='font-poppins text-[16px] lg:text-[18px] text-[#bbbbbb] leading-[20.58px] lg:leading-[23.15px] tracking-[0.03em] mr-[3rem]' href="#faq">FAQs</a>
      <a className='font-poppins text-[16px] lg:text-[18px] text-[#bbbbbb] leading-[20.58px] lg:leading-[23.15px] tracking-[0.03em] text-nowrap' href="#contact">Contact Us</a>
    </div>

    <div className='flex flex-col items-center w-[328px] h-[113.16px] lg:w-[267px] lg:h-[135px] top-[3482px] lg:top-[3305px] left-[27px] lg:left-[983px] gap-4 mt-[3rem] lg:mt-[4rem] ml-[10rem] lg:mr-[-9rem]'>
      <h3 className='font-poppins text-[18px] lg:text-[20px] leading-[15.23px] lg:leading-[16.92px] tracking-[-0.03em] text-[#fcfcfc] mb-[0.5rem] mr-[8rem]'>Get in touch</h3>
      <p className='text-[#bbbbbb] font-poppins text-base lg:text-[18px] leading-[21.22px] lg:leading-[23.87px] tracking-[-0.03em] mr-[1rem] lg:mr-0'>Questions or feedback?, we <br /> would love to hear from you.</p>

      <div className='flex justify-between items-center w-[101px] h-[27.16px] lg:w-[112px] lg:h-[23px] top-[3588px] lg:top-[3417px] left-[28px] lg:left-[987px] gap-3 mr-[8rem]'>
        <FaFacebookSquare className='cursor-pointer text-[#d4d4d4] w-[19.26px] h-[19.26px] lg:w-[18px] lg:h-[18px]' />
        <AiFillTwitterCircle className='cursor-pointer text-[#d4d4d4] w-[19.26px] h-[19.26px] lg:w-[18px] lg:h-[18px]' />
        <AiFillInstagram className='cursor-pointer text-[#d4d4d4] w-[19.26px] h-[19.26px] lg:w-[18px] lg:h-[18px]' />
      </div>
    </div>

    </div>
  
   </footer>
  )
}

export default Footer