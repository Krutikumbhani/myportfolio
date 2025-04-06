'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const pages = ['/', '/services', '/aboutpage', '/mywork', '/contactpage', '/skill'];

export default function ScrollNavigator({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY;
      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);

      if (delta > 0 && currentIndex < pages.length - 1) {
        setTimeout(() => router.push(pages[currentIndex + 1]), 2000);
      } else if (delta < 0 && currentIndex > 0) {
        setTimeout(() => router.push(pages[currentIndex - 1]), 2000);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [router]);

  return <div>{children}</div>;
}
