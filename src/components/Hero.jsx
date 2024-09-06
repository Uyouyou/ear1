import React from 'react';
import Group19 from '../assets/Group 19.png';
import Prosper from '../assets/Propser.png';
import Appstore from '../assets/Vector.png';
import Andriod from '../assets/andriod.png';
import Shola from '../assets/Shola.png';
import Moe from '../assets/Moe.png';

const Hero = () => {
  return (
    <section className='bg-white w-[375px] h-[812px] lg:w-full lg:h-[750px] flex flex-col lg:flex-row lg:justify-between items-center text-center'>
  
  <div className='flex justify-between lg:flex-col items-center gap-[14rem] lg:gap-[7rem] mt-[2rem] ml-[4rem] lg:ml-[15rem]'>
    <div className='w-[51px] h-[51px] lg:w-[99px] lg:h-[99px] ml-0 lg:ml-[-10rem]'>
        <img src={Group19} alt="david" />
    </div>

    <div className='w-[51px] h-[51px] lg:w-[95px] lg:h-[95px] mt-[2rem] lg:mt-[3rem] mr-[-4rem] lg:mr-0'>
        <img src={Shola} alt="shola" />
    </div>
</div>


      <div className='flex flex-col items-center gap-4 lg:gap-8 mt-[3rem] lg:mt-[-14rem] ml-[5rem] lg:ml-0'>
        <h1 className='font-poppins font-bold text-[30px] lg:text-[50px] leading-tight tracking-[-0.05em] text-[#39393f]'>
          Connect with professionals in your <br /> field without getting aired.
        </h1>
        <p className='font-poppins text-[18px] lg:text-[20px] leading-[28px] sm:leading-[33.12px] tracking-[-0.03em] text-[#6a6a70] mt-3 lg:mt-0'>
          For a small fee, ear1 allows you to get in touch with professionals in <br /> your field and build quality relationships with them.
        </p>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-4 mt-[1rem] lg:mt-0'>
          <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#00bf69] text-[18px] leading-[18px] tracking-[0.03em] text-white'>
            <img src={Appstore} alt="apple" />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px] tracking-[-0.03em]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] tracking-[0.03em] font-normal text-nowrap'>App Store</span>
            </div>
          </button>

          <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#00bf69] text-[18px] leading-[18px] tracking-[0.03em] text-white'>
            <img src={Andriod} alt="android" />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px] tracking-[-0.03em]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] tracking-[0.03em] font-normal text-nowrap'>Google Store</span>
            </div>
          </button>
        </div>
      </div>

      <div className='flex justify-between lg:flex-col items-center mt-[0.8rem] lg:mt-0 gap-[2rem] lg:gap-[8rem]'>
        <div className='w-[44px] h-[44px] lg:w-[99px] lg:h-[99px] ml-[-8rem] lg:mr-[-6rem]'>
          <img src={Prosper} alt="prosper" />
        </div>

        <div className='w-[48px] h-[48px] lg:w-[91px] lg:h-[91px] mt-[3rem] lg:mt-[10rem] mr-[-12rem] lg:mr-[18rem]'>
          <img src={Moe} alt="moe" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
