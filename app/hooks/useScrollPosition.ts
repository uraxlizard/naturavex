import { useState, useEffect, useCallback } from 'react';

export function useScrollPosition(threshold: number = 300) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return showScrollTop;
} 