import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ProjectItem } from '../data/portfolioData';
import { X, CheckCircle2, Clock, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[88vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-10 text-zinc-900 dark:text-zinc-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 dark:focus-visible:ring-zinc-200"
          aria-label="Fechar detalhes do projeto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1">
            {project.category}
          </span>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-800">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Visão Geral
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300">{project.overview}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[10px] bg-zinc-50 dark:bg-zinc-850/70 border border-black/5 dark:border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Desafio Técnico & Negócio
              </h5>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-[10px] bg-zinc-50 dark:bg-zinc-850/70 border border-black/5 dark:border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Solução Implementada
              </h5>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Contributions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Minhas Contribuições Principais
            </h4>
            <ul className="space-y-2">
              {project.myContribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Completed */}
          <div className="p-6 rounded-[10px] bg-[#F7F7F7] dark:bg-zinc-800/50 border border-black/5 dark:border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Funcionalidades Implementadas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.featuresCompleted.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features In Development if any */}
          {project.featuresInDevelopment && project.featuresInDevelopment.length > 0 && (
            <div className="p-6 rounded-[10px] bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Funcionalidades Em Desenvolvimento
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-[10px] bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
