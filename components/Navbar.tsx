"use client"
import GlassSurface from "./GlassSurface"
import Link from "next/link"

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Optionally update URL without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6">
      <GlassSurface>
        <nav className="flex items-center justify-between px-8 py-3 w-[85vw] max-w-3xl">

          {/* Logo */}
          <div className="text-white font-bold text-xl tracking-tighter">
            REMON<span className="text-blue-500">.</span>
          </div>

          {/* Menu */}
          <div className="flex gap-8 text-white/70 text-sm font-medium">
            <Link href="/" className="hover:text-white transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </Link>
            <a href="#about" className="hover:text-white transition cursor-pointer" onClick={(e) => handleScroll(e, 'about')}>
              Expertise
            </a>
            <a href="#project" className="hover:text-white transition cursor-pointer" onClick={(e) => handleScroll(e, 'project')}>
              Project
            </a>
          </div>

        </nav>
      </GlassSurface>
    </div>
  )
}
