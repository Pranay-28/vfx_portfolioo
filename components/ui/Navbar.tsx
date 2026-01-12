
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter hover:text-white transition-colors">
                        CloutFX
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-widest uppercase">
                        <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Works</a>
                        <a href="#reel" className="text-zinc-400 hover:text-white transition-colors">Showreel</a>
                        <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
                        <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                    >
                        {mobileMenuOpen ? 'Close' : 'Menu'}
                        <div className="w-4 h-4 flex flex-col justify-center gap-1">
                            <span className={`h-[1px] bg-zinc-500 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
                            <span className={`h-[1px] bg-zinc-500 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold italic tracking-tighter">
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-500">Works</a>
                    <a href="#reel" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-500">Showreel</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-500">About</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-zinc-500">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
