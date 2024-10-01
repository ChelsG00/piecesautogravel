'use client'

import React, { useState, useEffect } from 'react';
import ShiForm from './forms/ShiForm';

const Shipping = ({t, locale}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
  };
  return (

  <section>
  <div id="shippingShortDes" className=" pl-5 pr-5 mt-8 pb-8 ">
    <h2 className='mb-1 text-2xl capitalize text-[#303030]'>{t.job.shipping}</h2>
    <p className='text-xl text-[#181818] mb-2'>{t.job.shitext}</p>
    <a href="#" id="mechanicToForm" onClick={() => setIsOpen(!isOpen)} className='text-xl relative text-[#0b54a2] underline font-semibold'>{t.job.apply}</a>
  </div>
  <div className={` ${isOpen ? "block w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bg-white overflow-y-scroll z-50" : "hidden " }`}>
        <button onClick={closeForm} className="absolute top-0 right-0 p-2 m-2 text-3xl text-[#0b54a2] pr-6 hover:text-gray-900 focus:outline-none">
              X
        </button>
           < ShiForm t={t} locale={locale} />
        </div>
</section> 

  )
}

export default Shipping