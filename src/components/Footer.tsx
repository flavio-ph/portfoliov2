import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-12 border-t border-black/5 dark:border-white/5 overflow-hidden">
      {/* Diffuse Pastel Background Glow */}
      <div className="ambient-glow-bottom absolute inset-0 -z-10 pointer-events-none opacity-80" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16">
          {/* Col 1: Large Typographic Brand Logo matching reference */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group inline-flex items-center"
              aria-label="Flávio Almeida - Topo"
            >
              <span className="text-6xl sm:text-7xl font-black tracking-tighter text-zinc-950 dark:text-white flex items-center">
                <span className="text-zinc-400 dark:text-zinc-600 font-light">[</span>
                <span className="relative">
                  fa
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-zinc-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <span className="text-zinc-400 dark:text-zinc-600 font-light">]</span>
              </span>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
              Software Engineer. Construindo soluções digitais escaláveis, limpas e sustentáveis com foco em engenharia de software.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#competencias"
                  onClick={(e) => handleNavClick(e, '#competencias')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Competências
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  onClick={(e) => handleNavClick(e, '#experiencias')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Trajetória
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={(e) => handleNavClick(e, '#projetos')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Networks */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Redes & Contato
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(
                    'Olá Flávio! Vim pelo seu portfólio.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  E-mail Direto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <span>
            © {currentYear} Flávio Almeida. Todos os direitos reservados.
          </span>
          <span className="font-mono text-[11px]">
            Desenvolvido com foco em engenharia limpa e design editorial.
          </span>
        </div>
      </div>
    </footer>
  );
};
