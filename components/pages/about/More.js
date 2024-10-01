import React from 'react'
import Image from 'next/image'

const More = ({t, locale}) => {
  return (

  <section className='pt-14 pb-18 pl-5 pr-5 lg:flex lg:justify-center lg:items-center lg:py-28'>
    <div className='lg:ml-20 lg:w-[50vw] lg:mr-6'>
        <h2 className='mb-2 text-3xl'>{t.more.h1}</h2>
        <h3 className='text-2xl uppercase mb-2 mt-4'>{t.more.profil}</h3>
        <p className='text-xl mb-8 leading-9'>{t.more.profiltext}</p>

        <h3 className='text-2xl uppercase mb-2 mt-4'>{t.more.commitment}</h3>
        <p className='text-xl mb-8 leading-9'>{t.more.commitmenttext}</p>
    </div>
    <div>
        <Image src="/img/team-img/customer-service-rep.jpg" width={600} height={600} alt="A picture of a customer service representative look at his computer" className='lg:w-[400px]'/>
    </div>
    </section>

  )
}

export default More