import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ProjectItem, PROJECTS } from '../data/portfolioData';
import {
  X,
  CheckCircle2,
  Clock,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronRight,
  Github,
  ExternalLink,
} from 'lucide-react';

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  // Listen for Escape key to close drawer
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Subtle Backdrop - Click to dismiss, does not trap the view */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Side Drawer Container */}
      <aside
        className="relative z-10 w-full max-w-2xl h-full bg-white dark:bg-[#111114] text-zinc-900 dark:text-zinc-100 shadow-2xl border-l border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between overflow-hidden animate-slideInRight"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
      >
        {/* Sticky Drawer Top Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Detalhes do Projeto
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar painel de detalhes"
            >
              <span>Fechar</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Project Switcher Tabs */}
        <div className="px-6 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/60 border-b border-zinc-100 dark:border-zinc-800/60 overflow-x-auto no-scrollbar flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 shrink-0 mr-1">
            Projetos:
          </span>
          {PROJECTS.map((p) => {
            const isActive = p.id === project.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectProject(p)}
                className={`px-3 py-1 rounded-[10px] text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-sm'
                    : 'bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 sm:px-8 py-6 space-y-8">
          {/* Header Info */}
          <div>
            <h3
              id="drawer-project-title"
              className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 dark:text-white"
            >
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
              {project.subtitle}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Action Links: GitHub & Live Demo */}
            <div className="flex flex-wrap gap-2.5 mt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Código no GitHub</span>
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Acessar Aplicação / Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Preview Image / GIF */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
              <img
                src={project.image}
                alt={`Preview de ${project.title}`}
                loading="lazy"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Visão Geral
            </h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Cards */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Desafio Técnico & Negócio
              </h5>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-200/50 dark:border-sky-900/40">
              <h5 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                Solução Implementada
              </h5>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Main Contributions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-zinc-500" />
              Minhas Contribuições Principais
            </h4>
            <ul className="space-y-2.5">
              {project.myContribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed Features */}
          <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200/70 dark:border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Funcionalidades Implementadas
            </h4>
            <div className="space-y-2">
              {project.featuresCompleted.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In Development Features */}
          {project.featuresInDevelopment && project.featuresInDevelopment.length > 0 && (
            <div className="p-5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                Funcionalidades Em Desenvolvimento
              </h4>
              <div className="space-y-2">
                {project.featuresInDevelopment.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Next Project & Close Action */}
        <div className="p-5 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[10px] text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Fechar
          </button>

          {/* Next Project shortcut */}
          {(() => {
            const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
            const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
            return (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs transition-colors cursor-pointer"
              >
                <span>Próximo: {nextProject.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            );
          })()}
        </div>
      </aside>
    </div>,
    document.body
  );
};
