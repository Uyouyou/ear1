import React from 'react';
import Rectangle22 from '../assets/Rectangle 22.png';

const First = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-between items-center h-auto w-full mt-3 lg:mt-[-5rem] p-4 lg:p-0'>
      {/* Text Section */}
      <div className='flex flex-col items-center lg:items-start lg:ml-[10rem] gap-6 lg:gap-8'>
        <h2 className="font-poppins text-[22px] sm:text-[28px] lg:text-[40px] leading-[32px] sm:leading-[38px] lg:leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold text-center lg:text-left">
          Get in touch with those that <br /> 
          <span className='font-poppins text-[#00bf69] italic'>inspire</span> you.
        </h2>
        <p className='font-poppins text-[14px] sm:text-[16px] lg:text-[18px] text-[#8e8e95] leading-[20px] sm:leading-[28px] lg:leading-[33.41px] tracking-[-0.03em] text-center lg:text-left'>
          ear1 provides a more efficient and faster way for you to reach out to <br className="hidden lg:block"/> 
          those who inspire you, either in your career or any other field of interest, <br className="hidden lg:block"/> 
          and build great relationships with them.
        </p>
      </div>

      {/* Image Section */}
      <div className='flex justify-center lg:justify-end mt-4 lg:mt-0 lg:mr-[10rem]'>
        <div className='w-[280px] h-[275px] sm:w-[350px] sm:h-[330px] lg:w-[466px] lg:h-[474px]'>
          <img src={Rectangle22} alt="An image of a man smiling" className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default First;
