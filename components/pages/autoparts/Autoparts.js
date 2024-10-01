import React from 'react'

const autoparts = () => {
  return (
         <div>
     <section id="video-header" className="video-header-top">
      <div id="videoHeader-videoBig">
      {/* <video autoplay loop muted playsinline id="video" class="video-mobile"/> */}
        {/* <source src="img/video-header/video-header-main-mobile.mp4" type="video/mp4">
        <source src="img/video-header/video-header-main-mobile.webm" type="video/webm"> */}
     </div>
      <div id="video-header-imageClip-shorter-c"></div>
      <div id="video-header-video-shorter-c"></div>
      <div id="video-header-overlay-shorter-c"></div>
    </section>

  
      <h1>new and used auto parts</h1>
      <p>In need of new or used auto parts? We have both! Shop used auto parts </p>
        <div id="used-auto-parts-choice" className="choicegroup">
            <h2>Used Auto Parts</h2>
            <p>Order your used auto parts on our online store. Fast delivery everywhere in Quebec!</p>
            <a href="#">Find Used Auto Parts </a>
        </div>
        <div id="new-auto-parts-choice" className="choicegroup">
          <h2>New Auto Parts</h2>
          <p>Need to find a unused brand new auto part? Contact us to find the car part you need.</p>
          <a href="#">Find New Auto Parts </a>
    </div>

    </div>

  )
}

export default autoparts