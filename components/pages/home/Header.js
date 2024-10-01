import Videolong from '@/components/ui/video/mobile/Videolong';
import Videolarge from '@/components/ui/video/Videolarge';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Videotablet from '@/components/ui/video/Videotablet';

export const Headerhome = ({t, locale}) => {
  return (
    <div className="w-[100vw] z-[-100]">
      <div className='sm:hidden'>
        <Videolong />
      </div>
      <div className="hidden sm:block lg:hidden">
        <Videotablet />
      </div>

      <div className="hidden lg:block">
        <Videolarge />
      </div>
      <div className="absolute top-[300px] left-0 z-40 fadeInLeft-css text-center mx-auto w-full  sm:top-[300px] sm:text-center sm:ml-0">
        <h1 className='text-[30px] text-white mb-[-10px] tracking-[2px] font-black uppercase sm:text-5xl sm:uppercase sm:font-semibold md:text-[40px]'>{t.homeheader.h1one}</h1>
        <h1 className='text-[30px] text-white mb-[-5px] tracking-[2px] font-black uppercase sm:text-5xl sm:uppercase sm:font-semibold md:text-[40px] md:mb-1 '>{t.homeheader.h1two}</h1>
        <p className='text-xs text-white mb-9 md:mb-12 lg:text-[20px] '>{t.homeheader.h2}</p>

        <a 
  href="https://gravel.ecopieces.ca/" 
  target="_blank"
  className='pb-2 pt-2 pl-9 pr-9 rounded-sm uppercase border border-solid border-white text-[#0f103f] bg-white text-xl mr-4 sm:border-white sm:border-2 sm:border-solid sm:bg-[rgba(255,255,255,0.1)] sm:font-semibold sm:tracking-wide sm:text-white z-50'
        >
        {t.links.shop}
        </a>

      </div>

      <div id="shape-bottom" className='hidden w-[100vw] h-auto sm:hidden'>
        <Image src="/img/shape-bottom.svg" width={600} height={600} alt="A round shape that lays on the bottom of the video header" className='100vw'/>
      </div>
    </div>
  );
}


export default Headerhome;
