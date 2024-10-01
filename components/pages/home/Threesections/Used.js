import React from 'react'

const Used = ({t, locale}) => {
  return (
    <div>
            <div id="second-box">
            <div className='bg-[#d02020e8] h-[60vh] sm:bg-[rgba(227,45,45,0.89)] lg:h-[550px]'>
              <div className='pl-5 h-[60vh] flex flex-col justify-center sm:px-20 lg:pl-[200px] lg:max-w-[82vw]'>
                 <p className='text-white text-base mb-[12px]'>- {t.threesections.autoh3} -</p>
                 <h2 className='text-white text-[26px] font-bold '>{t.threesections.partsh1}</h2>
                 <p className='text-white text-[1.35rem] pt-3 pb-8 pr-8 lg:hidden'>{t.threesections.usedtext}</p>
                 <p className='hidden lg:block lg:text-white lg:text-[1.35rem] lg:pt-3 lg:pb-8 lg:pr-8 lg:leading-9'>{t.threesections.usedtextbig}</p>
                <div>
                    <button className='inline-flex relative z-20 bg-[#fefefee6] rounded pl-3 items-center text-[#ce2227]'><span className="relative z-20 rounded bg-white pl-8 pr-8 pt-3 pb-3  text-xl font-bold sm:font-normal">{t.buttons.shopused}</span></button>
                </div>
              </div>
              </div>
            </div>
    </div>
  )
}

export default Used

// <a href="https://gravel.ecopieces.ca/?lang=en" target="_blank" id="second-box-icon">

// bg-[rgba(237,45,45,0.95)]
// className="box fadeInLeft"