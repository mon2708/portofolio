"use client"
import React from 'react'
import { motion } from 'motion/react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

const certificates = [
  {
    id: 1,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2026",
    image: "/certificates/js-cert.png", // Nanti kamu ganti filenya di sini
    verifyUrl: "https://www.freecodecamp.org/certification/akhsarremon27/javascript-v9",
    description: "Certification covering core JavaScript concepts, functional programming, and object-oriented programming."
  },
  // Kamu bisa tambah sertifikat lain di sini nanti
]

export default function CertificatesPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            {lang === 'id' ? 'PENCAPAIAN' : 'CREDENTIALS'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter"
          >
            {lang === 'id' ? 'Sertifikasi & ' : 'Certificates & '} <br />
            <span className="text-blue-500">{lang === 'id' ? 'Penghargaan' : 'Awards'}</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                {/* Placeholder Image - Ganti dengan src asli nanti */}
                <div className="w-full h-full relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-blue-600/90 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase">
                    Verified
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
                  <FiAward />
                  <span>{cert.issuer}</span>
                  <span className="text-white/20">•</span>
                  <FiCalendar />
                  <span>{cert.date}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-white/50 text-base leading-relaxed mb-8">
                  {cert.description}
                </p>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors group/btn"
                >
                  {lang === 'id' ? 'Verifikasi Sertifikat' : 'Verify Credential'}
                  <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
