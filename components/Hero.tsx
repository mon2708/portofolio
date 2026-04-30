"use client";

import Image from "next/image";
import BlurText from "./blurteks";
import styles from "./Hero.module.css";
import HeroBg from "@/public/hero-bg.png";
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
    <section className="relative min-h-[90vh] flex items-center px-6 pt-32 overflow-hidden">
      {/* Background Image Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-100"
        />
        {/* Subtle Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/1 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
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
      </div>
      {/* Efek fade transisi ke section bawah yang lebih halus & full width */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}