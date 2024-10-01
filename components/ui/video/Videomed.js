import React from 'react'

const Videomedbig = () => {
  return (
    <div>
      <div id="video-header-imageClip-medbig"></div>
      <div className='w-[100vw] h-[95vh] bg-no-repeat bg-cover max-h-[95vh] absolute top-0 left-0 mt-[-40px]'>
        <video className="w-[100vw] h-[95vh] object-cover" autoPlay muted playsInline loop>
          <source src="/img/video-header/video-header-main.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="video-header-overlay-medbig"></div>
    </div>
  )
}

export default Videomedbig