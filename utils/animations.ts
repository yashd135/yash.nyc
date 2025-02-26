import { Variants } from 'framer-motion';

// Fade in from bottom animation (commonly used across site)
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Fade in animation
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

// Animation for viewport-based animations
export const getViewportOptions = (margin = "-100px") => ({
  once: true,
  margin
}); 