
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

const Showreel: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="reel" className="py-4 md:py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="2025 Reel" subtitle="Composite Highlights" />
                <div className="relative aspect-video w-full bg-zinc-900 border border-zinc-900 group overflow-hidden">
                    {!isPlaying ? (
                        <>
                            <img
                                src="/ShowReelThumbnail.png"
                                className="w-full h-full object-cover opacity-60"
                                alt="Showreel Preview"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="flex flex-col items-center gap-4 group"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-black ml-1 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors font-bold">Watch Playreel</span>
                                </button>
                            </div>
                        </>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/lrNiOqat4ZU?autoplay=1&rel=0"
                            title="2025 Reel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Showreel;
