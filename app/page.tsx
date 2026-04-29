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
import AboutProfile from "@/components/AboutProfile";
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

  const t = (content as any)[lang] || content.id;
  const p = (productsData as any)[lang] || productsData.id;

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

      {/* Container 1: Hero, Expertise, Approach */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <Hero />
        
        {/* Expertise Section */}
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
              {t.expertisePoints.map((point: any, i: number) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className={`w-1.5 h-1.5 rounded-full ${point.color}`}></div>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <ScrollStack useWindowScroll={true} className="!p-0">
              {t.roles.map((role: any, i: number) => (
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
                      {role.techs.map((tech: string) => (
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

        {/* Work Philosophy / Approach */}
        <div id="approach" className="py-32 border-t border-white/5 bg-gradient-to-b from-black via-blue-900/5 to-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">01.5 // {lang === 'id' ? 'Filosofi Kerja' : 'Work Philosophy'}</span>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                {lang === 'id' ? 'Satu Orang,' : 'One Man,'} <br /> 
                <span className="text-blue-500">{lang === 'id' ? 'Banyak Solusi' : 'Endless Solutions'}</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed">
                {lang === 'id' 
                  ? "Saya tidak cuma nulis kode. Saya membangun identitas digital kamu. Sebagai solo developer, saya memberikan perhatian penuh pada setiap detail yang biasanya terlewatkan oleh tim besar." 
                  : "I don't just write code. I build your digital identity. As a solo developer, I give full attention to every detail that big teams usually overlook."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: lang === 'id' ? 'Komunikasi Langsung' : 'Direct Communication', 
                  desc: lang === 'id' ? 'Kamu bicara langsung dengan developernya. Nggak ada salah paham, nggak ada perantara.' : 'You speak directly to the developer. No misunderstandings, no middlemen.',
                  icon: <FiMessageCircle className="text-blue-400" /> 
                },
                { 
                  title: lang === 'id' ? 'Eksekusi Cepat' : 'Agile Execution', 
                  desc: lang === 'id' ? 'Tanpa birokrasi perusahaan. Ide kamu bisa langsung jadi kode dalam waktu singkat.' : 'No corporate bureaucracy. Your ideas turn into code in no time.',
                  icon: <FiZap className="text-yellow-400" /> 
                },
                { 
                  title: lang === 'id' ? 'Kualitas Personal' : 'Personal Quality', 
                  desc: lang === 'id' ? 'Setiap baris kode adalah reputasi saya. Saya pastikan hasilnya pixel-perfect.' : 'Every line of code is my reputation. I ensure pixel-perfect results.',
                  icon: <FiAward className="text-emerald-400" /> 
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* End Container 1 */}

      {/* FULL WIDTH SECTION: About Me */}
      <section id="about-me" className="py-32 border-y border-white/5 relative overflow-hidden bg-black w-full">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Left: THE MASSIVE PHOTO */}
          <div className="w-full lg:w-1/2 px-6 lg:px-12">
            <AboutProfile 
              name="Remon"
              title={lang === 'id' ? "Fullstack Developer" : "Fullstack Developer"}
              handle="afterlife.remon"
              avatarUrl="/2.png"
            />
          </div>
          
          {/* Right: Content */}
          <div className="w-full lg:w-1/2 px-6 lg:px-20 py-16 lg:py-0">
            <div className="max-w-xl">
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">01.7 // {lang === 'id' ? 'Tentang Saya' : 'About Me'}</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-tight">
                {lang === 'id' ? 'Di Balik Layar' : 'Behind the Screens'} <br /> 
                <span className="text-blue-500">Afterlife.</span>
              </h2>
              
              <div className="space-y-8 text-white/50 text-xl leading-relaxed">
                <p>
                  {lang === 'id' 
                    ? "Halo! Saya Remon, otak dan penggerak di balik Afterlife. Saya adalah seorang developer yang terobsesi dengan detail, performa, dan estetika digital."
                    : "Hi! I'm Remon, the mind and engine behind Afterlife. I'm a developer obsessed with details, performance, and digital aesthetics."}
                </p>
                <p>
                  {lang === 'id'
                    ? "Memulai perjalanan sebagai solo developer mengajarkan saya satu hal: kualitas tidak butuh tim besar, tapi butuh dedikasi besar. Di sini, setiap proyek saya tangani sendiri untuk memastikan standar 'Afterlife' tetap terjaga."
                    : "Starting my journey as a solo developer taught me one thing: quality doesn't need a large team, it needs great dedication. Here, I handle every project personally to ensure the 'Afterlife' standard is maintained."}
                </p>
                
                <div className="pt-10 flex gap-12">
                  <div>
                    <h4 className="text-white font-bold text-5xl mb-2 italic tracking-tighter">3+</h4>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">{lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience'}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-5xl mb-2 italic tracking-tighter">10+</h4>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">{lang === 'id' ? 'Proyek Selesai' : 'Projects Completed'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container 2: Tech, Portfolio, Services */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="py-24 overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">{t.techLabel}</span>
          </div>
          <LogoLoop logos={techLogos} speed={40} direction="left" logoHeight={40} gap={80} scaleOnHover fadeOut fadeOutColor="black" />
        </div>

        <section id="project" className="py-32 border-t border-white/5">
          <div className="mb-16">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">{t.portfolioLabel}</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">{t.portfolioTitle}</h2>
              <p className="text-white/50 max-w-sm text-lg">{t.portfolioDesc}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {t.stats.map((stat: any, i: number) => (
              <StatCard key={i} value={stat.value} label={stat.label} icon={i === 0 ? <FiTarget size={24} /> : i === 1 ? <FiUsers size={24} /> : i === 2 ? <FiAward size={24} /> : <FiZap size={24} />} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}><ProjectCard {...project} /></div>
            ))}
          </div>
        </section>

        <section id="services" className="py-32 border-t border-white/5">
          <div className="mb-16">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">{t.servicesLabel}</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">{t.servicesTitle}</h2>
              <p className="text-white/50 max-w-sm text-lg">{t.servicesDesc}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.products.map((service: any, index: number) => {
              let icon = <FiGlobe />;
              const nameLower = service.name.toLowerCase();
              if (nameLower.includes('whatsapp')) icon = <FiMessageCircle />;
              if (nameLower.includes('server')) icon = <FiServer />;
              if (nameLower.includes('landing page')) icon = <FiLayers />;
              if (nameLower.includes('api') || nameLower.includes('backend')) icon = <FiCpu />;
              const waMessage = encodeURIComponent(`Halo Afterlife, saya tertarik dengan layanan: ${service.name}`);
              const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${waMessage}`;
              return (
                <ServiceCard key={index} name={service.name} price={service.price} description={service.description} icon={icon} index={index} serviceLink={waLink} />
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
