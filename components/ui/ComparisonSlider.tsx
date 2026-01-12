
import React, { useState, useRef, useCallback } from 'react';

const ComparisonSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, position)));
    }, []);

    const onMouseDown = () => {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', () => window.removeEventListener('mousemove', handleMove));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        // Prevent scrolling when using the slider on mobile
        window.addEventListener('touchmove', handleMove, { passive: false });
        window.addEventListener('touchend', () => window.removeEventListener('touchmove', handleMove));
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden cursor-ew-resize bg-zinc-900 select-none group"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
        >
            {/* Before Image */}
            {/* Before Image - Now Overlay (Left) */}
            <img src={after} alt="Final VFX" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/60 px-2 py-1 text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-300 font-bold">Plate</div>

            {/* After Image - Now Background (Right) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={before}
                    alt="Original Plate"
                    className="absolute inset-0 w-[100vw] h-full object-cover max-w-none"
                    style={{ width: containerRef.current?.offsetWidth }}
                />
            </div>
            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/20 px-2 py-1 text-[8px] md:text-[10px] uppercase tracking-widest text-white font-bold backdrop-blur-sm">Final</div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-10 cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-2xl -ml-[1px] group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" transform="rotate(-90 10 10)" />
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" transform="rotate(90 10 10)" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSlider;
