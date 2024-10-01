import Aboutteam from '@/components/pages/jobs/careers/Aboutteam'
import Jobopps from '@/components/pages/jobs/careers/Jobopps'
import Join from '@/components/pages/jobs/careers/Join'
import Teamhead from '@/components/pages/jobs/careers/Teamhead'
import React from 'react'

const Careers = ({t, locale}) => {
  return (
    <div>
      < Teamhead t={t} />
      < Aboutteam t={t}/>
      < Join t={t}/>
      < Jobopps t={t}/>
    </div>
  )
}

export default Careers