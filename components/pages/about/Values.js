import React from 'react'
import Image from 'next/image'

const Values = ({t}) => {
  return (

      <section id="our-values" className='pt-14 pl-5 pr-5 pb-14 bg-[#f4f4f4] lg:text-center lg:py-32'>
        <h2 className='text-3xl capitalize mb-5 lg:mb-7'>{t.values.h1}</h2>
        <div className='lg:flex lg:items-center lg:justify-center'>
        <div className='lg:mr-8 lg:w-[25vw]'> 
        <Image src="/img/icon-honesty.svg" width={100} height={100} alt='Blue icon of two hands shaking in the shape of a heart' className='w-[70px] h-auto mx-auto'/>
        <h3 className='text-2xl mb-1 mt-2'>{t.values.integrity}</h3>
        <p className='text-xl mb-8 leading-9'>{t.values.intregritytext}</p>
        </div>

        <div className='lg:mr-20 lg:ml-20 lg:w-[25vw]'>
        <Image src="/img/icon-service.svg" width={100} height={100} alt='Blue icon when a hand is holding a gear' className='w-[70px] h-auto mx-auto'/>
        <h3 className='text-2xl mb-1 mt-4'>{t.values.service}</h3>
        <p className='text-xl mb-8 leading-9'>{t.values.serviceText}</p>
        </div>

        <div className='lg:mr-8 lg:w-[25vw]'>
        <Image src="/img/icon-dedication.svg" width={100} height={100} alt='Blue icon of a badge encircled with ruffles has a checkmark in the middle' className='w-[70px] h-auto mx-auto' />
        <h3 className='text-2xl mb-1 mt-4'>{t.values.dedicated}</h3>
        <p className='text-xl mb-8 leading-9'>{t.values.dedicatedtext}</p>
        </div>
        </div>
    </section>

  )
}

export default Values