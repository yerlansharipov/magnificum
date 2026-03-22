import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Tag, Share2, Info, ChevronRight } from 'lucide-react';
import { useCartStore } from '../../hooks/useCart';
import { products } from '../../data/products';
import { useState } from 'react';

export default function ArtworkModal({ artwork, onClose }) {
  const addItem = useCartStore(s => s.addItem);
  const [added, setAdded] = useState(false);

  if (!artwork) return null;

  // Find associated product
  const product = products.find(p => p.title.includes(artwork.title) || (artwork.id === 1 && p.id === 'p1'));

  const handleAdd = () => {
    if (product) {
      addItem(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        {/* Backdrop Museum-Style Light Overlay */}
        <motion.div
          className="fixed inset-0 bg-stone-100/30 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Stage */}
        <motion.div
          className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.1)] z-10 flex flex-col md:flex-row h-full max-h-[90vh]"
          initial={{ scale: 0.98, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        >
          {/* Close - Absolute Desktop Postion */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-stone-100 bg-white/80 backdrop-blur flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all z-50 group shadow-minimal"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* 1. Left Column: Art View Stage */}
          <div className="md:w-[55%] bg-stone-50 relative flex items-center justify-center p-8 lg:p-16 border-b md:border-b-0 md:border-r border-stone-100/50 group">
            {/* Ornament watermark subtle */}
            <div className="absolute inset-0 kazakh-pattern-bg opacity-30 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center group-hover:drop-shadow-2xl transition-all duration-700">
              {artwork.image ? (
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              ) : (
                <div className={`w-full aspect-square bg-white border border-stone-200 rounded-3xl flex items-center justify-center shadow-xl`}>
                  <span className="text-9xl opacity-20 filter grayscale">{artwork.emoji}</span>
                </div>
              )}
            </div>

            {/* Mobile Close */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-stone-900 backdrop-blur md:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* 2. Right Column: Curation / Documentation Content */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col overflow-y-auto">
            
            {/* Header metadata */}
            <div className="mb-10">
              <span className="section-tag mb-4 tracking-[0.3em]">Curation Notes / Portfolio ID: 0{artwork.id}</span>
              <h3 className="font-serif italic text-4xl sm:text-5xl text-stone-900 mb-6 leading-[1.1] font-normal">
                {artwork.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-6">
                 <div className="flex items-center gap-3 py-2 px-4 bg-stone-50 border border-stone-100 rounded-xl">
                    <span className="text-[10px] font-display font-black uppercase tracking-widest text-stone-300">Century</span>
                    <span className="text-[11px] font-display font-bold text-stone-900">21st (2020-2024)</span>
                 </div>
                 <div className="flex items-center gap-3 py-2 px-4 bg-stone-50 border border-stone-100 rounded-xl">
                    <span className="text-[10px] font-display font-black uppercase tracking-widest text-stone-300">Source</span>
                    <span className="text-[11px] font-display font-bold text-stone-900">Astana, KZ</span>
                 </div>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-stone-900 mb-6">
                 <Info size={16} />
                 <p className="font-display font-bold text-xs uppercase tracking-widest">Artist Description</p>
              </div>
              <p className="text-stone-500 font-light text-lg leading-relaxed mb-10 max-w-lg">
                {artwork.description}
              </p>

              {/* Tags / Taxonomies */}
              <div className="flex flex-wrap gap-2 mb-12">
                {artwork.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-2 bg-stone-50 border border-stone-100 px-4 py-2 rounded-xl text-[10px] font-display font-black uppercase tracking-widest text-stone-400 group hover:border-stone-900 hover:text-stone-900 transition-colors cursor-default">
                    <Tag size={11} className="opacity-40" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Acquisition Stage */}
            <div className="mt-12 pt-10 border-t border-stone-100">
               {product ? (
                 <div className="flex flex-col sm:flex-row items-center gap-8">
                   <div className="flex flex-col flex-1 items-center sm:items-start">
                     <span className="text-stone-300 text-[10px] font-display font-bold uppercase tracking-widest mb-1">Authentic Giclée / License</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-[11px] font-display font-bold text-stone-400">Total Price</span>
                        <span className="font-display font-black text-4xl text-stone-900">₸{product.price.toLocaleString()}</span>
                     </div>
                   </div>
                   <button
                     onClick={handleAdd}
                     className={`flex-[1.5] w-full py-5 rounded-2xl font-display font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 border-2 active:scale-95 group overflow-hidden ${
                       added 
                        ? 'bg-stone-50 border-stone-900 text-stone-900' 
                        : 'bg-stone-900 border-stone-900 text-stone-100 hover:bg-white hover:text-stone-900 shadow-xl'
                     }`}
                   >
                     <ShoppingBag size={18} className={`${added ? 'animate-bounce' : ''}`} />
                     {added ? 'Piece Reserved' : 'Acquire Master Copy'}
                     <ChevronRight size={16} className={`${added ? 'hidden' : 'opacity-40'}`} />
                   </button>
                 </div>
               ) : (
                 <div className="flex items-center justify-between gap-4">
                    <p className="text-stone-400 text-sm italic font-light">Museum archive piece. Not available for reproduction.</p>
                    <button className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
                       <Share2 size={18} />
                    </button>
                 </div>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
