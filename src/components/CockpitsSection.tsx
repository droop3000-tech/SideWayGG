import { motion } from 'framer-motion';
import CockpitCard, { cockpits } from './CockpitCard';

export default function CockpitsSection() {
  return (
    <section id="cockpits" className="relative z-10 py-16 sm:py-24 md:py-32">
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
              Наши кокпиты
            </span>
          </div>
          <h2 className="font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl text-white tracking-wide mb-3 sm:mb-4">
            ВЫБЕРИ СВОЙ <span className="text-gradient-pink">БОЛИД</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-lg font-light px-2">
            Каждый кокпит — это уникальная конфигурация, подобранная для максимального погружения
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-8">
          {cockpits.map((cockpit, i) => (
            <CockpitCard key={cockpit.id} cockpit={cockpit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
