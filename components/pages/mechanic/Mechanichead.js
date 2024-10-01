import Videomedium from '@/components/ui/video/mobile/Videomedium'
import Videolarge from '@/components/ui/video/Videolarge'
import Videomedbig from '@/components/ui/video/Videomed'
import React from 'react'

const Mechanichead = ({t, locale}) => {
  return (

        <section id="video-header" className="video-header-top">
        <div className='lg:hidden'>
        < Videomedium />
        </div>
        <div className='hidden lg:block'>
        <Videomedbig />
        </div>
        <div className=" pl-5 absolute top-[320px] z-20 lg:text-center lg:w-full lg:mx-auto">
          <h1 className='text-3xl text-white font-semibold pb-3 lg:text-[32px]'>{t.mechanic.h1}</h1>
          <p className='text-white pb-8 pr-[49px] text-[16px]'>{t.mechanic.text}</p>      
          <a href={`/${locale}/${t.links.contactlink}`}>
          <button className='relative z-20 bg-white text-black rounded items-center px-5 py-2 text-[16px] lg:px-8'>{t.buttons.callone}</button>
          </a>  
        </div>

      </section>
  )
}

export default Mechanichead



// <video autoplay loop muted playsinline id="video" class="video-mobile">
// <source src="img/video-header/video-header-main-mobile.mp4" type="video/mp4">
// <source src="img/video-header/video-header-main-mobile.webm" type="video/webm">
// </video>