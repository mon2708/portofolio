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
        className="relative w-full max-w-[400px] aspect-[3/4.2] rounded-[2.8rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-200 ease-out flex flex-col"
        style={{
          background: innerGradient,
          backdropFilter: 'blur(10px)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Shine Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${isHovered ? 'var(--mouse-x, 50%)' : '50%'} ${isHovered ? 'var(--mouse-y, 50%)' : '50%'}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            zIndex: 5
          }}
        />

        {/* Top Header */}
        <div className="p-8 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-bold">{status}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <span className="text-white/20 text-sm font-bold">ID</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-10 z-10">
          <div className="relative mb-8">
            <div className="absolute -inset-6 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-48 h-48 rounded-full border-4 border-white/10 overflow-hidden relative z-10 shadow-2xl">
              <img 
                src={avatarUrl} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt={`Foto Profil ${name} - ${title} di Afterlife`}
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white tracking-tight mb-2">{name}</h3>
            <p className="text-white/40 text-base font-medium mb-5">{title}</p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="text-[11px] text-blue-400 font-bold">@</span>
              <span className="text-[11px] text-white/60 font-mono">{handle}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 z-10 space-y-4">
          <button 
            onClick={onContactClick}
            className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-tight hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 shadow-xl"
          >
            {contactText}
          </button>
          <div className="flex justify-center gap-6">
            {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
              <span key={social} className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white/60 cursor-pointer transition-colors font-bold">
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Geometric Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
    </div>
  )
}

export default ProfileCard
