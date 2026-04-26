import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-[var(--font-bebas)] text-lg sm:text-xl tracking-wider text-white">
              SIDE<span className="text-gradient-pink">WAY</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 order-3 sm:order-2">
            © {new Date().getFullYear()} SIDEWAY. Все права защищены.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-3">
            <a href="#hero" className="text-xs sm:text-sm text-slate-400 hover:text-pink-400 active:text-pink-300 transition-colors">Наверх</a>
            <span className="text-slate-700">·</span>
            <a href="#cockpits" className="text-xs sm:text-sm text-slate-400 hover:text-pink-400 active:text-pink-300 transition-colors">Кокпиты</a>
            <span className="text-slate-700">·</span>
            <a href="#contacts" className="text-xs sm:text-sm text-slate-400 hover:text-pink-400 active:text-pink-300 transition-colors">Контакты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
