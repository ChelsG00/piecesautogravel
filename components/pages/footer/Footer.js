import React from 'react'
import Logo from '../nav/Logo'
import ContactFooter from './ContactFooter'
import NavFooter from './NavFooter'
import Newsletter from './Newsletter'

const Footer = ({t, locale}) => {
  return (
   <footer className='pt-10 pb-10 px-5 bg-[#303030] text-[#fafafad9]'>
        <div id="footerLogoSection" className='text-center border-b-[#fefefe4d] border-b-[1px] pb-7 mb-6 flex flex-col justify-center items-center'>
            < Logo />
            <p className='lg:text-2xl'>"{t.footer.slogan}"</p>
        </div>
        <div>
            < ContactFooter t={t}/>
            < NavFooter t={t} locale={locale} />
        </div>
            < Newsletter t={t} />

        <div className='text-center pt-3'>
          <p className='text-[#b5b5b5] text-base'>{t.footer.copyright}</p>
        </div>
    </footer>
  )
}

export default Footer