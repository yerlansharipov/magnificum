import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ExternalLink, ShieldCheck, HeartPulse } from 'lucide-react';
import KazakhDivider from '../ui/KazakhDivider';

const PRESET_AMOUNTS = [2000, 5000, 10000];

const causes = [
  { icon: '🎨', text: 'Fund new ethnic art series' },
  { icon: '🎤', text: 'Cultural events in Astana' },
  { icon: '✊', text: "Women's rights advocacy" },
  { icon: '📚', text: 'Art education for youth' },
];

export default function DonateSection() {
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const amount = isCustom ? Number(custom) || 0 : selected;

  const handleDonate = () => {
    if (!amount || amount < 100) {
      alert('Please select or enter a valid amount (minimum ₸100).');
      return;
    }
    window.location.href = 'https://epay.homebank.kz/';
  };

  return (
    <section id="donate" className="py-32 relative bg-white overflow-hidden">
      {/* Background patterns subtle */}
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-tag">Direct Support / Art Advocacy</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-stone-900 mb-8 font-normal">
             Support the <span className="not-italic font-display font-light">Movement</span>
          </h2>
          <p className="text-stone-500 font-light text-lg leading-relaxed max-w-2xl mx-auto">
             Magira Tleuberdina's practice is a catalyst for social and cultural change. 
             Your support directly funds independent artistic production and advocacy for women's space in Kazakhstan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Causes & Info */}
          <div className="lg:col-span-12 items-center justify-center mb-10">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {causes.map((c, i) => (
                  <motion.div
                    key={i}
                    className="bg-stone-50 border border-stone-100 rounded-2xl p-4 text-center hover:border-stone-200 transition-all transition-duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-3xl block mb-3">{c.icon}</span>
                    <p className="text-stone-400 font-display font-bold text-[9px] uppercase tracking-widest">{c.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Right Column: Donation Widget */}
          <motion.div
            className="lg:col-span-8 lg:col-start-3 bg-white border border-stone-200 shadow-gallery rounded-3xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 text-center">
               <p className="text-stone-400 font-display font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Select Contribution Amount</p>
               
               {/* Preset amounts */}
               <div className="flex gap-4 flex-wrap justify-center mb-8">
                 {PRESET_AMOUNTS.map(amt => (
                   <button
                     key={amt}
                     onClick={() => { setSelected(amt); setIsCustom(false); }}
                     className={`flex-1 min-w-[100px] py-4 rounded-xl font-display font-black text-sm transition-all border ${
                       !isCustom && selected === amt
                         ? 'border-stone-900 bg-stone-900 text-white shadow-lg'
                         : 'border-stone-100 bg-stone-50 text-stone-400 hover:border-stone-300'
                     }`}
                   >
                     ₸{amt.toLocaleString()}
                   </button>
                 ))}
                 <button
                   onClick={() => setIsCustom(true)}
                   className={`flex-1 min-w-[100px] py-4 rounded-xl font-display font-black text-sm transition-all border ${
                     isCustom
                       ? 'border-stone-900 bg-stone-900 text-white shadow-lg'
                       : 'border-stone-100 bg-stone-50 text-stone-400 hover:border-stone-300'
                   }`}
                 >
                   Other
                 </button>
               </div>

               {/* Custom input */}
               <AnimatePresence>
                 {isCustom && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="mb-8 overflow-hidden"
                   >
                     <div className="relative max-w-[240px] mx-auto">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300 font-display font-bold">₸</span>
                        <input
                          type="number"
                          value={custom}
                          onChange={e => setCustom(e.target.value)}
                          placeholder="0.00"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-10 py-4 text-stone-900 font-display font-black text-xl outline-none focus:border-stone-900 transition-colors"
                        />
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>

               {/* Summary Display */}
               {amount > 0 && (
                 <div className="py-6 border-t border-stone-100 mt-6">
                    <p className="text-stone-400 text-[10px] font-display font-bold uppercase tracking-widest mb-2">Total Contribution</p>
                    <p className="font-display font-black text-5xl text-stone-900">₸{amount.toLocaleString()}</p>
                 </div>
               )}
            </div>

            {/* Donate CTA */}
            <button
              onClick={handleDonate}
              className="w-full bg-stone-900 text-white font-display font-black text-sm uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-stone-800 hover:shadow-xl active:scale-[0.98]"
            >
              <HeartPulse size={20} className="text-red-500" />
              Complete Contribution
            </button>

            {/* Security Notice */}
            <div className="flex items-center justify-center gap-6 mt-8 opacity-40">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest">Secure Gateway</span>
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest">Halyk / Kaspi / Freedom</span>
               </div>
            </div>
          </motion.div>

        </div>

        {/* Global Plug */}
        <div className="text-center mt-20">
          <a
            href="https://www.instagram.com/magnificum9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-stone-300 hover:text-stone-900 transition-colors"
          >
            <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em]">Join the @magnificum9 community</span>
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
