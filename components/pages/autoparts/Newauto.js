import React from 'react'
import Newbrands from './new/Newbrands'
import Newhead from './new/Newhead'

const Newauto = ({t}) => {
  return (
    <div>
    <Newhead t={t}/>
    <Newbrands t={t}/>
    </div>
  )
}

export default Newauto



  {/* <video autoplay loop muted playsinline id="video" class="video-mobile">
      <source src="img/video-header/video-header-main-mobile.mp4" type="video/mp4">
      <source src="img/video-header/video-header-main-mobile.webm" type="video/webm">
    </video> */}