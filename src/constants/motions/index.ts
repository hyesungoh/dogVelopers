import { Variants } from 'framer-motion';
import { ViewportOptions } from 'framer-motion/types/motion/features/viewport/types';

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const inViewFadeInUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
};

export function setViewportOptionWithOnce(margin: string): ViewportOptions {
  return { once: true, margin };
}
