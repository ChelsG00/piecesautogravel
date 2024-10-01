import React from 'react'
import Image from 'next/image';

 const Adieuminoune = ({t, locale}) => {
    const getImagePath = (imageName) => {
    const languagePrefix = locale === 'en' ? 'en/' : 'fr/';
    return `/img/${languagePrefix}${imageName}.png`;
  };
  return (

        <div id="byebye" className="cargroups  text-center pt-16 pb-16 pl-5 pr-5 mb-4 rounded-lg sm:px-8 lg:w-full lg:mr-8 lg:text-left lg:pl-3 lg:mb-0 lg:mt-1 lg:pt-2">
              
                      <p className='uppercase text-base'>- {t.adieuminoune.h3} -</p>
                      <h2 className='text-3xl pb-3 font-bold'>{t.adieuminoune.h1two}</h2>
                      <p className='text-xl leading-9 lg:mb-[-50px]'>{t.adieuminoune.text}</p>
                      
                      <div className='flex flex-col items-center justify-center w-full mt-6 mb-10 lg:hidden'>
                        <span className='flex flex-col items-center mb-3 lg:mr-6'>
                          <Image src="/img/icon-estimation.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className=' text-[16px]'>{t.adieuminoune.one}</p>
                        </span>
                        <span className='flex flex-col items-center mb-3 lg:mr-6'>
                          <Image src="/img/icon-towing.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className=' text-xl '>{t.adieuminoune.two}</p>
                        </span>
                        <span className='flex flex-col items-center lg:mr-6'>
                          <Image src="/img/icon-money.svg" width={600} height={600} className="w-20 h-20 mr-4"/>
                          <p className='text-xl '>{t.adieuminoune.three}</p>
                        </span>
                      </div>

                    <div className='hidden lg:block lg:mb-[-50px] lg:ml-[-60px]'>
                      <Image src={getImagePath('adieuminoune-1')} width={600} height={600} alt="Bannière qui lit, soumission en ligne gratuit, remorquage rapide, et paiement instantané" className='w-[70vw]' />
                    </div>
                  
                      <button className='text-white text-xl pl-8 pr-8 pt-3 pb-3 mb-2 mt-4 bg-[#0b54a2] rounded w-full lg:w-[20vw]' ><a>{t.buttons.quote}</a></button>
                     </div>

  )
}

export default Adieuminoune

{/* <a href="vehicules-for-sale.html" target="_blank"> */}



