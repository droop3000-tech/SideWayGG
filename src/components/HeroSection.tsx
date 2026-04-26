import { motion } from 'framer-motion';
import { ChevronDown, CalendarCheck } from 'lucide-react';

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Speed lines — hidden on small screens for performance */}
      <div className="hidden sm:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent z-[2]"
            style={{
              top: `${15 + i * 18}%`,
              width: '40%',
              left: '-40%',
            }}
            animate={{
              left: ['-40%', '140%'],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass neon-border mb-5 sm:mb-8"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-pink-300 font-medium tracking-wider uppercase">
              Премиум сим-рейсинг
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-bebas)] text-[5.5rem] leading-[0.85] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-gradient-pink neon-text">SIDEWAY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-lg md:text-xl text-slate-400 max-w-lg sm:max-w-2xl mx-auto mb-7 sm:mb-10 font-light leading-relaxed px-2"
          >
            4 профессиональных кокпита с топовым железом и direct-drive рулями.
            Полное погружение в мир автоспорта.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 sm:px-0"
          >
            <a
              href="#cockpits"
              className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 active:scale-95 sm:hover:scale-105 flex items-center justify-center gap-2"
            >
              Смотреть кокпиты
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <button
              onClick={onBookingClick}
              className="group px-6 sm:px-8 py-3.5 sm:py-4 glass rounded-xl text-white font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 active:scale-95 sm:hover:scale-105 flex items-center justify-center gap-2 neon-border cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
              Записаться
            </button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 sm:mt-20 grid grid-cols-4 gap-2 sm:gap-4"
        >
          {[
            { value: '4', label: 'Кокпита' },
            { value: 'DD', label: 'Direct Drive' },
            { value: '4K', label: 'Разрешение' },
            { value: '120+', label: 'FPS' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.08 }}
              className="glass rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center neon-border"
            >
              <div className="font-[var(--font-bebas)] text-xl sm:text-3xl md:text-4xl text-gradient-pink">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1 font-medium leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-pink-500/40 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-pink-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
