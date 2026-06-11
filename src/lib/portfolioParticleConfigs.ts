// particle info in portfolio section
import { ParticleVariant } from '@/components/Particle';

export interface ParticleConfig {
  variant: ParticleVariant;
  position: string;
}

export const particleConfigs: ParticleConfig[] = [
  {
    variant: 'node',
    position: 'top-15 sm:left-15 min-[320px]:left-5',
  },
  {
    variant: 'ring',
    position: 'top-15 sm:right-15 min-[320px]:right-0',
  },
  {
    variant: 'dot',
    position: 'sm:top-25 min-[320px]:top-48 sm:left-70 min-[320px]:left-50',
  },
  {
    variant: 'hex',
    position: 'top-5 sm:left-50 min-[320px]:left-35',
  },
  {
    variant: 'cross',
    position: 'sm:top-15 min-[320px]:top-20 sm:left-2/3 min-[320px]:left-1/2',
  },
];
