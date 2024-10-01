import React from 'react'
import Link from 'next/link'


const Jobopps = ({t, locale}) => {

  return (
    <section className='text-center pl-5 pr-5 pt-14 pb-14 mb-2 bg-[#21272e]'>
        <h1 className='text-3xl uppercase pb-4 text-[#fefefe]'>{t.position.h1}</h1>
        <p className='text-xl text-white pb-7'>{t.position.text}</p>
        <Link href={`/${locale}/applications`}>
          <button className='text-xl uppercase pl-8 pr-8 pb-3 pt-3 rounded-sm bg-white text-[#15212d]'>
          {t.position.button}
          </button>
          </Link>
    </section>
  )
}

export default Jobopps