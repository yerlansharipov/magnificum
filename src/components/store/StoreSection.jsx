import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, HelpCircle, Package, ArrowRight, Star } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import PaymentModal from './PaymentModal';

export default function StoreSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickBuy = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="store" className="py-32 relative bg-white overflow-hidden">
      {/* Subtle Pattern (Watermark) */}
      <div className="absolute inset-x-0 bottom-0 h-64 kazakh-pattern-gold opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Title - Modern Editorial style */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="section-tag mb-4 tracking-[0.3em]">MUSEUM-GRADE / ART SHOP</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-7xl text-stone-900 font-normal leading-tight">
             Acquire a <span className="not-italic font-display font-light">Original</span> Print
          </h2>
          <p className="text-stone-500 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mt-6">
             Supporting local digital movements through limited edition giclée prints, direct from the artist's studio.
          </p>
        </div>

        {/* Informative Header (Digital Notice) */}
        <div className="bg-stone-50 border border-stone-100 rounded-3xl p-6 sm:p-10 mb-20 flex flex-col sm:flex-row items-center justify-between gap-8 group hover:bg-white hover:border-stone-200 transition-all shadow-gallery">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white border border-stone-200 text-stone-900 rounded-2xl flex items-center justify-center shadow-minimal group-hover:scale-110 transition-transform">
               <Package size={28} />
            </div>
            <div>
              <p className="font-display font-black text-xl text-stone-900 flex items-center gap-3">
                Digital Art Delivery
                <span className="text-[10px] font-display font-bold px-3 py-1 bg-stone-900 text-white rounded-full uppercase tracking-widest shadow-lg shadow-black/20">Instant</span>
              </p>
              <p className="text-stone-500 font-light text-sm max-w-xl leading-relaxed">
                All art pieces are delivered as ultra-high-resolution (300+ DPI) digital master copies. 
                Compliant with Kazakhstan E-Commerce Law (Art. 30).
              </p>
            </div>
          </div>
          <button className="flex items-center gap-3 text-stone-900 group">
             <span className="text-[12px] font-display font-bold uppercase tracking-widest">Learn about licensing</span>
             <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* High-End Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <ProductCard 
                product={product} 
                onQuickBuy={handleQuickBuy}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Informational Badges Footer */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border-t border-stone-100 pt-16">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="w-10 h-10 bg-stone-50 text-stone-900 rounded-full flex items-center justify-center">
               <Info size={18} />
            </div>
            <p className="text-stone-900 font-display font-black uppercase text-sm tracking-widest leading-none">Global Standard</p>
            <p className="text-stone-400 font-light text-[13px] leading-relaxed">Museum-grade color accuracy for ultra-high resolution digital giclées.</p>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="w-10 h-10 bg-stone-50 text-stone-900 rounded-full flex items-center justify-center">
               <HelpCircle size={18} />
            </div>
            <p className="text-stone-900 font-display font-black uppercase text-sm tracking-widest leading-none">Authenticity</p>
            <p className="text-stone-400 font-light text-[13px] leading-relaxed">Each digital file includes a unique cryptographical signature by the artist.</p>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
             <div className="w-10 h-10 bg-stone-50 text-stone-900 rounded-full flex items-center justify-center">
                <Star size={18} />
             </div>
             <p className="text-stone-900 font-display font-black uppercase text-sm tracking-widest leading-none">Support Movement</p>
             <p className="text-stone-400 font-light text-[13px] leading-relaxed">A portion of proceeds goes directly to art education programs in rural Kazakhstan.</p>
          </div>
        </div>

      </div>

      {/* Checkout Selection Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <PaymentModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            // We pass null for cart items if it's a direct buy
            items={null}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
