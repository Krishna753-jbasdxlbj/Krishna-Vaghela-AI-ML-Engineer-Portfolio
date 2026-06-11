import { pushAwayFromCenter } from './pushAwayFromCenter';
import { getRandomSize } from './getRandomSize';
import { getEdgePosition } from './getEdgePosition';
import { ParticleConfig, Variant } from '@/components/sections/HeroSection';

const VARIANTS: Variant[] = ['dot', 'node', 'ring', 'cross', 'hex'];

export function generateParticles(): ParticleConfig[] {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const targetCount = vw <= 768 ? 50 : 150;
  const appearanceInterval = 0.025; // seconds
  const centerClearRadius = Math.min(vw, vh) * 0.35;

  const particles: ParticleConfig[] = [];

  for (let i = 0; i < targetCount; ) {
    const size = getRandomSize();
    const { x, y } = getEdgePosition(size, vw, vh);

    // discard if inside center (re-try)
    const distToCenter = Math.hypot(x - vw / 2, y - vh / 2);
    if (distToCenter < centerClearRadius) continue;

    particles.push({
      id: i,
      variant: VARIANTS[Math.floor(Math.random() * VARIANTS.length)],
      size,
      x,
      y,
      delay: i * appearanceInterval,
    });
    i++;
  }

  // final push-away (in case any slipped through)
  particles.forEach((p) => pushAwayFromCenter(p, vw, vh, centerClearRadius));

  // larger particles → lower z-index (appear behind)
  particles.sort((a, b) => a.size - b.size);

  return particles;
}
