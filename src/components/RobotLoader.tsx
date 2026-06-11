'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface RobotLoaderProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  'SYSTEM BOOT...',
  'LOADING NEURAL NETWORKS...',
  'CALIBRATING VISION MODULE...',
  'INITIALIZING PORTFOLIO...',
];

export default function RobotLoader({ onComplete }: RobotLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setLineIndex((i) => (i + 1 < BOOT_LINES.length ? i + 1 : i));
    }, 800);
    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 900);
          }, 400);
          return 100;
        }
        const step = prev < 60 ? 1.8 : prev < 85 ? 1.2 : 0.7;
        return Math.min(100, prev + step);
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key='robot-loader'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className='fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#171717] overflow-hidden'
        >
          {/* Subtle grid background */}
          <div
            className='absolute inset-0 opacity-[0.05]'
            style={{
              backgroundImage: `
                linear-gradient(#e2e8f0 1px, transparent 1px),
                linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Robot container */}
          <div className='relative flex flex-col items-center'>
            {/* Outer glow ring */}
            <motion.div
              className='absolute rounded-full'
              style={{ width: 280, height: 280 }}
              animate={{
                boxShadow: [
                  '0 0 40px 0px rgba(255,255,255,0.06)',
                  '0 0 80px 10px rgba(255,255,255,0.16)',
                  '0 0 40px 0px rgba(255,255,255,0.06)',
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Robot image wrapper */}
            <div className='relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center'>
              <motion.img
                src='/robot_icon.svg'
                alt='KTV Robot'
                className='w-full h-full object-contain relative z-10'
                style={{ filter: 'brightness(0) invert(1)' }}
                initial={{ opacity: 0, scale: 0.75, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              />

              {/* Scan line sweeping over robot */}
              <motion.div
                className='absolute left-0 right-0 z-20 pointer-events-none'
                style={{
                  height: 2,
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                  boxShadow: '0 0 12px 4px rgba(255,255,255,0.4)',
                }}
                animate={{ top: ['0%', '100%'] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                }}
              />

              {/* Corner brackets */}
              {[
                'top-0 left-0 border-t border-l',
                'top-0 right-0 border-t border-r',
                'bottom-0 left-0 border-b border-l',
                'bottom-0 right-0 border-b border-r',
              ].map((cls, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-5 h-5 border-[#e2e8f0]/60 ${cls}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                />
              ))}
            </div>

            {/* Boot text */}
            <motion.div
              className='mt-8 font-mono text-xs text-[#e2e8f0]/70 tracking-[0.2em] uppercase h-4 text-center'
              key={lineIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {BOOT_LINES[lineIndex]}
            </motion.div>

            {/* Progress bar */}
            <div className='mt-6 w-48 md:w-56'>
              <div className='flex justify-between font-mono text-[10px] text-[#e2e8f0]/30 mb-2 tracking-widest'>
                <span>KTV.SYS</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className='h-px bg-[#e2e8f0]/10 overflow-hidden relative'>
                <motion.div
                  className='h-full bg-[#e2e8f0]'
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
                {/* shimmer on progress bar */}
                <motion.div
                  className='absolute top-0 bottom-0 w-8'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    left: `${progress - 4}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
