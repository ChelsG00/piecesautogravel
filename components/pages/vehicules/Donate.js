
import React from 'react'
import Image from 'next/image';

const Donate = ({t, locale}) =>  {
  
    const getImagePath = (imageName) => {
    const languagePrefix = locale === 'en' ? 'en/' : 'fr/';
    return `/img/${languagePrefix}${imageName}.png`;
  };
  return (
        <div id="donate"  className="cargroups text-center pt-16 pb-16 pl-5 pr-5 mb-4 rounded-lg sm:px-8 lg:mb-0 lg:w-[100%] lg:ml-[210px] lg:mr-32 lg:text-left lg:px-0 lg:pt-2">
                      <p className='uppercase text-base'>- {t.donate.h3} -</p>
                      <h2 className='text-3xl pb-3 pt-3 font-bold lg:pt-0'>{t.donate.h1two}</h2>
                      <p className='text-xl leading-9 lg:mb-[-50px]'>{t.donate.text}</p>

                      <div id="icon-description" className='flex flex-col items-center justify-center w-full mt-6 mb-10 lg:hidden'>
                        <span className='flex flex-col items-center mb-3' >
                          <Image src="/img/icon-organization.svg" width={600} height={600}  className="w-20 h-20 mr-4"/>
                          <p className=' text-[16px] '>{t.donate.one}</p>
                        </span>
                        <span className='flex flex-col items-center mb-3' >
                          <Image src="/img/icon-donate.svg" width={600} height={600}  className="w-20 h-20 mr-4"/>
                          <p className='text-[16px] '>{t.donate.two}</p>
                        </span>
                        <span className='flex flex-col items-center'>
                          <Image src="/img/icon-eco.svg" width={600} height={600}  className="w-20 h-20 mr-4"/>
                          <p className='text-[16px] '>{t.donate.three}</p>
                        </span>
                      </div>

                      <div className='hidden lg:block lg:ml-[-55px]'>
                      <Image src={getImagePath('donate-1')} width={600} height={600}  alt="Bannière qui lit, soumission en ligne gratuit, remorquage rapide, et paiement instantané" className='w-[70vw] lg:mb-[-50px]' />
                    </div>
                      <button className='text-white text-xl pl-8 pr-8 pt-3 pb-3 mb-2 mt-4 bg-[#0b54a2] rounded w-full lg:w-[20vw]' ><a>{t.buttons.donate} <span></span></a></button>
                     </div>
  )
}

export default Donate



// import React from 'react'



// const Donate = ({t}) => {

//   return (
//       <div id='donate-wrapper' className='fadeInUp-css text-center bg-[#fcfcfc] mb-8 pt-[52px] pb-[52px] px-3 rounded-xl mx-3 lg:flex lg:pl-32 lg:pr-32 lg:text-left'>
//       <div>
//       <img src="/img/donation-back.png" width={400} height={0} alt="An illustration of a hand holding a red heart on a blue and black background." title="Donation Hand" className='w-[80%] pb-5 mx-auto'/>
//       </div>
//       <div id="donate-text">
//       <h2 className='text-2xl pb-2 uppercase font-semibold'>{t.donate.h1}</h2>
//       <p className='mb-2 pl-2 pr-8 text-xl leading-9'>{t.donate.text}</p>
      
//       <div id="icon-description" className='flex flex-col items-center justify-center w-full mt-6 mb-10 lg:flex-row '>
//                         <span className='flex flex-col items-center mb-2' >
//                           <img src="/img/icon-organization.svg" width="50px" height="50px" className="w-20 h-20 mr-4"/>
//                           <p className='text-xl'>{t.donate.one}</p>
//                         </span>
//                         <span className='flex flex-col items-center mb-2' >
//                           <img src="/img/icon-donate.svg" width="50px" height="50px" className="w-20 h-20 mr-4"/>
//                           <p className='text-xl'>{t.donate.two}</p>
//                         </span>
//                         <span className='flex flex-col items-center'>
//                           <img src="/img/icon-eco.svg" width="50px" height="50px" className="w-20 h-20 mr-4"/>
//                           <p className='text-xl'>{t.donate.three}</p>
//                         </span>
//                       </div>

//       <a href="#"><button id="button-donate-car" className='text-xl text-white bg-[#0b54a2] pt-3 pb-3 pl-[48px] pr-[48px] rounded-md mt-3'>autopourlavie.com</button></a>
//       </div>

//   </div>

//   )
// }

// export default Donate