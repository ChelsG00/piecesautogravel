import React from 'react'
import Translate from '../translate/translate'

const TopLanguage = ({t, locale}) => {
  return (
    <div>
        <Translate t={t} locale={locale}/>
    </div>
  )
}

export default TopLanguage