import { useMediaQuery } from 'react-responsive';

const UseMediaQuery = () => {
  const isLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallLaptop = useMediaQuery({
    minDeviceWidth: 1280,
    maxDeviceWidth: 1366,
  });
  const isTablet = useMediaQuery({
    query:
      'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait), only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: landscape)',
  });

  return {
    isLaptop,
    isBigScreen,
    isTabletOrMobile,
    isSmallLaptop,
    isMobile,
    isTablet,
  };
};

export default UseMediaQuery;
