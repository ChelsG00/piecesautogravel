import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Paypal = () => {
  return (
    <div>
         <Link href="https://www.paypal.com/paypalme/GravelAutoParts" target="_blank" id="">
            <div className='px-2 py-4 rounded-lg'>
            < p className='hidden text-[16px]'>Send A Payment</p>
              <Image src="/img/PayPal.png" width={600} height={600} alt="Paypal" className='w-[100px]'/>
            </div>
          </Link>
    </div>
  )
}

export default Paypal