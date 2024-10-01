import Image from 'next/image'
import React from 'react'

const Contactsvg = () => {
  return (
    <div className='lg:grow-0'>
        <a className='phone-icon flexItemHeader' href="tel:+1-866-666-7638">
            <Image src="/img/icon-phone.svg" width="35" height="35" alt="A blue phone icon linked with a call button in svg format" title="Phone Icon" className='sm:w-[40px]'/>     
        </a>
    </div>
  )
}

export default Contactsvg