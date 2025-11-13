import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Transform values for different parallax speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  return (
    <div 
      className="parallax-bg" 
      ref={containerRef}
      aria-hidden="true"
    >
      <motion.div
        className="parallax-circle parallax-circle-1"
        style={{ y: y1 }}
      />
      <motion.div
        className="parallax-circle parallax-circle-2"
        style={{ y: y2 }}
      />
      <motion.div
        className="parallax-circle parallax-circle-3"
        style={{ y: y3 }}
      />
    </div>
  );
};

export default ParallaxBackground;