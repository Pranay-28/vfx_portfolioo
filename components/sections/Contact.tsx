
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 md:py-48 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <p className="text-zinc-700 text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-8 md:mb-12 font-bold">Inquiries</p>
                <a href="mailto:rohitdahale821@gmail.com" className="text-2xl sm:text-2xl md:text-6xl lg:text-4xl font-bold tracking-tighter hover:text-zinc-700 transition-all duration-700 text-center mb-16 md:mb-24 leading-none break-all sm:break-normal">
                    rohitdahale821@gmail.com
                </a>
                <a href="tel:+919049147145" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-2xl md:text-6xl lg:text-4xl font-bold tracking-tighter hover:text-zinc-700 transition-all duration-700 text-center mb-16 md:mb-24 leading-none break-all sm:break-normal">
                    +91 9049147145
                </a>


                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 pt-8 md:pt-12 border-t border-zinc-900">
                    <div className="flex gap-8 md:gap-12 text-zinc-600 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                        <a href="https://www.instagram.com/clout_gg_?igsh=MWh5dmRuZ3Y4MTJtZw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/in/rohit-dahale-24162036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>

                    </div>
                    <div className="text-zinc-800 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center">
                        © 2026 India Based artist.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
