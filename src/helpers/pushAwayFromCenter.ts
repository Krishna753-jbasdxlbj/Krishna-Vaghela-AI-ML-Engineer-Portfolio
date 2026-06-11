import { ParticleConfig } from '@/components/sections/HeroSection';

//Pushes a particle away from the center if it landed inside the clear zone.
export function pushAwayFromCenter(
  particle: ParticleConfig,
  vw: number,
  vh: number,
  clearRadius: number
): void {
  const dx = particle.x - vw / 2;
  const dy = particle.y - vh / 2;
  const dist = Math.hypot(dx, dy);
  const safe = clearRadius + particle.size / 2;

  if (dist < safe) {
    const push = (safe - dist) / dist;
    particle.x += dx * push * 4;
    particle.y += dy * push * 4;

    const pad = particle.size / 2;
    particle.x = Math.max(pad, Math.min(vw - pad, particle.x));
    particle.y = Math.max(pad, Math.min(vh - pad, particle.y));
  }
}
