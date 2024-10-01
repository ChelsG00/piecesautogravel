import React from 'react'
import Image from 'next/image'

const Join = ({t}) => {
  return (
    <div>
    <section className='text-left w-[85vw] mx-auto pl-5 pr-5 pb-10 pt-28 lg:text-center lg:py-32'>
      <h1 className='text-3xl uppercase pb-12 lg:text-black'>{t.join.h1}</h1> 
      <div className='w-full text-center lg:flex lg:items-center lg:justify-center'>   

        <div className="w-[80vw] mx-auto pt-12 pb-20 pl-6 pr-6 mb-8 bg-[#fafafa] shadow-lg lg:bg-white lg:h-[50vh] lg:mr-3">
        <Image src='/img/team-jobs.svg' width={600} height={600} className='w-[50px] mx-auto'/>
        <h3 className='text-2xl pb-2 uppercase text-[#0b54a2] font-semibold'>{t.join.teamh2}</h3>
        <p className='text-xl'>{t.join.teamtext}</p>
        </div>
        
        <div className="careersdivOne joindiv w-[80vw] mx-auto pt-12 pb-20 pl-6 pr-6 mb-8 bg-[#fafafa] shadow-lg lg:bg-white lg:h-[50vh] lg:mr-3">
        <Image src='/img/fastpaced.svg' width={600} height={600}  className='w-[60px] mx-auto'/>
        <h3 className='text-2xl pb-2 uppercase text-[#0b54a2] font-semibold'>{t.join.environmenth2}</h3>
        <p className='text-xl'>{t.join.environmenttext}</p>
        </div>
        
        <div className="careersdivOne joindiv w-[80vw] mx-auto pt-12 pb-20 pl-6 pr-6 mb-8 bg-[#fafafa] shadow-lg lg:bg-white lg:h-[50vh] lg:mr-3">
        <Image src='/img/environment.svg' width={600} height={600}  className='w-[60px] mx-auto' />
        <h3 className='text-2xl pb-2 uppercase text-[#0b54a2] font-semibold'>{t.join.cultureh2}</h3>
        <p className='text-xl'>{t.join.culturetext}</p>
        </div>
        
        <div className="careersdivOne joindiv w-[80vw] mx-auto pt-12 pb-20 pl-6 pr-6 mb-8 bg-[#fafafa] shadow-lg lg:bg-white lg:h-[50vh] lg:mr-3">
        <Image src='/img/benifits.svg' width={600} height={600}  className='w-[60px] mx-auto' />
        <h3 className='text-2xl pb-2 uppercase text-[#0b54a2] font-semibold'>{t.join.socialsh2}</h3>
        <p className='text-xl'>{t.join.socialstext}</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Join