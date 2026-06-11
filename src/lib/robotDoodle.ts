// Cute robot-head doodle, shared by the draggable Particle and the CustomCursor.
// `outline` is a closed path (safe to fill); `details` are open strokes (never
// filled); `eye` is the core circle (used as the entrance/cursor circleRef);
// `extras` are decorative circles (second eye, ear knobs, antenna tip).
export const ROBOT_HEAD = {
  viewBox: '0 0 100 100',
  outline:
    'M26 38 Q26 20 50 20 Q74 20 74 38 L74 72 Q74 82 64 82 L36 82 Q26 82 26 72 Z',
  details:
    'M50 20 L50 11 M26 52 L30 52 M70 52 L74 52 M33 39 Q42 35 49 39 M51 39 Q58 35 67 39 M38 68 L62 68 M38 76 L62 76 M44 68 L44 76 M50 68 L50 76 M56 68 L56 76',
  eye: { cx: 42, cy: 50, r: 7 },
  extras: [
    { cx: 50, cy: 8, r: 3 }, // antenna tip
    { cx: 60, cy: 50, r: 5 }, // right eye
    { cx: 24, cy: 54, r: 5 }, // left ear knob
    { cx: 76, cy: 54, r: 5 }, // right ear knob
  ],
} as const;
