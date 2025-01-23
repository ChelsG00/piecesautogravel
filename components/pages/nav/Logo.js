
import React from 'react'
import Image from 'next/image'


const Logo = ({locale}) =>  {

  const getImagePath = (imageName) => {
    const languagePrefix = locale === 'en' ? 'en/' : 'fr/';
    return `/img/${languagePrefix}${imageName}.png`;
  };

  return (
    <div className='col-span-8 lg:grow-[3]"'>
      <a href={`/${locale}/`}>
       <Image src={getImagePath('logo-gravel-full')} width={600} height={600}   alt='' className='w-[40vw] h-auto relative z-110 ml-[-15px] sm:w-[250px]'/>
       </a>
    </div>
  )
}

export default Logo