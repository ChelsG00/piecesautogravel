import React from 'react'

const Svgautopart = ({ isScrolled }) => {
  return (
    <span className=" w-[25px] h-[25px] text-center fill-[#8b8b8b] md:fill-[#333333] lg:w-[25px] lg:h-[25px] lg:flex">
        <svg viewBox="0 0 216 216">
             <path fill={isScrolled ? "lg:#000000" : "lg:#FFFFFF"} d="M115.1,31.3c0.5,11,0.9,20.4,1.4,31.1c0.4,0.1,1.3,0.1,1.7,0.2c24.4,3.9,43,25,43,50.3
                                        c0,28.1-23,50.9-51.3,50.9c-25.8,0-47.1-19-50.7-43.6c-10.6-0.8-21-1.7-31.2-2.1c3,45.2,39,76.7,81.9,76.7
                                        c45.4,0,82.3-36.7,82.3-81.9C192.3,70,160.3,33.3,115.1,31.3z"/>
              <path fill={isScrolled ? "lg:#000000" : "lg:#FFFFFF"} d="M110,67.1c-25.1,0-45.5,20.3-45.5,45.5S84.9,158,110,158s45.5-20.3,45.5-45.5S135.1,67.1,110,67.1z
                                        M81.2,125.7c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1S84.6,125.7,81.2,125.7z M89.1,86.6c0-3.4,2.7-6.1,6.1-6.1
                                        s6.1,2.7,6.1,6.1s-2.7,6.1-6.1,6.1S89.1,89.9,89.1,86.6z M105.3,147.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1
                                        S108.7,147.9,105.3,147.9z M110.1,126.6c-8,0-14.4-6.5-14.4-14.4c0-8,6.5-14.4,14.4-14.4s14.4,6.5,14.4,14.4
                                        C124.5,120.2,118,126.6,110.1,126.6z M124.5,91.5c0-3.4,2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1s-2.7,6.1-6.1,6.1S124.5,94.9,124.5,91.5z
                                        M137.6,129.1c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1s6.1,2.7,6.1,6.1S141,129.1,137.6,129.1z"/>
               <path fill={isScrolled ? "lg:#000000" : "lg:#FFFFFF"} d="M108.1,60.9c-0.9-14.6-1.8-29.2-2.3-43.2c-48.4,2.6-87.5,41-89.6,89.5c13.9,1.1,27.7,1.9,41.7,2.6
                                        C59.5,84.2,77.5,61.8,108.1,60.9z"/>
        </svg>
    </span>
  )
}

export default Svgautopart