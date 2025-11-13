import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a project card
      if (e.target.closest('.project-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    hovering: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      backgroundColor: 'var(--accent)',
    },
  };

  const outlineVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      },
    },
    hovering: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      borderColor: 'var(--accent)',
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      },
    },
  };

  // Only render on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={isHovering ? 'hovering' : 'default'}
        style={{
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          zIndex: 9999,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        className="cursor-outline"
        variants={outlineVariants}
        animate={isHovering ? 'hovering' : 'default'}
        style={{
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          zIndex: 9998,
          width: '40px',
          height: '40px',
          border: '2px solid var(--primary)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;