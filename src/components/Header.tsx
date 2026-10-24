import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Sun, Moon, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início', id: 'inicio' },
    { href: '#sobre', label: 'Sobre mim', id: 'sobre' },
    { href: '#servicos', label: 'Serviços', id: 'servicos' },
    { href: '#competencias', label: 'Competências', id: 'competencias' },
    { href: '#experiencias', label: 'Experiências', id: 'experiencias' },
    { href: '#projetos', label: 'Projetos', id: 'projetos' },
    { href: '#contato', label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 backdrop-blur-xl ${
          isDark
            ? 'bg-zinc-900/80 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
            : 'bg-white/75 border border-black/8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
        } ${scrolled ? 'scale-[0.98]' : ''}`}
      >
        {/* Brand Logo - Stylized [fa] */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 dark:focus-visible:ring-zinc-200 rounded-lg p-0.5"
          aria-label="Flávio Almeida - Ir para o início"
        >
          <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-zinc-900 dark:text-white flex items-center">
            <span className="text-zinc-400 dark:text-zinc-500 font-normal mr-0.5">[</span>
            <span className="relative">
              fa
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-zinc-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
            <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-0.5">]</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium tracking-tight transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-zinc-900 dark:text-white font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Socials + Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-zinc-200 dark:border-zinc-800">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Flávio Almeida"
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Flávio Almeida"
              className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Theme Toggle Capsule */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="relative w-12 h-6 sm:w-13 sm:h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 dark:focus-visible:ring-zinc-200 bg-zinc-200/90 dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700/80 cursor-pointer"
          >
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-zinc-950 shadow-sm flex items-center justify-center transition-transform duration-300 ease-out ${
                isDark ? 'translate-x-6 sm:translate-x-6' : 'translate-x-0'
              }`}
            >
              {isDark ? (
                <Moon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-200" />
              ) : (
                <Sun className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />
              )}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden p-1.5 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl backdrop-blur-2xl transition-all duration-200 ${
            isDark
              ? 'bg-zinc-900/95 border border-white/10 shadow-2xl'
              : 'bg-white/95 border border-black/8 shadow-xl'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white font-medium'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-around">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
