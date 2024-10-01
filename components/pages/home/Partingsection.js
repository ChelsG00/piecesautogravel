import React from 'react'
import Adieuminoune from './Partingsections/Adieuminoune'
import Donate from './Partingsections/Donate'

export const Partingsection = ({t, locale}) => {
  return (
    <div className="w-full h-auto bg-[#fbfbfb] pt-24 pb-10 pl-6 pr-6 mb-2 text-left relative sm:px-12 lg:pt-28 lg:mx-auto lg:pl-[150px]">
    <div id="scrap-car-text" className='lg:max-w-[100vw] lg:mx-auto lg:pl-[50px] lg:pr-[250px]'>
          <p className='text-left uppercase block text-base pb-2'>- {t.oldcar.h3} -</p>
          <h1 className='clear-both text-4xl pb-8 capitalize font-bold'>{t.oldcar.h1}</h1>
          <p className='pb-4 text-left leading-9 lg:text-[16px] lg:pb-2'>{t.oldcar.textone}</p>
          <p className='pb-8 leading-9 lg:text-[16px]'>{t.oldcar.texttwo}</p>
    </div>
    <div className='lg:mx-auto lg:justify-between lg:w-[80vw]'>
        < Adieuminoune t={t} locale={locale} />
        < Donate t={t} locale={locale}/>
    </div>
    </div>
  )
}

export default Partingsection



        {/* <div className="all-towtruck-svg" id="towContainer">
           <img src="/img/towtruck-files-2/towtruck-anim-2-21.svg" width="300px" height="" className="svg" id="towtruck-img-1"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-20.svg" width="300px" height="" className="svgOther" id="towtruck-img-2"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-19.svg" width="300px" height="" className="svgOther" id="towtruck-img-3"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-18.svg" width="300px" height="" className="svgOther" id="towtruck-img-4"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-17.svg" width="300px" height="" className="svgOther" id="towtruck-img-5"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-16.svg" width="300px" height="" className="svgOther" id="towtruck-img-6"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-15.svg" width="300px" height="" className="svgOther" id="towtruck-img-7"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-14.svg" width="300px" height="" className="svgOther" id="towtruck-img-8"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-13.svg" width="300px" height="" className="svgOther" id="towtruck-img-9"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-12.svg" width="300px" height="" className="svgOther" id="towtruck-img-10"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-11.svg" width="300px" height="" className="svgOther" id="towtruck-img-11"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-10.svg" width="300px" height="" className="svgOther" id="towtruck-img-12"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-09.svg" width="300px" height="" className="svgOther" id="towtruck-img-13"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-08.svg" width="300px" height="" className="svgOther" id="towtruck-img-14"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-07.svg" width="300px" height="" className="svgOther" id="towtruck-img-15"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-06.svg" width="300px" height="" className="svgOther" id="towtruck-img-16"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-05.svg" width="300px" height="" className="svgOther" id="towtruck-img-17"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-04.svg" width="300px" height="" className="svgOther" id="towtruck-img-18"/>
           <img src="/img/towtruck-files-2/towtruck-anim-2-03.svg" width="300px" height="" className="svgOther" id="towtruck-img-19"/>
           <div id="circle-bottom"></div>
          </div> */}