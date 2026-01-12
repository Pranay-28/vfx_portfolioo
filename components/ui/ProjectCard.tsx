
import React from 'react';
import { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({ project, onSelect }) => (
    <div
        className="group relative cursor-pointer overflow-hidden aspect-[16/10] bg-zinc-900"
        onClick={() => onSelect(project)}
    >
        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 transform transition-transform duration-500">
            <div className="overflow-hidden">
                <p className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-1 md:mb-2 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category.join(' / ')}</p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-150">{project.title}</h3>
            </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
);

export default ProjectCard;
