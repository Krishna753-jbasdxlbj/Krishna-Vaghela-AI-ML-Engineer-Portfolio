export type CursorColorSet = {
  main: string;
  circle: string;
};
export const CURSOR_COLOR_MAP: Record<string, CursorColorSet> = {
  '/portfolio/ragmind': { main: '#7c3aed', circle: '#00d4ff' },
  '/portfolio/pan-ocr': { main: '#22d3ee', circle: '#a78bfa' },
  '/portfolio/voter-id': { main: '#38bdf8', circle: '#5eead4' },
  '/portfolio/indiaerp': { main: '#818cf8', circle: '#67e8f9' },
  '/portfolio/sha3-fpga': { main: '#2dd4bf', circle: '#c084fc' },
  // fallback (cyan head, violet eye) — matches the site theme
  default: { main: '#00d4ff', circle: '#7c3aed' },
};

export const getCursorColors = (pathname: string): CursorColorSet => {
  return CURSOR_COLOR_MAP[pathname] ?? CURSOR_COLOR_MAP.default;
};
