
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover opacity-10 grayscale"
                    alt="Hero Background"
                />
                <div className="absolute inset-0 vfx-gradient"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 pt-24 pb-2 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
                    {/* Main Headline */}
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-4 md:mb-8">
                            <span className="w-6 md:w-8 h-[1px] bg-zinc-700"></span>
                            <p className="text-zinc-500 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] font-bold">VFX Artist</p>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 md:mb-10 italic leading-[0.9] sm:leading-[0.85]">
                            PIXEL <br />
                            <span className="text-zinc-800">PERFECT</span><br />
                            STORY
                        </h1>
                    </div>

                    {/* Personal Intro Blurb */}
                    <div className="lg:col-span-4 lg:pb-12 border-l border-zinc-900 pl-6 md:pl-8 order-1 lg:order-2">
                        <p className="text-white text-base md:text-xl font-light leading-relaxed serif italic mb-6 md:mb-8">
                            "Bridging physics-based accuracy and cinematic wonder."
                        </p>
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-sm">
                                Hi, I'm <span className="text-white font-bold">Rohit Dahale</span>. A VFX Artist crafting high-fidelity simulations for international features. With two years of experience Specialized in creating seamless visual effects and high-quality digital assets. With a strong focus on detail, realism, and efficient production workflows.
                            </p>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/50 animate-pulse"></div>
                                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">India / Remote</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8">
                            <a href="#projects" className="group flex items-center gap-3 md:gap-4 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                                <span className="w-6 md:w-8 h-[1px] bg-zinc-800 group-hover:w-12 md:group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
                                Work
                            </a>
                            <a href="#reel" className="group flex items-center gap-3 md:gap-4 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                                Reel
                                <span className="w-6 md:w-8 h-[1px] bg-zinc-800 group-hover:w-12 md:group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Background Text Scroll */}
            {/* <div className="absolute bottom-12 right-12 hidden xl:block select-none opacity-5 pointer-events-none overflow-hidden">
                <span className="text-[200px] font-black tracking-tighter whitespace-nowrap leading-none">CGI_SIM_VFX</span>
            </div> */}
        </section>
    );
};

export default Hero;
