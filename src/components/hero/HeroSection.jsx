import { motion } from 'framer-motion';
import { Instagram, ArrowDown, ShoppingBag } from 'lucide-react';
import heroImg from '../../assets/art/hero_artwork.jpg';

export default function HeroSection() {
  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-white overflow-hidden">
      {/* Subtle background mesh */}
      <div className="absolute inset-0 bg-hero-mesh opacity-40 z-0 pointer-events-none" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 kazakh-pattern-bg opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p 
              className="section-tag mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              MAGIRA TLEUBERDINA / DIGITAL ARTIST
            </motion.p>
            
            <motion.h1 
              className="font-serif italic text-6xl sm:text-7xl lg:text-8xl text-stone-900 leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Roots Run <br />
              <span className="not-italic font-display font-light">Deep</span>
              <span className="font-display font-bold text-kazakh-gold text-2xl align-top ml-4 not-italic">Тамыр терең</span>
            </motion.h1>

            <motion.p 
              className="text-stone-500 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              An exploration of nomadic identity through high-contrast digital illustration. 
              Bridging the rich visual heritage of the steppe with the pulse of modern pop culture.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button 
                onClick={scrollToGallery}
                className="btn-gold w-full sm:w-auto"
              >
                View Collection
              </button>
              <a 
                href="#store"
                className="btn-ghost w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                <ShoppingBag size={18} className="group-hover:translate-y-[-1px] transition-transform" />
                Art Store
              </a>
            </motion.div>
          </div>

          {/* Visual Element (The Artwork) */}
          <motion.div 
            className="flex-1 relative w-full lg:max-w-2xl"
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* The actual Artwork Image with elegant frame */}
            <div className="relative z-10 w-full aspect-[4/5] lg:aspect-square bg-stone-50 rounded-2xl overflow-hidden shadow-2xl border border-stone-200 group">
              <img 
                src={heroImg} 
                alt="Magira Tleuberdina Hero Artwork" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>

            {/* Subtle decorative ornament */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
               <svg viewBox="0 0 100 100" fill="currentColor">
                 <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
               </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-stone-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-display font-bold">Explore</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
