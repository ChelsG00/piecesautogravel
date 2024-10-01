import {useState, useEffect} from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
if(width) {
    if(width < 640) {
        return 'xs';
    } else if(width >= 641 && width < 768 ) {
        return 'sm';
    } else if(width >= 769 && width < 1024) {
        return 'md';
    } else if(width >= 1025 && width < 1280) {
        return 'lg';
    } else if(width >= 1281) {
        return 'xl';
    }
} else {
    return 'default';
}
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
  
  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200); 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;