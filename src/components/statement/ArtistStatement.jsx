import { motion } from 'framer-motion';
import KazakhDivider from '../ui/KazakhDivider';

const pullQuotes = [
  {
    text: 'My work lives at the crossroads of who we are and who we are told to be.',
    icon: '🎨',
    color: '#D4AF37',
  },
  {
    text: "I reclaim the faces of Kazakh women — from traditional costumes to the streets of Astana where women are still fighting to be heard.",
    icon: '✊',
    color: '#121212',
  },
  {
    text: 'I draw to remember. I draw to protest. Every portrait is a story Kazakhstan should not forget.',
    icon: '📖',
    color: '#8B0000',
  },
];

const stats = [
  { value: '183', label: 'Works Created', emoji: '🖼️' },
  { value: '19K', label: 'Audience Reach', emoji: '👥' },
  { value: '2020', label: 'Est. Practice', emoji: '🏛️' },
  { value: 'KZ', label: 'Astana-based', emoji: '🇰🇿' },
];

export default function ArtistStatement() {
  return (
    <section id="statement" className="py-32 relative bg-stone-50 overflow-hidden">
      {/* Subtle Pattern Watermark */}
      <div className="absolute inset-x-0 bottom-0 h-64 kazakh-pattern-gold opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="section-tag mb-4 font-bold tracking-[0.3em]">ARTIST BIOGRAPHY / STATEMENT</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-7xl text-stone-900 font-normal">
            The <span className="not-italic font-display font-light">Narrative</span> Behind the Art
          </h2>
        </div>

        {/* Elegant Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">

          {/* Left Column: Portrait & Stats Badge */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative max-w-sm w-full mx-auto">
               <div className="w-full aspect-[4/5] bg-white rounded-2xl shadow-gallery overflow-hidden p-3 border border-stone-200">
                  <div className="h-full w-full bg-stone-100 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
                     {/* Background Ornament Subtle */}
                     <div className="absolute inset-0 kazakh-pattern-bg opacity-40 pointer-events-none" />
                     
                     <div className="relative text-center z-10">
                        <span className="text-7xl block mb-6 animate-subtle-float">👩‍🎨</span>
                        <h4 className="font-serif italic text-xl text-stone-900 mb-1">Magira Tleuberdina</h4>
                        <p className="font-display font-bold text-[10px] uppercase tracking-widest text-stone-400">Astana / Digital Artist</p>
                     </div>

                     <div className="absolute inset-x-0 bottom-0 py-6 border-t border-stone-200 bg-white/50 backdrop-blur-sm">
                        <div className="flex justify-around items-center">
                           <div className="text-center">
                              <p className="text-[12px] font-display font-bold text-stone-900">19K</p>
                              <p className="text-[9px] font-display font-bold uppercase tracking-widest text-stone-400">Fans</p>
                           </div>
                           <div className="h-4 w-px bg-stone-200" />
                           <div className="text-center">
                              <p className="text-[12px] font-display font-bold text-stone-900">183</p>
                              <p className="text-[9px] font-display font-bold uppercase tracking-widest text-stone-400">Items</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Modern Gallery Badge */}
               <motion.div 
                 className="absolute -bottom-8 -right-8 w-24 h-24 bg-stone-900 flex items-center justify-center text-white rounded-full shadow-2xl p-4 text-center leading-[1.2]"
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1, type: "spring", damping: 15 }}
               >
                  <span className="text-[10px] font-display font-black uppercase tracking-widest">Since 2020</span>
               </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Statement Body */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex flex-col space-y-6">
               <span className="w-12 h-px bg-kazakh-gold" />
               <blockquote className="text-stone-900 font-serif italic text-2xl sm:text-3xl leading-snug">
                 "My work lives at the crossroads of who we are and who we are told to be. 
                 It is a reclamation of identity and a visualization of modern Kazakh culture."
               </blockquote>
            </div>

            <div className="flex flex-col space-y-6 text-stone-600 font-light text-lg leading-relaxed">
               <p>
                 Born in Kazakhstan, Magira Tleuberdina — known artistically as 
                 <span className="font-medium text-stone-900 px-1 inline-block border-b-2 border-stone-200 ml-1">@magnificum9</span> — 
                 crafts digital illustrations that honor historical continuity while challenging current socioeconomic dynamics.
               </p>
               <p>
                 Her art spans thematic universes: the deep heritage of the Kazakh steppe, the energetic pulse of Q-pop iconographies (notably Ninety One), and the necessary discourse on civic responsibility and human rights.
               </p>
            </div>

            <div className="pt-6">
               <p className="font-display font-black text-2xl text-stone-900 tracking-tighter italic">
                  Magira <span className="text-kazakh-gold not-italic">Tleuberdina</span>
               </p>
            </div>
          </motion.div>

        </div>

        {/* Grid Stats Bar - Minimalist Gallery View */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border-x border-stone-200 max-w-6xl mx-auto shadow-gallery overflow-hidden rounded-2xl md:py-px">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-10 px-6 bg-white group hover:bg-stone-50 transition-colors">
               <span className="text-stone-300 group-hover:text-kazakh-gold transition-colors mb-2 text-3xl font-bold">{stat.emoji}</span>
               <p className="font-display font-black text-4xl text-stone-900 mb-1">{stat.value}</p>
               <p className="text-[10px] font-display font-black uppercase tracking-[0.25em] text-stone-300">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
