import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../hooks/useCart';

const navLinks = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#statement', label: 'Artist' },
  { href: '#store', label: 'Store' },
  { href: '#donate', label: 'Donation' },
  { href: '#feed', label: 'Feed' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const count = useCartStore(s => s.items.reduce((sum, i) => sum + i.qty, 0));
  const setCartOpen = useCartStore(s => s.setOpen);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-100 py-3' : 'bg-transparent py-5'
        }`}
        style={{ paddingTop: 'calc(1.25rem + env(safe-area-inset-top))' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Refined Typography */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="font-serif italic text-2xl tracking-tighter text-stone-900 flex items-center gap-2 group"
          >
            <span className="not-italic font-display font-medium tracking-widest text-[11px] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Portfolio</span>
            MAGNIFICUM
          </a>

          {/* Desktop Links - Minimalist */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-display font-medium text-[12px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors border-b-2 border-transparent hover:border-stone-900 pb-1"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            
            {/* Bag Icon */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-50 transition-colors group"
            >
              <ShoppingBag size={18} className="text-stone-700 group-hover:text-stone-900" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-stone-900 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Support CTA Button */}
            <button
              onClick={() => handleNav('#store')}
              className="hidden sm:block text-[11px] uppercase tracking-widest font-bold bg-stone-900 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
            >
               Art Shop
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-50 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Modern Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
             <div className="absolute top-8 left-8">
               <span className="font-serif italic text-3xl">Magnificum</span>
             </div>
             
             <button
               onClick={() => setMenuOpen(false)}
               className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-stone-100"
             >
                <X size={24} />
             </button>

            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-display font-medium text-4xl text-stone-400 hover:text-stone-900 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div 
               className="mt-16 text-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
            >
               <p className="text-[10px] uppercase tracking-widest text-stone-300 mb-4">Location</p>
               <p className="text-stone-900 font-display font-medium">Astana, Kazakhstan</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
