import React from 'react'
import Image from 'next/image'

export const Socials = ({t}) => {
  return (
    <div id="social-section" className="pt-16 pb-12 pl-5 pr-5 bg-white w-full text-center">
        <h1 className='text-3xl mb-3 uppercase relative font-semibold'>{t.socials.h1}</h1>
                  <p className='pr-2 pl-2 text-xl leading-9'>{t.socials.text}</p>
        <div className='flex justify-center items-center mt-6'>
                <a href="https://www.facebook.com/gravelpiecesdautos/" target="_blank">
                    <div id="facebook-back" className="icon-social-back">
                    <Image src="/img/icon-facebook.svg" width={600} height={600} id="facebook-icon" className="w-10 h-10 mr-4" alt="black facebook logo" title="Black Facebook Logo" />
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=fDtgyyvJx_w" target="_blank">
                    <div id="youtube-back" className="icon-social-back">
                    <Image src="/img/icon-youtube.svg" width={600} height={600} id="facebook-icon" className="w-12 h-12 ml-4" alt="black youtube logo" title="Black youtube logo" />
                    </div>
                </a>  
        </div> 
    </div>
  )
}

export default Socials