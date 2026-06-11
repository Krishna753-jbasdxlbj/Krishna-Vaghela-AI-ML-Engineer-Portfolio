import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
type Vec2 = { x: number; y: number };

// rAF-driven cursor follow (kept), spring/velocity smoothing removed:
// the cursor now tracks the pointer 1:1 with no trailing lag or speed scaling.
export const useCursorPhysics = (
  cursorRef: React.RefObject<HTMLDivElement | null>
) => {
  const target = useRef<Vec2>({ x: 0, y: 0 });

  useEffect(() => {
    if (!cursorRef.current) return;

    const startX = window.innerWidth / 2;
    const startY = -100;

    target.current = { x: startX, y: startY };

    gsap.set(cursorRef.current, {
      x: startX,
      y: startY,
      xPercent: -50,
      yPercent: -50,
      force3D: true,
    });

    const updateTarget = (e: PointerEvent | TouchEvent) => {
      const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      target.current.x = clientX;
      target.current.y = clientY;
    };

    window.addEventListener('pointermove', updateTarget, { passive: true });
    window.addEventListener('touchmove', updateTarget, { passive: true });

    const ticker = () => {
      if (!cursorRef.current) return;
      gsap.set(cursorRef.current, {
        x: target.current.x,
        y: target.current.y,
        xPercent: -50,
        yPercent: -50,
        force3D: true,
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener('pointermove', updateTarget);
      window.removeEventListener('touchmove', updateTarget);
    };
  }, [cursorRef]);
};
