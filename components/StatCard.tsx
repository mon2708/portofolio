import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 transition-all hover:bg-white/10">
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-3xl transition-all group-hover:bg-blue-500/20" />
      
      <div className="relative z-10 flex items-center md:items-start gap-4 md:gap-0 md:flex-col">
        {icon && (
          <div className="text-blue-400 md:mb-3 opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent leading-none mb-1">
            {value}
          </h3>
          <p className="text-white/40 font-medium tracking-wider uppercase text-[9px] md:text-[10px]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
