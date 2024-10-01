import React from 'react'

const New = ({t, locale}) => {
  return (
    <div>
        <div id="third-box">
            <div className='bg-[rgba(11,84,162,0.95)] h-[420px] lg:h-[550px]'>
              <div className='pl-5 sm:px-20 lg:pl-[200px] lg:max-w-[82vw]'>
                 <p className='text-white text-base pt-[100px] '>- {t.threesections.autoh3} -</p>
                 <h2 className='text-white text-[28px] font-bold '>{t.threesections.new}</h2>
                 <p className='text-white text-[1.35rem] pt-3 pb-8 pr-8  lg:hidden'>{t.threesections.newtext}</p>
                 <p className='hidden lg:block lg:text-white lg:text-[1.35rem] lg:pt-3 lg:pb-8 lg:pr-8 lg:leading-9'>{t.threesections.newtextbig}</p>
           
               <button id="third-box-button" className='inline-flex relative z-20 bg-[#fefefee6] rounded pl-3 items-center text-[rgb(11,84,162)]'><span className="relative z-20 rounded bg-white pl-8 pr-8 pt-3 pb-3  text-xl font-bold sm:font-normal">{t.buttons.shopnew}</span></button>

              </div>
            </div>
            </div>
    </div>
  )
}

export default New

{/* <a href="tel:+1-866-666-7638" id="third-box-icon"> */}

// className="box fadeInLeft"