import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [dimensions, setDimensions] = useState({
    height: undefined,
    width: undefined
  });

  useEffect(() => {
    if ( window) {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
  });
  return {
    height: dimensions.height,
    width: dimensions.width
  };
};