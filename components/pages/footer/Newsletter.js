import React from 'react'

const Newsletter = ({t}) => {
  return (
    <div>
        <form className='flex flex-col items-center pt-10 pb-10 text-center border-b-[#fefefe4d] border-b-[1px]'>
        <label htmlFor="email" className='uppercase text-[#bfbfbf] text-2xl pb-2'>{t.footer.newsletterh1}:</label>
        <p className='text-xl leading-9 mb-4 text-[#fefefe]'>{t.footer.newslettertext}</p>
        <div id="form-group">
        <input type="email" className='bg-[#efefef] rounded-r-sm px-3 py-4 text-xl w-[65vw]' placeholder="example@email.com" required/>
        <button type="submit" className='text-xl bg-[#0b54a2] text-[#f0f0f0] rounded-l-sm w-[90px] px-3 py-4'>{t.buttons.newsletter}</button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter