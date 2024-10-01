import Videoshorter from '@/components/ui/video/mobile/Videoshorter'
import React from 'react'
import Image from 'next/image'

const Aboutusheader = ({t}) => {
  return (
<div>
 <div id="video-header" className="video-header-top h-[200px] lg:hidden">
  <Videoshorter />
  </div>

    <section className='pt-28 pb-12 pl-5 pr-5 lg:pt-56 lg:flex'>
      <div className='lg:w-[50vw] lg:pl-28 lg:pt-12 lg:mr-9'>
        <h1 className='text-3xl text-[#313030] capitalize pb-2'> {t.aboutus.h1} </h1>
        <p className='mb-6 text-xl leading-9'>{t.aboutus.text}</p>
        <h2 className='text-3xl inline-block text-[#313030] mb-2'>{t.aboutus.historyh1}</h2>
        <p className='text-xl leading-9 mb-12'>{t.aboutus.historytext}</p>
        </div>
        <div>
        <Image src="/img/outside-building-winter.jpg" alt="An picture of the outside of the new Gravel Auto Parts building" title="New Building" width={600} height={600} className='max-w-full h-auto mt-8 bg-[#d2d2d2] lg:w-[600px]'/>
        </div>
        
    </section>
</div>
  )
}

export default Aboutusheader



{/* <video autoplay loop muted playsinline id="video" class="video-mobile">
      <source src="img/video-header/video-header-main-mobile.mp4" type="video/mp4">
      <source src="img/video-header/video-header-main-mobile.webm" type="video/webm">
    </video> */}