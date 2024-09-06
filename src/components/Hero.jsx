import React from 'react';
import Group19 from '../assets/Group 19.png';
import Prosper from '../assets/Propser.png';
import Appstore from '../assets/Vector.png';
import Android from '../assets/andriod.png';
import Shola from '../assets/Shola.png';
import Moe from '../assets/Moe.png';

const Hero = () => {
  return (
    <section className='bg-white w-full h-auto lg:h-[750px] flex flex-col lg:flex-row lg:justify-between items-center text-center p-4 lg:p-0'>
      {/* Left-side icons */}
      <div className='flex justify-between lg:flex-col items-center gap-8 lg:gap-16 mt-4 lg:mt-0 lg:ml-[10rem]'>
        <div className='w-[51px] h-[51px] lg:w-[99px] lg:h-[99px] mr-[9rem]  lg:ml-0 lg:mt-[-6rem]'>
          <img src={Group19} alt="david" />
        </div>
        <div className='w-[51px] h-[51px] lg:w-[95px] lg:h-[95px] ml-[4rem] lg:ml-0 lg:mt-[5rem]'>
          <img src={Shola} alt="shola" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className='flex flex-col items-center gap-4 lg:gap-8 mt-8 lg:mt-[-15rem] px-4 lg:px-0 lg:mr-[4rem]'>
        <h1 className='font-poppins font-bold text-[24px] sm:text-[30px] lg:text-[50px] leading-tight tracking-[-0.05em] text-[#39393f]'>
          Connect with professionals in your <br /> field without getting aired.
        </h1>
        <p className='font-poppins text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[33.12px] tracking-[-0.03em] text-[#6a6a70]'>
          For a small fee, ear1 allows you to get in touch with professionals in <br className='hidden lg:block' /> your field and build quality relationships with them.
        </p>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-4 mt-4'>
          <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#00bf69] text-white'>
            <img src={Appstore} alt="apple" />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] font-normal'>App Store</span>
            </div>
          </button>

          <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#00bf69] text-white'>
  <img src={Android} alt="google" />
  <div className='text-left'>
    <span className='block text-[12px] leading-[12px] whitespace-nowrap'>Get it on</span>
    <span className='block text-[16px] lg:text-[18px] font-normal whitespace-nowrap'>Google Store</span>
  </div>
</button>

        </div>
      </div>

      {/* Right-side icons */}
      <div className='flex justify-between lg:flex-col items-center mt-4 lg:mt-0 gap-8 lg:gap-16 lg:mr-[12rem]'>
        <div className='w-[44px] h-[44px] lg:w-[99px] lg:h-[99px] mr-[9rem]  lg:mr-[-4rem] lg:mt-[-6rem]'>
          <img src={Prosper} alt="prosper" />
        </div>
        <div className='w-[48px] h-[48px] lg:w-[91px] lg:h-[91px] ml-[4rem] lg:ml-0 lg:mt-[5rem]'>
          <img src={Moe} alt="moe" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
