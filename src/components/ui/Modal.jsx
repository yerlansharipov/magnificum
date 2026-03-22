import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-stone-900/10 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel Gallery Style */}
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.15)] border border-stone-100"
            style={{ maxHeight: '92vh', overflowY: 'auto' }}
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-stone-50">
              <div className="flex flex-col">
                 <span className="text-[10px] font-display font-black uppercase tracking-widest text-stone-300 mb-1">Transaction Stage</span>
                 <h3 className="font-serif italic text-2xl text-stone-900">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:border-stone-100 hover:bg-stone-50 transition-all text-stone-400 hover:text-stone-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* Pattern Subtle */}
            <div className="absolute inset-x-0 top-0 h-40 kazakh-pattern-bg opacity-10 pointer-events-none" />

            {/* Body */}
            <div className="p-8 relative z-10">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
