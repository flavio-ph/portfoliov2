import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import {
  Layers,
  Server,
  Boxes,
  Terminal,
  RefreshCw,
  Workflow,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  X,
  Send,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    if (!selectedService) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const handleScrollToContact = (serviceTitle?: string) => {
    if (selectedService) {
      setSelectedService(null);
    }

    if (serviceTitle) {
      window.dispatchEvent(
        new CustomEvent('select-service', {
          detail: { serviceTitle },
        })
      );
    }

    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (iconType: ServiceItem['iconType'], className = 'w-5 h-5') => {
    switch (iconType) {
      case 'fullstack':
        return <Layers className={className} />;
      case 'backend':
        return <Server className={className} />;
      case 'architecture':
        return <Boxes className={className} />;
      case 'infra':
        return <Terminal className={className} />;
      case 'modernization':
        return <RefreshCw className={className} />;
      case 'automation':
        return <Workflow className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">


          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-3">
            Como posso{' '}
            <span className="text-zinc-950 dark:text-white font-extrabold">
              ajudar no seu próximo projeto?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            Soluções de software pensadas para resolver problemas reais, integrar sistemas e preparar
            produtos para evoluir com sustentabilidade e desempenho.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl p-7 sm:p-8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-zinc-200/50 via-zinc-100/10 to-transparent dark:from-white/[0.05] dark:via-white/[0.01] rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              {/* Card Top: Icon & Order Number */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/70 dark:border-zinc-700/60 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover:scale-105 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-300 shadow-sm">
                    {getServiceIcon(service.iconType)}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-600 tracking-wider">
                    {service.orderNumber}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-[21px] font-bold text-zinc-950 dark:text-white tracking-tight leading-snug group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-1 mb-4">
                  {service.tagline}
                </p>

                {/* Short Value-Focused Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom: Technology Badges & Action */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/70 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-100/90 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/[0.04] dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Saiba mais CTA */}
                <div className="flex items-center justify-between pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    <span>Saiba mais</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalhes
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-14 sm:mt-20 rounded-2xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 dark:from-zinc-900 dark:via-black dark:to-zinc-900 text-white shadow-2xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Subtle Glow Circle in Background */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-zinc-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-2">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-400">
              Pronto para construir?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Tem um projeto em mente?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Vamos conversar sobre o desafio e encontrar uma solução técnica adequada, eficiente e
              escalável para o seu objetivo.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => handleScrollToContact('Novo Projeto')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-[10px] bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_38px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
            >
              <span>Vamos conversar</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
              onClick={() => setSelectedService(null)}
              aria-hidden="true"
            />

            {/* Modal Dialog Content */}
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-service-title"
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-2xl bg-white dark:bg-[#111114] text-zinc-900 dark:text-zinc-100 shadow-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 animate-fadeIn"
            >
              {/* Header with Close Button */}
              <div className="flex items-start justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-950 dark:text-white">
                    {getServiceIcon(selectedService.iconType, 'w-6 h-6')}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                      SERVIÇO {selectedService.orderNumber}
                    </span>
                    <h3
                      id="modal-service-title"
                      className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white"
                    >
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Fechar detalhes do serviço"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline & Main Description */}
              <div className="py-5 space-y-3">
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {selectedService.tagline}
                </p>
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Section 1: Dores e Problemas que resolvo */}
              <div className="py-4 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Problemas & Desafios que este serviço resolve
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.problemsSolved.map((problem, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Entregáveis */}
              <div className="py-4 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
                  <Boxes className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  O que é entregue na prática
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-black/5 dark:border-white/5 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Tecnologias & Fundamentos */}
              <div className="py-4 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5">
                  Tecnologias & Ferramentas aplicadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={() => handleScrollToContact(selectedService.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-tight transition-all duration-300 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 shadow-md cursor-pointer"
                >
                  <span>Vamos conversar sobre este serviço</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
