import AdieuminouneCars from '@/components/pages/vehicules/Adieuminoune'
import Donate from '@/components/pages/vehicules/Donate'
import Vehicleshead from '@/components/pages/vehicules/Vehicleshead'
import React from 'react'

const Vehicles = ({t}) => {
  return (
    <div>
        < Vehicleshead t={t}/>
        < AdieuminouneCars t={t} />
        < Donate t={t} />
    </div>
  )
}

export default Vehicles