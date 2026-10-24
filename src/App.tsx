import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Observe active section on scroll
  useEffect(() => {
    const sections = ['inicio', 'sobre', 'servicos', 'competencias', 'experiencias', 'projetos', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F0F0F0] dark:bg-[#0d0d0f] text-[#111111] dark:text-[#f4f4f5] transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Top Diffuse Pastel Ambient Glow */}
      <div className="ambient-glow-top fixed top-0 left-0 right-0 h-[650px] -z-0 pointer-events-none opacity-90 transition-opacity duration-500" />

      {/* Floating Capsule Header */}
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
