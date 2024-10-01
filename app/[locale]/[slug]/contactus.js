import Ceo from '@/components/pages/contact/Ceo'
import ContactHead from '@/components/pages/contact/ContactHead'
import Contactinfo from '@/components/pages/contact/ContactInfo'
import Team from '@/components/pages/contact/Team'
import React from 'react'

const Contactus = ({t}) => {
  return (
    <div>
      < ContactHead t={t} />
      <Contactinfo t={t} />
      < Team t={t} />
      < Ceo t={t} />
    </div>
  )
}

export default Contactus