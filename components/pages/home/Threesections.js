import React from 'react'
import Mechanichome from './Threesections/Mechanic'
import New from './Threesections/New'
import Used from './Threesections/Used'

export const Threesections = ({t, locale}) => {
  return (
    <div id="four-boxes" className="section-one">
        < Mechanichome t={t} locale={locale} />
    <div id="two-boxes-flex" className=''>
        < Used t={t} locale={locale} />
        < New  t={t} locale={locale}/>
    </div>
    </div>
  )
}
