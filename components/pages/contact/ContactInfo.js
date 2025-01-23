import React from 'react'
import Image from 'next/image';

const Contactinfo = ({t}) => {
  return (
  <section className='text-center bg-white pl-5 pr-5 pt- pb-12 mt-[150px] lg:pt-[20px]'>
    <h1 className='text-4xl pb-2 uppercase font-semibold'>{t.contact.h1}</h1>

    <div className='lg:flex lg:justify-center lg:items-start'>
      {/* Phone Contact Section */}
      <div id="phone-contact-section" className='flex justify-center items-center flex-col lg:mr-24'>
        <Image src="/img/icon-phone-call.svg" width={600} height={600} alt="Blue phone icon" title="Phone Icon Blue" className="w-[35px] mt-6 mb-2"/>
        <div>
          <a className="block text-xl text-[#303030] pt-2 pb-2 underline" href="tel:450-438-3241">450-438-3241</a>
          <a className="block text-xl text-[#303030] pt-2 pb-2 underline" href="tel:1-866-666-7638">1-866-666-PNEU</a>
          <a className="block text-xl text-[#303030] pt-2 pb-2 underline" href="tel:450-435-8335">450-435-8335</a>
          <a className="block text-xl text-[#303030] pt-2 pb-2 underline" href="tel:1-800-363-6373">1-800-363-6373</a>
        </div>
      </div> 

      {/* Text Contact Section */}
       <div id="email-contact-section" className='flex justify-center items-center flex-col lg:mr-8'>
        <Image src="/img/icon-text.png" width={600} height={600} alt="Blue mail envelope icon" title="Mail Envelope Icon Blue" className="w-[40px] mt-6 mb-2"/>
        <div>
          <div><h1>Envoyer Nous un Texto</h1></div>
          <a className="block text-xl text-[#303030] underline pt-2 pb-2" href="mailto:info@pneugravel.com">579-990-0486</a>

        </div>
      </div>

      {/* Email Contact Section */}
      <div id="email-contact-section" className='flex justify-center items-center flex-col lg:mr-8'>
        <Image src="/img/icon-mail.svg" width={600} height={600} alt="Blue mail envelope icon" title="Mail Envelope Icon Blue" className="w-[40px] mt-6 mb-2"/>
        <div>
          <a className="block text-xl text-[#303030] underline pt-2 pb-2" href="mailto:info@pneugravel.com">info@pneugravel.com</a>
          <a className="block text-xl text-[#303030] underline pt-2 pb-2" href="mailto:info@pagravel.com">info@pagravel.com</a>
        </div>
      </div>

      
    </div>



    {/* Location Contact Section */}
    <div id="location-contact-section" className='flex justify-center items-center flex-col mb-28 lg:mr-8'>
      <Image src="/img/icon-location-blue.svg" width={600} height={600} alt="Blue location pin icon" title="Location Pin Icon Blue" className="w-[40px] mt-6 mb-2"/>
      <div>
        <a href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7" target="_blank" rel="noopener noreferrer">
          <p className='text-xl underline'>Gravel Auto Parts</p>
          <p className='text-xl underline'>2795 boul. Sainte-Sophie Sainte-Sophie, Québec, J5J 2V3</p>
        </a>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712083.4075500782!2d-75.15420913696288!3d45.79972535174233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9283da40b4f51%3A0xd215c5d170d62ef5!2zR3JhdmVsIFBpw6hjZXMgROKAmWF1dG9zIFVzYWfDqWVzICYgTmV1dmVz!5e0!3m2!1sen!2sca!4v1727047651832!5m2!1sen!2sca" 
          width="600" 
          height="450" 
          style={{ border: '0' , width: '90vw', marginTop: '28px' }}  // This is how you use inline styles in JSX
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
  );
}

export default Contactinfo;





{/* <h1>Contact Us</h1> 
<p>Since 1984</p>
<div id="line"></div>
<p>Shop new and used auto parts, or call our line to make an appointment with one of our trusty mechanic.</p>
<a href="auto-parts.html"><button id="auto-parts-header-button">Auto Parts</button></a>
<a href="contact.html"><button id="mechanic-header-button">Contact Us</button></a>  */}


 {/* <div className="location-maps-google">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.578050881084!2d-73.93684998443128!3d45.79968047910624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9283da40b4f51%3A0xd215c5d170d62ef5!2zR3JhdmVsIFBpw6hjZXMgROKAmWF1dG9zIFVzYWfDqWVzICYgTmV1dmVz!5e0!3m2!1sen!2sca!4v1678115559488!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div id="promptDirectionsContact">
      <div id="background-blurry-contact"></div>
      <h3>Selection</h3>
      <p>Select Navigation App</p>
      <a id="apple" className="buttons-directionContact button-lineContact" href="http://maps.apple.com/?q=45.799678072100605,-73.93454526612395" target="_blank"> Maps</a>
       <a id="google" className="buttons-directionContact button-lineContact" href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7" target="_blank"> Google Maps</a>
       <a id="apple" className="buttons-directionContact button-no-lineContact" href="https://www.waze.com/en/live-map/directions/ca/qc/sainte-sophie/gravel-pieces-dautos-usagees?place=ChIJUU8LpD0oyUwR9S7WcNHFFdI" target="_blank">Waze</a>
       <a id="closeButtonDirectionsContact" className="buttons-directionContact button-closeFooter">Close</a>
    </div> */}