import React from 'react';
import { motion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  serviceLink?: string;
}

export default function ServiceCard({ name, price, description, icon, index, serviceLink }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
            <span className="text-2xl text-blue-400">{icon}</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-1">Starting from</span>
            <span className="text-blue-400 font-bold">{price}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{name}</h3>
        <p className="text-white/60 leading-relaxed text-sm mb-8">
          {description}
        </p>

        <a
          href={serviceLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-medium group/btn cursor-pointer"
        >
          <span>Get Started</span>
          <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Hover Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      </div>
    </motion.div>
  );
}