import { motion } from 'framer-motion';

export default function ArtworkCard({ artwork, onClick }) {
  return (
    <motion.div
      layout
      className="group relative cursor-pointer gallery-card"
      onClick={onClick}
    >
      {/* Artwork Image Container with modern ratios */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-50">
        {artwork.image ? (
          <img 
            src={artwork.image} 
            alt={artwork.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-out-quint"
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${artwork.mockColor || 'from-stone-50 to-stone-100'} flex items-center justify-center`}>
            <span className="text-4xl opacity-20 filter grayscale select-none">
              {artwork.emoji}
            </span>
          </div>
        )}
        
        {/* Gallery-style Number Label (Visual ID) */}
        <div className="absolute top-4 left-4 w-7 h-7 bg-white/90 backdrop-blur shadow-minimal rounded-full flex items-center justify-center border border-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <span className="text-[10px] font-display font-black text-stone-900 leading-none">0{artwork.id}</span>
        </div>
      </div>

      {/* Metadata Detail Row */}
      <div className="p-6 bg-white border-t border-stone-100 transition-colors group-hover:bg-stone-50">
        <div className="flex justify-between items-baseline mb-1">
          <p className="font-display font-semibold text-stone-900 text-sm tracking-tight">{artwork.title}</p>
          <p className="text-[10px] font-display font-medium text-stone-400 uppercase tracking-widest">{artwork.date}</p>
        </div>
        <p className="text-[11px] font-display font-bold uppercase tracking-widest text-kazakh-gold">
          {artwork.category} Portfolio
        </p>
      </div>

      {/* Interaction Indicator */}
      <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
