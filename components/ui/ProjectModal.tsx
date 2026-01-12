
import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { getTechnicalBreakdown } from '../../services/geminiService';
import ComparisonSlider from './ComparisonSlider';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const [breakdown, setBreakdown] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'visual' | 'comparison'>(project.beforeThumbnail ? 'comparison' : 'visual');

    const fetchBreakdown = async () => {
        setLoading(true);
        const result = await getTechnicalBreakdown(project.title, project.description);
        setBreakdown(result || "No data available.");
        setLoading(false);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[60] flex items-start md:items-center justify-center p-4 md:p-8 bg-black/98 backdrop-blur-xl overflow-y-auto">
            <button
                onClick={onClose}
                className="fixed top-4 right-4 md:top-8 md:right-8 text-zinc-500 hover:text-white z-[70] transition-colors p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="max-w-6xl w-full bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800/50 my-auto shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Main Visual Content (Reel or Slider) */}
                    <div className="lg:col-span-8 bg-black flex flex-col">
                        <div className="relative aspect-video flex-grow">
                            {activeTab === 'visual' ? (
                                project.youtubeId ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-cover"
                                    ></iframe>
                                ) : project.videoUrl ? (
                                    <video
                                        src={project.videoUrl}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        muted
                                    />
                                ) : (
                                    <img src={project.thumbnail} className="w-full h-full object-cover" alt={project.title} />
                                )
                            ) : (
                                project.beforeThumbnail && (
                                    <ComparisonSlider before={project.beforeThumbnail} after={project.thumbnail} />
                                )
                            )}
                        </div>

                        {project.beforeThumbnail && (
                            <div className="flex bg-zinc-900/80 p-1 border-t border-zinc-800">
                                <button
                                    onClick={() => setActiveTab('visual')}
                                    className={`flex-1 py-3 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === 'visual' ? 'bg-zinc-800 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    {project.videoUrl || project.youtubeId ? 'Watch Reel' : 'Final Render'}
                                </button>
                                <button
                                    onClick={() => setActiveTab('comparison')}
                                    className={`flex-1 py-3 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === 'comparison' ? 'bg-zinc-800 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                                >
                                    Breakdown Slider
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Details Panel */}
                    <div className="lg:col-span-4 p-6 md:p-10 border-t lg:border-t-0 lg:border-l border-zinc-800 flex flex-col h-full bg-zinc-950/30">
                        <div className="flex-grow">
                            <p className="text-zinc-600 text-[9px] md:text-[10px] mb-2 uppercase tracking-[0.3em] font-bold">{project.category}</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">{project.title}</h2>
                            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{project.description}</p>

                            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                                <div>
                                    <h4 className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600 mb-2 md:mb-3 font-bold">Toolkit</h4>
                                    <div className="flex flex-wrap gap-1 md:gap-2">
                                        {project.software.map(s => (
                                            <span key={s} className="px-2 py-0.5 md:px-3 md:py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[8px] md:text-[10px] rounded-sm">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600 mb-2 md:mb-3 font-bold">Year</h4>
                                    <p className="text-xs md:text-sm text-zinc-300 font-mono">{project.year}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 md:pt-8 border-t border-zinc-900">
                            <button
                                onClick={fetchBreakdown}
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-3 py-3 md:py-4 bg-zinc-900 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {loading ? 'Processing...' : 'Technical Insights'}
                            </button>
                            {breakdown && (
                                <div className="mt-4 md:mt-6 p-4 md:p-6 bg-black/60 rounded-sm border border-zinc-800 animate-in fade-in slide-in-from-bottom-2 max-h-48 overflow-y-auto">
                                    <div className="text-[10px] md:text-[11px] text-zinc-500 whitespace-pre-line leading-relaxed italic">
                                        {breakdown}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
