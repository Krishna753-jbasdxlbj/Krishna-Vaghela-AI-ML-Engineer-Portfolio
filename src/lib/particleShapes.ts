// neural particle SVG shapes (replaces flowerShapes).
// Each variant exposes ONE structural `path` (strokes, may contain multiple
// subpaths) + ONE `core` circle, so it stays compatible with
// useFlowerEntranceAnimation (pathRef + circleRef contract).
export type ParticleVariant = 'dot' | 'node' | 'ring' | 'cross' | 'hex';

export interface ParticleShape {
  viewBox: string;
  path: string;
  core: { cx: number; cy: number; r: number };
  // whether the structural path should be filled (only the `dot`)
  fillPath?: boolean;
}

export const PARTICLE_SHAPES: Record<ParticleVariant, ParticleShape> = {
  // filled core with faint outer ring
  dot: {
    viewBox: '0 0 100 100',
    path: 'M20 50 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0',
    core: { cx: 50, cy: 50, r: 16 },
    fillPath: false,
  },
  // neural-net node: 4 connector lines radiating from a center core
  node: {
    viewBox: '0 0 100 100',
    path: 'M50 50 L50 8 M50 50 L92 50 M50 50 L50 92 M50 50 L8 50 M50 50 L80 20 M50 50 L20 80',
    core: { cx: 50, cy: 50, r: 11 },
  },
  // stroke-only ring with tiny center
  ring: {
    viewBox: '0 0 100 100',
    path: 'M14 50 a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0',
    core: { cx: 50, cy: 50, r: 5 },
  },
  // plus / crosshair
  cross: {
    viewBox: '0 0 100 100',
    path: 'M50 10 L50 90 M10 50 L90 50',
    core: { cx: 50, cy: 50, r: 8 },
  },
  // hexagon outline (pointy-top)
  hex: {
    viewBox: '0 0 100 100',
    path: 'M50 8 L86 29 L86 71 L50 92 L14 71 L14 29 Z',
    core: { cx: 50, cy: 50, r: 6 },
  },
};
