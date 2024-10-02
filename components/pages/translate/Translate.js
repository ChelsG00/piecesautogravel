'use client'

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

function Translate ({ t, locale }) {
    const pathName = usePathname();
    let link = "/"
    switch (pathName) {
      case "/":
        link = "/en/";
        break;
      case "/en":
        link = "/";
        break;
      case "/pieces-usagees":
        link = "/en/used-parts";
        break;
      case "/en/used-parts":
        link = "/pieces-usagees";
        break;
        
      case "/pieces-neuves":
        link = "/en/new-parts";
        break;
      case "/en/new-parts":
        link = "/pieces-neuves";
        break;

        case "/vehicules":
          link = "/en/vehicles";
          break;
         case "/en/vehicles":
          link = "/vehicules";
          break;
        
       case "/vendre-votre-auto":
        link = "/en/sell-your-car";
        break;
       case "/en/sell-your-car":
        link = "/vendre-votre-auto";
        break;

       case "/mecanique":
        link = "/en/mechanic";
        break;
       case "/en/mechanic":
        link = "/mecanique";
        break;

        case "/entreprise":
        link = "/en/about-us";
        break;
       case "/en/about-us":
        link = "/entreprise";
        break;

        case "/carrieres":
        link = "/en/careers";
        break;
       case "/en/careers":
        link = "/carrieres";
        break;

        case "/nous-joindre":
        link = "/en/contact-us";
        break;
       case "/en/contact-us":
        link = "/nous-joindre";
        break;

        case "/application":
        link = "/en/applications";
        break;
       case "/en/applications":
        link = "/application";
        break;

        case "/se-connecter":
          link = "/en/login";
          break;
         case "/en/login":
          link = "/se-connecter";
          break;
    }
  
    return (
      <div className="bg-white flex justify-end px-8 py-4 fixed w-full z-40 md:px-10 lg:py-0 iMac:px-16 iMac:py-5 iMacBig:py-6 ">
        {locale === "fr" ? (
          <Link
            href={link}
            className="text-black underline text-sm flex flex-row items-center md:text-base lg:hover:bg-white lg:hover:text-black lg:px-4 iMac:text-2xl iMacBig:text-3xl"
          >
            <Image src="/img/english-flag.png" width={600} height={600}  className='w-[20px] h-[12px] pr-2'/>
            <p className='text-[12px]'>ENGLISH</p>
          </Link>
        ) : (
          <Link
            href={link}
            className="text-black underline text-sm flex flex-row items-center md:text-base lg:hover:bg-white lg:hover:text-black lg:px-4 iMac:text-2xl iMacBig:text-3xl"
          >
            <Image src="/img/french-flag.png" width={600} height={600}  className='w-[20px] h-[12px] pr-2'/>
            <p className='text-[12px]'>FRANÇAIS</p>
          </Link>
        )}
      </div>
    );
  }

export default Translate