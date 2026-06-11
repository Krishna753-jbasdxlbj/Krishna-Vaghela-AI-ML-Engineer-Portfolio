'use client';

import { ReactNode } from 'react';
import RobotLoader from '@/components/RobotLoader';
import { usePageLoader } from '@/hooks/usePageLoader';

type Props = {
  children: ReactNode;
};

export default function PageWithLoader({ children }: Props) {
  const { loading, onLoaded } = usePageLoader();

  return <>{loading ? <RobotLoader onComplete={onLoaded} /> : children}</>;
}
