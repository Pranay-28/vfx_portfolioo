
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { EXPERIENCES } from '../../constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                <div className="md:col-span-7">
                    <SectionTitle title="Profile" subtitle="" />
                    <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-snug mb-8 md:mb-12 serif italic">
                        Pushing boundaries of photorealism through advanced compositing.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-zinc-500 text-xs md:text-sm leading-relaxed">
                        <p>A dedicated VFX Artist with a focus on seamless Advanced Compositing and high-end CGI integration. With a deep technical understanding of lighting, lookdev, and multi-pass rendering, I bridge the gap between raw footage and cinematic reality. My goal is always to elevate the narrative through invisible effects and photorealistic environments, ensuring every pixel serves the story.</p>
                        <p>Toolsets include After Effects for high end compositing and Da vinci Resolve for color grading, Blender for CGI.</p>
                    </div>
                </div>

                <div className="md:col-span-5 space-y-12 md:space-y-16">
                    <div>
                        <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-8 md:mb-10 text-zinc-700">Experience</h3>
                        <div className="space-y-8 md:space-y-12">
                            {EXPERIENCES.map(exp => (
                                <div key={exp.id} className="group">
                                    <div className="flex justify-between items-start mb-1 md:mb-2">
                                        <h4 className="text-base md:text-lg font-bold text-white tracking-tight">{exp.company}</h4>
                                        <span className="text-zinc-700 text-[9px] md:text-[10px] font-mono mt-1">{exp.period}</span>
                                    </div>
                                    <p className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-2 md:mb-4">{exp.role}</p>
                                    <p className="text-zinc-600 text-xs leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
