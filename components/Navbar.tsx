"use client";
import { useState, useEffect } from "react";
import GlassSurface from "./GlassSurface";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", isLink: true },
    { name: "Expertise", href: "about", isLink: false },
    { name: "Project", href: "project", isLink: false },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6">
        <GlassSurface>
          <nav className="flex items-center justify-between px-6 md:px-8 py-3 w-[90vw] md:w-[85vw] max-w-3xl">
            {/* Logo */}
            <div className="text-white font-bold text-xl tracking-tighter">
              REMON<span className="text-blue-500">.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-white/70 text-sm font-medium">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-white transition"
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    className="hover:text-white transition cursor-pointer"
                    onClick={(e) => handleScroll(e, link.href)}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </nav>
        </GlassSurface>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#0a0a0a]/90 backdrop-blur-2xl border-l border-white/10 p-8 pt-24 shadow-2xl">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                  >
                    {link.isLink ? (
                      <Link
                        href={link.href}
                        className="text-white text-2xl font-bold hover:text-blue-500 transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={`#${link.href}`}
                        className="text-white text-2xl font-bold hover:text-blue-500 transition-colors"
                        onClick={(e) => handleScroll(e, link.href)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Extra content placeholder for user */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-20 pt-8 border-t border-white/10"
              >
                <p className="text-white/40 text-sm tracking-widest uppercase">Socials</p>
                <div className="flex gap-4 mt-4">
                  {/* User can add more here */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-500/20 hover:text-blue-500 transition-all cursor-pointer">
                    IN
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-500/20 hover:text-blue-500 transition-all cursor-pointer">
                    GH
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
