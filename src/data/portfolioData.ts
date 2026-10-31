export interface SkillItem {
  id: string;
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'infra' | 'automation' | 'engineering' | 'leadership';
  categoryLabel: string;
  iconName: string;
  description: string;
  highlight?: boolean;
}

export interface DomainProficiency {
  label: string;
  description: string;
  levelWidth: string; // percentage for visual gradient bar
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  period: string;
  description: string;
  focusAreas: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  theme?: 'light' | 'dark' | 'system';
  isMobile?: boolean;
  image?: string;
  overview: string;
  challenge: string;
  solution: string;
  myContribution: string[];
  featuresCompleted: string[];
  featuresInDevelopment?: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export interface ServiceItem {
  id: string;
  orderNumber: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  iconType: 'fullstack' | 'backend' | 'architecture' | 'infra' | 'modernization' | 'automation';
  problemsSolved: string[];
  deliverables: string[];
}

export const PERSONAL_INFO = {
  name: 'Flávio Almeida',
  role: 'Software Engineer',
  email: 'flaviophalmeida@gmail.com',
  phone: '5579998975808',
  phoneFormatted: '+55 (79) 99897-5808',
  whatsappMessage: 'Olá Flávio! Vim pelo seu portfólio.',
  github: 'https://github.com/flavio-ph',
  linkedin: 'https://www.linkedin.com/in/fl%C3%A1vio-almeida-804827361/',
  bioShort:
    'Sou Flávio Almeida, Engenheiro de Software (Software Engineer). Desenvolvo sistemas robustos, projeto arquiteturas escaláveis e conduzo equipes na criação de soluções digitais sustentáveis, eficientes e de alto impacto.',
  aboutIntro:
    'Sou Engenheiro de Software. Minha trajetória é guiada pela paixão em resolver problemas complexos através de sólidos fundamentos de engenharia, arquitetura limpa e foco em valor real de negócio.',
  aboutDetails:
    'Minha atuação em engenharia abrange o ciclo de vida completo de software: do design arquitetural de microsserviços e APIs resilientes à modelagem relacional de dados, interfaces modulares e gestão prática de infraestrutura e servidores (Linux/Ubuntu Server, configuração de VPS, proxies reversos com Nginx, certificados SSL e containers Docker). Alio a prática profunda de código à mentalidade de produto e disseminação de boas práticas de engenharia como Clean Code, SOLID e Design Patterns.',
  aboutBelief:
    'Acredito que a verdadeira engenharia de software vai muito além de fazer funcionar: trata-se de construir sistemas compreensíveis, seguros, testáveis e preparados para evoluir com sustentabilidade.',
};

export const PROFESSIONAL_PRINCIPLES = [
  {
    title: 'Código limpo e manutenível',
    description:
      'Adoção rigorosa de padrões de projeto, princípios SOLID e refatoração contínua para garantir longevidade ao código.',
  },
  {
    title: 'Arquitetura bem estruturada',
    description:
      'Planejamento consciente de fronteiras de domínio, desacoplamento de serviços e fluxos de dados resilientes.',
  },
  {
    title: 'Infraestrutura e autonomia de deploy',
    description:
      'Domínio prático em configuração de servidores Linux (Ubuntu), VPS, Nginx e Docker para colocar sistemas no ar com segurança e estabilidade.',
  },
  {
    title: 'Colaboração e liderança técnica',
    description:
      'Facilitação de processos ágeis, mentoria de desenvolvedores e disseminação de cultura técnica positiva.',
  },
  {
    title: 'Foco na solução de problemas reais',
    description:
      'Tecnologia como alavanca de valor para usuários e negócios, evitando complexidade acidental desnecessária.',
  },
];

export const CORE_DOMAINS: DomainProficiency[] = [
  {
    label: 'Java, Spring Boot & Golang',
    description: 'Back-end robusto, APIs RESTful e microsserviços',
    levelWidth: '92%',
  },
  {
    label: 'APIs REST & Integração de Serviços',
    description: 'Comunicação entre serviços, webhooks e contratos seguros',
    levelWidth: '95%',
  },
  {
    label: 'TypeScript & React',
    description: 'Interfaces modulares, responsividade e usabilidade',
    levelWidth: '88%',
  },
  {
    label: 'SQL & Modelagem de Dados',
    description: 'MySQL, PostgreSQL, normalização e consultas otimizadas',
    levelWidth: '85%',
  },
  {
    label: 'Servidores & Infra (VPS, Ubuntu, Nginx, Docker)',
    description: 'Configuração de VPS, proxy reverso Nginx, SSL, Linux e deploys',
    levelWidth: '92%',
  },
  {
    label: 'Automação & Low-Code (n8n & Bubble)',
    description: 'Integrações ágeis, aceleração de entregas e fluxos de dados',
    levelWidth: '90%',
  },
  {
    label: 'Engenharia de Software & Clean Code',
    description: 'Design patterns, manutenibilidade e arquitetura',
    levelWidth: '94%',
  },
  {
    label: 'Liderança Técnica & Métodos Ágeis',
    description: 'Orientação de pessoas, facilitação e gestão técnica',
    levelWidth: '90%',
  },
];

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'Todas as competências' },
  { id: 'backend', label: 'Back-end' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'database', label: 'Banco de dados' },
  { id: 'infra', label: 'Servidores & Infra' },
  { id: 'automation', label: 'Automação & Low-Code' },
  { id: 'engineering', label: 'Engenharia de Software' },
  { id: 'leadership', label: 'Liderança' },
];

export const TECH_CARDS: SkillItem[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'backend',
    categoryLabel: 'Back-end',
    iconName: 'Java',
    description: 'Desenvolvimento estruturado, orientado a objetos e escalável para aplicações corporativas.',
    highlight: true,
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'backend',
    categoryLabel: 'Back-end',
    iconName: 'Spring',
    description: 'Construção de APIs REST resilientes, injeção de dependência, Spring Data e Spring Security.',
    highlight: true,
  },
  {
    id: 'rest-apis',
    name: 'APIs REST',
    category: 'backend',
    categoryLabel: 'Back-end',
    iconName: 'RestApi',
    description: 'Design de endpoints RESTful, padronização HTTP, versionamento e documentação clara.',
  },
  {
    id: 'service-integration',
    name: 'Integração de serviços',
    category: 'backend',
    categoryLabel: 'Back-end',
    iconName: 'ServiceIntegration',
    description: 'Conexão entre microsserviços, consumo de APIs terceiras, webhooks e filas assíncronas.',
  },
  {
    id: 'architecture',
    name: 'Arquitetura de software',
    category: 'backend',
    categoryLabel: 'Back-end',
    iconName: 'Architecture',
    description: 'Estruturação em camadas, isolamento de domínios, desacoplamento e escalabilidade.',
    highlight: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Front-end',
    iconName: 'TypeScript',
    description: 'Tipagem estática, segurança em tempo de desenvolvimento e código limpo no ecossistema JS.',
    highlight: true,
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    categoryLabel: 'Front-end',
    iconName: 'React',
    description: 'Construção de interfaces baseadas em componentes funcionais, custom hooks e renderização eficiente.',
    highlight: true,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Front-end',
    iconName: 'JavaScript',
    description: 'Manipulação avançada do DOM, assincronismo (Promises/Async-Await) e ES6+.',
  },
  {
    id: 'responsive-ui',
    name: 'Interfaces responsivas',
    category: 'frontend',
    categoryLabel: 'Front-end',
    iconName: 'ResponsiveUI',
    description: 'Layouts adaptáveis para mobile, tablet e desktop garantindo excelente visual em qualquer resolução.',
  },
  {
    id: 'ux-usability',
    name: 'UX & Usabilidade',
    category: 'frontend',
    categoryLabel: 'Front-end',
    iconName: 'UxUi',
    description: 'Foco na clareza da jornada do usuário, hierarquia tipográfica, feedback e acessibilidade.',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Banco de dados',
    iconName: 'PostgreSQL',
    description: 'Modelagem relacional consistente, integridade referencial, queries avançadas e índices.',
    highlight: true,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'Banco de dados',
    iconName: 'MySQL',
    description: 'Gerenciamento de esquemas relacionais, transações ACID e consultas otimizadas.',
  },
  {
    id: 'sql-modeling',
    name: 'Modelagem de dados',
    category: 'database',
    categoryLabel: 'Banco de dados',
    iconName: 'DataModeling',
    description: 'Normalização, diagramas entidade-relacionamento e estruturação voltada a performance.',
  },
  {
    id: 'server-vps',
    name: 'Servidores & VPS',
    category: 'infra',
    categoryLabel: 'Servidores & Infra',
    iconName: 'Server',
    description: 'Provisionamento, configuração de VPS (Hostinger, AWS, DigitalOcean), SSH, segurança de portas, rotinas de deploy e monitoramento.',
    highlight: true,
  },
  {
    id: 'linux-ubuntu',
    name: 'Linux & Ubuntu Server',
    category: 'infra',
    categoryLabel: 'Servidores & Infra',
    iconName: 'Terminal',
    description: 'Administração de ambientes Linux Ubuntu Server, serviços em systemd, automação com Shell Script, gestão de processos e firewall UFW.',
    highlight: true,
  },
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'infra',
    categoryLabel: 'Servidores & Infra',
    iconName: 'Nginx',
    description: 'Configuração de proxy reverso, roteamento de domínios/subdomínios, balanceamento de carga e certificados SSL/TLS com Certbot.',
    highlight: true,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'infra',
    categoryLabel: 'Servidores & Infra',
    iconName: 'Docker',
    description: 'Containerização de aplicações, ambientes padronizados e isolados, e deploys consistentes com Docker Compose.',
    highlight: true,
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'automation',
    categoryLabel: 'Automação & Low-Code',
    iconName: 'Workflow',
    description: 'Orquestração de pipelines de automação, nós de integração, webhooks e transformação de dados.',
    highlight: true,
  },
  {
    id: 'bubble',
    name: 'Bubble',
    category: 'automation',
    categoryLabel: 'Automação & Low-Code',
    iconName: 'Cpu',
    description: 'Desenvolvimento acelerado de MVPs e aplicações completas conectadas a bancos e APIs externas.',
  },
  {
    id: 'process-automation',
    name: 'Automação de processos',
    category: 'automation',
    categoryLabel: 'Automação & Low-Code',
    iconName: 'ProcessAutomation',
    description: 'Eliminação de tarefas manuais repetitivas via integração entre sistemas corporativos.',
  },
  {
    id: 'clean-code',
    name: 'Clean Code',
    category: 'engineering',
    categoryLabel: 'Engenharia de Software',
    iconName: 'CleanCode',
    description: 'Nomenclatura expressiva, funções curtas com responsabilidade única e legibilidade exemplar.',
    highlight: true,
  },
  {
    id: 'design-patterns',
    name: 'Design Patterns',
    category: 'engineering',
    categoryLabel: 'Engenharia de Software',
    iconName: 'DesignPatterns',
    description: 'Padrões criacionais, estruturais e comportamentais para soluções arquiteturais testadas.',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'engineering',
    categoryLabel: 'Engenharia de Software',
    iconName: 'GitHub',
    description: 'Versionamento com Git, estratégias de branch, code reviews minuciosos e colaboração com GitHub.',
    highlight: true,
  },
  {
    id: 'tech-leadership',
    name: 'Liderança técnica',
    category: 'leadership',
    categoryLabel: 'Liderança',
    iconName: 'Users',
    description: 'Condução técnica de squads, alinhamento entre produto e engenharia e tomada de decisão fundamentada.',
    highlight: true,
  },

  {
    id: 'agile-methods',
    name: 'Metodologias ágeis',
    category: 'leadership',
    categoryLabel: 'Liderança',
    iconName: 'AgileMethods',
    description: 'Aplicação prática de Scrum e Kanban, cerimônias eficientes, estimativas e foco em entregas contínuas.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'team-lead-dev',
    role: 'Engenheiro de Software',
    company: 'Equipe de Desenvolvimento de Software',
    location: 'Brasil',
    period: 'Atuação Atual',
    type: 'Engenharia de Software',
    description:
      'Atuação em Engenharia de Software, conectando visão arquitetural, padrões de projeto, excelência em código e entregas de valor sustentáveis.',
    responsibilities: [
      'Engenharia e desenvolvimento de sistemas escaláveis e resilientes (Back-end e Front-end) orientados a boas práticas.',
      'Definição e documentação de soluções arquiteturais para novos sistemas e refatoração estratégica de legados.',
      'Provisionamento e configuração de servidores Linux (Ubuntu Server), instâncias VPS, proxies reversos com Nginx, certificados SSL e contêineres Docker para deploy e alta disponibilidade.',
      'Modelagem relacional consistente de banco de dados garantindo integridade referencial, consultas otimizadas e normalização.',
      'Design e integração de APIs REST, microsserviços e automação de processos corporativos com n8n.',
      'Apoio na liderança técnica, mentoria contínua de desenvolvedores e disseminação de cultura de engenharia colaborativa com metodologias ágeis.',
      'Incentivo e aplicação rigorosa de Clean Code, princípios SOLID, Design Patterns e revisões de código construtivas.',
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'MySQL', 'Linux (Ubuntu)', 'Nginx', 'VPS', 'Docker', 'n8n', 'Bubble', 'Git', 'REST APIs'],
    isCurrent: true,
  },
  {
    id: 'educador-tecnologia-prepara',
    role: 'Educador de Tecnologia',
    company: 'Prepara Cursos Profissionalizantes',
    location: 'Simão Dias, Sergipe, Brasil',
    period: '2022 – 2024',
    type: 'Educação e Tecnologia',
    description:
      'Atuação na formação de novos profissionais em tecnologia, compartilhando conhecimentos de programação, desenvolvimento web e lógica computacional por meio de uma abordagem prática e orientada à resolução de problemas.',
    responsibilities: [
      'Ministração de aulas de programação, lógica computacional e desenvolvimento web, utilizando Java, JavaScript, HTML e CSS.',
      'Elaboração de atividades práticas e projetos para aplicação dos conceitos de programação em cenários reais.',
      'Orientação técnica na construção de aplicações, identificação de erros e resolução de problemas de programação.',
      'Ensino de conceitos de Programação Orientada a Objetos, estruturação de código e boas práticas de desenvolvimento.',
      'Acompanhamento individual da evolução dos alunos, estimulando autonomia, raciocínio lógico e pensamento computacional.',
      'Adaptação de conteúdos e metodologias de ensino conforme o nível de conhecimento e as necessidades de aprendizagem.',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Lógica de Programação',
      'Programação Orientada a Objetos',
      'Desenvolvimento Web',
    ],
    isCurrent: false,
  },
]

export const EDUCATION: EducationItem = {
  id: 'ifs-si',
  degree: 'Bacharelado em Sistemas de Informação',
  institution: 'Instituto Federal de Sergipe (IFS)',
  status: 'Em andamento',
  period: 'Formação Acadêmica em Andamento',
  description:
    'Formação sólida em fundamentos de ciência da computação, engenharia de software, banco de dados, arquitetura de computadores e governança de tecnologia da informação.',
  focusAreas: [
    'Engenharia de Software e Modelagem de Sistemas',
    'Estruturas de Dados e Algoritmos',
    'Bancos de Dados Relacionais e Não-Relacionais',
    'Sistemas Distribuídos e Redes de Computadores',
    'Gestão Ágil de Projetos de TI',
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'edunotify',
    title: 'EduNotify',
    subtitle: 'Sistema de controle de acesso escolar e comunicação em tempo real',
    category: 'Full-stack',
    featured: true,
    theme: 'light',
    image: 'https://i.postimg.cc/BvnRQHbB/Adobe-Express-Gravacao-de-Tela-2026-10-24-193413-(1).gif',
    overview:
      'Plataforma completa voltada ao controle de acesso de estudantes, permitindo acompanhamento pontual de entradas e saídas com visualização de informações por responsáveis e painéis administrativos por escopo institucional.',
    challenge:
      'Garantir a segurança física dos estudantes, diminuir a incerteza dos pais sobre a chegada de seus filhos na escola e fornecer aos gestores escolares relatórios precisos de frequência sem gerar filas ou atrasos na portaria.',
    solution:
      'Desenvolvimento de uma arquitetura integrada com backend robusto, aplicação web administrativa para operadores da instituição e aplicativo móvel para os responsáveis receberem alertas imediatos de presença.',
    myContribution: [
      'Arquitetura da solução e modelagem do banco de dados relacional (estudantes, turmas, responsáveis, catracas/pontos de acesso).',
      'Construção da aplicação web administrativa com painéis de controle, busca rápida e autorização baseada em papéis (RBAC).',
      'Estruturação do fluxo para aplicativo móvel dos responsáveis com visualização de histórico de presenças e notificações.',
      'Implementação de rotas seguras de API para autenticação e sincronização de eventos de acesso.',
      'Organização de dados de estudantes, responsáveis e vínculos institucionais com validações e integridade referencial.',
    ],
    featuresCompleted: [
      'Painel administrativo web com gestão de estudantes e turmas',
      'Controle e registro de eventos de entrada e saída com timestamp preciso',
      'Interface de consulta para responsáveis com visualização de horários',
      'Autenticação segura com diferentes níveis de acesso e permissões',
      'Filtros por período, turma e status de frequência escolar',
    ],
    featuresInDevelopment: [
      'Integração direta com hardware de catraca / leitores biométricos IoT',
      'Push notifications instantâneas para aplicativo móvel',
      'Relatórios analíticos de evasão e padrões de frequência',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'APIs REST',
      'Tailwind CSS',
      'Docker',
    ],
    githubUrl: 'https://github.com/flavio-ph',
  },
  {
    id: 'edunotify-app',
    title: 'EduNotify App',
    subtitle: 'App de monitoramento escolar e controle de acesso em tempo real',
    category: 'Mobile / Full-stack',
    theme: 'system',
    isMobile: true,
    image: 'https://i.postimg.cc/ZnsS4HFP/Adobe-Express-Edu-Notify-App.gif',
    overview:
      'Aplicativo móvel desenvolvido para pais e responsáveis acompanharem a rotina escolar de seus filhos, oferecendo notificações instantâneas sobre entradas e saídas, histórico de catraca, frequência e comunicados institucionais.',
    challenge:
      'Sincronizar eventos físicos de hardware (catracas) com notificações push em tempo real, além de gerenciar dados sensíveis de menores em conformidade com a LGPD e processar cálculos dinâmicos de frequência escolar.',
    solution:
      'Aplicativo construído com React Native e Expo (TypeScript), utilizando Expo Router para navegação avançada. Conta com um sistema de temas dinâmico, Context API para gerenciamento de estado e integração com serviços de Push Notification (FCM/Expo).',
    myContribution: [
      'Desenvolvimento integral do front-end mobile utilizando React Native, Expo e TypeScript.',
      'Implementação e gerenciamento de notificações push em tempo real para alertas de acesso.',
      'Desenvolvimento da lógica de cálculo de frequência escolar e calendário interativo de recessos.',
      'Criação de um Design System responsivo com suporte nativo a temas Claro e Escuro (Dark Mode).',
    ],
    featuresCompleted: [
      'Monitoramento em tempo real de entradas, saídas e fim de turno',
      'Cálculo automático de % de frequência escolar e faltas',
      'Gestão centralizada de múltiplos dependentes em uma única conta',
      'Recepção de comunicados escolares e atestados médicos',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Context API'],
    githubUrl: 'https://github.com/seu-usuario/edunotify', // Atualize com seu link real
  },
  {
    id: 'metricflow',
    title: 'MetricFlow',
    subtitle: 'SaaS de métricas para gestores com dashboard interativo',
    category: 'Front-end',
    theme: 'light',
    image: 'https://i.postimg.cc/TPxMfWpQ/metricflow.gif',
    overview:
      'Plataforma SaaS voltada para inteligência operacional e acompanhamento de indicadores estratégicos, transformando dados brutos em gráficos analíticos dinâmicos e de alta legibilidade.',
    challenge:
      'Renderizar múltiplos gráficos e fluxos analíticos em tempo real mantendo 60fps de performance, sem travamentos de renderização na interface web.',
    solution:
      'Arquitetura SPA moderna em React com TypeScript e Tailwind CSS, componentização modular, lazy loading e gráficos interativos com excelente usabilidade.',
    myContribution: [
      'Desenvolvimento de componentes modulares reutilizáveis com Tailwind CSS.',
      'Estruturação de fluxo de estados e consumo assíncrono de APIs.',
      'Design de dashboard com hierarquia visual clara e filtros por períodos e métricas.',
    ],
    featuresCompleted: [
      'Dashboard interativo com filtros dinâmicos de período e indicadores',
      'Visualização gráfica de KPIs e taxas de conversão',
      'Layout responsivo adaptado para mobile, tablet e desktop',
      'Exportação de relatórios resumidos',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'APIs REST'],
    githubUrl: 'https://github.com/flavio-ph',
    demoUrl: 'https://metricflow.com.br',
  },
  {
    id: 'milhaspro',
    title: 'MilhasPro',
    subtitle: 'Plataforma de gestão de milhas aéreas e viagens',
    category: 'Full-stack',
    theme: 'dark',
    image: '/projects/MilhasPro.gif',
    overview:
      'Plataforma especializada em gestão de programas de fidelidade, controle de saldos acumulados, simulação de cotações de passagens e histórico de rentabilidade de operações.',
    challenge:
      'Consolidar regras de pontuação de múltiplos programas de fidelidade, datas de expiração e cálculos dinâmicos de valuation e margem de lucro.',
    solution:
      'Backend estruturado em Java e Spring Boot com banco de dados PostgreSQL para cálculos de valuation e relatórios, integrado a uma interface React moderna e ágil.',
    myContribution: [
      'Modelagem relacional de dados no PostgreSQL com controle de expiração de lotes de milhas.',
      'Desenvolvimento de lógica de cálculo para custo médio do milheiro e projeção de lucro.',
      'Construção de interface interativa em React com alertas de vencimento.',
    ],
    featuresCompleted: [
      'Controle centralizado de múltiplos programas de fidelidade e contas',
      'Cálculo automático de custo médio por milheiro e rentabilidade',
      'Alertas de expiração de pontos e cotações',
      'Histórico completo de transações de compra e venda',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/flavio-ph',
  },
  {
    id: 'finanquest',
    title: 'FinanQuest',
    subtitle: 'App mobile de controle financeiro pessoal com gamificação',
    category: 'Mobile / Full-stack',
    theme: 'light',
    isMobile: true,
    image: '/projects/finanquest.gif',
    overview:
      'Aplicativo móvel que combina gestão financeira pessoal com elementos lúdicos de metas e conquistas para incentivar a disciplina de poupança e investimentos sustentáveis.',
    challenge:
      'Tornar o hábito de registrar receitas e despesas algo envolvente e prático, garantindo sincronização confiável mesmo com conectividade intermitente.',
    solution:
      'Arquitetura full-stack com backend Spring Boot e MySQL para consolidação de balanços, e app React Native com UX simplificada e feedback visual instantâneo.',
    myContribution: [
      'Desenvolvimento do backend em Java/Spring Boot com autenticação e consolidação mensal.',
      'Implementação da interface mobile em React Native com gráficos e categorização rápida.',
      'Lógica de gamificação com metas, níveis e histórico de evolução orçamentária.',
    ],
    featuresCompleted: [
      'Lançamento rápido de despesas e receitas por categorias personalizadas',
      'Gráficos de fluxo de caixa mensal e projeção de gastos',
      'Sistema de metas de economia com pontuação e conquistas',
      'Exportação de extrato financeiro',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React Native', 'TypeScript'],
    githubUrl: 'https://github.com/flavio-ph',
  },
  {
    id: 'educchain',
    title: 'EducChain',
    subtitle: 'Solução educacional com gamificação e blockchain',
    category: 'Full-stack',
    theme: 'dark',
    image: 'https://i.postimg.cc/4NwhzzTj/educ_Chain.gif',
    overview:
      'Plataforma educativa que registra certificados e conquistas acadêmicas de forma verificável, estimulando o engajamento estudantil através de missões e recompensas.',
    challenge:
      'Garantir a verificação imutável de emissão de certificados acadêmicos com baixo tempo de resposta e alta disponibilidade.',
    solution:
      'Uso de Golang para microsserviços de alto desempenho e verificação descentralizada, persistência relacional com MySQL e interface web React.',
    myContribution: [
      'Desenvolvimento de microsserviço de alta concorrência em Go (Golang).',
      'Modelagem de dados no MySQL para gestão de alunos, cursos e registros de conclusão.',
      'Interface web interativa em React com visualização de conquistas e trilhas de aprendizado.',
    ],
    featuresCompleted: [
      'Validação descentralizada de emissão de certificados digitais',
      'Trilhas pedagógicas gamificadas com progressão por etapas',
      'Painel do instrutor para cadastro de conteúdos e avaliações',
      'Verificação pública de autenticidade de diplomas',
    ],
    technologies: ['Golang', 'MySQL', 'TypeScript', 'React', 'Docker'],
    githubUrl: 'https://github.com/flavio-ph',
  },
  {
    id: 'portfolio-fisio',
    title: 'Portfolio Fisio Marcela',
    subtitle: 'Site institucional moderno para profissional de saúde',
    category: 'Front-end',
    theme: 'light',
    image: '/projects/fisio.gif',
    overview:
      'Website institucional moderno e humanizado desenvolvido para fisioterapeuta, destacando áreas de especialização, depoimentos de pacientes e agendamento direto.',
    challenge:
      'Transmitir credibilidade, autoridade clínica e acolhimento com carregamento ultrarrápido em dispositivos móveis e otimização para motores de busca (SEO).',
    solution:
      'Interface construída com React e Tailwind CSS, tipografia elegante, carregamento otimizado de mídias e botões de chamada para ação (CTA) integrados ao WhatsApp.',
    myContribution: [
      'Design e implementação de interface responsiva, elegante e acolhedora.',
      'Otimização de SEO semântico e meta tags para indexação em buscas locais.',
      'Integração direta de agendamento via WhatsApp API com mensagens pré-formatadas.',
    ],
    featuresCompleted: [
      'Apresentação clara de tratamentos, especialidades e metodologia clínica',
      'Canal de agendamento ágil com redirecionamento para WhatsApp',
      'Seção de depoimentos e avaliações de pacientes',
      'Desempenho mobile-first com carregamento instantâneo',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Mobile First'],
    githubUrl: 'https://github.com/flavio-ph',
  },
  {
    id: 'barbearia-corte-navalha',
    title: 'Barbearia Corte e Navalha',
    subtitle: 'Landing page para agendamento e apresentação de serviços',
    category: 'Front-end',
    theme: 'dark',
    image: 'https://i.postimg.cc/nzd64RTd/barber.gif',
    overview:
      'Página de conversão de alto impacto visual com estética moderna para barbearia, facilitando a escolha de serviços, tabela de preços e agendamento de horários pelos clientes.',
    challenge:
      'Reduzir o atrito na escolha de serviços e tempo de espera dos clientes através de uma experiência digital simples e direta pelo smartphone.',
    solution:
      'Landing page SPA desenvolvida em React e Tailwind CSS com catálogo interativo de serviços, preços transparentes e sistema direto de solicitação de horário.',
    myContribution: [
      'Criação do design visual com tema escuro elegante e tipografia contemporânea.',
      'Estruturação de componentes de cardápio de serviços e tabela de preços.',
      'Implementação de fluxo ágil de reserva de horários via mobile.',
    ],
    featuresCompleted: [
      'Catálogo interativo com descrições e valores de cortes e barba',
      'Galeria de fotos com resultados de cortes realizados',
      'Botão flutuante de agendamento prioritário',
      'Localização integrada com mapa e horários de atendimento',
    ],
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    githubUrl: 'https://github.com/flavio-ph',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack',
    orderNumber: '01',
    title: 'Desenvolvimento Full Stack',
    tagline: 'Aplicações web de ponta a ponta',
    shortDescription: 'Aplicações web completas e integradas.',
    description:
      'Desenvolvimento de aplicações modernas, responsivas e funcionais, integrando interfaces intuitivas, regras de negócio e bancos de dados para transformar ideias em produtos digitais.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot'],
    iconType: 'fullstack',
    problemsSolved: [
      'Construção de produtos digitais do zero com arquitetura sólida e escalável.',
      'Criação de interfaces web responsivas, fluidas e focadas na experiência do usuário.',
      'Integração robusta entre front-end, serviços de back-end e banco de dados relacional.',
      'Eliminação de barreiras técnicas para transformar requisitos de negócio em software em produção.',
    ],
    deliverables: [
      'Aplicações SPA/SSR modernas (React, TypeScript)',
      'APIs REST e serviços de backend (Java, Spring Boot)',
      'Modelagem relacional e persistência de dados',
      'Código limpo, documentação básica e versionamento Git',
    ],
  },
  {
    id: 'backend-apis',
    orderNumber: '02',
    title: 'Back-end e APIs',
    tagline: 'A lógica e a estrutura por trás do produto',
    shortDescription: 'Serviços, dados e integrações.',
    description:
      'Criação e evolução de serviços, APIs REST e integrações entre sistemas, com foco em segurança, organização, desempenho e facilidade de manutenção.',
    technologies: ['Java', 'Spring Boot', 'REST', 'PostgreSQL', 'MySQL'],
    iconType: 'backend',
    problemsSolved: [
      'Criação de APIs RESTful estruturadas, seguras e prontas para consumo por múltiplos clientes.',
      'Implementação de autenticação e autorização (JWT, Spring Security) com controle granular de acesso.',
      'Otimização de rotinas de banco de dados, transações ACID e modelagem relacional consistente.',
      'Redução de falhas e inconsistências no tráfego de dados sensíveis da operação.',
    ],
    deliverables: [
      'Endpoints REST documentados (Swagger/OpenAPI)',
      'Camada de persistência otimizada com JPA/Hibernate e SQL',
      'Tratamento centralizado de erros e validações estritas de DTOs',
      'Testes automatizados e integridade de dados garantida',
    ],
  },
  {
    id: 'arquitetura-integracao',
    orderNumber: '03',
    title: 'Arquitetura e Integração de Sistemas',
    tagline: 'Soluções organizadas para crescer',
    shortDescription: 'Estrutura e evolução de sistemas.',
    description:
      'Estruturação de aplicações, integração de serviços e organização de componentes para reduzir acoplamento, facilitar a evolução e tornar os sistemas mais sustentáveis.',
    technologies: ['Arquitetura de software', 'Microsserviços', 'Design Patterns'],
    iconType: 'architecture',
    problemsSolved: [
      'Redução do acoplamento excessivo que encarece e atrasa alterações no sistema.',
      'Planejamento de fronteiras de serviço para permitir crescimento ordenado sem gargalos estruturais.',
      'Comunicação resiliente entre diferentes plataformas e serviços heterogêneos.',
      'Adoção pragmática de padrões de arquitetura (Clean Architecture, SOLID, Design Patterns).',
    ],
    deliverables: [
      'Desenho de arquitetura de software e delimitação de domínios',
      'Contratos de integração padronizados e comunicação entre serviços',
      'Estratégias de desacoplamento e mitigação de débitos técnicos',
      'Diretrizes de código e padrões para uniformizar o desenvolvimento',
    ],
  },
  {
    id: 'infra-deploy',
    orderNumber: '04',
    title: 'Infraestrutura e Deploy',
    tagline: 'Da aplicação local ao ambiente de produção',
    shortDescription: 'Ambientes e implantação.',
    description:
      'Configuração de ambientes, conteinerização e publicação de aplicações, buscando entregas consistentes, ambientes organizados e processos de implantação mais eficientes.',
    technologies: ['Docker', 'Linux', 'VPS', 'Nginx', 'AWS', 'CI/CD'],
    iconType: 'infra',
    problemsSolved: [
      'Eliminação do problema de inconsistência de ambientes ("funciona na minha máquina").',
      'Configuração segura de servidores Linux (Ubuntu), VPS e proxies reversos com Nginx e SSL.',
      'Automação de processos de deploy contínuo (CI/CD) para entregas previsíveis e sem estresse.',
      'Garantia de que a aplicação permaneça no ar com gerenciamento de processos e reinício automático.',
    ],
    deliverables: [
      'Dockerfiles otimizados e orquestração com Docker Compose',
      'Servidores VPS configurados com Nginx, certificados HTTPS e firewall',
      'Pipelines automatizados de build e deploy contínuo (GitHub Actions / CI/CD)',
      'Organização de variáveis de ambiente e segredos de produção',
    ],
  },
  {
    id: 'modernizacao-manutencao',
    orderNumber: '05',
    title: 'Modernização e Manutenção de Software',
    tagline: 'Melhoria contínua de aplicações existentes',
    shortDescription: 'Refatoração e ganho de estabilidade.',
    description:
      'Refatoração de código, correção de problemas, melhoria de estruturas e evolução de funcionalidades para tornar aplicações mais confiáveis, legíveis e fáceis de manter.',
    technologies: ['Refatoração', 'Clean Code', 'Code Review', 'Performance'],
    iconType: 'modernization',
    problemsSolved: [
      'Eliminação de bugs recorrentes e falhas intermitentes em aplicações ativas.',
      'Refatoração progressiva de código confuso ou antigo sem quebrar regras de negócio em uso.',
      'Melhoria de tempos de resposta e consumo excessivo de recursos do servidor.',
      'Criação de bases de código legíveis para que novos desenvolvedores ingressem rapidamente.',
    ],
    deliverables: [
      'Diagnóstico de vulnerabilidades, pontos de lentidão e débitos técnicos',
      'Refatorações cirúrgicas e seguras em regras críticas',
      'Adoção de boas práticas de Clean Code e revisões de código',
      'Evolução gradual de funcionalidades com menor risco operacional',
    ],
  },
  {
    id: 'automacao-processos',
    orderNumber: '06',
    title: 'Automação de Processos',
    tagline: 'Menos tarefas repetitivas, mais eficiência',
    shortDescription: 'Workflows inteligentes e eficiência.',
    description:
      'Automatização de fluxos de trabalho e integração de ferramentas para reduzir atividades manuais e melhorar a comunicação entre sistemas.',
    technologies: ['n8n', 'APIs', 'Integrações', 'Bubble.io'],
    iconType: 'automation',
    problemsSolved: [
      'Fim do retrabalho manual em alimentação de planilhas, cadastros e envio de notificações.',
      'Conexão ágil entre sistemas diversos (ERPs, CRMs, Webhooks, mensagerias).',
      'Aceleração de fluxos operacionais que antes dependiam de intervenção humana constante.',
      'Disponibilização rápida de soluções digitais internas sem necessidade de meses de desenvolvimento.',
    ],
    deliverables: [
      'Workflows operacionais automatizados com n8n ou webhooks',
      'Integrações com APIs de terceiros e mensageria',
      'Gatilhos automáticos de sincronização e validação de dados',
      'Documentação de fluxos operacionais e alertas de monitoramento',
    ],
  },
];

export const MARQUEE_TERMS = [
  'TECNOLOGIA',
  'ARQUITETURA',
  'SERVIDORES & VPS',
  'LINUX & NGINX',
  'DESENVOLVIMENTO',
  'AUTOMAÇÃO',
  'LIDERANÇA',
  'ENGENHARIA DE SOFTWARE',
  'QUALIDADE DE CÓDIGO',
  'INOVAÇÃO',
  'ESCALABILIDADE',
];
