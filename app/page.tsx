"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import ProjectCard from "@/components/ProjectCard"
import StatCard from "@/components/StatCard"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { FiTarget, FiUsers, FiAward, FiZap, FiGlobe, FiMessageCircle, FiServer, FiLayers, FiCpu } from 'react-icons/fi'
import image2 from "@/public/2.png"
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiFramer, SiNodedotjs, SiFigma } from 'react-icons/si';
import ServiceCard from "@/components/ServiceCard";
import { productsData } from "@/data/products";

const techLogos = [
  { node: <SiReact size={40} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript size={40} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript size={40} />, title: "JavaScript", href: "#" },
  { node: <SiFramer size={40} />, title: "Framer Motion", href: "#" },
  { node: <SiNodedotjs size={40} />, title: "Node.js", href: "#" },
  { node: <SiFigma size={40} />, title: "Figma", href: "#" },
];

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const content = {
    id: {
      expertiseLabel: "01 // Keahlian",
      expertiseTitle: "Membangun Digital Berkelas",
      expertiseDesc: "Saya adalah seorang developer yang berfokus pada detail dan performa. Membangun pengalaman web yang tidak hanya berfungsi dengan baik, tapi juga memanjakan mata lewat animasi yang halus dan desain yang modern.",
      expertisePoints: [
        { text: "Pengalaman Pengguna Premium", color: "bg-blue-500" },
        { text: "Arsitektur yang Skalabel", color: "bg-purple-500" },
        { text: "Animasi Berkualitas Tinggi", color: "bg-emerald-500" }
      ],
      roles: [
        {
          title: "Frontend Developer",
          icon: "🎨",
          color: "blue",
          desc: "Ahli dalam membangun antarmuka yang responsif, cepat, dan mudah diakses. Saya fokus pada motion design dan micro-interaction yang membuat website terasa hidup.",
          techs: ['React', 'Next.js', 'Tailwind', 'GSAP', 'Framer Motion']
        },
        {
          title: "Backend Architect",
          icon: "⚙️",
          color: "purple",
          desc: "Merancang API yang skalabel dan struktur database yang tangguh. Fokus pada keamanan, integritas data, dan logika server berkinerja tinggi.",
          techs: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL']
        },
        {
          title: "Fullstack Engineer",
          icon: "🚀",
          color: "emerald",
          desc: "Menjembatani desain dan teknologi menjadi satu solusi utuh. Saya menghadirkan solusi end-to-end yang cepat diluncurkan dan mudah dikembangkan.",
          techs: ['TypeScript', 'AWS', 'GraphQL', 'Prisma', 'NextAuth']
        }
      ],
      techLabel: "Teknologi yang Digunakan",
      portfolioLabel: "02 // Portofolio",
      portfolioTitle: "Proyek Pilihan",
      portfolioDesc: "Pilihan proyek terbaik yang menggabungkan estetika desain dengan kecanggihan teknologi.",
      stats: [
        { label: "Proyek Selesai", value: "2" },
        { label: "Klien Puas", value: "0" },
        { label: "Penghargaan", value: "1" },
        { label: "Tahun Pengalaman", value: "3+" }
      ],
      servicesLabel: "03 // Layanan",
      servicesTitle: "Layanan Premium",
      servicesDesc: "Layanan profesional yang dirancang untuk membantu bisnismu tumbuh lebih cepat dan efisien."
    },
    en: {
      expertiseLabel: "01 // Expertise",
      expertiseTitle: "Building High-Class Digital",
      expertiseDesc: "I am a detail-oriented and performance-driven developer. Building web experiences that not only work well but also delight the eyes through smooth animations and modern design.",
      expertisePoints: [
        { text: "Premium User Experience", color: "bg-blue-500" },
        { text: "Scalable Architecture", color: "bg-purple-500" },
        { text: "High-Quality Animations", color: "bg-emerald-500" }
      ],
      roles: [
        {
          title: "Frontend Developer",
          icon: "🎨",
          color: "blue",
          desc: "Expert in building responsive, fast, and accessible interfaces. I focus on motion design and micro-interactions that make websites feel alive.",
          techs: ['React', 'Next.js', 'Tailwind', 'GSAP', 'Framer Motion']
        },
        {
          title: "Backend Architect",
          icon: "⚙️",
          color: "purple",
          desc: "Designing scalable APIs and robust database structures. Focused on security, data integrity, and high-performance server logic.",
          techs: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL']
        },
        {
          title: "Fullstack Engineer",
          icon: "🚀",
          color: "emerald",
          desc: "Bridging design and technology into a complete solution. I deliver end-to-end solutions that are quick to launch and easy to develop.",
          techs: ['TypeScript', 'AWS', 'GraphQL', 'Prisma', 'NextAuth']
        }
      ],
      techLabel: "Technologies Used",
      portfolioLabel: "02 // Portfolio",
      portfolioTitle: "Featured Projects",
      portfolioDesc: "A selection of the best projects combining design aesthetics with technological sophistication.",
      stats: [
        { label: "Projects Done", value: "2" },
        { label: "Happy Clients", value: "0" },
        { label: "Awards Won", value: "1" },
        { label: "Years Exp", value: "3+" }
      ],
      servicesLabel: "03 // Services",
      servicesTitle: "Premium Services",
      servicesDesc: "Professional services designed to help your business grow faster and more efficiently."
    }
  };

  const t = content[lang];
  const p = productsData[lang];

  const projects = [
    {
      title: "Ela",
      category: lang === 'id' ? "Platform Streaming" : "Streaming Platform",
      image: image2,
      tags: ["React", "D3.js", "Firebase", "API"],
      link: "#"
    },
    {
      title: "AProject",
      category: lang === 'id' ? "Toko Digital" : "Digital Store",
      image: "/projects/luxury.png",
      tags: ["Next.js", "Stripe", "Tailwind", "JS"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <Hero />
        <section id="about" className="grid grid-cols-1 lg:grid-cols-5 gap-12 py-20 lg:py-32 border-t border-white/5 mt-20">
          <div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">{t.expertiseLabel}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              {t.expertiseTitle}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {t.expertiseDesc}
            </p>

            <div className="flex flex-col gap-4">
              {t.expertisePoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className={`w-1.5 h-1.5 rounded-full ${point.color}`}></div>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ScrollStack useWindowScroll={true} className="!p-0">
              {t.roles.map((role, i) => (
                <ScrollStackItem key={i}>
                  <div className="h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${role.color}-500/20 flex items-center justify-center border border-${role.color}-500/30`}>
                        <span className="text-2xl text-blue-400">{role.icon}</span>
                      </div>
                      <h3 className="text-3xl font-bold">{role.title}</h3>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {role.desc}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {role.techs.map(tech => (
                        <span key={tech} className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider ${i === 1 ? 'text-purple-300' : i === 2 ? 'text-emerald-300' : ''}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        <div className="py-24 overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">{t.techLabel}</span>
          </div>
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={40}
            gap={80}
            scaleOnHover
            fadeOut
            fadeOutColor="black"
          />
        </div>

        {/* Section Recent Projects */}
        <section id="project" className="py-32 border-t border-white/5">
          <div className="mb-16">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">{t.portfolioLabel}</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.portfolioTitle}
              </h2>
              <p className="text-white/50 max-w-sm text-lg">
                {t.portfolioDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {t.stats.map((stat, i) => (
              <StatCard key={i} value={stat.value} label={stat.label} icon={i === 0 ? <FiTarget size={24} /> : i === 1 ? <FiUsers size={24} /> : i === 2 ? <FiAward size={24} /> : <FiZap size={24} />} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Section Services / Products */}
        <section id="services" className="py-32 border-t border-white/5">
          <div className="mb-16">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">{t.servicesLabel}</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.servicesTitle}
              </h2>
              <p className="text-white/50 max-w-sm text-lg">
                {t.servicesDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.products.map((service, index) => {
              // Assign icons based on service name (using ID version for logic if needed, or better use index or separate field)
              let icon = <FiGlobe />;
              const nameLower = service.name.toLowerCase();
              if (nameLower.includes('whatsapp')) icon = <FiMessageCircle />;
              if (nameLower.includes('server')) icon = <FiServer />;
              if (nameLower.includes('landing page')) icon = <FiLayers />;
              if (nameLower.includes('api') || nameLower.includes('backend')) icon = <FiCpu />;

              const waMessage = encodeURIComponent(`Halo Afterlife, saya tertarik dengan layanan: ${service.name}`);
              const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${waMessage}`;

              return (
                <ServiceCard
                  key={index}
                  name={service.name}
                  price={service.price}
                  description={service.description}
                  icon={icon}
                  index={index}
                  serviceLink={waLink}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

