import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECH_CARDS } from '../data/portfolioData';
import { X, Printer, Download, Mail, Linkedin, Github, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
Flávio Almeida — Software Engineer & Team Leader
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

Resumo:
${PERSONAL_INFO.bioShort}

Formação:
${EDUCATION.degree} — ${EDUCATION.institution} (${EDUCATION.period})

Competências Chave:
Java, Spring Boot, APIs REST, React, TypeScript, PostgreSQL, MySQL, n8n, Bubble, Clean Code, Liderança Técnica.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl p-6 sm:p-12 text-zinc-900 dark:text-zinc-100 my-auto print:p-0 print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar (hidden when printing) */}
        <div className="no-print flex items-center justify-between pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium text-xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Resumo'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar currículo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-8 font-sans">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Flávio Almeida
              </h1>
              <p className="text-base sm:text-lg font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
                Software Engineer &amp;
              </p>
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/flávio-almeida-804827361</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" />
                <span>github.com/flavio-ph</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Resumo Profissional
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bioShort} {PERSONAL_INFO.aboutDetails}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-base text-zinc-950 dark:text-white">
                      {exp.role}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-300 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Formação Acadêmica
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-sm text-zinc-950 dark:text-white">
                  {EDUCATION.degree}
                </span>
                <span className="text-xs text-zinc-500 font-medium">{EDUCATION.period}</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                {EDUCATION.institution} ({EDUCATION.status})
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {EDUCATION.description}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Competências Técnicas
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {TECH_CARDS.map((tech) => (
                <span
                  key={tech.id}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
