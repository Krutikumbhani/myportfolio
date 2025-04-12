'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

const pages = ['/', '/services', '/mywork',  '/resume', '/contactpage'];

export default function ScrollNavigator({ children }) {
  const router = useRouter();
  const isScrolling = useRef(false);
  const [animationDirection, setAnimationDirection] = useState('');

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return;

      const delta = event.deltaY;
      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);

      let nextIndex = currentIndex;

      if (delta > 20 && currentIndex < pages.length - 1) {
        nextIndex = currentIndex + 1;
        setAnimationDirection('slide-left');
      } else if (delta < -20 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        setAnimationDirection('slide-right');
      }

      if (nextIndex !== currentIndex) {
        isScrolling.current = true;

        // Delay to let animation run
        setTimeout(() => {
          router.push(pages[nextIndex]);
          setAnimationDirection('');
          isScrolling.current = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [router]);

  return (
    <div className={clsx("transition-wrapper w-full h-full", animationDirection)}>
      {children}
    </div>
  );
}
