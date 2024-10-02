import React from 'react'
import Translate from '../translate/translate'

const Toplanguage = ({t, locale}) => {
  return (
    <div>
        <Translate t={t} locale={locale}/>
    </div>
  )
}

export default Toplanguage