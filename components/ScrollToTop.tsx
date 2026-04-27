"use client"

import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-2xl transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
