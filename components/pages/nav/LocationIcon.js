import React from 'react'
import Image from 'next/image'

const LocationIcon = () => {
  return (
    <div className='col-span-1 sm:w-[40px]'>
        <a href='/'><Image src='/img/icon-location-blue.svg' width={600} height={600}  className='sm:w-[40px]'/></a>
    </div>
  )
}

export default LocationIcon