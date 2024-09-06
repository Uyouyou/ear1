import React from 'react';
import Appstore from '../assets/Vector.png';
import Android from '../assets/andriod.png';

const Fourth = () => {
  return (
    <section className='w-full h-[454px] bg-[#fef0ec] flex justify-center items-center mt-[2.5rem] lg:mt-0 p-4 lg:p-0'>
      
      {/* Main container with a fixed large width for large screens */}
      <div className='w-full max-w-[1134px] h-auto lg:h-[265px] bg-[#00bf69] rounded-[30px] flex flex-col lg:flex-row lg:justify-between items-center p-6 lg:p-10'>
        
        {/* Text Section */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 mt-4 lg:mt-0'>
          <h3 className='font-poppins text-[18px] sm:text-[25px] lg:text-[35px] leading-[26px] sm:leading-[32px] lg:leading-[40.35px] tracking-[0.05em] text-white font-medium'>
            Build great relationships with those you admire.
          </h3>
          <p className='font-poppins text-[13px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[28px] lg:leading-[33px] tracking-[0.03em] text-white'>
            With ear1, replies to your DMs are guaranteed!
          </p>
        </div>

        {/* Button Section */}
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full lg:w-auto gap-4 lg:gap-6 mt-6 lg:mt-0'>
          
          <button className='w-[155px] h-[62px] flex items-center justify-center gap-[10px] bg-[#39393f] text-white rounded-[5px]'>
            <img src={Appstore} alt="Apple App Store" className='w-[24px] h-[24px]' />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] font-normal'>App Store</span>
            </div>
          </button>

          <button className='w-[155px] h-[62px] flex items-center justify-center gap-[10px] bg-[#39393f] text-white rounded-[5px]'>
            <img src={Android} alt="Google Play Store" className='w-[24px] h-[24px]' />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] font-normal'>Google Play</span>
            </div>
          </button>
        
        </div>
      </div>

    </section>
  )
}

export default Fourth;
