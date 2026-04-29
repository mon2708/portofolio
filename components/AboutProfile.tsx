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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] md:h-[800px] overflow-hidden rounded-[4rem] group">
      {/* Immersive Background Image */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={avatarUrl} 
          alt={name}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      </motion.div>

      {/* Floating Info Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-12 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Available for Hire</span>
          </div>

          <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4 leading-none">
            {name}
          </h3>
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-8">
            {title} <span className="text-blue-500/50 mx-2">/</span> <span className="font-mono text-base opacity-50">@{handle}</span>
          </p>

          <div className="flex gap-8">
            {[
              { icon: <FiGithub />, label: 'GitHub', href: '#' },
              { icon: <FiLinkedin />, label: 'LinkedIn', href: '#' },
              { icon: <FiInstagram />, label: 'Instagram', href: '#' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                className="flex items-center gap-2 text-white/30 hover:text-white transition-colors group/link"
              >
                <span className="text-xl group-hover/link:scale-110 transition-transform">{social.icon}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block">{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Border Glow */}
      <div className="absolute inset-0 border border-white/5 rounded-[4rem] pointer-events-none" />
    </div>
  )
}

export default AboutProfile
