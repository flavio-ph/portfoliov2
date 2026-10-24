import React from 'react';
import { Download, Send, Layers, GitCommit } from 'lucide-react';
import { motion } from 'motion/react';
import avatarImg from '@/assets/avatar.png';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typographic Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Headline matching reference: "Eu sou Flávio Almeida" (single line) */}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-extrabold tracking-tight leading-tight mb-6 whitespace-nowrap">
            <span className="text-zinc-400 dark:text-zinc-500 font-bold">
              Eu sou{" "}
            </span>
            <span className="text-zinc-950 dark:text-white font-extrabold">
              Flávio Almeida
            </span>
          </h1>

          {/* Lead Description */}

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mb-9 font-normal">
            <span className="font-semibold text-zinc-950 dark:text-white">
              Engenheiro de Software.
            </span>{" "}
            Desenvolvo aplicações, APIs e integrações que transformam necessidades
            reais em soluções digitais eficientes. Combino arquitetura de software,
            boas práticas de engenharia e visão de produto para criar sistemas
            confiáveis, escaláveis e preparados para evoluir.
          </p>


          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Primary Action Button (Dark Pill) */}
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-[10px] bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm sm:text-[15px] tracking-tight transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45),0_6px_16px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:shadow-[0_12px_32px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_16px_40px_rgba(255,255,255,0.25)]"
            >
              <span>Baixar currículo</span>
            </button>

            {/* Secondary Action Button (Light Glass with soft ambient shadow) */}
            <a
              href="#contato"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-[10px] bg-[#F2F2F4]/90 hover:bg-white text-zinc-950 font-bold text-sm sm:text-[15px] tracking-tight backdrop-blur-xl border border-black/[0.04] dark:border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 dark:bg-zinc-900/85 dark:hover:bg-zinc-900 dark:text-white dark:shadow-[0_14px_36px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_18px_44px_rgba(0,0,0,0.7)]"
            >
              <span>Me Contatar</span>
              <Send className="w-4 h-4 text-zinc-950 dark:text-white" strokeWidth={2.2} />
            </a>
          </div>

          {/* Subtle Status Line below CTA */}
          <div className="mt-8 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Disponível para novos projetos e engenharia de software</span>
          </div>
        </div>

        {/* Right Column: Visual Composition with Official 3D Avatar */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex items-center justify-center">

            {/* Ambient Backlight Glow behind the avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 via-rose-200/40 to-sky-200/50 dark:from-amber-500/15 dark:via-purple-500/15 dark:to-blue-500/15 rounded-full blur-3xl -z-10 transform scale-95" />

            {/* Official 3D Memoji Avatar Image */}
            <div className="relative z-10 flex flex-col items-center select-none group">
              <img
                src={avatarImg}
                alt="Flávio Almeida — Software Engineer & Team Leader"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-300"
                loading="eager"
              />

              {/* Floating Architectural Pillars Chips (Subtle & Elegant Autonomous Sway) */}
              <motion.div
                className="absolute top-8 -left-4 sm:-left-6 z-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, 1, -2],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-[10px] border border-black/5 dark:border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2 hover:scale-105 transition-all duration-300">
                  <Layers className="w-3.5 h-3.5 text-sky-500" />
                  <span>Software engineering</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-2 sm:-right-4 z-20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [2, -1, 2],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-[10px] border border-black/5 dark:border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2 hover:scale-105 transition-all duration-300">
                  <GitCommit className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Clean architecture</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
