
import React from 'react';
import { Project, ProjectCategory } from '../../types';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

interface ProjectsProps {
    projects: Project[];
    selectedCategory: ProjectCategory | 'All';
    onCategorySelect: (category: ProjectCategory | 'All') => void;
    onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, selectedCategory, onCategorySelect, onProjectSelect }) => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-black border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8">
                    <SectionTitle title="Projects" subtitle="Selected Portfolio" />

                    <div className="flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] pb-4 md:pb-8 border-b border-zinc-900/50 md:border-transparent">
                        {['All', ...Object.values(ProjectCategory)].map(cat => (
                            <button
                                key={cat}
                                onClick={() => onCategorySelect(cat as any)}
                                className={`pb-1 md:pb-2 border-b transition-all ${selectedCategory === cat ? 'border-white text-white' : 'border-transparent text-zinc-700 hover:text-zinc-400'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} onSelect={onProjectSelect} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
