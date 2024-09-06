import React from 'react';
import Image6 from '../assets/image 6.png';

const Second = () => {
  return (
    <section className='bg-[#fffcfb] flex flex-col-reverse lg:flex-row lg:justify-between items-center h-[630px] w-full lg:h-[618px] mt-[10rem] lg:mt-[5rem]'>
   
     <div className='w-[280px] h-[275px] lg:w-[466px] lg:h-[474px] items-center mt-[4rem] ml-[2rem] lg:ml-[14rem]'>
      <img src={Image6} alt="An image of a man operating his phone" />
     </div>

     <div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:mt-[5rem] lg:mr-[6rem] gap-8'>
      <h2 className="font-poppins text-[18px] lg:text-[40px] leading-[29.3px] lg:leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold">
        You have <span className='text-[#00bf69] italic font-semibold'>zero</span> chances of not <br /> being replied.
      </h2>
      <p className='font-poppins text-[13px] lg:text-[18px] text-[#8e8e95] leading-[27.46px] lg:leading-[33.41px] tracking-[-0.03em]  lg:ml-0'>
        Sending a DM should no more be an issue of shooting your shot or trying <br />
        your luck. You’re paying, so you’re definitely going to get a response, <br />
        and not just a response, but a conversation.
      </p>
     </div>
    </section>
  )
}

export default Second;
