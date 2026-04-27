import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link?: string;
  tags?: string[];
}

export default function ProjectCard({ title, category, image, link = "#", tags = [] }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-white/20">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white/90">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-wider text-white/30">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <a 
            href={link} 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white hover:text-black shrink-0"
          >
            <FiArrowUpRight className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
