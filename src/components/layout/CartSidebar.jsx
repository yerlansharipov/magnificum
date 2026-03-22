import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { useCartStore } from '../../hooks/useCart';
import { useState } from 'react';
import PaymentModal from '../store/PaymentModal';

export default function CartSidebar() {
  const { items, isOpen, setOpen, removeItem, updateQty } = useCartStore();
  const [checkingOut, setCheckingOut] = useState(false);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Minimal */}
            <motion.div
              className="fixed inset-0 bg-stone-900/10 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Side Drawer - Gallery Style */}
            <motion.aside
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[60] flex flex-col shadow-2xl border-l border-stone-100"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b border-stone-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-display font-black uppercase tracking-[0.25em] text-stone-300 mb-1">Your Selection</span>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif italic text-2xl text-stone-900">The Bag</h3>
                    <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-display font-bold text-stone-900">
                       {count}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-12 h-12 rounded-full hover:bg-stone-50 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all border border-transparent hover:border-stone-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {items.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                       <ShoppingBag size={32} className="text-stone-200" />
                    </div>
                    <p className="font-serif italic text-xl text-stone-900 mb-2">The bag is empty</p>
                    <p className="text-stone-400 text-sm font-light mb-8">Discover our digital collection to add pieces.</p>
                    <button
                      onClick={() => { setOpen(false); document.querySelector('#store')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="btn-outline text-xs px-8 py-3"
                    >
                      Browse Collection
                    </button>
                  </div>
                ) : (
                  items.map(item => (
                    <motion.div 
                      key={item.id} 
                      className="flex gap-6 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      {/* Image Thumbnail */}
                      <div className="w-24 h-24 bg-stone-50 border border-stone-100 rounded-xl overflow-hidden flex-shrink-0 relative group">
                        {item.image ? (
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center">
                              <span className="text-2xl opacity-20 filter grayscale">🖼️</span>
                           </div>
                        )}
                         <div className="absolute inset-x-0 bottom-0 kazakh-pattern-bg opacity-20 h-10 pointer-events-none" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                        <div>
                          <p className="font-display font-black text-xs uppercase tracking-widest text-stone-300 mb-1">{item.size || 'Digital Master'}</p>
                          <h4 className="font-display font-medium text-stone-900 text-base truncate pr-6">{item.title}</h4>
                          <p className="font-display font-black text-stone-900 text-sm mt-1">₸{item.price.toLocaleString()}</p>
                        </div>
                        
                        {/* Quantity & Delete Row */}
                        <div className="flex items-center justify-between mt-4">
                           <div className="flex items-center border border-stone-100 rounded-full h-8 overflow-hidden bg-white">
                              <button
                                onClick={() => updateQty(item.id, item.qty - 1)}
                                className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                              ><Minus size={10} /></button>
                              <span className="font-display font-bold text-[11px] w-6 text-center text-stone-900">{item.qty}</span>
                              <button
                                onClick={() => updateQty(item.id, item.qty + 1)}
                                className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                              ><Plus size={10} /></button>
                           </div>
                           <button 
                              onClick={() => removeItem(item.id)}
                              className="text-stone-300 hover:text-stone-900 transition-colors"
                           >
                              <Trash2 size={14} />
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Checkout Footer */}
              {items.length > 0 && (
                <div className="p-8 bg-stone-50/50 border-t border-stone-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase font-display font-bold tracking-[0.2em] text-stone-300">Bag Total</span>
                       <span className="font-display font-black text-3xl text-stone-900 font-medium">₸{total.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] uppercase font-display font-bold tracking-[0.1em] text-green-600 block mb-1">Tax Included</span>
                       <span className="text-[10px] uppercase font-display font-bold tracking-[0.1em] text-stone-400">RK VAT compliant</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setCheckingOut(true)}
                    className="w-full bg-stone-900 text-white font-display font-black text-sm uppercase tracking-[0.25em] py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:bg-stone-800 transition-all active:scale-[0.98]"
                  >
                    <CreditCard size={18} />
                    Secure Checkout
                    <ArrowRight size={14} className="opacity-40" />
                  </button>
                  
                  <div className="mt-6 flex justify-center gap-4 opacity-30 grayscale contrast-125">
                     <span className="text-[9px] font-display font-bold">VISA</span>
                     <span className="text-[9px] font-display font-bold">MASTERCARD</span>
                     <span className="text-[9px] font-display font-bold">KASPI</span>
                     <span className="text-[9px] font-display font-bold">HALYK</span>
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Selection Modal */}
      {items.length > 0 && (
        <PaymentModal
          isOpen={checkingOut}
          onClose={() => setCheckingOut(false)}
          product={{ ...items[0], title: `The Bag Collection`, subtitle: `${count} items prepared for licensing.`, price: total }}
          items={items}
        />
      )}
    </>
  );
}
