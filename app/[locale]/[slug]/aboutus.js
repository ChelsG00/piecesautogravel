import Aboutusheader from '@/components/pages/about/Aboutus'
import More from '@/components/pages/about/More'
import Values from '@/components/pages/about/Values'
import React from 'react'

const Aboutus = ({t}) => {
  return (
    <div>
       < Aboutusheader t={t}/>
       < Values t={t}/>
       < More t={t}/>
    </div>
  )
}

export default Aboutus