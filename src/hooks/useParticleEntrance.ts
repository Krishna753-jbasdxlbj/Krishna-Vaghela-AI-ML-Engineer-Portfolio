import gsap from 'gsap';
import { useEffect } from 'react';

// Entrance for image/mask-based particles: animates the wrapper div only
// (scale + rotate + opacity). Mirrors the div part of useFlowerEntranceAnimation,
// without the path/circle DrawSVG steps (mask particles have no inner path).
export function useParticleEntrance(
  ref: React.RefObject<HTMLDivElement | null>,
  delay: number
) {
  useEffect(() => {
    if (!ref.current) return;

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const randomSign = () => (Math.random() < 0.5 ? 1 : -1);

    gsap.set(ref.current, {
      scale: 0,
      rotate: randomSign() * random(20, 100),
      opacity: 0,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({ delay, defaults: { ease: 'power2.out' } });
    tl.to(ref.current, {
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'back.out(3)',
    });

    return () => {
      tl.kill();
    };
  }, [ref, delay]);
}
