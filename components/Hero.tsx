"use client";

import Image from "next/image";
import BlurText from "./blurteks";
import styles from "./Hero.module.css";
import Prism from "./Prism";
import { useEffect, useRef } from "react";
import Public from "@/public/pbg.png";
import TextType from "./TextType";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    id: {
      line1: "Menghidupkan",
      line2: "Ide Digital Kamu",
      textType: [
        "Halo!! Remon di sini!! Apa kabar!",
        "Saya percaya bahwa desain adalah jembatan antara imajinasi dan realita. Fokus saya bukan cuma bikin web yang 'jalan', tapi bikin web yang punya jiwa lewat animasi yang halus dan UX yang presisi.",
        "Happy coding!"
      ],
      contact: "Contact Me",
      learn: "Learn More"
    },
    en: {
      line1: "Bringing Your",
      line2: "Digital Ideas to Life",
      textType: [
        "Hi!! Remon here!! How are you!",
        "I believe design is the bridge between imagination and reality. My focus isn't just on building websites that 'work', but creating websites with a soul through smooth animations and precise UX.",
        "Happy coding!"
      ],
      contact: "Contact Me",
      learn: "Learn More"
    }
  };

  const t = (content as any)[lang] || content.id;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <div style={{ position: "absolute", inset: 0 }}>
          <Prism
            animationType="3drotate"
            timeScale={0.1}
            height={3.5}
            baseWidth={6.5}
            scale={3.0}
            hueShift={0}
            colorFrequency={0.8}
            noise={0}
            glow={1}
            suspendWhenOffscreen={false}
          />
        </div>

        <div>
          {/* h1 tersembunyi untuk SEO — Google butuh satu h1 yang jelas */}
          <h1 className="sr-only">Afterlife by Remon — {t.line1} {t.line2} | Web Developer Indonesia</h1>

          <div className="text-[2.6rem] md:text-7xl font-bold leading-[1.1] tracking-tight">
            <BlurText
              text={t.line1}
              delay={50}
              animateBy="words"
              direction="top"
              className="block"
            />

            <BlurText
              text={t.line2}
              delay={150}
              animateBy="words"
              direction="top"
              className="block text-black-400"
            />
          </div>

          <TextType
            text={t.textType}
            className="mt-8 text-white/80 text-sm md:text-base max-w-md bg-white/5 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 leading-relaxed"
            deletingSpeed={10}
          ></TextType>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button
                className="w-full px-8 py-4
      rounded-xl
      backdrop-blur-md
      bg-white
      text-black
      font-bold
      hover:bg-white/90
      active:scale-95
      transition-all"
              >
                {t.contact}
              </button>
            </Link>
            <a href="#approach" onClick={(e) => handleScroll(e, 'approach')} className="w-full sm:w-auto">
              <button
                className="w-full px-8 py-4
    rounded-xl
    backdrop-blur-md
    bg-white/10
    border border-white/20
    text-white
    font-semibold
    hover:bg-white/20
    active:scale-95
    transition-all"
              >
                {t.learn}
              </button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>
    </section>
  );
}