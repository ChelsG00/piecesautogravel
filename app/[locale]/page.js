import React from 'react'
import { getDictionary } from './dictionaries';
import { Headerhome } from '@/components/pages/home/Header';
import Logo from '@/components/pages/nav/Logo';
import { Threesections } from '@/components/pages/home/Threesections';
import { Partingsection } from '@/components/pages/home/Partingsection';
import {Flexfleet} from '@/components/pages/home/Flexfleet';
import { Promos } from '@/components/pages/home/Promos';
import { Socials } from '@/components/pages/home/Socials';


const Home = async ({params}) => {
  const translation = await getDictionary(params.locale);
  return (

    <div>
      {/* <LoaderSvg /> */}
      < Headerhome t={translation} locale={params.locale} />
      < Threesections t={translation} locale={params.locale} />
      < Partingsection t={translation} locale={params.locale}/>
      < Flexfleet t={translation} locale={params.locale}/>
      < Promos t={translation} locale={params.locale}/>
      < Socials t={translation} locale={params.locale}/>
      </div>

  )
}

export default Home;

