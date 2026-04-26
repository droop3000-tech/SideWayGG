import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Send } from 'lucide-react';

export default function MessengerButton() {
  const [open, setOpen] = useState(false);

  const messengers = [
    {
      name: 'WhatsApp',
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://wa.me/79146192428',
      color: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
      shadow: 'shadow-green-500/30',
    },
    {
      name: 'Telegram',
      icon: <Send className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://t.me/egorchegay',
      color: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
      shadow: 'shadow-blue-500/30',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 safe-bottom">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 sm:bottom-20 right-0 flex flex-col gap-2.5 sm:gap-3 items-end"
          >
            {messengers.map((m, i) => (
              <motion.a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-white font-semibold text-xs sm:text-sm ${m.color} shadow-lg ${m.shadow} transition-all duration-300 active:scale-95 sm:hover:scale-105 whitespace-nowrap`}
              >
                {m.icon}
                {m.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className={`w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 ${
          open
            ? 'bg-slate-700 shadow-slate-500/20'
            : 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-pink-500/40'
        }`}
        style={{
          width: open ? undefined : undefined,
          boxShadow: open ? undefined : '0 0 20px rgba(236, 72, 153, 0.35), 0 0 40px rgba(236, 72, 153, 0.15)',
        }}
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X className="w-5 h-5 sm:w-7 sm:h-7" /> : <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />}
        </motion.div>
      </motion.button>

      {/* Pulse ring */}
      {!open && (
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping bg-pink-500/20 pointer-events-none" style={{ animationDuration: '2.5s' }} />
      )}
    </div>
  );
}
