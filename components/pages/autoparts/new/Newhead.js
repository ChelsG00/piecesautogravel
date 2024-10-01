import Videomedium from '@/components/ui/video/mobile/Videomedium'
import Videoshorter from '@/components/ui/video/mobile/Videoshorter'
import React from 'react'
import Image from 'next/image'

const Newhead = ({t}) => {
  return (
<div>
    {/* < Videomedium /> */}
    {/* <div id="video-header" className="video-header-top h-[200px]">
    <Videoshorter />
    </div> */}
<div id="video-header" className="video-header-top text-left pl-5 pr-5 h-[70vh] mt-[120px] flex items-center justify-center mx-auto mb-5 bg-[#fbfbfb] lg:justify-start lg:pl-32 lg:h-[100vh] lg:mt-[80px] ">
    <div className='lg:flex'>
    <div className='lg:w-[50vw] lg:mr-8 lg:mt-10'>
    <h1 className="fadeInLeft-css text-3xl font-bold mb-5">{t.newparts.h1}</h1>
    <div id="line" className="fadeInLeft-css-two"></div>
    <p className="fadeInLeft-css-three leading-9 text-xl mb-2 ">{t.newparts.text}</p>
    <p className="fadeInLeft-css-three leading-9 text-xl mb-6 ">{t.newparts.texttwo}</p>
    <div className='flex items-center justify-start'>
    <a href="tel:+1-450-435-8335">
      <button id="auto-parts-header-button" className="fadeInLeft-css-four text-[16px] bg-[rgb(11,84,162)]  flex py-3 pr-10 pl-8 rounded text-white lg:items-center">
      <span className='border-r-[1px]  mr-4'>
      <Image src="/img/icon-phone-call-white.svg" width={600} height={600}className='mr-6 w-7 h-7'/>
      </span>
      <p className='text-[16px] text-white'>+1(450) 435-8335</p>
      </button>
    </a>
    </div>
    </div>
    <Image src='/img/new-parts-layer.png' width={700} height={700} className='hidden lg:block lg:w-[470px]'/>
    </div>
  
    </div>
        
    </div>
  )
}

export default Newhead




{/*   
  <div id="video-header-imageClip-short"></div>
  <div id="video-header-video-short"></div>
  <div id="video-header-overlay-short"></div>
  <div id="video-header-text" className="new-auto-text"></div> */}