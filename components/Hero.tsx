"use client";

import Image from "next/image";
import BlurText from "./blurteks";
import styles from "./Hero.module.css";
import Prism from "./Prism";
import { useEffect, useRef } from "react";
import Public from "@/public/pbg.png";
import TextType from "./TextType";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <div style={{ position: "absolute", inset: 0 }}>
          <Prism
            animationType="3drotate"
            timeScale={0.1}
            height={3.5}
            baseWidth={6.7}
            scale={3.0}
            hueShift={0}
            colorFrequency={0.8}
            noise={0.1}
            glow={1}
            suspendWhenOffscreen={true}
          />
        </div>

        <div>
          {/* h1 tersembunyi untuk SEO — Google butuh satu h1 yang jelas */}
          <h1 className="sr-only">Remon — Afterlife | Web Developer & Jasa Digital Indonesia</h1>

          <div className="text-4xl md:text-6xl font-bold leading-tight">
            <BlurText
              text="Bangun Sesuatu yang"
              delay={50}
              animateBy="words"
              direction="top"
              className="inline-block mr-3"
            />

            <BlurText
              text="Indah & Bertenaga"
              delay={150}
              animateBy="words"
              direction="top"
              className="inline-block text-black-400"
            />
          </div>

          <TextType
            text={[
              "Halo!! Remon di sini!! Apa kabar!",
              "Saya percaya bahwa desain adalah jembatan antara imajinasi dan realita. Fokus saya bukan cuma bikin web yang 'jalan', tapi bikin web yang punya jiwa lewat animasi yang halus dan UX yang presisi.",
              "Selamat coding!"]}
            className="mt-6 text-white/90 max-w-md bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl"
            deletingSpeed={10}
          ></TextType>

          <div className="mt-8 flex gap-4">
            <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-3
      rounded-xl
      backdrop-blur-md
      bg-white/75
      border border-white/20
      text-black
      hover:bg-white/20
      transition"
              >
                Contact Me
              </button>
            </Link>
            <Link href="#about" scroll={false}>
              <button
                className="px-6 py-3
    rounded-xl
    backdrop-blur-md
    bg-white/10
    border border-white/20
    text-white
    hover:bg-white/20
    transition"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>
    </section>
  );
}
