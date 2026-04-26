import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Кокпиты', href: '#cockpits' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

interface NavbarProps {
  onBookingClick: () => void;
}

export default function Navbar({ onBookingClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen]);

  const handleBooking = () => {
    setMobileOpen(false);
    onBookingClick();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen ? 'glass-strong shadow-2xl shadow-pink-500/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/40 transition-shadow duration-300">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-[var(--font-bebas)] text-xl sm:text-2xl tracking-wider text-white">
              SIDE<span className="text-gradient-pink">WAY</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-pink-400 transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onBookingClick}
              className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Записаться
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 -mr-2 relative z-50"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8 safe-bottom">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-white/5 group"
                  >
                    <span className="font-[var(--font-bebas)] text-4xl text-white tracking-wide group-active:text-pink-400 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight className="w-6 h-6 text-slate-600 group-active:text-pink-400 transition-colors" />
                  </motion.a>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={handleBooking}
                className="mt-8 px-6 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl text-white text-lg font-bold text-center tracking-wide shadow-lg shadow-pink-500/20 cursor-pointer"
              >
                Записаться
              </motion.button>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
