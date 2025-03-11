import Videoshorter from '@/components/ui/video/mobile/Videoshorter'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const Vehicleshead = ({t, locale}) => {
 return (
   <section id='' className='mb-[10px] text-left ml-4 mr-4 lg:ml-32 '>
     {/* < Videoshorter /> */}
     <div className='h-[] mt-[150px] justify-center flex flex-col lg:pt-32 lg:pl-32 lg:mt-[80px]'>
     <h1 className="fadeInLeft-css pl-5 pr-5 text-3xl font-semibold text-[#363636] uppercase pb-4">{t.vehicles.h1}</h1>
     <p className="fadeInLeft-css pl-5 pr-7 mb-3 leading-8 text-xl">{t.vehicles.textone}</p>
     <p className="fadeInLeft-css pl-5 pr-7 mb-3 leading-8 text-xl">{t.vehicles.texttwo}</p>
     <div className='ml-4 mb-11'>
     <Link href="https://adieuminoune.com/prix-auto-feraille" target="_blank"><button className='text-white text-xl pl-8 pr-8 pt-3 pb-3 mb-2 mt-4 mr-4 bg-[#0b54a2] rounded lg:w-[20vw]' >{t.buttons.quotetwo}</button></Link>
     <Link href="https://arpac.org/autopourlavie/" target="_blank"><button className='text-white text-xl pl-8 pr-8 pt-3 pb-3 mb-2 mt-4 bg-[#0b54a2] rounded lg:w-[20vw]' >{t.buttons.donatetwo}</button></Link>
     </div>
     <Image src="/img/holding-keys.jpg" width={600} height={600} />
     </div>
   </section>
 )
}
export default Vehicleshead