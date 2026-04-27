"use client"
import React, { useEffect, useState } from 'react';

interface BorderGlowProps {
  children?: React.ReactNode;
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  borderRadius?: number;
  backgroundColor?: string;
}

export const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = "",
  size = 150,
  duration = 4,
  borderWidth = 1.5,
  colorFrom = "#3b82f6", // Blue
  colorTo = "#8b5cf6",   // Purple
  delay = 0,
  borderRadius = 16,
  backgroundColor = "#0b0b0b",
}) => {
  return (
    <div
      className={`relative p-[1px] group overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* The Animated Beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: `${borderWidth}px`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, ${colorFrom} 340deg, ${colorTo} 360deg)`,
            transform: `scale(4)`,
            animation: `border-beam ${duration}s linear infinite`,
            animationDelay: `${-delay}s`,
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="relative z-10 w-full h-full rounded-[inherit] overflow-hidden"
        style={{ backgroundColor }}
      >
        {children}
      </div>

      <style jsx global>{`
        @keyframes border-beam {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }
      `}</style>
    </div>
  );
};

export default BorderGlow;
