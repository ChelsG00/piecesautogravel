import React from 'react'
import Image from 'next/image'

const Christian = ({t}) => {
  return (
    <div>

<section className='pl-5 pr-5 pt-12 pb-[52px] bg-[#efefef] text-center'>
            <p className='text-base pb-2'>- {t.front.h2} -</p>
            <h2 className='text-2xl pb-5 font-semibold'>{t.front.h1}</h2>
            <div className="mechanics-image-section" id="mechanics-image-section-one">
                    <Image src="/img/team-img/team-christian.jpg" width={600} height={600}  alt="Picture of a man standing infront of a white and black background" title="Christan Team Picture" className='w-full lg:w-[500px] lg:mx-auto'/>
                    <h3 className='text-2xl pb-1 pt-1'>Christian Hamel</h3>
                    <p className='text-xl pb-2'>{t.front.title}</p>
                    <a href="tel:450-435-8335" className='block text-xl pb-1 text-[#0b54a2] '>450-435-8335 ext 822</a>
                    <a href="mailto:Christian@pagravel.com" className='block text-xl pb-1 text-[#0b54a2]'>Christian@pagravel.com</a>
            </div>
        </section>
    </div>
  )
}

export default Christian