import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follow
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element is being hovered
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveParent = target.closest('[data-cursor]');
        if (interactiveParent) {
          const type = interactiveParent.getAttribute('data-cursor');
          if (type === 'view') {
            setIsHovered(true);
            setCursorText('VIEW');
            setIsPointer(false);
          } else if (type === 'play') {
            setIsHovered(true);
            setCursorText('PLAY');
            setIsPointer(false);
          } else if (type === 'drag') {
            setIsHovered(true);
            setCursorText('DRAG');
            setIsPointer(false);
          } else {
            setIsHovered(true);
            setCursorText('');
            setIsPointer(true);
          }
        } else if (
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.tagName.toLowerCase() === 'button'
        ) {
          setIsHovered(true);
          setCursorText('');
          setIsPointer(true);
        } else {
          setIsHovered(false);
          setCursorText('');
          setIsPointer(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer interactive ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 84 : 48) : 28,
          height: isHovered ? (cursorText ? 84 : 48) : 28,
          backgroundColor: cursorText ? 'rgba(255, 255, 255, 0.12)' : isPointer ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.25)',
          borderWidth: isHovered ? 1.5 : 1,
          backdropFilter: cursorText ? 'blur(6px)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-[0.25em] font-medium text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 bg-white rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorText ? 0 : 1,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
