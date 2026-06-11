'use client';
import { useRef } from 'react';
import { ParticleVariant } from '@/lib/particleShapes';
import { useRandomParticleColors } from '@/hooks/useRandomParticleColors';
import { useParticleEntrance } from '@/hooks/useParticleEntrance';
import { useFlowerHoverScale } from '@/hooks/useFlowerHoverScale';
import { useDraggable } from '@/hooks/useDraggable';

export type { ParticleVariant };

interface ParticleProps {
  variant?: ParticleVariant;
  size?: number;
  delay?: number;
  draggable?: boolean;
  opacity?: boolean;
}

// Robot-head particle. Uses a pre-rasterized PNG of the traced robot
// (public/robot.png, generated from robot_vector.svg) as a CSS mask so it can be
// tinted to the site theme per-instance. A bitmap mask is GPU-cheap to composite
// in bulk — unlike masking the 1600-path source SVG, which lags while dragging.
export default function Particle({
  size = 100,
  delay = 0,
  draggable = true,
  opacity = false,
}: ParticleProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const colors = useRandomParticleColors();
  const color = colors?.strokeColor ?? 'transparent';

  useParticleEntrance(ref, delay);
  useFlowerHoverScale(ref);
  useDraggable(ref, draggable);

  return (
    <div
      ref={ref}
      className={`particle ${draggable ? 'grabme' : ''}`}
      style={{ display: 'inline-block' }}
    >
      <div
        aria-hidden='true'
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity: opacity ? 0.5 : 1,
          WebkitMaskImage: 'url(/robot.png)',
          maskImage: 'url(/robot.png)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    </div>
  );
}
