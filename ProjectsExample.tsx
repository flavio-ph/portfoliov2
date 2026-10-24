import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLink, Github, Layers, X, Loader } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const filteredProjects = activeTab === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  const handleOpenModal = (image: string) => {
    setSelectedDemo(image);
    setIsImageLoading(true);
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-pink-500">Portfólio</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Projetos em Destaque</h3>
        </div>

        {/* Modern Pills Filter */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-slate-200/50 dark:bg-white/5 rounded-full backdrop-blur-sm border border-slate-200 dark:border-white/10">
            {['Todos', 'Front-end', 'Full-stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                  ? 'bg-white dark:bg-white/10 text-pink-500 shadow-lg shadow-pink-500/10 scale-105'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/40 dark:bg-[#0f0f12]/40 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/5 hover:border-pink-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container with Overlay Effect */}
              <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <ExternalLink size={16} />
                    Ver Detalhes
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-pink-500 border border-pink-500/20 shadow-lg">
                  {project.category}
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                        <Layers size={12} className="text-indigo-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-white/5">

                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-slate-900 text-white border border-white/20 text-sm font-bold rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Visualização da Demo */}
      {selectedDemo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedDemo(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedDemo(null)}
              className="absolute -top-12 right-0 md:-right-4 text-white/70 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Loading Indicator */}
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader className="w-12 h-12 text-pink-500 animate-spin" />
              </div>
            )}

            {/* Imagem em tamanho ampliado */}
            <img
              src={selectedDemo}
              alt="Project Demo Preview"
              className={`max-w-5xl w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 transition-all duration-300 ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-in zoom-in-95'}`}
              onLoad={() => setIsImageLoading(false)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;