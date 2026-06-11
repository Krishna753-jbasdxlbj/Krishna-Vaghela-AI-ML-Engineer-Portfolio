// clicks on AnimatedButton
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleButtonClick = (text: string, router: AppRouterInstance) => {
  if (text === 'LinkedIn') {
    window.open('https://www.linkedin.com/in/krishna-vaghela7/', '_blank');
  } else if (text === 'GitHub') {
    window.open('https://github.com/Krishna753-jbasdxlbj', '_blank');
  } else if (text === '←') {
    const animate = window.pageTransition;
    if (animate) animate('/');
    else router.push('/');
  } else if (text === 'Email') {
    window.location.href = 'mailto:ktcvaghela@gmail.com';
  }
};
