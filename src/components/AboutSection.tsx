import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Топовое оборудование',
    desc: 'Direct-drive рули, load-cell педали и профессиональные кокпиты для полного погружения',
  },
  {
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Мультиплеер',
    desc: 'Гоняйся с друзьями бок о бок — 4 кокпита для одновременной игры',
  },
  {
    icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Гибкий график',
    desc: 'Работаем ежедневно, бронирование на любое удобное время',
  },
  {
    icon: <Star className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Все симуляторы',
    desc: 'Assetto Corsa, iRacing, ACC, F1 24, Gran Turismo и другие',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass neon-border mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wider uppercase">
                О нас
              </span>
            </div>
            <h2 className="font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl text-white tracking-wide mb-4 sm:mb-6">
              БОЛЬШЕ ЧЕМ<br />
              <span className="text-gradient-pink">ПРОСТО ИГРА</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
              SIDEWAY — это пространство для тех, кто живёт скоростью.
              Мы создали место, где каждый может почувствовать себя за рулём
              настоящего гоночного болида. Профессиональное оборудование,
              реалистичная физика и атмосфера настоящего автоспорта.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-center">
                <div className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-gradient-pink">500+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Гонщиков</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-pink-500/20" />
              <div className="text-center">
                <div className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-gradient-cyan">2000+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Часов заездов</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-pink-500/20" />
              <div className="text-center">
                <div className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-gradient-pink">4.9</div>
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Рейтинг</div>
              </div>
            </div>
          </motion.div>

          {/* Right - features grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group glass rounded-xl sm:rounded-2xl p-4 sm:p-6 neon-border hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:border-pink-500/30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center text-pink-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
