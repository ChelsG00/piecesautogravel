'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Subarrow from './Subarrow';
import { usePathname } from "next/navigation";
import Svghome from './svgs/Home';
import Svgautopart from './svgs/Autopart';
import Svgvehicles from './svgs/Vehicles';
import Svgmechanic from './svgs/Mechanic';
import Svgaboutus from './svgs/Aboutus';
import Svgcontact from './svgs/Contact';
import Svglogin from './svgs/Login';
import Image from 'next/image';

function Navmenu({ t, locale, toggleMenu, isScrolled }) {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname.startsWith(href) ? "text-active" : "";
  };

  const handleDropdownToggle = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close dropdown if it's already open
    } else {
      setOpenDropdown(dropdown); // Open the selected dropdown
    }
  };

  const handleLinkClick = () => {
    toggleMenu(); // Close the main menu
    setOpenDropdown(null); // Close any open dropdown
  };

  

  return (
    <nav>
      <ul className="menu lg:flex lg:items-center ">
        {/* HOME LINK */}
        <li>
          <Link href={`/${locale}/`} className={`menuItem menulink text-[#333333] lg:pl-0`} onClick={handleLinkClick}>
            <div className={`menudiv md:text-[20px] md:text-[#373737] lg:text-[14px] ${isScrolled ? "lg:text-black lg:fill-black" : "lg:text-black"}`}>
              <Svghome isScrolled={isScrolled}/>
              {t.links.home}
            </div>
          </Link>
        </li>

        {/* AUTO PART DROP DOWN */}
        <li className={` text-[#333333] ${openDropdown === 'autoparts' ? "lg:bg-white" : "lg:bg-transparent" }`}>
          <button className="w-full flex items-center gap-x-8 no-underline text-[#333333] uppercase border-b-[1px] border-solid border-[#6f6f6f33] pb-8 pt-9 pl-9 lg:gap-x-[10px] lg:pl-5" 
            onClick={() => handleDropdownToggle('autoparts')}>
            <Svgautopart isScrolled={isScrolled} />
            <p className={`text-[16px] pl-2 md:text-[20px] lg:text-[14px] ${isScrolled ? "lg:text-black" : "lg:text-black"}`}>{t.links.autoparts}</p>
            <Subarrow isScrolled={isScrolled} />
          </button>

          {/* AUTO PART Links */}
          <ul className="dropdownSub h-full " id="listAuto">
            <div id="dropdownLine" className={`w-full block bg-grey flex-grow ${openDropdown === 'autoparts' ? "block lg:absolute lg:w-[300px]" : "hidden"}`}>
           
            <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none mt-0 w-full pt-6 pb-7 md:text-[20px] lg:text-black lg:text-[14px] ${isScrolled ? "lg:bg-white lg:text-black" : "lg:bg-white lg:text-black"}`}>
            <Link href={`https://gravel.ecopieces.ca/`} target="_blank" className={`dropdown-item md:text-[20px] ${isActive(`/${locale}/${t.links.usedlink}`)} ${isScrolled ? "lg:text-[#333333]" : "lg:text-black"}`} onClick={handleLinkClick}>
            {t.links.used}
            </Link>
            </li>

            <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none pt-7 pb-7 md:text-[20px] lg:text-black lg:text-[14px] lg:bg-white ${isScrolled ? " lg:text-black" : "lg:bg-white lg:text-black"}`}>
            <Link href={`/${locale}/${t.links.newlink}`} className={`dropdown-item md:text-[20px]  ${isActive(`/${locale}/${t.links.newlink}`)} ${isScrolled ? "lg:text-[#333333]" : "lg:text-black"}`} onClick={handleLinkClick}>{t.links.new}</Link>
            </li>

            </div>
          </ul>
        </li>

        {/* VEHICLES LINK */}
        <li>
          <Link href={`/${locale}/${t.links.vehicleslink}`} className={`menuItem menulink text-[#333333] ${isActive(`/${locale}/${t.links.vehicleslink}`)}`} onClick={handleLinkClick}>
            <div className={`menudiv md:text-[20px] lg:text-[14px] ${isScrolled ? "lg:text-black" : "lg:text-black"}`}>
              <Svgvehicles isScrolled={isScrolled} />
              {t.links.vehicles}
            </div>
          </Link>
        </li>

        {/* MECHANIC LINK */}
        <li>
          <Link href={`/${locale}/${t.links.mechaniclink}`} className={`menuItem menulink ${isActive(`/${locale}/${t.links.mechaniclink}`)}`} onClick={handleLinkClick}>
            <div className={`menudiv md:text-[20px] lg:text-[14px] ${isScrolled ? "lg:text-black" : "lg:text-black"}`}>
              <Svgmechanic isScrolled={isScrolled} />
              {t.links.mechanic}
            </div>
          </Link>
        </li>

        {/* ABOUT US DROP DOWN */}
        <li className={` ${openDropdown === 'aboutus' ? "lg:bg-white" : "lg:bg-transparent" }`}>
          <button className="w-full flex items-center gap-x-8 no-underline text-[#333333] uppercase border-b-[1px] border-solid border-[#6f6f6f33] pb-8 pt-9 pl-9 lg:pt-6 lg:pb-8 lg:gap-x-[10px]" 
            onClick={() => handleDropdownToggle('aboutus')} >
            <Svgaboutus isScrolled={isScrolled} />
            <p className={`text-[16px] pl-2 md:text-[20px] lg:text-[14px] ${isScrolled ? "lg:text-black" : "lg:text-black"}`}>{t.links.about}</p>
            <Subarrow isScrolled={isScrolled} />
          </button>

          {/* About us Links */}
          <ul className={`subList dropdownSub`} id="listAuto">
            <div id="dropdownLine" className={`w-full block flex-grow ${openDropdown === 'aboutus' ? "block lg:absolute lg:w-[300px]" : "hidden"}`}>

              <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none mt-0 w-full pt-6 pb-7 lg:text-black lg:text-xl ${isScrolled ? "lg:bg-white lg:text-black" : "lg:bg-white lg:text-black"}`}>
                <Link href={`/${locale}/${t.links.aboutlink}`} className={`md:text-[20px]  ${isActive(`/${locale}/${t.links.aboutlink}`)} ${isScrolled ? "lg:text-[#333333]" : "lg:text-black"}`} onClick={handleLinkClick}>{t.links.aboutus}</Link>
              </li>

              <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none pt-7 pb-7 lg:text-white ${isScrolled ? "lg:bg-white lg:text-black" : "lg:bg-white lg:text-black"}`}>
                <Link href={`/${locale}/${t.links.careerslink}`} className={`dropdown-item md:text-[20px]  ${isActive(`/${locale}/${t.links.careerslink}`)} ${isScrolled ? "lg:text-[#333333]" : "lg:text-black"}`} onClick={handleLinkClick}>{t.links.careers}</Link>
              </li>
            </div>
          </ul>
        </li>

        {/* CONTACT US LINK */}
        <li>
          <Link href={`/${locale}/${t.links.contactlink}`} className={`menuItem menulink ${isActive(`/${locale}/${t.links.contactlink}`)}`} onClick={handleLinkClick}>
            <div className={`menudiv md:text-[20px] lg:text-[14px] ${isScrolled ? "lg:text-black" : "lg:text-black"}`}>
              <Svgcontact isScrolled={isScrolled} />
              {t.links.contact}
            </div>
          </Link>
        </li>

        {/* LOG IN LINK */}
        <li className='lg:hidden'>
          <Link href={`/${locale}/${t.links.loginlink}`} className={`menuItem menulink ${isActive(`/${locale}/${t.links.loginlink}`)}`} id="loginLink" onClick={handleLinkClick}>
            <div className='menudiv md:text-[20px] lg:text-[14px] lg:text-center'>
              <Svglogin isScrolled={isScrolled} />
              {t.links.login}
            </div>
          </Link>
        </li>

        {/* PAYPAL LINK */}
       
        <li className='lg:hidden'>
          <Link href="https://www.paypal.com/paypalme/GravelAutoParts" target="_blank" id="paypal-link">
            <div id="paypal-div">
              <Image src="/img/PayPal.png" width={600} height={600}  id="paypal-img" alt="Paypal" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;

// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Subarrow from './Subarrow';
// import { usePathname } from "next/navigation";
// import Svghome from './svgs/Home';
// import Svgautopart from './svgs/Autopart';
// import Svgvehicles from './svgs/Vehicles';
// import Svgmechanic from './svgs/Mechanic';
// import Svgaboutus from './svgs/Aboutus';
// import Svgcontact from './svgs/Contact';
// import Svglogin from './svgs/Login';

// function Navmenu({ t, locale, toggleMenu, isScrolled }) {
//   const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
//   const pathname = usePathname();

//   const isActive = (href) => {
//     return pathname.startsWith(href) ? "text-[#d04444]" : "";
//   };

//   const handleDropdownToggle = (dropdown) => {
//     if (openDropdown === dropdown) {
//       setOpenDropdown(null); // Close dropdown if it's already open
//     } else {
//       setOpenDropdown(dropdown); // Open the selected dropdown
//     }
//   };

//   return (
//     <nav>
//       <ul className="menu lg:flex lg:pl-10 lg:items-baseline">
//         {/* HOME LINK */}
//         <li>
//           <Link href={`/${locale}/`} className={`menuItem menulink text-[#333333] lg:pl-0 ${isActive(`/${locale}/`)}`} onClick={toggleMenu}>
//             <div className={`menudiv lg:text-[16px] ${isScrolled ? "lg:text-black lg:fill-black" : "lg:text-white"}`}>
//               <Svghome isScrolled={isScrolled}/>
//               {t.links.home}
//             </div>
//           </Link>
//         </li>

//         {/* AUTO PART DROP DOWN */}
//         <li className={` text-[#333333] ${openDropdown === 'autoparts' ? "lg:bg-[rgba(242,242,242,0.29)]" : "lg:bg-transparent" }`}>
//           <button className="w-full flex items-center gap-x-8 no-underline text-[#333333] uppercase border-b-[1px] border-solid border-[#6f6f6f33] pb-8 pt-9 pl-9 lg:gap-x-[10px]" 
//             onClick={() => handleDropdownToggle('autoparts')}>
//             <Svgautopart isScrolled={isScrolled} />
//             <p className={`text-[16px] pl-2 lg:text-[16px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}>{t.links.autoparts}</p>
//             <Subarrow isScrolled={isScrolled} />
//           </button>

//           {/* AUTO PART Links */}
//           <ul className="dropdownSub h-full " id="listAuto">
//             <div id="dropdownLine" className={`w-full block bg-grey flex-grow ${openDropdown === 'autoparts' ? "block lg:absolute lg:w-[300px]" : "hidden"}`}>
//               <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none mt-0 w-full pt-6 pb-7 lg:text-white lg:text-xl ${isScrolled ? "lg:bg-white" : "lg:bg-[rgba(242,242,242,0.29)]"}`}><Link href={`/${locale}/${t.links.usedlink}`} className={`dropdown-item lg:text-white ${isScrolled ? "lg:text-[#333333]" : "lg:text-white"}`} onClick={toggleMenu}>{t.links.used}</Link></li>
//               <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none pt-7 pb-7 lg:text-white ${isScrolled ? "lg:bg-white " : "lg:bg-[rgba(242,242,242,0.29)]"}`}><Link href={`/${locale}/${t.links.newlink}`} className={`dropdown-item lg:text-white ${isScrolled ? "lg:text-[#333333]" : "lg:text-white"}`} onClick={toggleMenu}>{t.links.new}</Link></li>
//             </div>
//           </ul>
//         </li>

//         {/* VEHICLES LINK */}
//         <li>
//           <Link href={`/${locale}/${t.links.vehicleslink}`} className="menuItem menulink text-[#333333]" onClick={toggleMenu}>
//             <div className={`menudiv lg:text-[16px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}>
//               <Svgvehicles isScrolled={isScrolled} />
//               {t.links.vehicles}
//             </div>
//           </Link>
//         </li>

//         {/* MECHANIC LINK */}
//         <li>
//           <Link href={`/${locale}/${t.links.mechaniclink}`} className="menuItem menulink" onClick={toggleMenu}>
//             <div className={`menudiv lg:text-[16px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}>
//               <Svgmechanic isScrolled={isScrolled} />
//               {t.links.mechanic}
//             </div>
//           </Link>
//         </li>

//         {/* ABOUT US DROP DOWN */}
//         <li className={` ${openDropdown === 'aboutus' ? "lg:bg-[rgba(242,242,242,0.29)]" : "lg:bg-transparent" }`}>
//           <button className="w-full flex items-center gap-x-8 no-underline text-[#333333] uppercase border-b-[1px] border-solid border-[#6f6f6f33] pb-8 pt-9 pl-9 lg:pt-6 lg:pb-8 lg:gap-x-[10px]" 
//             onClick={() => handleDropdownToggle('aboutus')} >
//             <Svgaboutus isScrolled={isScrolled} />
//             <p className={`text-[16px] pl-2 lg:text-[16px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}>{t.links.about}</p>
//             <Subarrow isScrolled={isScrolled} />
//           </button>

//           {/* About us Links */}
//           <ul className={`subList dropdownSub`} id="listAuto">
//             <div id="dropdownLine" className={`w-full block flex-grow ${openDropdown === 'aboutus' ? "block lg:absolute lg:w-[300px]" : "hidden"}`}>
//               <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none mt-0 w-full pt-6 pb-7 lg:text-white lg:text-xl ${isScrolled ? "lg:bg-white" : "lg:bg-[rgba(242,242,242,0.29)]"}`}><Link href={`/${locale}/${t.links.aboutlink}`} className={`dropdown-item lg:text-white ${isScrolled ? "lg:text-[#333333]" : "lg:text-white"}`} onClick={toggleMenu}>{t.links.aboutus}</Link></li>
//               <li className={`bg-[#f2f2f2] text-[#333333] text-[16px] border-none pt-7 pb-7 lg:text-white ${isScrolled ? "lg:bg-white " : "lg:bg-[rgba(242,242,242,0.29)]"}`}><Link href={`/${locale}/${t.links.careerslink}`} className={`dropdown-item lg:text-white ${isScrolled ? "lg:text-[#333333]" : "lg:text-white"}`} onClick={toggleMenu}>{t.links.careers}</Link></li>
//             </div>
//           </ul>
//         </li>

//         {/* CONTACT US LINK */}
//         <li>
//           <Link href={`/${locale}/${t.links.contactlink}`} className="menuItem menulink" onClick={toggleMenu}>
//             <div className={`menudiv lg:text-[16px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}>
//               <Svgcontact isScrolled={isScrolled} />
//               {t.links.contact}
//             </div>
//           </Link>
//         </li>

//         {/* LOG IN LINK */}
//         <li className='lg:hidden'>
//           <Link href={`/${locale}/${t.links.loginlink}`} className="menuItem menulink" id="loginLink" onClick={toggleMenu}>
//             <div className='menudiv lg:text-[14px] lg:text-center'>
//               <Svglogin isScrolled={isScrolled} />
//               {t.links.login}
//             </div>
//           </Link>
//         </li>

//         {/* PAYPAL LINK */}
//         <li className='lg:hidden'>
//           <Link href="https://www.paypal.com/paypalme/GravelAutoParts" target="_blank" id="paypal-link">
//             <div id="paypal-div">
//               <img src="/img/PayPal.png" id="paypal-img" width={100} height={100} />
//               <p className='lg:text-[14px]'> Make A Payment</p>
//             </div>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navmenu;



