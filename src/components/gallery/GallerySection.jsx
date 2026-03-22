import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { artworks, categories } from '../../data/artworks';
import KazakhDivider from '../ui/KazakhDivider';
import ArtworkModal from './ArtworkModal';
import ArtworkCard from './ArtworkCard';

export default function GallerySection() {
  const [activeCat, setActiveCat] = useState('heritage');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filtered = artworks.filter(a => a.category === activeCat);

  return (
    <section id="gallery" className="py-32 relative bg-white overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-x-0 top-0 h-40 kazakh-pattern-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">

        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="section-tag">Artist Portfolio / 2024</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-stone-900 mb-6 font-normal">
            The <span className="not-italic font-display font-light">Gallery</span>
          </h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed">
            A comprehensive body of 183 works organized into thematic collections, 
            bridging the traditional iconography of the steppe with modern Kazakh movements.
          </p>
        </div>

        {/* Modern Category tabs - Minimalist */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mb-20 border-b border-stone-100 pb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center gap-3 transition-all transition-duration-300 group`}
            >
              <span className={`w-2 h-2 rounded-full transition-transform transition-duration-300 ${
                  activeCat === cat.id ? 'scale-150 bg-stone-900' : 'bg-stone-200 group-hover:bg-stone-400'
              }`} />
              <span className={`font-display font-medium text-[12px] uppercase tracking-[0.25em] transition-colors ${
                  activeCat === cat.id ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'
              }`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            className="text-center mb-16 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
             <p className="text-[11px] font-display font-bold uppercase tracking-widest text-stone-300 mb-4">Focus</p>
             <p className="text-stone-700 font-light leading-relaxed italic">
                "{categories.find(c => c.id === activeCat)?.description}"
             </p>
          </motion.div>
        </AnimatePresence>

        {/* Masonry-style Grid - Use our new CSS grid classes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {filtered.map(artwork => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onClick={() => setSelectedArtwork(artwork)} 
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA - Minimalist Link */}
        <div className="text-center mt-24">
           <button
             onClick={() => { document.querySelector('#store')?.scrollIntoView({ behavior: 'smooth' }); }}
             className="inline-flex items-center gap-2 group"
           >
              <span className="text-[12px] font-display font-bold uppercase tracking-[0.2em] text-stone-900 group-hover:text-stone-600 transition-colors">
                 Acquire a custom giclée print
              </span>
              <div className="w-8 h-px bg-stone-900 group-hover:w-12 transition-all" />
           </button>
        </div>
      </div>

      {/* Modal Detail */}
      <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </section>
  );
}
