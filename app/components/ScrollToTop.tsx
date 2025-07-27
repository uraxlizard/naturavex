'use client';

import { useCallback } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const showScrollTop = useScrollPosition(300);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={scrollToTop} 
        className="bg-pistachio-dark text-white rounded-full shadow-lg p-3 hover:bg-pistachio transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pistachio-dark hover:scale-110 border-2 border-gray-800"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
} 