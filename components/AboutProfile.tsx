"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

interface AboutProfileProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
}

const AboutProfile: React.FC<AboutProfileProps> = ({ avatarUrl, name, title, handle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based parallax
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-[4rem] group cursor-none-on-hover"
    >
      {/* Immersive Background Image Container */}
      <motion.div 
        style={{ 
          y, 
          scale,
          opacity,
          rotateX: mousePos.y * -10,
          rotateY: mousePos.x * 10,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src={avatarUrl} 
          alt={name}
          className="w-full h-full object-cover grayscale brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
      </motion.div>

      {/* Floating Elements on Top of Image */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 md:p-20 pointer-events-none">
        <motion.div
          style={{
            x: mousePos.x * 30,
            y: mousePos.y * 30,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Active & Available</span>
          </motion.div>

          <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-2xl">
            {name}
          </h3>
          <p className="text-xl md:text-2xl text-white/70 font-medium mb-10">
            {title} <span className="text-blue-500/50 mx-2">/</span> <span className="font-mono text-base opacity-40">@{handle}</span>
          </p>

          <div className="flex gap-8 pointer-events-auto">
            {[
              { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/mon2708' },
              { icon: <FiLinkedin />, label: 'LinkedIn', href: '#' },
              { icon: <FiInstagram />, label: 'Instagram', href: '#' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-all group/link"
              >
                <span className="text-2xl group-hover/link:scale-125 group-hover/link:text-blue-400 transition-all duration-300">{social.icon}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block opacity-0 group-hover/link:opacity-100 transition-all translate-x-[-10px] group-hover/link:translate-x-0">{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Border Glow Overlay */}
      <div className="absolute inset-0 border border-white/5 rounded-[4rem] pointer-events-none group-hover:border-white/10 transition-colors duration-500" />
      
      {/* Corner Decor */}
      <div className="absolute top-10 right-10 z-20 hidden md:block">
        <div className="w-12 h-12 border-t-2 border-r-2 border-white/10 rounded-tr-2xl" />
      </div>
    </div>
  )
}

export default AboutProfile
