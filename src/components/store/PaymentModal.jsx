import { useState } from 'react';
import Modal from '../ui/Modal';
import { paymentMethods } from '../../data/products';
import { ExternalLink, CreditCard, Mail, Lock } from 'lucide-react';

export default function PaymentModal({ isOpen, onClose, product, items }) {
  const [email, setEmail] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('halyk');

  const method = paymentMethods.find(m => m.id === selectedMethod);

  const handlePay = () => {
    if (!email) {
      alert('Please enter your email to receive the digital file.');
      return;
    }
    // In production: initiate payment session with Halyk/Freedom Pay API
    window.location.href = method.url;
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Licensing">
      
      {/* 1. Transaction Summary */}
      <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 mb-8 shadow-minimal">
        <p className="text-stone-300 text-[10px] font-display font-black uppercase tracking-[0.25em] mb-4">Acquisition Summary</p>
        
        <div className="space-y-3">
           <div className="flex justify-between items-baseline">
              <span className="font-display font-medium text-stone-900 text-base">{product.title}</span>
              <span className="font-display font-black text-stone-900">₸{product.price.toLocaleString()}</span>
           </div>
           {items && items.length > 0 && (
             <div className="pl-4 border-l border-stone-200 mt-2 space-y-1">
                {items.map(it => (
                  <p key={it.id} className="text-[11px] text-stone-300 font-light flex justify-between">
                     <span>{it.qty}x {it.title}</span>
                     <span>₸{(it.price * it.qty).toLocaleString()}</span>
                  </p>
                ))}
             </div>
           )}
           <p className="text-stone-400 text-xs font-light tracking-wide">{product.subtitle || product.size || 'Digital Master License'}</p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-stone-200">
          <div className="flex flex-col">
             <span className="text-stone-300 text-[9px] uppercase font-display font-bold">Total Payment</span>
             <span className="font-display font-black text-3xl text-stone-900">₸{product.price.toLocaleString()}</span>
          </div>
          <div className="text-right">
             <span className="text-[9px] font-display font-bold text-stone-300 uppercase block mb-1">VAT (0%) Included</span>
             <span className="text-[9px] font-display font-bold text-stone-900 border b-stone-900 px-2 py-1 rounded">Astana, KZ Entity</span>
          </div>
        </div>
      </div>

      {/* 2. Destination Details */}
      <div className="mb-8">
        <label className="text-stone-400 text-[10px] font-display font-black uppercase tracking-[0.2em] mb-3 block">
          Digital Delivery Destination
        </label>
        <div className="relative group">
          <Mail size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-stone-900 transition-colors" />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="collection@art.kz"
            className="w-full bg-stone-50 border border-stone-100 rounded-xl pl-14 pr-6 py-4 text-stone-900 font-display font-bold text-sm outline-none focus:border-stone-900 focus:bg-white transition-all shadow-minimal"
          />
        </div>
        <p className="text-stone-300 text-[10px] italic mt-3 flex items-center gap-2">
           <Lock size={10} />
           Link to digital master will be sent to this address within 24 hours.
        </p>
      </div>

      {/* 3. Payment Method Choice */}
      <div className="mb-10">
        <p className="text-stone-400 text-[10px] font-display font-black uppercase tracking-[0.2em] mb-4">Select Payment Portal</p>
        <div className="grid grid-cols-1 gap-3">
          {paymentMethods.map(m => (
            <label
              key={m.id}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                selectedMethod === m.id
                  ? 'border-stone-900 bg-white shadow-lg -translate-y-0.5'
                  : 'border-stone-100 bg-stone-50/50 grayscale opacity-60 hover:opacity-100 hover:border-stone-200 hover:grayscale-0'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={m.id}
                checked={selectedMethod === m.id}
                onChange={() => setSelectedMethod(m.id)}
                className="sr-only"
              />
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-xl shadow-minimal">
                 {m.logo}
              </div>
              <div className="flex-1">
                <p className="font-display font-black text-[13px] text-stone-900 uppercase tracking-wider">{m.name}</p>
                <p className="text-stone-400 font-light text-[11px] leading-tight">{m.nameRu}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                 selectedMethod === m.id ? 'border-stone-900' : 'border-stone-200'
              }`}>
                {selectedMethod === m.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-900" />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Complete Action */}
      <button
        onClick={handlePay}
        className="w-full bg-stone-900 text-white font-display font-black text-sm uppercase tracking-[0.3em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-stone-800 hover:shadow-2xl shadow-stone-900/10 active:scale-[0.98]"
      >
        <CreditCard size={18} />
        Initiate Transaction
        <ExternalLink size={14} className="opacity-40 ml-1" />
      </button>

      {/* Institutional Notice */}
      <p className="text-stone-300 text-[9.5px] font-display font-bold uppercase tracking-widest text-center mt-6 leading-relaxed">
        Digital goods are licensed under Art. 30 of RK E-Commerce Law.<br />
        <span className="opacity-60 italic">Non-refundable upon delivery of digital key.</span>
      </p>
    </Modal>
  );
}
