import React from 'react'
import Image from 'next/image'

const Technician = ({t}) => {
  return (
        <section className='pl-5 pr-5 pb-20 pt-20 text-center lg:pt-28 lg:flex lg:flex-row-reverse lg:text-left lg:justify-end lg:pl-32 lg:items-center lg:pb-32'>
          <div>
          <Image src="/img/mechanic-guy.png" width={600} height={600}  alt="Illustration of a mechanic holding a wrench" title="Mechanic Illustration" className='w-full lg:w-[400px] lg:mx-auto'/>
          </div>
          <div className='lg:text-left'>
          <h1 className='text-3xl pb-3 font-semibold'>{t.Technicians.h1}</h1>
          <p className='text-xl text-left w-[90vw] mx-auto pb-6 lg:text-[16px] lg:leading-9 lg:w-[60vw]'>{t.Technicians.text}</p>
          <button id="technicians-button" className='text-xl pt-2 pb-2 pl-8 pr-8 bg-[#15212d] text-white rounded'>+1-800-383-6373</button>    
          </div>  
        </section>

  )
}

export default Technician



{/* <a href="tel:450-435-8335"> */}