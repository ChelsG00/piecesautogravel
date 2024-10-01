import React from 'react'
import Image from 'next/image'

const ContactFooter = ({t}) => {
  return (
    <div className='border-b-[#fefefe4d] border-b-[1px] py-5 '>
    <h3 className='lg:text-2xl'>{t.links.contact}</h3>
    
    <div className='lg:flex lg:justify-center '>
    
  <div className='flex items-center pl-14 mb-8 pt-3 w-[100vw] sm:justify-center sm:pl-0 lg:flex-col lg:items-end lg:mr-3'>
    <Image src="/img/icon-location-white.svg" width={600} height={600} alt="A white location icon linked with a location button in svg format" title="Location Icon Footer" className='w-[30px] h-[30px] mr-20'/>
    <a className='text-xl leading-9 w-[170px] text-[#fafafad9] underline sm:w-[300px]'>Boulevard Ste Sophie, Sainte-Sophie, QC J5J 2V3</a>
  </div>  
    {/* <div id="promptDirectionsFooter">
      <h3>Selection</h3>
      <p>Select Navigation App</p>
      <a id="apple" className="buttons-directionFooter button-lineFooter" href="http://maps.apple.com/?q=45.799678072100605,-73.93454526612395" target="_blank"> Maps</a>
       <a id="google" className="buttons-directionFooter button-lineFooter" href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7" target="_blank"> Google Maps</a>
       <a id="apple" className="buttons-directionFooter button-no-lineFooter" href="https://www.waze.com/en/live-map/directions/ca/qc/sainte-sophie/gravel-pieces-dautos-usagees?place=ChIJUU8LpD0oyUwR9S7WcNHFFdI" target="_blank">Waze</a>
       <a id="closeButtonDirectionsFooter" className="buttons-directionFooter button-closeFooter">Close</a>
    </div> */}

    <div className='flex items-center pl-14 mb-8 pt-3 w-[100vw] sm:justify-center sm:pl-0 sm:ml-[15px] lg:flex-col lg:items-start'>
        <Image src="/img/icon-phone-call-white.svg" width={600} height={600} alt="A white phone icon" title="Phone Icon Footer" className='w-[30px] h-[30px] mr-20'/>
        <div id="call-now">
          <ul className='sm:w-[265px] lg:flex lg:flex-col'>
            <li>
              <a href="tel:450-438-3241" className='text-[#fafafad9] underline text-xl leading-9 w-[170px] '>450-438-3241</a>
            </li>
           
            <li>
             <a href="tel:+1-866-666-PNEU" className='text-[#fafafad9] underline text-xl leading-9 w-[170px] '>1-866-666-PNEU</a>
            </li>
       
            <li>
             <a href="tel:450-435-8335" className='text-[#fafafad9] underline text-xl leading-9 w-[170px] '>450-435-8335</a>
            </li>
           
            <li>
             <a href="tel:+1-800-383-6373" className='text-[#fafafad9] underline text-xl leading-9 w-[170px]'>1-800-383-6373</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>

  )
}

export default ContactFooter