'use client';

import { useEffect, useState } from 'react';
import { generateParticles } from '@/helpers/generateParticles';
import Particle from '../Particle';
import Header from '../Header';

export type Variant = 'dot' | 'node' | 'ring' | 'cross' | 'hex';

export interface ParticleConfig {
  id: number;
  variant: Variant;
  size: number;
  x: number;
  y: number;
  delay: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<ParticleConfig[]>([]);
  const [ready, setReady] = useState(false);

  // Generate particles once on mount
  useEffect(() => {
    const generated = generateParticles();
    setParticles(generated);
    // tiny delay to allow CSS fade-in
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className='relative flex items-center justify-center w-full h-screen overflow-hidden transition-opacity duration-500'
      style={{ opacity: ready ? 1 : 0 }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className='absolute'
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: Math.floor(p.size / 25),
            filter: 'brightness(0.9)',
          }}
        >
          <Particle variant={p.variant} size={p.size} delay={p.delay} />
        </div>
      ))}
      <Header />
    </div>
  );
}
