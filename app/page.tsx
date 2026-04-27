"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import ProjectCard from "@/components/ProjectCard"
import StatCard from "@/components/StatCard"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { FiTarget, FiUsers, FiAward, FiZap } from 'react-icons/fi'
import image2 from "@/public/2.png"
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiFramer, SiNodedotjs, SiFigma } from 'react-icons/si';

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

export default function Home() {
  const projects = [
    {
      title: "Ela",
      category: "Streaming Platform",
      image: image2,
      tags: ["React", "D3.js", "Firebase", "API"],
      link: "#"
    },
    {
      title: "AProject",
      category: "Digital Store",
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
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">01 // Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Crafting Digital <br /> Excellence
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Saya adalah seorang pengembang yang berfokus pada detail dan performa.
              Membangun pengalaman web yang tidak hanya berfungsi dengan baik,
              tapi juga memanjakan mata melalui animasi yang halus dan desain yang modern.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>Premium User Experience</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>High-End Animations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ScrollStack useWindowScroll={true} className="!p-0">
              <ScrollStackItem>
                <div className="h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <span className="text-2xl text-blue-400">🎨</span>
                    </div>
                    <h2 className="text-3xl font-bold">Frontend Developer</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Expert in crafting responsive, performant, and accessible user interfaces.
                    I focus on motion design and micro-interactions that make websites feel alive.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind', 'GSAP', 'Framer Motion'].map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem>
                <div className="h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <span className="text-2xl text-purple-400">⚙️</span>
                    </div>
                    <h2 className="text-3xl font-bold">Backend Architect</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Designing scalable APIs and robust database structures.
                    Focusing on security, data integrity, and high-performance server logic.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'].map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem>
                <div className="h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <span className="text-2xl text-emerald-400">🚀</span>
                    </div>
                    <h2 className="text-3xl font-bold">Fullstack Engineer</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Bridging the gap between design and technology.
                    I deliver end-to-end solutions that are fast to market and easy to scale.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {['TypeScript', 'AWS', 'GraphQL', 'Prisma', 'NextAuth'].map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-emerald-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </section>

        <div className="py-24 overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Trusted Technologies</span>
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
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">02 // Portfolio</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Featured Projects
              </h2>
              <p className="text-white/50 max-w-sm text-lg">
                Pilihan proyek terbaik yang menggabungkan estetika desain dengan kecanggihan teknologi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            <StatCard value="2" label="Projects Done" icon={<FiTarget size={24} />} />
            <StatCard value="0" label="Happy Clients" icon={<FiUsers size={24} />} />
            <StatCard value="1" label="Awards Won" icon={<FiAward size={24} />} />
            <StatCard value="3+" label="Years Exp" icon={<FiZap size={24} />} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
