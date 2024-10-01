import React from 'react';

const Hamburgerbutton = ({ isOpen, toggleMenu }) => {
  return (
    <div className=" z-[100] top-[1] left-[1] p-[2px] bg-transparent border-none scale-[0.85] mt-0 ml-[-16px] sm:scale-95" onClick={toggleMenu}>
      <svg
        className={`ham hamRotate ham4 ${isOpen ? 'active' : ''}`}
        viewBox="0 0 100 100"
        width="80"
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </div>
  );
};

export default Hamburgerbutton;



// import React from 'react'

// const Hamburgerbutton = () => {

//   return (
//     <div className='hamburger flexItemHeader'>
//         <svg className='ham hamRotate ham4' viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
//                     <path
//                       className="line top"
//                       d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
//                     <path
//                       className="line middle"
//                       d="m 70,50 h -40" />
//                     <path
//                       className="line bottom"
//                       d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
//                 </svg>
//     </div>
//   )
// }

// export default Hamburgerbutton



