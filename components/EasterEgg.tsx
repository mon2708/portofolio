"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type HistoryItem = {
  type: 'command' | 'output' | 'error' | 'success';
  content: string | React.ReactNode;
}

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'AFTERLIFE System OS v2.0.4' },
    { type: 'output', content: 'Type "neofetch" for system info or "help" for commands.' },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [startTime] = useState(Date.now())
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Keyboard Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const getUptime = () => {
    const diff = Math.floor((Date.now() - startTime) / 1000)
    const mins = Math.floor(diff / 60)
    const secs = diff % 60
    return `${mins}m ${secs}s`
  }

  const renderNeofetch = () => {
    return (
      <div className="flex gap-8 py-4 font-mono leading-tight">
        <div className="text-blue-500 font-bold whitespace-pre">
{`    █████  ██████
   ██   ██ ██
   ███████ █████
   ██   ██ ██
   ██   ██ ███████`}
        </div>
        <div className="text-sm">
          <div className="text-blue-400 font-bold">admin@afterlife</div>
          <div className="text-white/40">--------------</div>
          <div><span className="text-blue-400 font-bold">OS:</span> Afterlife OS v2.0</div>
          <div><span className="text-blue-400 font-bold">Host:</span> Remon Portfolio</div>
          <div><span className="text-blue-400 font-bold">Kernel:</span> Next.js 16.2.4 (Turbopack)</div>
          <div><span className="text-blue-400 font-bold">Uptime:</span> {getUptime()}</div>
          <div><span className="text-blue-400 font-bold">Packages:</span> 42 (npm)</div>
          <div><span className="text-blue-400 font-bold">Shell:</span> afterlife-bash 1.0</div>
          <div><span className="text-blue-400 font-bold">Resolution:</span> {typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '1920x1080'}</div>
          <div><span className="text-blue-400 font-bold">DE:</span> React 19 + Framer Motion</div>
          <div><span className="text-blue-400 font-bold">Theme:</span> Afterlife Cinematic Dark</div>
          <div><span className="text-blue-400 font-bold">CPU:</span> Brain v1.0 (Remon)</div>
          <div><span className="text-blue-400 font-bold">Memory:</span> 1TB / Unlimited</div>
          <div className="mt-2 flex gap-2">
            <div className="w-4 h-4 bg-black border border-white/10" />
            <div className="w-4 h-4 bg-red-500" />
            <div className="w-4 h-4 bg-emerald-500" />
            <div className="w-4 h-4 bg-yellow-500" />
            <div className="w-4 h-4 bg-blue-500" />
            <div className="w-4 h-4 bg-purple-500" />
            <div className="w-4 h-4 bg-cyan-500" />
            <div className="w-4 h-4 bg-white" />
          </div>
        </div>
      </div>
    )
  }

  const handleCommand = (cmd: string) => {
    const fullCmd = cmd.trim().toLowerCase()
    const [baseCmd, ...args] = fullCmd.split(' ')
    
    setHistory(prev => [...prev, { type: 'command', content: `admin@afterlife:~$ ${cmd}` }])
    
    if (cmd.trim()) {
      setCommandHistory(prev => [cmd, ...prev])
    }
    setHistoryIndex(-1)

    switch (baseCmd) {
      case 'neofetch':
      case 'fastfetch':
        setHistory(prev => [...prev, { type: 'output', content: renderNeofetch() }])
        break
      case 'help':
        setHistory(prev => [...prev, { type: 'output', content: 'Available commands: neofetch, help, ls, cat, cd, clear, whoami, goto, exit' }])
        break
      case 'ls':
        setHistory(prev => [...prev, { type: 'output', content: 'about.txt  projects/  contact.url  skills.md' }])
        break
      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: 'Remon | Afterlife Chief Developer & Architect' }])
        break
      case 'clear':
        setHistory([])
        break
      case 'exit':
        setIsOpen(false)
        break
      case 'cat':
        if (args[0] === 'about.txt') {
          setHistory(prev => [...prev, { type: 'output', content: 'Remon is a detail-oriented developer focused on high-performance web experiences and cinematic UI/UX.' }])
        } else if (args[0] === 'skills.md') {
          setHistory(prev => [...prev, { type: 'output', content: 'React, Next.js, TypeScript, Tailwind, Node.js, Framer Motion, GSAP' }])
        } else if (args[0] === 'contact.url') {
          setHistory(prev => [...prev, { type: 'success', content: 'Opening WhatsApp...' }])
          window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, '_blank')
        } else {
          setHistory(prev => [...prev, { type: 'error', content: `cat: ${args[0] || 'missing operand'}: No such file or directory` }])
        }
        break
      case 'cd':
        if (args[0] === 'projects' || args[0] === 'projects/') {
          setHistory(prev => [...prev, { type: 'output', content: 'Entering projects/ directory...' }])
          setHistory(prev => [...prev, { type: 'output', content: 'ela.txt  aproject.txt' }])
        } else if (!args[0] || args[0] === '..') {
          setHistory(prev => [...prev, { type: 'output', content: 'Back to root.' }])
        } else {
          setHistory(prev => [...prev, { type: 'error', content: `cd: ${args[0]}: Not a directory` }])
        }
        break
      case 'goto':
        const target = args[0]
        const sections = ['about', 'project', 'services']
        if (sections.includes(target)) {
          setHistory(prev => [...prev, { type: 'success', content: `Navigating to ${target}...` }])
          setTimeout(() => {
            setIsOpen(false)
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        } else {
          setHistory(prev => [...prev, { type: 'error', content: `Section "${target}" not found. Try: about, project, services` }])
        }
        break
      case '':
        break
      default:
        setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${baseCmd}. Type "help" for options.` }])
    }
    
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1
        setHistoryIndex(nextIndex)
        setInput(commandHistory[nextIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1
        setHistoryIndex(nextIndex)
        setInput(commandHistory[nextIndex])
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl h-[70vh] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono"
          >
            {/* Top Bar */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[10px] text-white/30 tracking-widest uppercase">Afterlife Terminal — Bash</div>
              <div className="w-10" />
            </div>

            {/* Content Area */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto text-sm leading-relaxed"
            >
              {history.map((item, i) => (
                <div key={i} className={`mb-1 ${
                  item.type === 'command' ? 'text-blue-400' : 
                  item.type === 'error' ? 'text-red-400' : 
                  item.type === 'success' ? 'text-emerald-400' : 
                  'text-white/70'
                }`}>
                  {item.content}
                </div>
              ))}
              
              {/* Input Line */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-emerald-500">admin@afterlife:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                  autoFocus
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-white/5 text-[9px] text-white/20 flex justify-between">
              <span>HINT: Type "neofetch" to start</span>
              <span>ESC to exit terminal</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
