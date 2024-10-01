'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Hamburgerbutton from './Hamburgerbutton';
import Navmenu from './NavLinks';
import Logo from './Logo';
import Locationsvg from '../location/location';
import Contactsvg from './Contactsvg';
import Paypal from './paypal';

function NavBar({ t, locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Close the menu on page transition
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full mt-11 lg:border-b-[1px] lg:border-b-[#bebebe60] z-[80]  ${isOpen ? 'bg-white' : ''} ${isScrolled && !isOpen ? 'bg-white' : ''} ${!isScrolled && !isOpen ? 'bg-transparent' : ''}`}>
      <div className={`grid gap-4 pt-1.5 bg-transparent grid-cols-custom items-center sm:pr-4 lg:bg-[rgba(255,255,255,0.53)] lg:flex lg:h-[90px] lg:pr-9 ${isOpen ? "block relative z-50" : ""}`}>
        <div className='lg:grow-[3]'>
          <Logo locale={locale} />
        </div>
        <div className='lg:grow-0 lg:mr-10 lg:hidden'>
          <Locationsvg t={t} />
        </div>
        <div className='lg:grow-0 lg:hidden'>
          <Contactsvg />
        </div>
       
        <button onClick={toggleMenu} className='col-span-1 lg:hidden'>
          <Hamburgerbutton isOpen={isOpen} toggleMenu={toggleMenu} />
        </button>

        <div className={`hidden w-full flex-grow lg:flex lg:flex-row lg:items-center lg:w-auto lg:mr-5 ${isOpen ? "block bg-white absolute top-0 left-0 right-0 h-[110vh] pt-[150px] pb-[100px] z-40 overflow-y-scroll mt-[-50px]" : "hidden"}`}>
        <Navmenu t={t} locale={locale} toggleMenu={toggleMenu} isScrolled={isScrolled} />
        </div>

        <div className='hidden lg:block'>
          < Paypal />
        </div>
      </div>

      <div className={`w-full block flex-grow  lg:hidden ${isOpen ? "block bg-white absolute top-0 left-0 right-0 h-[110vh] pt-[150px] pb-[100px] z-40 overflow-y-scroll mt-[-50px]" : "hidden"}`}>
        <Navmenu t={t} locale={locale} toggleMenu={toggleMenu} isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default NavBar;

// lg:flex lg:flex-row lg:items-center lg:w-auto

// 'use client'
// import React, { useState, useEffect } from 'react';
// import Hamburgerbutton from './Hamburgerbutton';
// import Navmenu from './NavLinks';
// import Logo from './Logo';
// import Locationsvg from '../location/location';
// import Contactsvg from './Contactsvg';

// function NavBar({ t, locale }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       console.log("Scroll event:", window.scrollY);
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`fixed w-full ${isOpen ? 'bg-white' : ''} ${isScrolled && !isOpen ? 'bg-white transition-all duration-300 ease-in-out top-0 left-0' : ''} ${!isScrolled && !isOpen ? 'bg-transparent transition-all duration-300 ease-in-out' : ''}`}>
//       <div className={`grid gap-4 pt-1.5 bg-transparent grid-cols-custom items-center sm:pr-4 lg:flex lg:w-[100vw] lg:pr-12 lg:pl-5 lg:pt-7  ${isOpen ? "block relative z-50" : ""}`}>
//         <div className='lg:grow-[3]'>
//           <Logo />
//         </div>
//         <div className='lg:grow-0 lg:mr-10'>
//           <Locationsvg t={t} />
//         </div>
//         <div className='lg:grow-0'>
//           <Contactsvg />
//         </div>
//         <button onClick={toggleMenu} className='col-span-1 lg:hidden'>
//           <Hamburgerbutton isOpen={isOpen} toggleMenu={toggleMenu} />
//         </button>
//       </div>

//       <div className={`w-full block flex-grow lg:flex lg:flex-row lg:items-center lg:w-auto ${isOpen ? "block bg-white absolute top-0 left-0 right-0 h-[110vh] pt-[150px] pb-[100px] z-40 overflow-y-scroll mt-[-50px]" : "hidden"}`}>
//         <Navmenu t={t} locale={locale} toggleMenu={toggleMenu} isScrolled={isScrolled} />
//       </div>
//     </header>
//   );
// };

// export default NavBar;




// import React, { useState } from 'react';
// import Hamburgerbutton from './Hamburgerbutton'
// import Logo from './Logo'

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//         <Logo/>
//         <button  onClick={() => setIsOpen(!isOpen)} >
//         < Hamburgerbutton />
//         </button>
//         <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
//           <div >
//             <h1>Hi</h1>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default NavBar;



// <div className='flex items-center justify-between flex-wrap p-6 bg-transparent xl:px-10 xl:py-4 iMac:py-6 iMac:px-16'>
// <div className='flex items-center flex-shrink-0 text-white mr-6'>



// lg:flex lg:w-[100vw] lg:pr-12 lg:pl-5 lg:pt-0 lg:bg-white lg:z-50