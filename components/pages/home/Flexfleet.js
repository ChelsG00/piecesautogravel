import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Flexfleet = ({t, locale}) => {
  return (
    <div className='pb-6 lg:flex lg:justify-center lg:items-center lg:pr-5 '>
    <div id="arg-section" className='pb-12 pt-12 pl-5 pr-5 bg-white text-center lg:text-center lg:pt-28'>
        <Image src="/img/Flex-Fleet.png" width={600} height={600} alt="ARG Logo, theres a hitch beside the letters arg that is orange and the arg letters are charcoal grey" title="ARG Logo" className='text-left w-[200px] h-auto mx-auto lg:w-[300px] lg:text-center lg:mx-auto'/> 
        <div className='ml-3 lg:max-w-[40vw] lg:pr-11'>
                <h1 className='text-3xl font-bold uppercase mb-3 mt-3 text-[#444444] relative'>{t.flex.h1}</h1>
                <p className='text-xl leading-8'>{t.flex.text}</p>
                <p className='text-xl leading-8 mb-6'>{t.flex.texttwo}</p>
                <div className='hidden w-full lg:flex items-center mt-6 mb-8 justify-start lg:justify-center'>
                    <Image src="/img/icon-location-black.svg" width={600} height={600} alt="An Icon of a location marker that is the color grey" title="Grey Location Marker" className='w-7 h-7 mr-3'/>
                    <p className='lg:text-[16px]'>Saint-Sophie, Quebec</p>
                </div>
        <Link href="tel:1-450-438-3241"><button className='pt-2 pb-2 pr-3 pl-3 bg-transparent text-[#4f4f4f] border-2 border-solid border-[#4f4f4f] rounded text-xl font-semibold' >{t.buttons.contactus}</button></Link>
        </div>
    </div>
    <div>
    <Image src="/img/towing-truck-fft.jpg" width={1000} height={600} alt="An Icon of a location marker that is the color grey" title="Grey Location Marker" className='w-[70vw] mx-auto lg:w-[30vw]'/>
  </div>
  </div>
  )
}

export default Flexfleet