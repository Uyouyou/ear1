import React from 'react';
import Mask from '../assets/Mask Group.png';


const Third = () => {
  return (
    <section className='w-[375px] h-[579.19px] lg:w-full lg:h-[809px] flex flex-col items-center mt-[5rem]'>
        <div className='flex flex-col items-center gap-5'>
            <h2 className="font-poppins text-[18px] lg:text-[40px] leading-[29.3px] lg:leading-[48.88px] tracking-[-0.05em] text-[#39393f] font-semibold ml-[4rem] lg:ml-0 mb-3">There’s no <span className='font-poppins text-[18px] lg:text-[40px] leading-[29.3px] lg:leading-[48.88px] tracking-[-0.05em] text-[#00bf69] italic font-semibold'>better way</span>  of reaching out <br /> to those who inspires you</h2>
            <p className='font-poppins text-[13px] lg:text-[18px] text-[#8e8e95] leading-[27.46px] lg:leading-[33.41px] tracking-[-0.03em]  ml-[4rem] lg:ml-0'>Ear1 lets influencers charge you a small fee to have a conversation with them. Being required to <br /> pay filters out all the unserious people so your favourite influencers can respond to you faster.</p>
        </div>

        <div className='w-[280px] h-[256.19px] lg:w-[471px] lg:h-[442px] mt-[2rem] ml-[5rem] lg:ml-0 mb-[5rem]'>
            <img src={Mask} alt="A picture of a man happy" />
        </div>

    </section>
  )
}

export default Third