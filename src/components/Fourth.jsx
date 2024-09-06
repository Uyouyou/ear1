import React from 'react';
import Appstore from '../assets/Vector.png';
import Andriod from '../assets/andriod.png';

const Fourth = () => {
  return (
    <section className=' h-[454px] w-full lg:h-[454px] bg-[#fef0ec] flex justify-center items-center mt-[2.5rem] lg:mt-0'>
        
        <div className='w-[335px] h-[362px] lg:w-[1134px] lg:h-[265px] top-[2856px] left-[116px] rounded-[30px] bg-[#00bf69] flex flex-col lg:flex-row lg:justify-between items-center mr-[-1rem] lg:ml-[5rem] mt-[3rem]'>
            <div className='w-[314px] h-[54px] lg:w-[503px] lg:h-[128px] flex flex-col items-center left-[194px] gap-6 mt-[3rem] lg:mt-0'>
                <h3 className='font-poppins text-[18px] lg:text-[35px] leading-[26.52px] lg:leading-[40.35px] tracking-[0.05em] text-white text-wrap font-medium ml-[2rem] lg:ml-[2rem]'>Build great relationships with those you admire.</h3>
                <p className='font-poppins text-white text-[13px] lg:text-[18px] leading-[22.5px] lg:leading-[33.41px] tracking-[0.03em] ml-[2rem] lg:ml-0'>With ear1, replies to your DMs are guaranteed!</p>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between items-center w-[357px] h-[62px] ml-0 lg:mr-[5rem] mt-[8rem] gap-2 lg:mt-0'>
            <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#39393f] text-[18px] leading-[18px] tracking-[0.03em] text-white'>
            <img src={Appstore} alt="apple" />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px] tracking-[-0.03em]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] tracking-[0.03em] font-normal text-nowrap'>App Store</span>
            </div>
          </button>

          <button className='w-[155px] h-[62px] flex items-center justify-center p-[12px_16px_15px_16px] gap-[10px] rounded-[5px] bg-[#39393f] text-[18px] leading-[18px] tracking-[0.03em] text-white'>
            <img src={Andriod} alt="android" />
            <div className='text-left'>
              <span className='block text-[12px] leading-[12px] tracking-[-0.03em]'>Get it on</span>
              <span className='block text-[16px] lg:text-[18px] leading-[18px] tracking-[0.03em] font-normal text-nowrap'>Google Store</span>
            </div>
          </button>
            </div>
        </div>
    </section>
  )
}

export default Fourth