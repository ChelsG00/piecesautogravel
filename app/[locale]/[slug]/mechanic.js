import Christian from '@/components/pages/mechanic/Christian'
import Mechanichead from '@/components/pages/mechanic/Mechanichead'
import Technician from '@/components/pages/mechanic/Technician'
import React from 'react'

const Mechanic = ({t, locale}) => {
  return (
    <div>
      < Mechanichead t={t} locale={locale} />
      < Technician t={t} />
      < Christian t={t}/>
    </div>
  )
}

export default Mechanic