import React from 'react';
import Image6 from '../assets/image 6.png';

const Second = () => {
  return (
    <section className='bg-[#fffcfb] flex flex-col-reverse lg:flex-row lg:justify-between items-center h-auto w-full mt-[6rem] lg:mt-[5rem] p-4 lg:p-0'>
     
      {/* Image Section */}
      <div className='flex justify-center lg:justify-start mt-[2rem] lg:mt-0 lg:ml-[8rem] xl:ml-[9rem]'>
        <div className='w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[466px] lg:h-[474px]'>
          <img src={Image6} alt="An image of a man operating his phone" className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Text Section */}
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left lg:mr-[6rem] gap-4 lg:gap-8 mt-6 lg:mt-0'>
        <h2 className="font-poppins text-[22px] sm:text-[28px] lg:text-[40px] leading-[32px] sm:leading-[36px] lg:leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold">
          You have <span className='text-[#00bf69] italic font-semibold'>zero</span> chances of not <br className='hidden sm:block lg:hidden' /> being replied.
        </h2>
        <p className='font-poppins text-[14px] sm:text-[16px] lg:text-[18px] text-[#8e8e95] leading-[22px] sm:leading-[28px] lg:leading-[33.41px] tracking-[-0.03em]'>
          Sending a DM should no more be an issue of shooting your shot or trying <br className="hidden lg:block"/> 
          your luck. You’re paying, so you’re definitely going to get a response, <br className="hidden lg:block"/>
          and not just a response, but a conversation.
        </p>
      </div>
      
    </section>
  )
}

export default Second;
