import React from 'react'
import Image from 'next/image';

const Donate = ({t, locale}) =>  {
  
    const getImagePath = (imageName) => {
    const languagePrefix = locale === 'en' ? 'en/' : 'fr/';
    return `/img/${languagePrefix}${imageName}.png`;
  };
  return (
        <div id="donate"  className="cargroups text-center pt-16 pb-16 pl-5 pr-5 mb-4 rounded-lg sm:px-8 lg:mb-0 lg:w-[100%] lg:ml-0 lg:text-left lg:px-0 lg:pt-1">
                      <p className='uppercase text-base'>- {t.donate.h3} -</p>
                      <h2 className='text-3xl pb-3 pt-3 font-bold lg:pt-0'>{t.donate.h1two}</h2>
                      <p className='text-xl leading-9 lg:mb-[-50px]'>{t.donate.text}</p>

                      <div id="icon-description" className='flex flex-col items-center justify-center w-full mt-6 mb-10 lg:hidden'>
                        <span className='flex flex-col items-center mb-3' >
                          <Image src="/img/icon-organization.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className=' text-[16px] '>{t.donate.one}</p>
                        </span>
                        <span className='flex flex-col items-center mb-3' >
                          <Image src="/img/icon-donate.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className='text-[16px] '>{t.donate.two}</p>
                        </span>
                        <span className='flex flex-col items-center'>
                          <Image src="/img/icon-eco.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className='text-[16px] '>{t.donate.three}</p>
                        </span>
                      </div>

                      <div className='hidden lg:block lg:ml-[-55px]'>
                      <Image src={getImagePath('donate-1')} width={600} height={600} alt="Bannière qui lit, soumission en ligne gratuit, remorquage rapide, et paiement instantané" className='w-[70vw] lg:mb-[-50px]' />
                    </div>
                      <button className='text-white text-xl pl-8 pr-8 pt-3 pb-3 mb-2 mt-4 bg-[#0b54a2] rounded w-full lg:w-[20vw]' ><a>{t.buttons.donate} <span></span></a></button>
                     </div>
  )
}

export default Donate

{/* <a href="vehicules-for-sale.html" target="_blank"> */}