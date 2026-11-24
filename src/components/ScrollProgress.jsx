import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress
 * Thin top progress bar in #FCF1D0 (Warm Cream Gold)
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#FCF1D0] origin-left z-50 shadow-[0_0_10px_#FCF1D0]"
      style={{ scaleX }}
    />
  );
}
