import { motion } from 'framer-motion';
import { ShoppingBag, Star, Share2, Info } from 'lucide-react';
import { useCartStore } from '../../hooks/useCart';

export default function ProductCard({ product, onQuickBuy }) {
  const addItem = useCartStore(s => s.addItem);

  return (
    <motion.div
      layout
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-gallery transition-all duration-500 hover:shadow-gallery-hover hover:-translate-y-1"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[1/1] sm:aspect-[4/5] bg-stone-50 overflow-hidden flex items-center justify-center p-6 sm:p-12">
        {/* Subtle pattern watermark */}
        <div className="absolute inset-0 kazakh-pattern-bg opacity-30 pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-105 z-10">
           {product.image ? (
             <img 
               src={product.image} 
               alt={product.title} 
               className="w-full h-full object-contain filter group-hover:drop-shadow-2xl transition-all"
             />
           ) : (
             <div className="w-48 h-48 bg-white border border-stone-200 rounded-xl flex items-center justify-center">
                <span className="text-7xl opacity-50 grayscale select-none filter">🖼️</span>
             </div>
           )}
        </div>

        {/* Quick Labels */}
        {product.popular && (
          <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
             <Star size={10} className="fill-kazakh-gold text-kazakh-gold" />
             <span className="text-[10px] font-display font-black uppercase tracking-widest text-stone-900 leading-none">Curator Pick</span>
          </div>
        )}

        {/* Action Overlay (Desktop Only) */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
           <button 
             onClick={() => addItem(product)}
             className="w-full bg-stone-900 text-white font-display font-bold py-3.5 rounded-2xl flex items-center justify-center gap-3 transition-shadow shadow-lg shadow-black/20"
           >
              <ShoppingBag size={18} />
              Quick Add
           </button>
        </div>
      </div>

      {/* Product Body Information */}
      <div className="p-8 border-t border-stone-100 bg-white group-hover:bg-stone-50/50 transition-colors">
        <div className="flex justify-between items-start mb-2">
           <div>
              <p className="section-tag mb-1 text-[9px] text-stone-300 tracking-[0.3em]">Art Print / Giclée</p>
              <h3 className="font-display font-black text-xl text-stone-900 tracking-tight leading-tight">{product.title}</h3>
           </div>
           <p className="font-display font-black text-2xl text-stone-900">{product.currency}{product.price.toLocaleString()}</p>
        </div>
        
        <p className="text-stone-500 text-sm font-light mb-8 leading-relaxed italic">"{product.subtitle}"</p>

        {/* Action Buttons (Mobile / Fallback) */}
        <div className="flex items-center gap-3 lg:hidden">
           <button 
             onClick={() => addItem(product)}
             className="flex-1 bg-stone-900 text-white font-display font-bold py-4 rounded-2xl flex items-center justify-center gap-2"
           >
              <ShoppingBag size={18} />
              Add to Cart
           </button>
           <button 
             onClick={() => onQuickBuy(product)}
             className="w-14 h-14 bg-stone-100 border border-stone-200 text-stone-900 flex items-center justify-center rounded-2xl"
           >
              <Share2 size={18} />
           </button>
        </div>
      </div>
    </motion.div>
  );
}
