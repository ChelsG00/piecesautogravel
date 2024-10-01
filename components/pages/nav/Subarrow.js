import React from 'react';

const Subarrow = ({ isOpen, toggleMenu, isScrolled }) => {
  return (
    <div onClick={toggleMenu}>
      <div id="arrowHeadOne">
        <i
          className={`border-solid ${isScrolled ? 'border-black' : 'border-[#6f6f6f]'} border-l-[3px] border-b-[3px] inline-block p-[3px] mb-[3px] ml-[128px] rotate-[315deg] lg:ml-1 ${isScrolled ? 'lg:border-black' : 'lg:border-black'} ${isOpen ? 'fa-downOne rotate-6' : ''}`}
        ></i>
      </div>
    </div>
  );
};

export default Subarrow;