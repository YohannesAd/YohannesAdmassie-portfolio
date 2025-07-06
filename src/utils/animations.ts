// Animation variants and configurations for Framer Motion
// Professional, smooth animations that enhance user experience

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

// Staggered animations for lists and grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.2, ease: "easeInOut" as const }
  }
};

// Complex animations
export const typewriter = {
  initial: { width: 0 },
  animate: { 
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" }
  }
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55]
    }
  }
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

// Utility function to create delayed animations
export const createDelayedAnimation = (baseAnimation: any, delay: number) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay
  }
});

// Utility function to create responsive animations
export const createResponsiveAnimation = (
  mobileAnimation: any, 
  desktopAnimation: any, 
  breakpoint: number = 768
) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < breakpoint;
  return isMobile ? mobileAnimation : desktopAnimation;
};
