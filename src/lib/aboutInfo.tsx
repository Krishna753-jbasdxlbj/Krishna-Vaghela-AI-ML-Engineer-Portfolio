// content for about section
import { Highlighter } from '@/components/Highlighter';
import { HighlighterRef } from '@/components/sections/AboutSection';
import { ParticleVariant } from '@/components/Particle';
import React from 'react';

export const getTexts = (
  textLeftRef: React.RefObject<HTMLHeadingElement | null>,
  textRightRef: React.RefObject<HTMLHeadingElement | null>
) => [
  { ref: textLeftRef, text: 'ai/ml', top: 'min-[320px]:top-5 md:top-15' },
  {
    ref: textRightRef,
    text: 'engineer',
    top: 'min-[320px]:top-12 sm:top-20 md:top-35',
  },
];

// 3 neural node particles around the avatar (same ref/position pattern)
export const getParticles = (
  particleRef1: React.RefObject<HTMLDivElement | null>,
  particleRef2: React.RefObject<HTMLDivElement | null>,
  particleRef3: React.RefObject<HTMLDivElement | null>
) =>
  [
    {
      ref: particleRef1,
      variant: 'node' as ParticleVariant,
      size: 120,
      position: 'top-0 left-10',
    },
    {
      ref: particleRef2,
      variant: 'ring' as ParticleVariant,
      size: 140,
      position: '-bottom-20 left-15',
    },
    {
      ref: particleRef3,
      variant: 'hex' as ParticleVariant,
      size: 150,
      position: 'bottom-0 -right-20',
    },
  ] as const;

export const getAboutItems = (
  highlightLocation: React.RefObject<HighlighterRef | null>,
  highlightTech: React.RefObject<HighlighterRef | null>
) => [
  {
    label: 'Name:',
    value: 'Krishna Tushar Vaghela',
  },
  {
    label: 'Location:',
    value: (
      <Highlighter ref={highlightLocation} color='#00d4ff80' action='box'>
        Mumbai, India
      </Highlighter>
    ),
  },
  {
    label: 'Experience:',
    value: (
      <>
        AI/ML Engineer — Computer Vision, RAG systems, full-stack deployment
      </>
    ),
  },
  {
    label: 'Core stack:',
    value: (
      <Highlighter ref={highlightTech} color='#7c3aed60' action='highlight'>
        PyTorch · LangChain · YOLOv8 · React · Next.js · Supabase
      </Highlighter>
    ),
  },
];

export const getHobbies = (
  highlightReading: React.RefObject<HighlighterRef | null>,
  highlightMovies: React.RefObject<HighlighterRef | null>
) => [
  {
    label: 'Interests:',
    value: (
      <>
        <Highlighter ref={highlightReading} color='#00d4ff50'>
          Applied AI/ML
        </Highlighter>
        ,{' '}
        <Highlighter ref={highlightMovies} color='#7c3aed50'>
          computer vision
        </Highlighter>
        , model optimization &amp; scalable deployment
      </>
    ),
  },
];
