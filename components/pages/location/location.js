import React from 'react'
import Image from 'next/image'
import MapSelector from './maps'

const Locationsvg = ({t}) => {
  return (

    <div>
      < MapSelector t={t} />
    </div>
  )
}

export default Locationsvg


    // <div className='lg:grow-0'>
    //     <a id="locationIcon" className='flexItemHeader'>
    //         <img src="/img/icon-location-blue.svg" width={30} height={25} alt="A blue location icon linked with a location button in svg format" title="Location Icon" className='sm:w-[40px]'/>
    //     </a>
    // </div>