"use client"

import React, { useState, useEffect, useRef } from 'react'

interface ProfileCardProps {
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  avatarUrl?: string
  showUserInfo?: boolean
  enableTilt?: boolean
  enableMobileTilt?: boolean
  onContactClick?: () => void
  behindGlowColor?: string
  iconUrl?: string
  behindGlowEnabled?: boolean
  behindGlowSize?: string
  innerGradient?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact Me",
  avatarUrl = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick = () => {},
  behindGlowColor = "rgba(100, 150, 255, 0.4)",
  behindGlowEnabled = true,
  behindGlowSize = "50%",
  innerGradient = "linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%)"
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const tiltX = (y - centerY) / 10
    const tiltY = (centerX - x) / 10
    
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div 
      className="relative group p-[2px] rounded-[2.5rem] transition-all duration-500"
      style={{
        perspective: '1000px'
      }}
    >
      {/* Behind Glow */}
      {behindGlowEnabled && (
        <div 
          className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem] pointer-events-none blur-[60px]"
          style={{
            background: behindGlowColor,
            width: behindGlowSize,
            height: behindGlowSize,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
      )}

      {/* Main Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[480px] aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-200 ease-out flex flex-col"
        style={{
          background: innerGradient,
          backdropFilter: 'blur(10px)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={avatarUrl} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
            alt={`Foto Profil ${name} - ${title} di Afterlife`}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        </div>

        {/* Shine Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${isHovered ? 'var(--mouse-x, 50%)' : '50%'} ${isHovered ? 'var(--mouse-y, 50%)' : '50%'}, rgba(255,255,255,0.1) 0%, transparent 60%)`,
            zIndex: 5
          }}
        />

        {/* Top Header */}
        <div className="p-8 flex justify-between items-center z-10">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold">{status}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
            <span className="text-white/80 text-sm font-bold">ID</span>
          </div>
        </div>

        {/* Content Area - Now Pushed to Bottom */}
        <div className="flex-1 flex flex-col justify-end px-8 pb-4 z-10">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 mb-4">
              <span className="text-[10px] text-blue-300 font-bold">@</span>
              <span className="text-[10px] text-blue-100 font-mono tracking-tight">{handle}</span>
            </div>
            
            <h3 className="text-4xl font-bold text-white tracking-tighter mb-1 drop-shadow-lg">
              {name}
            </h3>
            <p className="text-white/70 text-base font-medium drop-shadow-md">{title}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 z-10 space-y-4">
          <button 
            onClick={onContactClick}
            className="w-full py-4 rounded-2xl bg-white/10 backdrop-blur-xl text-white border border-white/20 font-bold text-sm tracking-tight hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-xl"
          >
            {contactText}
          </button>
          <div className="flex justify-center gap-6">
            {['GitHub', 'LinkedIn'].map((social) => (
              <span key={social} className="text-[9px] uppercase tracking-widest text-white/40 hover:text-white cursor-pointer transition-colors font-bold">
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      </div>
    </div>
  )
}

export default ProfileCard
