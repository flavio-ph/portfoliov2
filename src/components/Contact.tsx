import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-fill subject & message when user clicks "Vamos conversar sobre este serviço"
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle: string }>;
      if (customEvent.detail?.serviceTitle) {
        const title = customEvent.detail.serviceTitle;
        setFormData((prev) => ({
          ...prev,
          subject:
            title === 'Novo Projeto'
              ? 'Interesse em Desenvolvimento de Projeto'
              : `Interesse em: ${title}`,
          message:
            prev.message ||
            `Olá Flávio,\n\nGostaria de entender melhor como você pode me ajudar com soluções em ${title} para o meu projeto/empresa.`,
        }));
        if (formStatus !== 'idle') setFormStatus('idle');
      }
    };

    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, [formStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus !== 'idle') setFormStatus('idle');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      setFormStatus('error');
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage('Por favor, informe o assunto da mensagem.');
      setFormStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Por favor, digite sua mensagem.');
      setFormStatus('error');
      return;
    }

    // Build mailto link
    const mailtoSubject = encodeURIComponent(`[Contato Portfólio] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Olá Flávio,\n\nMeu nome é: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    setFormStatus('success');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-400 dark:text-zinc-500 mb-2">
            Vamos <span className="text-zinc-950 dark:text-white font-extrabold">conversar</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
            Disponível para conexões profissionais, oportunidades e novos desafios.
          </p>
        </div>

        {/* macOS Desktop Window Contact Form matching reference */}
        <div className="relative mx-auto max-w-2xl rounded-[10px] bg-white dark:bg-zinc-900 border border-black/8 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Window Title Bar */}
          <div className="relative flex items-center justify-between px-6 py-4 bg-zinc-50 dark:bg-zinc-850 border-b border-zinc-100 dark:border-zinc-800">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            </div>

            {/* Centered Window Title */}
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-tight">
              Nova mensagem
            </span>

            <div className="w-12" />
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            
            {/* Field: Email */}
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-zinc-100 dark:border-zinc-800 focus-within:border-zinc-900 dark:focus-within:border-zinc-200 transition-colors">
              <label
                htmlFor="email"
                className="w-24 text-xs font-semibold text-zinc-500 dark:text-zinc-400 shrink-0 pb-1 sm:pb-0"
              >
                Email :
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
                required
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none"
              />
            </div>

            {/* Field: Nome */}
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-zinc-100 dark:border-zinc-800 focus-within:border-zinc-900 dark:focus-within:border-zinc-200 transition-colors">
              <label
                htmlFor="name"
                className="w-24 text-xs font-semibold text-zinc-500 dark:text-zinc-400 shrink-0 pb-1 sm:pb-0"
              >
                Nome :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none"
              />
            </div>

            {/* Field: Assunto */}
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-zinc-100 dark:border-zinc-800 focus-within:border-zinc-900 dark:focus-within:border-zinc-200 transition-colors">
              <label
                htmlFor="subject"
                className="w-24 text-xs font-semibold text-zinc-500 dark:text-zinc-400 shrink-0 pb-1 sm:pb-0"
              >
                Assunto :
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Oportunidade / Projeto / Conversa técnica"
                required
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none"
              />
            </div>

            {/* Field: Mensagem (Textarea) */}
            <div className="pt-3">
              <div className="min-h-[160px] p-4 rounded-[10px] bg-zinc-50/70 dark:bg-zinc-850/60 border border-zinc-100 dark:border-zinc-800 focus-within:ring-1 focus-within:ring-zinc-900 dark:focus-within:ring-zinc-200 transition-all">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Digite sua mensagem..."
                  required
                  className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Error / Success Feedback */}
            {formStatus === 'error' && (
              <div className="p-3 rounded-[10px] bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {formStatus === 'success' && (
              <div className="p-3 rounded-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  Cliente de e-mail acionado com sucesso! Caso prefira, você também pode copiar o e-mail abaixo.
                </span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[10px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs tracking-tight transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Enviar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Email Bubble & Social Links below matching reference */}
        <div className="mt-12 flex flex-col items-center gap-5">
          {/* Floating Chat Bubble Tooltip with Copy Action */}
          <div className="relative group">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[10px] bg-zinc-700 dark:bg-zinc-800 text-white text-xs font-mono font-medium shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-200 cursor-pointer active:scale-95"
              title="Clique para copiar o e-mail"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-300" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  Copiado!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              )}
            </button>

            {/* Bubble arrow */}
            <div className="w-3 h-3 bg-zinc-700 dark:bg-zinc-800 rotate-45 mx-auto -mt-1.5 rounded-sm" />
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Flávio Almeida"
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:text-zinc-950 dark:hover:text-white shadow-sm hover:shadow transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Flávio Almeida"
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:text-zinc-950 dark:hover:text-white shadow-sm hover:shadow transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="E-mail direto de Flávio Almeida"
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:text-zinc-950 dark:hover:text-white shadow-sm hover:shadow transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
