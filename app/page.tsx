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
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">01 // Keahlian</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Membangun Digital <br /> Berkelas
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Saya adalah seorang developer yang berfokus pada detail dan performa.
              Membangun pengalaman web yang tidak hanya berfungsi dengan baik,
              tapi juga memanjakan mata lewat animasi yang halus dan desain yang modern.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>Pengalaman Pengguna Premium</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                <span>Arsitektur yang Skalabel</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Animasi Berkualitas Tinggi</span>
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
                    <h3 className="text-3xl font-bold">Frontend Developer</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Ahli dalam membangun antarmuka yang responsif, cepat, dan mudah diakses.
                    Saya fokus pada motion design dan micro-interaction yang membuat website terasa hidup.
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
                    <h3 className="text-3xl font-bold">Backend Architect</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Merancang API yang skalabel dan struktur database yang tangguh.
                    Fokus pada keamanan, integritas data, dan logika server berkinerja tinggi.
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
                    <h3 className="text-3xl font-bold">Fullstack Engineer</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Menjembatani desain dan teknologi menjadi satu solusi utuh.
                    Saya menghadirkan solusi end-to-end yang cepat diluncurkan dan mudah dikembangkan.
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
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Teknologi yang Digunakan</span>
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
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">02 // Portofolio</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Proyek Pilihan
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

        {/* Section Services / Products */}
        <section id="services" className="py-32 border-t border-white/5">
          <div className="mb-16">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">03 // Layanan</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Layanan Premium
              </h2>
              <p className="text-white/50 max-w-sm text-lg">
                Layanan profesional yang dirancang untuk membantu bisnismu tumbuh lebih cepat dan efisien.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.products.map((service, index) => {
              // Assign icons based on service name
              let icon = <FiGlobe />;
              if (service.name.toLowerCase().includes('whatsapp')) icon = <FiMessageCircle />;
              if (service.name.toLowerCase().includes('server')) icon = <FiServer />;
              if (service.name.toLowerCase().includes('landing page')) icon = <FiLayers />;
              if (service.name.toLowerCase().includes('api') || service.name.toLowerCase().includes('backend')) icon = <FiCpu />;
              
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
  )
}
