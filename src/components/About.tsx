import React from 'react';
import { PERSONAL_INFO, PROFESSIONAL_PRINCIPLES } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with Contrast Typography */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
            Sobre <span className="text-zinc-950 dark:text-white font-extrabold">mim</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
            Minha trajetória, minha visão e a forma como desenvolvo.
          </p>
        </div>

        {/* Editorial Text Blocks */}
        <div className="space-y-12 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {/* Block 1: QUEM SOU */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Quem sou
            </h3>
            <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
              {PERSONAL_INFO.aboutIntro}
            </p>
          </div>

          {/* Block 2: COMO ATUO */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Como atuo & Experiência
            </h3>
            <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
              {PERSONAL_INFO.aboutDetails}
            </p>
          </div>

          {/* Block 3: FILOSOFIA */}
          <div className="p-6 sm:p-8 rounded-[10px] bg-white/60 dark:bg-white/[0.04] backdrop-blur-md border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Filosofia de Engenharia
            </h3>
            <p className="text-lg sm:text-xl font-medium text-zinc-950 dark:text-white italic">
              &ldquo;{PERSONAL_INFO.aboutBelief}&rdquo;
            </p>
          </div>

          {/* Principles Section */}
          <div className="pt-6 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Princípios Profissionais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROFESSIONAL_PRINCIPLES.map((principle, index) => (
                <div
                  key={principle.title}
                  className={`p-6 sm:p-7 rounded-[10px] bg-white/60 dark:bg-white/[0.04] backdrop-blur-md border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-white/80 dark:hover:bg-white/[0.07] hover:border-black/10 dark:hover:border-white/20 ${
                    index === PROFESSIONAL_PRINCIPLES.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white mb-2 tracking-tight">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stylized Signature Component */}
          <div className="pt-8 flex flex-col items-start gap-2">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              Compromisso com excelência técnica,
            </span>
            <div className="relative py-2">
              {/* Elegant SVG Signature of Flávio Almeida */}
              <svg
                className="w-48 sm:w-60 h-16 sm:h-20 text-zinc-900 dark:text-white opacity-90"
                viewBox="0 0 240 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 50 C25 15, 35 10, 45 35 C50 50, 52 55, 65 30 C75 10, 80 40, 95 38 C105 35, 115 45, 125 40 C140 32, 145 20, 160 35 C175 45, 185 25, 205 32"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 38 L55 35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25 65 Q 120 58 220 62"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 dark:text-zinc-500 block">
                Flávio Almeida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
