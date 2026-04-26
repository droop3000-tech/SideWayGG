import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, HardDrive, Gauge, Gamepad2, MemoryStick, ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

interface CockpitSpec {
  icon: ReactNode;
  label: string;
  value: string;
}

interface CockpitData {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  wheel: string;
  pedals: string;
  shifter: string;
  specs: CockpitSpec[];
  accent: string;
}

export const cockpits: CockpitData[] = [
  {
    id: 1,
    name: 'APEX PRO',
    subtitle: 'Флагманский кокпит',
    image: '/images/cockpit1.jpg',
    wheel: 'Fanatec DD Pro (8Nm)',
    pedals: 'Fanatec CSL Elite V2',
    shifter: 'Fanatec ClubSport SQ v1.5',
    specs: [
      { icon: <Cpu className="w-4 h-4" />, label: 'CPU', value: 'Intel i9-13900K' },
      { icon: <Monitor className="w-4 h-4" />, label: 'GPU', value: 'RTX 4080 Super' },
      { icon: <MemoryStick className="w-4 h-4" />, label: 'RAM', value: '32GB DDR5' },
      { icon: <HardDrive className="w-4 h-4" />, label: 'SSD', value: '2TB NVMe Gen4' },
      { icon: <Monitor className="w-4 h-4" />, label: 'Монитор', value: '49" Samsung G9' },
      { icon: <Gauge className="w-4 h-4" />, label: 'FPS', value: '144+ стабильно' },
    ],
    accent: 'from-pink-500 to-rose-600',
  },
  {
    id: 2,
    name: 'TURBO GT',
    subtitle: 'Мощь и точность',
    image: '/images/cockpit2.jpg',
    wheel: 'Thrustmaster T-GT II',
    pedals: 'Thrustmaster T-LCM',
    shifter: 'Thrustmaster TH8A',
    specs: [
      { icon: <Cpu className="w-4 h-4" />, label: 'CPU', value: 'AMD Ryzen 9 7900X' },
      { icon: <Monitor className="w-4 h-4" />, label: 'GPU', value: 'RTX 4070 Ti Super' },
      { icon: <MemoryStick className="w-4 h-4" />, label: 'RAM', value: '32GB DDR5' },
      { icon: <HardDrive className="w-4 h-4" />, label: 'SSD', value: '1TB NVMe Gen4' },
      { icon: <Monitor className="w-4 h-4" />, label: 'Монитор', value: 'Triple 27" 2K 165Hz' },
      { icon: <Gauge className="w-4 h-4" />, label: 'FPS', value: '120+ стабильно' },
    ],
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    id: 3,
    name: 'DRIFT KING',
    subtitle: 'Для настоящих дрифтеров',
    image: '/images/cockpit3.jpg',
    wheel: 'Moza R9 V2 (9Nm)',
    pedals: 'Moza CRP',
    shifter: 'Moza HGP Shifter',
    specs: [
      { icon: <Cpu className="w-4 h-4" />, label: 'CPU', value: 'Intel i7-14700K' },
      { icon: <Monitor className="w-4 h-4" />, label: 'GPU', value: 'RTX 4070 Super' },
      { icon: <MemoryStick className="w-4 h-4" />, label: 'RAM', value: '32GB DDR5' },
      { icon: <HardDrive className="w-4 h-4" />, label: 'SSD', value: '1TB NVMe Gen4' },
      { icon: <Monitor className="w-4 h-4" />, label: 'Монитор', value: '34" UltraWide QHD' },
      { icon: <Gauge className="w-4 h-4" />, label: 'FPS', value: '144+ стабильно' },
    ],
    accent: 'from-violet-500 to-purple-700',
  },
  {
    id: 4,
    name: 'ROOKIE',
    subtitle: 'Идеален для старта',
    image: '/images/cockpit4.jpg',
    wheel: 'Logitech G Pro Racing',
    pedals: 'Logitech G Pro Pedals',
    shifter: 'Logitech Driving Force',
    specs: [
      { icon: <Cpu className="w-4 h-4" />, label: 'CPU', value: 'AMD Ryzen 7 7800X3D' },
      { icon: <Monitor className="w-4 h-4" />, label: 'GPU', value: 'RTX 4060 Ti 16GB' },
      { icon: <MemoryStick className="w-4 h-4" />, label: 'RAM', value: '16GB DDR5' },
      { icon: <HardDrive className="w-4 h-4" />, label: 'SSD', value: '1TB NVMe' },
      { icon: <Monitor className="w-4 h-4" />, label: 'Монитор', value: '27" 2K 165Hz IPS' },
      { icon: <Gauge className="w-4 h-4" />, label: 'FPS', value: '120+ стабильно' },
    ],
    accent: 'from-emerald-400 to-teal-600',
  },
];

/* Mobile expandable specs */
function MobileSpecs({ cockpit }: { cockpit: CockpitData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 text-sm font-medium"
      >
        <span>Характеристики ПК</span>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-pink-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 pt-3">
              {cockpit.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-pink-400 shrink-0">{spec.icon}</div>
                  <div className="min-w-0">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">{spec.label}</div>
                    <div className="text-[11px] text-slate-200 font-medium truncate">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CockpitCard({ cockpit, index }: { cockpit: CockpitData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="cockpit-card group"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 glass rounded-xl sm:rounded-2xl overflow-hidden neon-border hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500`}>
        {/* Image */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <div className="aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
            <img
              src={cockpit.image}
              alt={cockpit.name}
              className="cockpit-image w-full h-full object-cover transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="cockpit-overlay absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-opacity duration-500" />
          
          {/* Badge + Name overlay on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 lg:hidden">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${cockpit.accent} text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-1.5`}>
              <Gamepad2 className="w-3 h-3" />
              Кокпит #{cockpit.id}
            </div>
            <h3 className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-white tracking-wide leading-none">
              {cockpit.name}
            </h3>
          </div>
          
          {/* Badge on desktop */}
          <div className="absolute bottom-4 left-4 z-10 hidden lg:block">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${cockpit.accent} text-white text-xs font-bold tracking-wider uppercase`}>
              <Gamepad2 className="w-3.5 h-3.5" />
              Кокпит #{cockpit.id}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          {/* Subtitle — always visible */}
          <div className="mb-1 text-xs sm:text-sm text-pink-400 font-medium tracking-wider uppercase">
            {cockpit.subtitle}
          </div>
          
          {/* Name — only on desktop (shown on image overlay for mobile) */}
          <h3 className="hidden lg:block font-[var(--font-bebas)] text-4xl md:text-5xl text-white mb-4 tracking-wide">
            {cockpit.name}
          </h3>

          {/* Wheel info */}
          <div className="mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 mt-1 lg:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300">
                <span className="text-pink-400 font-semibold">Руль:</span> {cockpit.wheel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300">
                <span className="text-cyan-400 font-semibold">Педали:</span> {cockpit.pedals}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300">
                <span className="text-violet-400 font-semibold">Коробка:</span> {cockpit.shifter}
              </span>
            </div>
          </div>

          {/* Mobile: expandable specs */}
          <MobileSpecs cockpit={cockpit} />

          {/* Desktop: always visible specs grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {cockpit.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-pink-500/30 transition-colors duration-300"
              >
                <div className="text-pink-400 shrink-0">{spec.icon}</div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{spec.label}</div>
                  <div className="text-xs text-slate-200 font-medium">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
