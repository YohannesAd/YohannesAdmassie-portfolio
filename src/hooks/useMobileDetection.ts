import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices and screen sizes
 * Provides responsive utilities for mobile optimization
 */
export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Check on mount
    checkDevice();

    // Add event listener for resize
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    screenWidth,
    isSmallMobile: screenWidth < 480,
    isMediumMobile: screenWidth >= 480 && screenWidth < 768,
  };
};

/**
 * Hook for mobile-optimized animations
 * Reduces animation complexity on mobile devices
 */
export const useMobileOptimizedAnimation = () => {
  const { isMobile } = useMobileDetection();

  const getAnimationConfig = (desktopConfig: any, mobileConfig?: any) => {
    if (isMobile && mobileConfig) {
      return mobileConfig;
    }
    
    if (isMobile) {
      // Default mobile optimization: faster, simpler animations
      return {
        ...desktopConfig,
        transition: {
          ...desktopConfig.transition,
          duration: Math.min(desktopConfig.transition?.duration || 0.5, 0.3),
        },
      };
    }
    
    return desktopConfig;
  };

  return { getAnimationConfig, isMobile };
};
