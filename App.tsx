
import React, { useState } from 'react';
import { PROJECTS } from './constants';
import { Project, ProjectCategory } from './types';

// UI Components
import Navbar from './components/ui/Navbar';
import ProjectModal from './components/ui/ProjectModal';

// Section Components
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Showreel from './components/sections/Showreel';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Hero />

      <Showreel />

      <Projects
        projects={filteredProjects}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onProjectSelect={setSelectedProject}
      />



      <About />

      <Contact />

      {/* Modal Render */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;
