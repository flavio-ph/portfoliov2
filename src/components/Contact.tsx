import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-fill message when user clicks "Vamos conversar sobre este serviço"
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle: string }>;
      if (customEvent.detail?.serviceTitle) {
        const title = customEvent.detail.serviceTitle;
        setFormData((prev) => ({
          ...prev,
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

    if (!formData.message.trim()) {
      setErrorMessage('Por favor, digite sua mensagem.');
      setFormStatus('error');
      return;
    }

    // Format message for WhatsApp
    const lines = [
      `*Olá Flávio! Vim pelo seu portfólio.*`,
      ``,
      `*Nome:* ${formData.name.trim()}`,
      ``,
      `*Mensagem:*`,
      `${formData.message.trim()}`,
    ];

    const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(lines.join('\n'))}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

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
          <div className="relative flex items-center justify-between px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800">
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
            
            {/* Field: Nome */}
            <div className="flex flex-col sm:flex-row sm:items-center py-2.5 border-b border-zinc-100 dark:border-zinc-800 focus-within:border-zinc-900 dark:focus-within:border-zinc-200 transition-colors">
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
                placeholder="Seu nome"
                required
                className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none"
              />
            </div>

            {/* Field: Mensagem (Textarea) */}
            <div className="pt-2">
              <div className="min-h-[160px] p-4 rounded-[10px] bg-zinc-50/70 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 focus-within:ring-1 focus-within:ring-zinc-900 dark:focus-within:ring-zinc-200 transition-all">
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
              <div className="p-3.5 rounded-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    WhatsApp aberto com a sua mensagem pronta para envio!
                  </span>
                </div>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(
                    `*Olá Flávio! Vim pelo seu portfólio.*\n\n*Nome:* ${formData.name.trim()}\n\n*Mensagem:*\n${formData.message.trim()}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline shrink-0 hover:opacity-80"
                >
                  Abrir conversa novamente
                </a>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[10px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs tracking-tight transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Enviar no WhatsApp</span>
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
              href={`https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent(
                'Olá Flávio! Vim pelo seu portfólio.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp direto de Flávio Almeida"
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm hover:shadow transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

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
