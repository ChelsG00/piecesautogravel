import React from 'react'

const Newbrands = ({t, locale}) => {
  return (
    <section id="brands-offered" className=' rounded-t-3xl  text-white pt-11 pl-5 pr-5 pb-7 text-left lg:pl-32'>
    <h1 className='text-black text-3xl pb-4 '>{t.newparts.brandsh1}</h1>
    <p className='text-black text-xl leading-8 pb-7 lg:text-[16px]'>{t.newparts.brandstext}</p>
    <div className='lg:flex'>
    <img src="/img/all-logos-01.jpg" width="400px" height="" alt="Image of 32 auto parts company logos side by side" title="Auto Part Logos One" className='w-full'/>
    <img src="/img/all-logos-02.jpg" width="400px" height="" alt="Image of 28 auto parts company logos side by side" title="Auto Part Logos Two" className='w-full'/>
    </div>
</section>
  )
}

export default Newbrands

// bg-[rgb(11,84,162)]