import React, { useState } from 'react';
import {
  CORE_DOMAINS,
  SKILL_CATEGORIES,
  TECH_CARDS,
  MARQUEE_TERMS,
  SkillItem,
} from '../data/portfolioData';
import {
  Coffee,
  Server,
  Network,
  Waypoints,
  Boxes,
  FileCode2,
  Atom,
  Code2,
  Layout,
  Sparkles,
  Database,
  HardDrive,
  Binary,
  Workflow,
  Cpu,
  Zap,
  CheckCircle2,
  Puzzle,
  GitBranch,
  Users,
  Compass,
  Clock,
  Terminal,
  Info,
} from 'lucide-react';
import springIcon from '@/assets/spring.png';
import reactIcon from '@/assets/react.png';
import tsIcon from '@/assets/typescript.png';
import jsIcon from '@/assets/js.png';
import dockerIcon from '@/assets/docker.png';
import githubIcon from '@/assets/github.png';
import javaIcon from '@/assets/java.png';
import apiRestIcon from '@/assets/api-rest.png';
import integrationIcon from '@/assets/integracao-servicos.png';
import archIcon from '@/assets/arquitetura.png';
import uxUiIcon from '@/assets/uxui.png';
import mysqlIcon from '@/assets/mysql.png';
import postgreIcon from '@/assets/postgre.png';
import dataModelingIcon from '@/assets/modelagem-dados.png';
import automationIcon from '@/assets/automacoes-processos.png';
import responsiveUiIcon from '@/assets/interfaces-responsivas.png';
import cleanCodeIcon from '@/assets/clean-code.png';
import designPatternsIcon from '@/assets/design-patterns.png';
import agileMethodsIcon from '@/assets/metodologias-ageis.png';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string, cardId?: string) => {
    // Custom brand icons placed in assets
    if (cardId === 'java' || iconName === 'Java' || iconName === 'Coffee') {
      return (
        <img
          src={javaIcon}
          alt="Java"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'spring' || iconName === 'Spring') {
      return (
        <img
          src={springIcon}
          alt="Spring Boot"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'rest-apis' || iconName === 'RestApi' || iconName === 'Network') {
      return (
        <img
          src={apiRestIcon}
          alt="APIs REST"
          className="w-8 h-8 object-contain rounded-md"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'service-integration' ||
      iconName === 'ServiceIntegration' ||
      iconName === 'Waypoints'
    ) {
      return (
        <img
          src={integrationIcon}
          alt="Integração de serviços"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'architecture' || iconName === 'Architecture' || iconName === 'Boxes') {
      return (
        <img
          src={archIcon}
          alt="Arquitetura de software"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'react' || iconName === 'React') {
      return (
        <img
          src={reactIcon}
          alt="React"
          className="w-8 h-8 object-contain rounded-md"
          loading="lazy"
        />
      );
    }
    if (cardId === 'typescript' || iconName === 'TypeScript') {
      return (
        <img
          src={tsIcon}
          alt="TypeScript"
          className="w-8 h-8 object-contain rounded-md"
          loading="lazy"
        />
      );
    }
    if (cardId === 'javascript' || iconName === 'JavaScript') {
      return (
        <img
          src={jsIcon}
          alt="JavaScript"
          className="w-8 h-8 object-contain rounded-md shadow-xs"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'responsive-ui' ||
      iconName === 'ResponsiveUI' ||
      iconName === 'Layout'
    ) {
      return (
        <img
          src={responsiveUiIcon}
          alt="Interfaces responsivas"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'ux-usability' || iconName === 'UxUi' || iconName === 'Sparkles') {
      return (
        <img
          src={uxUiIcon}
          alt="UX & Usabilidade"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'postgresql' || iconName === 'PostgreSQL' || iconName === 'Database') {
      return (
        <img
          src={postgreIcon}
          alt="PostgreSQL"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'mysql' || iconName === 'MySQL' || iconName === 'HardDrive') {
      return (
        <img
          src={mysqlIcon}
          alt="MySQL"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'sql-modeling' || iconName === 'DataModeling' || iconName === 'Binary') {
      return (
        <img
          src={dataModelingIcon}
          alt="Modelagem de dados"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'process-automation' ||
      iconName === 'ProcessAutomation' ||
      iconName === 'Zap'
    ) {
      return (
        <img
          src={automationIcon}
          alt="Automação de processos"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'clean-code' ||
      iconName === 'CleanCode' ||
      iconName === 'CheckCircle2'
    ) {
      return (
        <img
          src={cleanCodeIcon}
          alt="Clean Code"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'design-patterns' ||
      iconName === 'DesignPatterns' ||
      iconName === 'Puzzle'
    ) {
      return (
        <img
          src={designPatternsIcon}
          alt="Design Patterns"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }
    if (cardId === 'server-vps') {
      return <Server className="w-8 h-8 text-sky-600 dark:text-sky-400" />;
    }
    if (cardId === 'linux-ubuntu' || iconName === 'Terminal') {
      return <Terminal className="w-8 h-8 text-[#E95420]" />;
    }
    if (cardId === 'nginx' || iconName === 'Nginx') {
      return (
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2.5 7.5V16.5L12 22L21.5 16.5V7.5L12 2Z" fill="#009639" />
          <path d="M8 7.5V16.5L16 7.5V16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (cardId === 'docker' || iconName === 'Docker') {
      return (
        <img
          src={dockerIcon}
          alt="Docker"
          className="w-8 h-8 object-contain rounded-md"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'git-github' ||
      cardId === 'code-maintenance' ||
      iconName === 'GitHub'
    ) {
      return (
        <img
          src={githubIcon}
          alt="Git & GitHub"
          className="w-8 h-8 object-contain rounded-md"
          loading="lazy"
        />
      );
    }
    if (
      cardId === 'agile-methods' ||
      iconName === 'AgileMethods' ||
      iconName === 'Clock'
    ) {
      return (
        <img
          src={agileMethodsIcon}
          alt="Metodologias ágeis"
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      );
    }

    const props = { className: 'w-8 h-8 text-zinc-900 dark:text-white' };
    switch (iconName) {
      case 'Coffee':
        return <Coffee {...props} className="w-8 h-8 text-amber-600 dark:text-amber-400" />;
      case 'Server':
        return <Server {...props} className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />;
      case 'Network':
        return <Network {...props} className="w-8 h-8 text-sky-600 dark:text-sky-400" />;
      case 'Waypoints':
        return <Waypoints {...props} className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />;
      case 'Boxes':
        return <Boxes {...props} className="w-8 h-8 text-purple-600 dark:text-purple-400" />;
      case 'FileCode2':
        return <FileCode2 {...props} className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
      case 'Atom':
        return <Atom {...props} className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />;
      case 'Code2':
        return <Code2 {...props} className="w-8 h-8 text-amber-500 dark:text-amber-300" />;
      case 'Layout':
        return <Layout {...props} className="w-8 h-8 text-pink-600 dark:text-pink-400" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-8 h-8 text-yellow-500 dark:text-yellow-300" />;
      case 'Database':
        return <Database {...props} className="w-8 h-8 text-blue-700 dark:text-blue-400" />;
      case 'HardDrive':
        return <HardDrive {...props} className="w-8 h-8 text-teal-600 dark:text-teal-400" />;
      case 'Binary':
        return <Binary {...props} className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />;
      case 'Workflow':
        return <Workflow {...props} className="w-8 h-8 text-rose-600 dark:text-rose-400" />;
      case 'Cpu':
        return <Cpu {...props} className="w-8 h-8 text-violet-600 dark:text-violet-400" />;
      case 'Zap':
        return <Zap {...props} className="w-8 h-8 text-amber-500 dark:text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />;
      case 'Puzzle':
        return <Puzzle {...props} className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />;
      case 'GitBranch':
        return <GitBranch {...props} className="w-8 h-8 text-orange-600 dark:text-orange-400" />;
      case 'Users':
        return <Users {...props} className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
      case 'Compass':
        return <Compass {...props} className="w-8 h-8 text-purple-600 dark:text-purple-400" />;
      case 'Clock':
        return <Clock {...props} className="w-8 h-8 text-green-600 dark:text-green-400" />;
      default:
        return <Code2 {...props} />;
    }
  };

  const filteredCards =
    selectedCategory === 'all'
      ? TECH_CARDS
      : TECH_CARDS.filter((card) => card.category === selectedCategory);

  return (
    <section id="competencias" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
            Minhas <span className="text-zinc-950 dark:text-white font-extrabold">competências</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
            Tecnologias, ferramentas e práticas de desenvolvimento.
          </p>
        </div>

        {/* Top Elevated Card with Pastel Progress Bars matching reference */}
        <div className="mb-20 p-8 sm:p-12 lg:p-14 rounded-[10px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Horizontal Pastel Gradient Bars */}
            <div className="lg:col-span-7 space-y-5">
              {CORE_DOMAINS.map((domain) => (
                <div key={domain.label} className="group">
                  <div className="flex items-center justify-between text-xs font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 mb-1.5">
                    <span>{domain.label}</span>
                    <span className="text-[11px] font-normal text-zinc-400 dark:text-zinc-500">
                      {domain.description}
                    </span>
                  </div>
                  {/* Subtle Pastel Gradient Bar */}
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-300 via-rose-200 to-amber-200 dark:from-blue-500 dark:via-purple-500 dark:to-amber-400 transition-all duration-1000 ease-out"
                      style={{ width: domain.levelWidth }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Big Display Typography */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                Visão Geral
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.05]">
                STACK &<br />DOMÍNIOS
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                Combinação de engenharia de software tradicional, liderança de squads e ferramentas modernas para aceleração de entregas.
              </p>
            </div>
          </div>
        </div>

        {/* Continuous Animated Marquee Strip / Carrossel de Palavras */}
        <div className="marquee-container relative w-screen left-1/2 -translate-x-1/2 py-6 sm:py-8 my-14 sm:my-16 overflow-hidden bg-zinc-200/50 dark:bg-zinc-900/40 border-y border-black/5 dark:border-white/5 select-none">
          {/* Soft edge fade gradient mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F0F0F0] dark:from-[#0d0d0f] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F0F0F0] dark:from-[#0d0d0f] to-transparent z-10" />

          <div className="flex w-max">
            {/* Track 1 */}
            <div className="marquee-track flex shrink-0 items-center gap-8 pr-8 text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase whitespace-nowrap">
              {MARQUEE_TERMS.map((term, i) => (
                <React.Fragment key={`t1-${i}`}>
                  <span>{term}</span>
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300 dark:from-amber-400 dark:via-purple-400 dark:to-sky-400 shadow-sm shrink-0" />
                </React.Fragment>
              ))}
            </div>

            {/* Track 2 (Identical duplicate for seamless continuous circulation) */}
            <div className="marquee-track flex shrink-0 items-center gap-8 pr-8 text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase whitespace-nowrap" aria-hidden="true">
              {MARQUEE_TERMS.map((term, i) => (
                <React.Fragment key={`t2-${i}`}>
                  <span>{term}</span>
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-sky-300 dark:from-amber-400 dark:via-purple-400 dark:to-sky-400 shadow-sm shrink-0" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="mt-20 mb-10 flex flex-wrap items-center justify-center gap-2">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-950'
                  : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-black/5 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools & Technologies Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCards.map((card) => {
            const isExpanded = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(isExpanded ? null : card.id)}
                className={`group relative p-6 rounded-[10px] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[170px] ${
                  isExpanded
                    ? 'bg-white dark:bg-zinc-800 ring-2 ring-zinc-900 dark:ring-white shadow-xl scale-[1.02]'
                    : 'bg-white/80 dark:bg-zinc-900/70 hover:bg-white dark:hover:bg-zinc-800 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 shadow-sm hover:shadow-md dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                }`}
              >
                {/* Center Icon */}
                <div className="flex items-center justify-center py-3">
                  <div className="w-14 h-14 rounded-[10px] bg-zinc-50 dark:bg-zinc-800/80 group-hover:scale-110 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700/80 transition-all duration-300 flex items-center justify-center p-2.5">
                    {getIcon(card.iconName, card.id)}
                  </div>
                </div>

                {/* Card Title & Category Tag */}
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 group-hover:border-zinc-200 dark:group-hover:border-zinc-700/80 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-950 dark:text-white tracking-tight">
                      {card.name}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                      {card.categoryLabel}
                    </span>
                  </div>

                  {/* Expandable description on click/hover */}
                  {isExpanded && (
                    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed animate-fadeIn">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Hint indicator */}
                <div className="absolute top-3 right-3 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
                  <Info className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
