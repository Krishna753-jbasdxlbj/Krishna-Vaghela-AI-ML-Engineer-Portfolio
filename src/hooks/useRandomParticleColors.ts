import { CORE_COLORS, STROKE_COLORS } from '@/lib/particleColors';
import { useEffect, useState } from 'react';

export function useRandomParticleColors() {
  const [colors, setColors] = useState<{
    strokeColor: string;
    coreColor: string;
  } | null>(null);

  useEffect(() => {
    const strokeIndex = Math.floor(Math.random() * STROKE_COLORS.length);
    const strokeColor = STROKE_COLORS[strokeIndex];
    const coreOptions = CORE_COLORS.filter((c) => c !== strokeColor);
    const coreColor =
      coreOptions[Math.floor(Math.random() * coreOptions.length)];
    setColors({ strokeColor, coreColor });
  }, []);

  return colors;
}
