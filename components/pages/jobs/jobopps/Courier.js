'use client'
import React, { useState } from 'react';
import CouForm from './forms/CouForm';

const Courier = ({ t, locale }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div id="deliveryshortDes" className="pl-5 pr-5 mt-8 pb-8 border-b-[1px] border-solid border-[#6f6f6f80]">
        <h2 className='mb-1 text-2xl capitalize text-[#303030]'>{t.job.courier}</h2>
        <p className='text-xl text-[#181818] mb-2'>{t.job.coutext}</p>
        <a href="courier" id="courierToForm" onClick={toggleMenu} className='text-xl relative text-[#0b54a2] underline font-semibold'>{t.job.apply}</a>
      </div>
      <div className={`${isOpen ? "block w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bg-white overflow-y-scroll z-50" : "hidden"}`}>
        <button onClick={closeForm} className="absolute top-0 right-0 p-2 m-2 text-3xl text-[#0b54a2] pr-6 hover:text-gray-900 focus:outline-none">
          X
        </button>
        <CouForm t={t} locale={locale} />
      </div>
    </section>
  );
};

export default Courier;

