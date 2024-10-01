'use client';
import React from 'react'
import Link from 'next/link';
import Logo from '../nav/Logo'
import ContactFooter from './ContactFooter'
import { usePathname } from "next/navigation";

const NavFooter = ({t, locale}) => {
  const pathname = usePathname();

  return (
    <div className='text-center pt-3 py-10 border-b-[#fefefe4d] border-b-[1px]'>
    <h3 className='pt-10 lg:text-2xl'>{t.links.company}</h3>
    <ul className=' leading-9 uppercase '>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/`}>{t.links.home}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href="https://gravel.ecopieces.ca/" target="_blank">{t.links.used}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.newlink}`}>{t.links.new}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.vehicleslink}`}>{t.links.vehicles}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.mechaniclink}`}>{t.links.mechanic}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.aboutlink}`}>{t.links.about}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.careerslink}`}>{t.links.careers}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.contactlink}`}>{t.links.contact}</Link></li>
      <li className='pb-2 pt-2 mt-1 mb-1 text-[#d1d1d1] text-xl '><Link href={`/${locale}/${t.links.loginlink}`}><div>{t.links.login}</div></Link></li>
    </ul>
  </div>
  )
}

export default NavFooter



// lg:flex lg:mx-auto lg:w-full lg:justify-center 
// lg:mr-3 lg:underline