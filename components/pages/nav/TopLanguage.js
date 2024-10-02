import React from 'react'
import Translate from '../translate/Translate'

const TopLanguage = ({t, locale}) => {
  return (
    <div>
        <Translate t={t} locale={locale}/>
    </div>
  )
}

export default TopLanguage