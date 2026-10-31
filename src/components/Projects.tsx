import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectDrawer } from './ProjectDrawer';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Globe,
  Smartphone,
  Database,
  Shield,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch gesture support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  }, []);

  // Autoplay every 5s if user does not interact or hover
  useEffect(() => {
    if (isPaused || selectedProject) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, selectedProject, handleNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Keyboard navigation when drawer is closed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedProject]);

  // Project highlights helper
  const getProjectHighlights = (project: ProjectItem) => {
    if (project.id === 'edunotify') {
      return [
        { icon: Globe, color: 'text-sky-500', text: 'Aplicação Web Administrativa' },
        { icon: Smartphone, color: 'text-emerald-500', text: 'App Móvel para Responsáveis' },
        { icon: Database, color: 'text-amber-500', text: 'Modelagem Relacional Segura' },
        { icon: Shield, color: 'text-purple-500', text: 'Autorização por Escopo (RBAC)' },
      ];
    }
    return project.featuresCompleted.slice(0, 4).map((feat) => ({
      icon: CheckCircle,
      color: 'text-emerald-500',
      text: feat,
    }));
  };

  return (
    <section id="projetos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Enlarged Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
              Projetos <span className="text-zinc-950 dark:text-white font-extrabold">em destaque</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
              Aplicações, arquitetura, experimentação e soluções digitais.
            </p>
          </div>

          {/* Project Counter */}
          <div className="self-end sm:self-auto">
            <span className="font-mono text-sm sm:text-base font-bold text-zinc-400 dark:text-zinc-500">
              <span className="text-zinc-950 dark:text-white text-xl sm:text-2xl font-black">
                0{activeIndex + 1}
              </span>{' '}
              / 0{PROJECTS.length}
            </span>
          </div>
        </div>

        {/* Quick Project Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-2">
          {PROJECTS.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md scale-105'
                    : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'
                  }`}
                />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Showcase Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Navigation Arrow: Previous (Desktop) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-white hover:bg-zinc-950 dark:hover:bg-white dark:hover:text-zinc-950 shadow-[0_10px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-black/10 dark:border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
          </button>

          {/* Side Navigation Arrow: Next (Desktop) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-white hover:bg-zinc-950 dark:hover:bg-white dark:hover:text-zinc-950 shadow-[0_10px_30px_rgba(0,0,0,0.18)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-black/10 dark:border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
          </button>

          {/* Masked Slider Area: 100% full width per card with no partial cutoffs */}
          <div
            className="overflow-hidden rounded-[16px] border border-black/8 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white dark:bg-zinc-900"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {PROJECTS.map((project, idx) => {
                const isMobile =
                  Boolean(project.isMobile) ||
                  project.category.toLowerCase().includes('mobile');

                return (
                  <div
                    key={project.id}
                    className="w-full shrink-0 min-w-full p-8 sm:p-10 lg:p-12 flex flex-col justify-center min-h-[480px] lg:min-h-[530px]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Left Column: Details & Tech */}
                      <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                        {/* Category & Project Counter */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                            PROJETO 0{idx + 1} DE 0{PROJECTS.length}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-base sm:text-lg font-medium text-zinc-500 dark:text-zinc-400 mt-2">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Overview */}
                        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
                          {project.overview}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          {getProjectHighlights(project).map((hl, i) => {
                            const IconComp = hl.icon;
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                              >
                                <IconComp className={`w-4 h-4 ${hl.color} shrink-0`} />
                                <span className="truncate">{hl.text}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.slice(0, 7).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 7 && (
                            <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100/60 dark:bg-zinc-800/60 text-zinc-500">
                              +{project.technologies.length - 7}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold text-sm tracking-tight transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                          >
                            <span>Ver detalhes e arquitetura</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {project.demoUrl && project.demoUrl !== '#' && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-[10px] text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >
                              <span>Demo online</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Visual Mockup / Interface Preview */}
                      <div className="lg:col-span-6 flex justify-center items-center w-full">
                        {isMobile ? (
                          /* Smartphone Frame for Mobile Apps */
                          <div className="flex flex-col items-center w-full py-1">
                            {/* Mobile App Label Bar */}
                            <div className="flex items-center justify-between w-full max-w-[195px] sm:max-w-[210px] lg:max-w-[225px] mb-2 px-1">
                              <span className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                                {project.id}.mobile
                              </span>
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-700/70 text-zinc-700 dark:text-zinc-300 font-semibold uppercase flex items-center gap-1.5">
                                <Smartphone className="w-3 h-3 text-emerald-500" />
                                Mobile App
                              </span>
                            </div>

                            {/* Authentic Smartphone Chassis */}
                            <div className="relative w-[195px] sm:w-[210px] lg:w-[225px] aspect-[9/19] rounded-[38px] sm:rounded-[40px] p-[8px] sm:p-[9px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-950 border-[3px] border-zinc-700/80 dark:border-zinc-600/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
                              {/* Physical Hardware Buttons (Volume & Power) */}
                              <span className="absolute -left-[4.5px] top-[70px] w-[3px] h-6 bg-zinc-600 dark:bg-zinc-500 rounded-l-sm" />
                              <span className="absolute -left-[4.5px] top-[104px] w-[3px] h-9 bg-zinc-600 dark:bg-zinc-500 rounded-l-sm" />
                              <span className="absolute -left-[4.5px] top-[148px] w-[3px] h-9 bg-zinc-600 dark:bg-zinc-500 rounded-l-sm" />
                              <span className="absolute -right-[4.5px] top-[92px] w-[3px] h-12 bg-zinc-600 dark:bg-zinc-500 rounded-r-sm" />

                              {/* Screen Glass Area */}
                              <div className="relative w-full h-full rounded-[30px] sm:rounded-[32px] overflow-hidden bg-black flex flex-col group/screen">
                                {/* Dynamic Island & Status Bar */}
                                <div className="absolute top-0 inset-x-0 z-30 pt-1.5 px-3.5 flex items-center justify-between text-[9px] font-semibold text-white/90 select-none pointer-events-none">
                                  <span>9:41</span>
                                  <div className="h-[15px] sm:h-[17px] w-[62px] sm:w-[68px] bg-black rounded-full mx-auto flex items-center justify-between px-2 border border-white/10 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-zinc-900 ring-1 ring-zinc-700/60" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-950/80 ring-1 ring-blue-500/30" />
                                  </div>
                                  <div className="w-4 flex justify-end">
                                    <div className="w-3.5 h-2 border border-white/80 rounded-[2px] p-[1px] flex items-center">
                                      <div className="w-full h-full bg-white/80 rounded-[1px]" />
                                    </div>
                                  </div>
                                </div>

                                {/* Media Content (Complete Vertical GIF / Video) */}
                                {project.image ? (
                                  <img
                                    src={project.image}
                                    alt={`Interface do app ${project.title}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/screen:scale-102"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 p-6 text-center">
                                    <Smartphone className="w-10 h-10 mb-2" />
                                    <span className="text-xs font-medium">{project.title}</span>
                                  </div>
                                )}

                                {/* Bottom Home Indicator Bar */}
                                <div className="absolute bottom-1 inset-x-0 z-30 flex justify-center pointer-events-none">
                                  <div className="w-20 sm:w-24 h-1 bg-white/40 rounded-full backdrop-blur-sm" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Desktop Browser Mockup - Significantly Enlarged */
                          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl bg-zinc-50 dark:bg-zinc-800 rounded-[14px] p-[8px] border border-zinc-200/80 dark:border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col gap-2 font-sans">
                            {/* Window Header: App Name & Stack Badge */}
                            <div className="flex items-center justify-between px-1.5 py-1 border-b border-zinc-200/60 dark:border-zinc-700/60">
                              <span className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                                {project.id}.app
                              </span>
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-700/70 text-zinc-700 dark:text-zinc-300 font-semibold uppercase">
                                {project.category}
                              </span>
                            </div>

                            {/* Project Image Preview or Fallback */}
                            <div className="relative rounded-[10px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-700/60 aspect-[16/10] flex items-center justify-center group/img">
                              {project.image ? (
                                <img
                                  src={project.image}
                                  alt={`Interface do projeto ${project.title}`}
                                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="flex flex-col items-center justify-center text-zinc-400 p-6 text-center">
                                  <Layers className="w-8 h-8 mb-2" />
                                  <span className="text-xs font-medium">{project.title}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Indicators / Mobile Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-1">
          {/* Mobile Previous Button */}
          <button
            onClick={handlePrev}
            className="sm:hidden w-full py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Projeto Anterior</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2.5 mx-auto">
            {PROJECTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-10 bg-zinc-950 dark:bg-white shadow-sm'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
                }`}
                aria-label={`Ir para ${p.title}`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={handleNext}
            className="sm:hidden w-full py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Próximo Projeto</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Slide-over Side Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
};


