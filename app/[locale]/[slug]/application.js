import ContactForm from '@/components/pages/jobs/jobopps/forms/MecForm'
import Courier from '@/components/pages/jobs/jobopps/Courier'
import Demantleur from '@/components/pages/jobs/jobopps/Demantleur'
import Jobhead from '@/components/pages/jobs/jobopps/Jobhead'
import Mechanicpost from '@/components/pages/jobs/jobopps/Mechanicpost'
import Sales from '@/components/pages/jobs/jobopps/Sales'
import Shipping from '@/components/pages/jobs/jobopps/Shipping'
import React from 'react'
import Try from '@/components/pages/jobs/jobopps/Try'


const Applications = ({t}) => {
  return (
    <div>
        < Jobhead t={t} />
        < Mechanicpost t={t} />
        < Demantleur t={t} />
        < Courier t={t} />
        < Sales t={t}/>
        < Shipping t={t}/>
        < Try />
        
    </div>
  )
}

export default Applications