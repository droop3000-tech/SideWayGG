import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Send, MessageCircle, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const team = [
  {
    name: 'Максим',
    role: 'Основатель / Менеджер',
    avatar: 'М',
    gradient: 'from-pink-500 to-rose-600',
    shadow: 'shadow-pink-500/30',
    contacts: [
      {
        type: 'WhatsApp',
        value: '+7 (999) 123-45-67',
        href: 'https://wa.me/79991234567',
        icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
        colors: 'bg-green-500/10 border-green-500/20 hover:bg-green-500/20 active:bg-green-500/25',
        iconBg: 'bg-green-500/20',
        accent: 'text-green-400',
      },
      {
        type: 'Telegram',
        value: '@maxim_sideway',
        href: 'https://t.me/maxim_sideway',
        icon: <Send className="w-4 h-4 sm:w-5 sm:h-5" />,
        colors: 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 active:bg-blue-500/25',
        iconBg: 'bg-blue-500/20',
        accent: 'text-blue-400',
      },
    ],
  },
  {
    name: 'Артём',
    role: 'Техник / Администратор',
    avatar: 'А',
    gradient: 'from-cyan-400 to-blue-600',
    shadow: 'shadow-cyan-500/30',
    contacts: [
      {
        type: 'WhatsApp',
        value: '+7 (999) 765-43-21',
        href: 'https://wa.me/79997654321',
        icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
        colors: 'bg-green-500/10 border-green-500/20 hover:bg-green-500/20 active:bg-green-500/25',
        iconBg: 'bg-green-500/20',
        accent: 'text-green-400',
      },
      {
        type: 'Telegram',
        value: '@artem_sideway',
        href: 'https://t.me/artem_sideway',
        icon: <Send className="w-4 h-4 sm:w-5 sm:h-5" />,
        colors: 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 active:bg-blue-500/25',
        iconBg: 'bg-blue-500/20',
        accent: 'text-blue-400',
      },
    ],
  },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[calc(100%-2rem)] max-w-lg mx-4 max-h-[90svh] overflow-y-auto"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 neon-border shadow-2xl shadow-pink-500/10">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span className="text-xs text-pink-300 font-semibold tracking-wider uppercase">Запись на заезд</span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-white tracking-wide mb-2"
                >
                  ЗАПИСАТЬСЯ
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-xs sm:text-sm text-slate-400 font-light"
                >
                  Напиши нам — подберём время и кокпит
                </motion.p>
              </div>

              {/* Team contacts */}
              <div className="space-y-4 sm:space-y-5">
                {team.map((person, personIdx) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + personIdx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 sm:p-5"
                  >
                    {/* Person header */}
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg ${person.shadow} shrink-0`}>
                        {person.avatar}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-white">{person.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 truncate">{person.role}</p>
                      </div>
                    </div>

                    {/* Contact buttons */}
                    <div className="grid grid-cols-1 gap-2">
                      {person.contacts.map((contact, contactIdx) => (
                        <motion.a
                          key={contact.type}
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + personIdx * 0.12 + contactIdx * 0.08 }}
                          className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${contact.colors}`}
                        >
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${contact.iconBg} flex items-center justify-center shrink-0`}>
                            {contact.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${contact.accent}`}>
                              {contact.type}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-200 truncate">
                              {contact.value}
                            </div>
                          </div>
                          <div className={`${contact.accent} shrink-0`}>
                            <MessageCircle className="w-4 h-4 opacity-40" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center text-[10px] sm:text-xs text-slate-500 mt-5 sm:mt-6 font-light"
              >
                Отвечаем в течение 15 минут · Ежедневно 10:00 — 23:00
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
