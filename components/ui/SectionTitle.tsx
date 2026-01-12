
import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
    <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4 leading-tight">{title}</h2>
        {subtitle && <p className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs font-semibold">{subtitle}</p>}
        <div className="w-8 md:w-12 h-[2px] bg-zinc-800 mt-4 md:mt-6"></div>
    </div>
);

export default SectionTitle;
