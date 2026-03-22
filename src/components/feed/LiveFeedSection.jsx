import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useInstagramFeed } from '../../hooks/useInstagramFeed';
import KazakhDivider from '../ui/KazakhDivider';

function FeedPostCard({ post, index }) {
  const timeAgo = (ts) => {
    const diff = Date.now() - new Date(ts).getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (d === 0) return 'Today';
    if (d === 1) return 'Yesterday';
    if (d < 30) return `${d}d ago`;
    return `${Math.floor(d / 30)}mo ago`;
  };

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-stone-100 rounded-2xl overflow-hidden block shadow-gallery hover:shadow-gallery-hover transition-all duration-500 hover:-translate-y-1"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
    >
      {/* Post Image Container */}
      <div className="relative aspect-square bg-stone-50 overflow-hidden">
        {/* Placeholder emoji centering */}
        <div className="absolute inset-0 flex items-center justify-center filter grayscale opacity-20">
           <span className="text-5xl">{post.emoji}</span>
        </div>
        <div className="absolute inset-0 kazakh-pattern-bg opacity-15 pointer-events-none" />
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
           <div className="w-12 h-12 rounded-full bg-white text-stone-900 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Instagram size={24} />
           </div>
        </div>
      </div>

      {/* Post Metadata */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-stone-400">
           <div className="flex items-center gap-1.5 font-display font-black text-[11px] uppercase tracking-wider">
              <Heart size={12} className="text-red-500 fill-red-500/20" />
              {post.likes.toLocaleString()}
           </div>
           <div className="flex items-center gap-1.5 font-display font-black text-[11px] uppercase tracking-wider">
              <MessageCircle size={12} />
              {post.comments}
           </div>
           <div className="ml-auto text-[10px] uppercase font-display font-bold tracking-widest opacity-60">
              {timeAgo(post.timestamp)}
           </div>
        </div>
        <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 italic">
          "{post.caption}"
        </p>
      </div>
    </motion.a>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-gallery">
      <div className="shimmer aspect-square" />
      <div className="p-6 space-y-3">
        <div className="shimmer h-2 rounded w-full opacity-40" />
        <div className="shimmer h-2 rounded w-3/4 opacity-40" />
      </div>
    </div>
  );
}

export default function LiveFeedSection() {
  const { posts, loading } = useInstagramFeed();

  return (
    <section id="feed" className="py-32 relative bg-stone-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 kazakh-pattern-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-tag">Social Documentation / @magnificum9</p>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-stone-900 mb-8 font-normal leading-tight">
             Live <span className="not-italic font-display font-light">Gallery</span> Feed
          </h2>
          
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-8 text-stone-900">
                <div className="text-center">
                   <p className="text-2xl font-display font-black leading-none">19K</p>
                   <p className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-400 mt-1">Followers</p>
                </div>
                <div className="w-px h-8 bg-stone-200" />
                <div className="text-center">
                   <p className="text-2xl font-display font-black leading-none">183</p>
                   <p className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-400 mt-1">Posts</p>
                </div>
             </div>
             
             <a
               href="https://www.instagram.com/magnificum9/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-white border border-stone-200 px-6 py-2.5 rounded-full text-[11px] font-display font-bold uppercase tracking-widest text-stone-900 transition-all hover:border-stone-400 hover:shadow-gallery"
             >
                <Instagram size={14} />
                Visit Artist Profile
                <ArrowUpRight size={12} className="opacity-40" />
             </a>
          </div>
        </div>

        <KazakhDivider className="mb-20" color="stone" />

        {/* Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : posts.map((post, i) => (
                <FeedPostCard key={post.id} post={post} index={i} />
              ))}
        </div>

        {/* Action Bottom */}
        <div className="text-center mt-20">
           <button 
             onClick={() => window.open('https://www.instagram.com/magnificum9/', '_blank')}
             className="btn-outline group relative overflow-hidden"
           >
              <div className="relative z-10 flex items-center gap-3">
                 <Instagram size={18} />
                 <span>Expand Social Gallery</span>
              </div>
           </button>
        </div>

      </div>
    </section>
  );
}
