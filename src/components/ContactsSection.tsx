import { motion } from 'framer-motion';
import { Phone, Send, MapPin, Clock, Mail } from 'lucide-react';

const team = [
  {
    name: 'Максим',
    role: 'Основатель / Менеджер',
    whatsapp: '+7 (999) 123-45-67',
    whatsappLink: 'https://wa.me/79991234567',
    telegram: '@maxim_sideway',
    telegramLink: 'https://t.me/maxim_sideway',
    avatar: 'М',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Артём',
    role: 'Техник / Администратор',
    whatsapp: '+7 (999) 765-43-21',
    whatsappLink: 'https://wa.me/79997654321',
    telegram: '@artem_sideway',
    telegramLink: 'https://t.me/artem_sideway',
    avatar: 'А',
    gradient: 'from-cyan-400 to-blue-600',
  },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative z-10 py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass neon-border mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-pink-300 font-medium tracking-wider uppercase">
              Контакты
            </span>
          </div>
          <h2 className="font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl text-white tracking-wide mb-3 sm:mb-4">
            СВЯЖИСЬ <span className="text-gradient-pink">С НАМИ</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-lg font-light px-2">
            Готов к заезду? Напиши нам в любой мессенджер или позвони
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 neon-border hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg shrink-0`}>
                  {person.avatar}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{person.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 truncate">{person.role}</p>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {/* WhatsApp */}
                <a
                  href={person.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 active:bg-green-500/25 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-green-400 font-semibold uppercase tracking-wider">WhatsApp</div>
                    <div className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors truncate">{person.whatsapp}</div>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href={person.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 active:bg-blue-500/25 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-blue-400 font-semibold uppercase tracking-wider">Telegram</div>
                    <div className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors truncate">{person.telegram}</div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 neon-border max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Адрес</div>
                <div className="text-xs sm:text-sm text-slate-200">г. Москва, ул. Гоночная, 42</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Режим работы</div>
                <div className="text-xs sm:text-sm text-slate-200">Ежедневно 10:00 — 23:00</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</div>
                <div className="text-xs sm:text-sm text-slate-200">info@sideway.ru</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
