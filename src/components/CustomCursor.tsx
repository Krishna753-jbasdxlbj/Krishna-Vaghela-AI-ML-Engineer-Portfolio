'use client';

import { useEffect, useRef, useState } from 'react';
import { useCursorPhysics } from '@/hooks/useCursorPhysics';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useCursorPhysics(isMobile ? { current: null } : cursorRef);

  useEffect(() => {
    if (isMobile) return;

    document.documentElement.style.cursor = 'none';

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };
    const onOut = () => setIsHovering(false);
    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    return () => {
      document.documentElement.style.cursor = '';
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, [isMobile]);

  if (isMobile) return null;

  // physics scale: shrink on press, expand on hover, springs back on release
  const scale = isDown ? 0.82 : isHovering ? 1.25 : 1;

  return (
    <div
      ref={cursorRef}
      className='pointer-events-none fixed top-0 left-0 z-[9999] select-none'
      style={{ width: 58, height: 60, willChange: 'transform' }}
    >
      {/* Scale layer — parent does the physics translate; the back-out easing
          gives the elastic overshoot when the press is released. */}
      <div
        className='relative w-full h-full'
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
          willChange: 'transform',
        }}
      >
        {/* Robot hand cursor — gold tint, sharp (no glow/drop-shadow). Hover
            brightens the gold for the color shift. */}
        <img
          src='/robot_hand.svg'
          alt=''
          draggable={false}
          className='w-full h-full object-contain'
          style={{
            filter: isHovering
              ? 'invert(1) sepia(1) saturate(3) brightness(1.2)'
              : 'invert(1) sepia(1) saturate(3) brightness(0.95)',
            transition: 'filter 0.2s ease',
          }}
        />

        {/* Hotspot dot */}
        <div
          className='absolute bg-[#FACF71] rounded-full'
          style={{
            width: 5,
            height: 5,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
