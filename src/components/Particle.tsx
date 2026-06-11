'use client';
import { useEffect, useRef, useState } from 'react';
import { ParticleVariant } from '@/lib/particleShapes';
import { useRandomParticleColors } from '@/hooks/useRandomParticleColors';
import { useParticleEntrance } from '@/hooks/useParticleEntrance';
import { useFlowerHoverScale } from '@/hooks/useFlowerHoverScale';
import { useDraggable } from '@/hooks/useDraggable';

export type { ParticleVariant };

// Each particle randomly becomes one of the uploaded AI/robot icons — equal
// weight, so all 8 show up roughly the same amount.
const PARTICLE_IMAGES: string[] = [
  '/ai_atom.svg',
  '/robot_icon.svg',
  '/brain_gear.svg',
  '/bulb_brain.svg',
  '/puzzle_robot.svg',
  '/robot_hand.svg',
  '/ai_monitor.svg',
  '/eye_icon.svg',
];

function pickImage(): string {
  return PARTICLE_IMAGES[Math.floor(Math.random() * PARTICLE_IMAGES.length)];
}

interface ParticleProps {
  variant?: ParticleVariant;
  size?: number;
  delay?: number;
  draggable?: boolean;
  opacity?: boolean;
}

export default function Particle({
  size = 100,
  delay = 0,
  draggable = true,
  opacity = false,
}: ParticleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Pick the random icon on the client only. SSR + first client render use a
  // fixed image so the markup matches (server can't predict Math.random), then
  // we swap to a random one after hydration — no mismatch.
  const [src, setSrc] = useState<string>(PARTICLE_IMAGES[0]);
  useEffect(() => {
    setSrc(pickImage());
  }, []);

  const colors = useRandomParticleColors();
  // Solid fill colour per particle (null until mounted -> light fallback keeps
  // SSR markup stable).
  const color = colors?.strokeColor ?? '#e2e8f0';

  useParticleEntrance(ref, delay);
  useFlowerHoverScale(ref);
  useDraggable(ref, draggable);

  return (
    <div
      ref={ref}
      className={`particle ${draggable ? 'grabme' : ''}`}
      style={{ display: 'inline-block' }}
    >
      {/* The icon is used as a CSS alpha mask and filled with a solid colour.
          No invert/blur: mask edges fade the solid fill cleanly, so there is
          no bright anti-aliased "ghost" fringe (the glow that looked blurry). */}
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity: opacity ? 0.5 : 1,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
    </div>
  );
}
