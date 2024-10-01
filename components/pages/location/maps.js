import { useState } from 'react';
import Image from 'next/image';

const MapSelector = ({ t }) => {
  const [isPromptActive, setPromptActive] = useState(false);

  const handleIconClick = () => {
    setPromptActive(true);
  };

  const handleCloseClick = () => {
    setPromptActive(false);
  };

  return (
    <div>
      {/* Apply blur effect when pop-up is active */}
        <div id="locationIcon" onClick={handleIconClick}>
          <Image
            src="/img/icon-location-blue.svg"
            width={30}
            height={25}
            alt="A blue location icon linked with a location button in svg format"
            title="Location Icon"
            className="sm:w-[40px]"
          />
        </div>
     
     
      {isPromptActive && (
        <div id="promptDirections" className="promptActive">
          <h3>{t.map.h2}</h3>
          <p>{t.map.h1}</p>
          <a
            id="apple"
            className="buttons-direction button-line"
            href="http://maps.apple.com/?q=45.799678072100605,-73.93454526612395"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.map.apple}
          </a>
          <a
            id="google"
            className="buttons-direction button-line"
            href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.map.google}
          </a>
          <a
            id="waze"
            className="buttons-direction button-no-line"
            href="https://www.waze.com/en/live-map/directions/ca/qc/sainte-sophie/gravel-pieces-dautos-usagees?place=ChIJUU8LpD0oyUwR9S7WcNHFFdI"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.map.waze}
          </a>
          <button
            id="closeButtonDirections"
            className="buttons-direction button-close"
            onClick={handleCloseClick}
          >
            {t.map.close}
          </button>
        </div>
      )}
    </div>
   
  );
};

export default MapSelector;

// import { useState } from 'react';

// const MapSelector = ({ t }) => {
//   const [isPromptActive, setPromptActive] = useState(false);

//   const handleIconClick = () => {
//     setPromptActive(true);
//   };

//   const handleCloseClick = () => {
//     setPromptActive(false);
//   };

//   return (
//     <div>
   
//        <div id="locationIcon" onClick={handleIconClick}>
    
//        <img src="/img/icon-location-blue.svg" width={30} height={25} alt="A blue location icon linked with a location button in svg format" title="Location Icon" className='sm:w-[40px]'/>

//      </div>

//       {isPromptActive && (
//         <div id="promptDirections" className="promptActive">
        
//           <h3>{t.map.h2}</h3>  {/* Use translation function here */}
//           <p>{t.map.h1}</p>  {/* Use translation function here */}
//           <a
//             id="apple"
//             className="buttons-direction button-line"
//             href="http://maps.apple.com/?q=45.799678072100605,-73.93454526612395"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {t.map.apple}  {/* Use translation function here */}
//           </a>
//           <a
//             id="google"
//             className="buttons-direction button-line"
//             href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {t.map.google}  {/* Use translation function here */}
//           </a>
//           <a
//             id="waze"
//             className="buttons-direction button-no-line"
//             href="https://www.waze.com/en/live-map/directions/ca/qc/sainte-sophie/gravel-pieces-dautos-usagees?place=ChIJUU8LpD0oyUwR9S7WcNHFFdI"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {t.map.waze}  {/* Use translation function here */}
//           </a>
//           <button
//             id="closeButtonDirections"
//             className="buttons-direction button-close"
//             onClick={handleCloseClick}
//           >
//             {t.map.close}  {/* Use translation function here */}
//           </button>
//         </div>

//       )}
//     </div>
//   );
// };

// export default MapSelector;















// import { useState } from 'react';

// const MapSelector = ({t}) => {
//   const [isPromptActive, setPromptActive] = useState(false);

//   const handleIconClick = () => {
//     setPromptActive(true);
//   };

//   const handleCloseClick = () => {
//     setPromptActive(false);
//   };

//   return (
//     <div>
//       <div id="locationIcon" onClick={handleIconClick}>
    
//         <img src="/img/icon-location-blue.svg" width={30} height={25} alt="A blue location icon linked with a location button in svg format" title="Location Icon" className='sm:w-[40px]'/>

//       </div>

//       {isPromptActive && (
//         <div id="promptDirections" className="promptActive">
//           <h3></h3>
//           <p>Select Navigation App</p>
//           <a
//             id="apple"
//             className="buttons-direction button-line"
//             href="http://maps.apple.com/?q=45.799678072100605,-73.93454526612395"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Maps
//           </a>
//           <a
//             id="google"
//             className="buttons-direction button-line"
//             href="https://goo.gl/maps/NtLiwcoUEkFfgYaE7"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Google Maps
//           </a>
//           <a
//             id="waze"
//             className="buttons-direction button-no-line"
//             href="https://www.waze.com/en/live-map/directions/ca/qc/sainte-sophie/gravel-pieces-dautos-usagees?place=ChIJUU8LpD0oyUwR9S7WcNHFFdI"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Waze
//           </a>
//           <button
//             id="closeButtonDirections"
//             className="buttons-direction button-close"
//             onClick={handleCloseClick}
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MapSelector;
