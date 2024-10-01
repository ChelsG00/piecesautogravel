import React from 'react';

const Videolarge = () => {
  return (
    <div>
      <div id="video-header-imageClip-large"></div>
      <div className='w-[100vw] h-[110vh] bg-no-repeat bg-cover max-h-[110vh] absolute top-0 left-0 mt-[-40px]'>
        <video className="w-[100vw] h-[110vh] object-cover" autoPlay muted playsInline loop>
          <source src="/img/video-header/video-header-main.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="video-header-overlay-large"></div>
    </div>
  );
}

export default Videolarge;