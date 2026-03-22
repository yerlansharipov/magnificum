import { Instagram, Send, Mail, ShieldCheck } from 'lucide-react';
import KazakhDivider from '../ui/KazakhDivider';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-stone-100 overflow-hidden">
      {/* Subtle Pattern Watermark */}
      <div className="absolute inset-x-0 bottom-0 h-96 kazakh-pattern-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="font-serif italic text-3xl text-stone-900 mb-8 block transition-opacity hover:opacity-70"
            >
              MAGNIFICUM
            </a>
            <p className="text-stone-500 font-light text-lg leading-relaxed mb-10 max-w-md">
              Digital practice by Tleuberdina Magira. Specializing in high-contrast 
              visual narratives of Kazakh heritage, Q-Pop iconographies, and civic advocacy projects.
            </p>
            
            {/* Social Icons Refined */}
            <div className="flex items-center gap-5">
              {[
                  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/magnificum9/', label: 'Instagram' },
                  { icon: <Send size={18} />, href: 'https://t.me/magnificum9', label: 'Telegram' },
                  { icon: <Mail size={18} />, href: 'mailto:art@magnificum.kz', label: 'Email' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all active:scale-95 shadow-minimal hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="section-tag mb-8 tracking-[0.3em]">Navigation / 2024</p>
            <ul className="space-y-4">
              {[
                { label: 'Art Gallery', href: '#gallery' },
                { label: 'Artist Statement', href: '#statement' },
                { label: 'Print Shop', href: '#store' },
                { label: 'Civic Support', href: '#donate' },
                { label: 'Social Feed', href: '#feed' }
              ].map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-500 font-display font-medium text-sm hover:text-stone-900 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Institutional Details */}
          <div className="lg:col-span-4">
            <p className="section-tag mb-8 tracking-[0.3em]">Institutional / RK</p>
            <div className="bg-stone-50/50 border border-stone-100 rounded-2xl p-6 sm:p-8 space-y-4 shadow-minimal hover:bg-white transition-colors duration-500">
               <div className="flex items-center gap-2 text-stone-900 mb-2">
                  <ShieldCheck size={18} />
                  <p className="font-display font-black text-xs uppercase tracking-widest">ИП Tleuberdina Magira</p>
               </div>
               
               <div className="space-y-3">
                  <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                     <span className="text-[10px] uppercase font-display font-bold text-stone-300">Entity</span>
                     <span className="text-[10px] font-display font-bold text-stone-500">Tleuberdina Magira Serikkyzy</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                     <span className="text-[10px] uppercase font-display font-bold text-stone-300">Registration</span>
                     <span className="text-[10px] font-display font-bold text-stone-500">ИИН [000000000000] - Astana, KZ</span>
                  </div>
               </div>

               <p className="text-[9.5px] text-stone-400 font-light leading-relaxed mt-4">
                 All digital art transactions are final and non-refundable in accordance with Article 30 of the 
                 Republic of Kazakhstan Law on E-Commerce. Each file contains artist authentication metadata.
               </p>
            </div>
          </div>
        </div>

        <KazakhDivider className="mb-12 opacity-40" color="stone" />

        {/* Footer Meta */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-display font-bold uppercase tracking-[0.25em] text-stone-300">
          <p>© 2024 MAGIRA TLEUBERDINA. RECLAIMING IDENTITY THROUGH ART.</p>
          <div className="flex items-center gap-6">
             <a href="#" className="hover:text-stone-900 transition-colors">Digital Collections</a>
             <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-stone-900 transition-colors text-stone-900">Astana, Kazakhstan 🇰🇿</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
