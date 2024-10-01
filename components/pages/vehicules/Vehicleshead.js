import Videoshorter from '@/components/ui/video/mobile/Videoshorter'
import React from 'react'

const Vehicleshead = ({t}) => {
  return (
    <section id='' className='mb-[-30px] text-left ml-4 mr-4 lg:ml-32 '>
      {/* < Videoshorter /> */}
      <div className='h-[250px] mt-[150px] justify-center flex flex-col lg:pt-32 lg:pl-32 lg:mt-[80px]'>
      <h1 className="fadeInLeft-css pl-5 pr-5 text-3xl font-semibold text-[#363636] uppercase pb-4">{t.vehicles.h1}</h1>
      <p className="fadeInLeft-css pl-5 pr-7 mb-3 leading-8 text-xl">{t.vehicles.textone}</p>
      <p className="fadeInLeft-css pl-5 pr-7 mb-3 leading-8 text-xl">{t.vehicles.texttwo}</p>
      </div>
    </section>
  )
}
export default Vehicleshead