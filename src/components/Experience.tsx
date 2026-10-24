import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experiencias" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
            Minha <span className="text-zinc-950 dark:text-white font-extrabold">trajetória</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
            Experiências profissionais, formação e evolução.
          </p>
        </div>

        {/* Experience Highlight Showcase */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 sm:p-12 rounded-[10px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  <div className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p className="py-6 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Principais Responsabilidades & Entregas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-[10px] bg-zinc-50 dark:bg-zinc-850/60 border border-black/5 dark:border-white/5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-snug">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies strip */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-3">
                  Tecnologias & Ferramentas
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Academic Education Card */}
          <div className="p-8 sm:p-12 rounded-[10px] bg-zinc-50 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  {EDUCATION.degree}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                  {EDUCATION.institution}
                </p>
              </div>

              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <span className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/5">
                  {EDUCATION.period}
                </span>
              </div>
            </div>

            <p className="py-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {EDUCATION.description}
            </p>

            {/* Focus areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                Disciplinas & Eixos de Formação
              </h4>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-medium bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/5"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
