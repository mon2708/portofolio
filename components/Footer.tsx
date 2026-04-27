"use client"
import React, { useState } from 'react';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import ShinyText from './ShinyText';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjlwvwb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#" },
        { name: "Expertise", href: "#about" },
        { name: "Projects", href: "#project" },
        { name: "Contact", href: "mailto:hello@remon.com" },
      ]
    },
    {
      title: "Socials",
      links: [
        { name: "Github", href: "#", icon: <FiGithub /> },
        { name: "LinkedIn", href: "#", icon: <FiLinkedin /> },
        { name: "Twitter", href: "#", icon: <FiTwitter /> },
        { name: "Instagram", href: "#", icon: <FiInstagram /> },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Backend Systems", href: "#" },
        { name: "Mobile Apps", href: "#" },
      ]
    }
  ];

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-black pt-24 pb-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => handleScroll(e, '#')}
              className="inline-block text-3xl font-bold mb-6 tracking-tighter hover:text-blue-500 transition-colors"
            >
              REMON<span className="text-blue-500">.</span>
            </a>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Membangun masa depan digital melalui kode dan desain yang presisi.
              Berlokasi di Indonesia, tersedia untuk kolaborasi global.
            </p>
            <div className="flex gap-4">
              {[<FiGithub key="gh" />, <FiLinkedin key="li" />, <FiTwitter key="tw" />, <FiInstagram key="ig" />].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                    >
                      {link.icon && <span className="text-xs">{link.icon}</span>}
                      <span>{link.name}</span>
                      <FiArrowUpRight className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global CTA Section within Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-xl">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">03 // Contact</span>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <ShinyText
                text="Let's build something great."
                speed={3}
                className="font-bold"
              />
            </h3>
            <p className="text-white/40 text-xl leading-relaxed">
              Punya ide menarik? Mari kita buat sesuatu yang luar biasa bersama-sama.
              Ceritakan proyekmu dan mari kita mulai kolaborasi ini.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-500 ${status === 'success' ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'}`}
            >
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/30 ml-1">Your Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/30 ml-1">Your Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/30 ml-1">Project Details</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-bold flex items-center justify-center gap-3 transition-all hover:border-white/20 active:scale-[0.98] disabled:opacity-50 mt-6 group"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <FiMail className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-4 text-center">Gagal mengirim pesan. Coba lagi nanti.</p>
              )}
            </form>

            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-white/40 mb-8">Terima kasih atas pesanmu. Saya akan segera menghubungimu.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            © {currentYear} Remon. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Giant Bottom Marquee / Decorative Title */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.1] pointer-events-none select-none">
        <h1 className="text-[20vw] font-black leading-none text-center">REMON</h1>
      </div>
    </footer>
  );
}
