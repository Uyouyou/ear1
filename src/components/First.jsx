import React from 'react';
import Rectangle22 from '../assets/Rectangle 22.png';

const First = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-between items-center h-[571px] w-[375px] lg:w-full lg:h-[585px] mt-[0.5rem] lg:mt-[-5rem]'>
     <div className='flex flex-col items-center ml-0 lg:ml-[6rem] gap-8'>
      <h2 className="font-poppins text-[20px] lg:text-[40px] leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold ml-[6rem] lg:ml-[-3rem] text-nowrap">Get in touch with those that <br /> <span className='font-poppins text-[20px] lg:text-[40px] leading-[48.88px] tracking-[-0.05em] text-[#00bf69] italic font-semibold'>inspire</span>  you.</h2>
      <p className='font-poppins text-[13px] lg:text-[18px] text-[#8e8e95] leading-[33.41px] tracking-[-0.03em] ml-[5rem] lg:ml-[2.5rem] mt-[-1rem] lg:mt-0'>ear1 provides a more efficient and faster way for you to reach out to <br /> those who inspires you, either in your career, or any other field of interest, <br /> and build great relationships with them.        </p>
     </div>

     <div className='w-[280px] h-[275px] lg:w-[466px] lg:h-[474px] items-center mt-[2rem] lg:mt-0 ml-[6rem] lg:mr-[8rem]'>
      <img src={Rectangle22} alt="An image of a man smiling" />
     </div>
    </section>
  )
}

export default First