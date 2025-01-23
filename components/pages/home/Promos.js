import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Promos = ({t, locale}) => {
  return (
    <div id="releasesSection" className='text-center bg-[#f6f6f6] pt-24 pl-4 pr-4 pb-16 mt-1' >
          <p className='text-base pb-1'>- {t.promos.h3} -</p>
          <h1 className='text-3xl text-[#333333] font-bold'> {t.promos.h1} </h1>
              
            <div id="releasesDonate" >
              <h2 className='text-2xl font-semibold text-[#333333] pb-3 pt-4'>{t.promos.palliah1}</h2>
              <p className='text-xl mb-6 leading-9'>{t.promos.palliatext} {t.buttons.palliasite}</p> 
                <Link href="https://pallia-vie.ca/" target="_blank"><button className='text-xl bg-[#0b54a2] text-white uppercase pt-2 pb-2 pl-8 pr-8 rounded-sm font-semibold'>{t.buttons.pallia}</button> </Link>
              <Image src="/img/_pub_don-pallia-vie.jpg" width={600} height={600} id="donation-pv-img" className='lg:w-[50vw] lg:mt-3'/>
            </div>

            <div id="careerReleases">
              <h2 className='text-2xl font-semibold text-[#333333] pb-3 pt-4'>{t.promos.careersh1}</h2>
              <p className='text-xl mb-6 leading-9'>{t.promos.careerstext}</p>
              <Link href={`/${locale}/${t.links.careerslink}`}><button className='text-xl bg-[#0b54a2] text-white uppercase pt-2 pb-2 pl-8 pr-8 rounded-sm font-semibold'>{t.buttons.careers}</button></Link>
            </div>
            
     

    </div>
  )
}

export default Promos

// className="fadeInLeft"