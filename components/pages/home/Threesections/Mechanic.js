import React from 'react'
import Image from 'next/image'

const Mechanichome = ({t, locale}) => {
  return (
    <div>
        <div id="first-box" className="h-[500px] w-full bg-[#fefefe] pl-5 pr-5 flex items-center sm:h-[350px] sm:items-center sm:px-12 md:h-[500px] md:pl-20 md:w-[650px] md:pt-16 lg:w-[950px] lg:pl-32 lg:h-[400px] lg:pt-[140px]">
            <div >
                 <p className='text-black text-base pt-8 pr-4 pb-2 '>- {t.threesections.mechanich3} -</p>
                 <h2 className='text-4xl font-bold pb-1 sm:text-3xl'>{t.threesections.mechanich1}</h2>
                 <p className='pt-1 pb-8 md:text-[16px] lg:text-[16px] lg:hidden'>{t.threesections.mechanictext}</p>
                 <p className='hidden lg:block lg:pt-1 lg:pb-8 lg:leading-9 lg:text-[16px]'>{t.threesections.mechanictextbig}</p>
                 <a href="tel:+1-450-435-8335">
                 <button className='inline-flex relative z-20 bg-[#15212de6] rounded pl-3 items-center md:text-[16px]'><span className="relative z-20 rounded bg-[#15212d] pl-8 pr-8 pt-3 pb-3 text-white text-xl font-semibold sm:font-normal">{t.buttons.callone}</span></button>
                 </a>
            </div>
        </div>    

        <div className='w-[592px] h-auto z-10 relative sm:w-[120vw] lg:w-[80vw] lg:ml-[400px]'>
          <Image src="/img/building-illustration-transparent-bg.svg" width={600} height={600} alt="An illustration of the gravel auto parts building, contains three garages and is mostly blue" title="Gravel Auto Parts Building" className='lg:w-[80vw]'/>
          </div>
    </div>
  )
}

export default Mechanichome



{/* <a id="first-box-icon"> */}
// id="first-box-text" className="fadeInRight"