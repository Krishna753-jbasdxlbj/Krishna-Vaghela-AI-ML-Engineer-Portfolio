'use client';

import { useEffect, useRef, useState } from 'react';
import { useCursorPhysics } from '@/hooks/useCursorPhysics';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.documentElement.style.cursor = '';
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className='pointer-events-none fixed top-0 left-0 z-[9999] select-none'
      style={{ width: 58, height: 60, willChange: 'transform' }}
    >
      {/* Glow ring */}
      <div
        className='absolute inset-0 rounded-full'
        style={{
          boxShadow: isHovering
            ? '0 0 0 7px rgba(0,212,255,0.22), 0 0 28px 6px rgba(0,212,255,0.2)'
            : '0 0 0 1.5px rgba(0,212,255,0.28)',
          transition: 'box-shadow 0.2s ease',
        }}
      />

      {/* Robot image */}
      <img
        src='/robot-glow.png'
        alt=''
        draggable={false}
        className='w-full h-full object-contain'
        style={{
          filter: isHovering
            ? 'drop-shadow(0 0 10px rgba(0,212,255,0.75)) brightness(1.12)'
            : 'drop-shadow(0 2px 6px rgba(5,8,16,0.6))',
          transition: 'filter 0.2s ease',
        }}
      />

      {/* Hotspot dot */}
      <div
        className='absolute bg-[#00d4ff] rounded-full'
        style={{
          width: 5,
          height: 5,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
