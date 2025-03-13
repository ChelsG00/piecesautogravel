'use client';
import React, { useState } from 'react';
import Image from 'next/image';


function Connections ({ t, locale, slug }) {
   const [pin, setPin] = useState('');
   const [error, setError] = useState('');


   const handleSubmit = (e) => {
       e.preventDefault();
       const storedPin = process.env.NEXT_PUBLIC_LOGIN_PIN;


       if (pin === storedPin) {
           sessionStorage.setItem('authenticated', 'true');
           const currentLocale = locale || 'fr';
           window.location.href = `/${currentLocale}/calculator`;
       } else {
           setError('Incorrect PIN');
       }
   };


   return (
       <div className="relative">
           <div className='w-full h-[15.6vh]'></div>
           <div>
               <Image src="/img/auto-login.png" width={600} height={600}  className='absolute top-[130px] left-0 z-0 lg:hidden' />
           </div>
      
           <div className='h-[68vh] block z-10 relative'>
               <div className='lg:flex lg:flex-row-reverse'>
                   <div className='hidden lg:w-[50vw] bg-[rgba(17,79,146,0.76)] lg:flex lg:justify-end'>
                       <Image src="/img/auto-login.png" width={600} height={600}  className='h-[84.4vh] w-[70%] bg-cover' />
                   </div>


                   <div className='flex flex-col items-center justify-center w-[80vw] mx-auto bg-white pt-44 pb-44 mt-36 rounded-lg'>
                       <h1 className='text-3xl mb-10 font-bold'>{t.login.h1}</h1>
                       <form onSubmit={handleSubmit} className="flex flex-col z-20">
                           <input
                               type="password"
                               value={pin}
                               onChange={(e) => setPin(e.target.value)}
                               placeholder='PIN'
                               className='border-black border-[1px] py-1 px-3 mb-6 text-[20px]'
                           />
                           <button type="submit" className='text-[20px] text-white border-none rounded-md bg-[#282a31] py-2 px-3'>{t.login.button}</button>
                       </form>
                       {error && <p>{error}</p>}
                   </div>
               </div>
           </div>
       </div>
   );
}


export default Connections;




