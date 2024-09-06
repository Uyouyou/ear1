import React from 'react';
import Mask from '../assets/Mask Group.png';

const Third = () => {
  return (
    <section className='w-full h-auto flex flex-col items-center mt-[5rem] p-4 lg:p-0'>
      
      {/* Text Section */}
      <div className='flex flex-col items-center text-center gap-5 lg:gap-8'>
        <h2 className="font-poppins text-[22px] sm:text-[28px] lg:text-[40px] leading-[30px] sm:leading-[36px] lg:leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold">
          There’s no <span className='text-[#00bf69] italic font-semibold'>better way</span> of reaching out <br className='hidden sm:block' /> to those who inspire you
        </h2>
        <p className='font-poppins text-[14px] sm:text-[16px] lg:text-[18px] text-[#8e8e95] leading-[22px] sm:leading-[27px] lg:leading-[33.41px] tracking-[-0.03em]'>
          Ear1 lets influencers charge you a small fee to have a conversation with them. Being required to <br className="hidden lg:block"/> 
          pay filters out all the unserious people so your favorite influencers can respond to you faster.
        </p>
      </div>
      
      {/* Image Section */}
      <div className='w-[260px] h-[240px] sm:w-[320px] sm:h-[300px] lg:w-[471px] lg:h-[442px] mt-[2rem] lg:mt-[3rem] lg:mb-[3rem]'>
        <img src={Mask} alt="A picture of a happy man" className='w-full h-full object-cover' />
      </div>
      
    </section>
  )
}

export default Third;
