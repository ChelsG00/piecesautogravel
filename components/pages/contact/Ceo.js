import React from 'react'
import Image from 'next/image'

const Ceo = ({t}) => {
  return (
    <div>
    <section className=" bg-white pt-12 pb-[52px] lg:w-full lg:mx-auto lg:flex lg:justify-center">
    <div className="pl-5 pr-5 lg:text-center">
      <Image src="/img/team-img/team-all-three.jpg" width={800} height={800} alt="Picture of a man standing infront of a white and black background" title="Sebastien Team Picture" className='w-full h-auto '/>
    
    <div className='lg:flex lg:pt-5'>
    <div className='lg:pr-10 lg:pl-7'>
      <h3 className='text-2xl mt-2'>Guillaume Gravel</h3>
      <p className='text-xl'>{t.ceo.ceotitlethree}</p>
      <a href="tel:450-438-3241" className='block text-xl mt-1 text-[#0b54a2] underline'>450-438-3241 ext 726</a>
      <a href="mailto:guillaume@pagravel.com" className='block text-xl mt-1 text-[#0b54a2] underline'>Guillaume@pagravel.com</a>
      </div>
      <div className='lg:pr-10'>
      <h3 className='text-2xl mt-2'>Stephane Gravel</h3>
      <p className='text-xl'>{t.ceo.ceotitletwo}</p>
      <a href="tel:450-435-8335" className='block text-xl mt-1 text-[#0b54a2] underline'>450-435-8335 ext 824</a>
      <a href="mailto:stegravel@videotron.ca" className='block text-xl mt-1 text-[#0b54a2] underline'>Stegravel@videotron.ca</a>
      </div>
      <div className='lg:pr-10'>
      <h3 className='text-2xl mt-2'>Sebastien Gravel</h3>
      <p className='text-xl'>{t.ceo.ceotitle}</p>
      <a href="tel:450-438-3241" className='block text-xl mt-1 text-[#0b54a2] underline'>450-438-3241 ext 724</a>
      <a href="mailto:sebastiengravel@videotron.ca" className='block text-xl mt-1 text-[#0b54a2] underline'>Sebastiengravel@videotron.ca</a>
      </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Ceo