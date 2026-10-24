import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectDrawer } from './ProjectDrawer';
import {
  ArrowRight,
  Shield,
  Smartphone,
  Globe,
  Database,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
            Projetos <span className="text-zinc-950 dark:text-white font-extrabold">em destaque</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
            Aplicações, arquitetura, experimentação e soluções digitais.
          </p>
        </div>

        {/* Featured Project Showcase: EduNotify */}
        <div
          className={`mb-16 rounded-[10px] bg-white dark:bg-zinc-900 border transition-all duration-300 overflow-hidden ${selectedProject?.id === featuredProject.id
            ? 'border-zinc-900 dark:border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-zinc-900 dark:ring-white'
            : 'border-black/5 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]'
            }`}
        >
          <div className="p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">


              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-zinc-500 dark:text-zinc-400 mt-2">
                  {featuredProject.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
                {featuredProject.overview}
              </p>

              {/* Scope & Architecture Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  <Globe className="w-4 h-4 text-sky-500" />
                  <span>Aplicação Web Administrativa</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>App Móvel para Responsáveis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  <Database className="w-4 h-4 text-amber-500" />
                  <span>Modelagem Relacional Segura</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>Autorização por Escopo (RBAC)</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 font-medium text-sm transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>Ver detalhes e arquitetura</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual: Bespoke EduNotify Interface Simulation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-zinc-50 dark:bg-zinc-850 rounded-[10px] p-4 sm:p-5 border border-zinc-200/80 dark:border-zinc-700/80 shadow-md flex flex-col gap-3 font-sans">
                {/* Simulated Web Admin Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      E
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      EduNotify Admin
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold">
                    ATIVO
                  </span>
                </div>

                {/* Simulated Real-Time Access Stream */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Fluxo de Acessos Recentes
                  </span>

                  {/* Item 1 */}
                  <div className="p-2.5 rounded-[10px] bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                          Lucas Silveira
                        </div>
                        <div className="text-[10px] text-zinc-500">9º Ano A · Portaria Principal</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">07:28:14</span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-2.5 rounded-[10px] bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                          Mariana Costa
                        </div>
                        <div className="text-[10px] text-zinc-500">1º Ano Médio · Portão 2</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">07:31:02</span>
                  </div>

                  {/* Guardian Mobile Push Notification Alert */}
                  <div className="mt-2 p-3 rounded-[10px] bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-blue-900 dark:text-blue-200">
                        Notificação Enviada aos Responsáveis
                      </div>
                      <div className="text-[11px] text-blue-700 dark:text-blue-300 leading-snug">
                        Entrada confirmada no sistema às 07:31.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid with Light/Dark Contrast matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => {
            const isDarkCard = project.theme === 'dark';
            const isSelected = selectedProject?.id === project.id;

            return (
              <div
                key={project.id}
                className={`p-8 sm:p-10 rounded-[10px] transition-all duration-300 flex flex-col justify-between ${isSelected
                  ? 'ring-2 ring-zinc-900 dark:ring-white scale-[1.01]'
                  : ''
                  } ${isDarkCard
                    ? 'bg-zinc-950 text-white shadow-xl border border-zinc-800'
                    : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md'
                  }`}
              >
                <div>
                  <div className="mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isDarkCard ? 'text-zinc-400' : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    {project.title}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm font-medium mb-4 ${isDarkCard ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'
                      }`}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${isDarkCard ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-300'
                      }`}
                  >
                    {project.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.featuresCompleted.slice(0, 2).map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs ${isDarkCard ? 'text-zinc-300' : 'text-zinc-700 dark:text-zinc-300'
                          }`}
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium ${isDarkCard
                          ? 'bg-zinc-800 text-zinc-300'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                          }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-transform hover:translate-x-1 cursor-pointer ${isDarkCard
                      ? 'text-white hover:text-zinc-300'
                      : 'text-zinc-950 dark:text-white hover:text-zinc-600'
                      }`}
                  >
                    <span>Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
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
