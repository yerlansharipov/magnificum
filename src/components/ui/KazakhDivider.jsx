export default function KazakhDivider({ color = 'gold', className = '' }) {
  const fillSolid = color === 'gold' ? '#C5A021' : '#E5E5E5';

  return (
    <div className={`flex items-center gap-6 my-4 w-full px-4 ${className}`}>
      {/* Left Thin Line */}
      <div 
        className="flex-1 h-[0.5px] opacity-10" 
        style={{ backgroundColor: fillSolid }} 
      />
      
      {/* Minimal Ornament Core */}
      <div className="relative w-8 h-8 flex items-center justify-center">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Shanyrak / Nomad Cross Structure (Minimal line-style) */}
           <path 
             d="M12 2V22M2 12H22M5 5L19 19M5 19L19 5" 
             stroke={fillSolid} 
             strokeWidth="0.5" 
             strokeLinecap="round"
             opacity="0.4"
           />
           <rect 
             x="8" y="8" width="8" height="8" 
             transform="rotate(45 12 12)" 
             stroke={fillSolid} 
             strokeWidth="0.8"
           />
           <circle cx="12" cy="12" r="1.5" fill={fillSolid} />
         </svg>
      </div>

      {/* Right Thin Line */}
      <div 
        className="flex-1 h-[0.5px] opacity-10" 
        style={{ backgroundColor: fillSolid }} 
      />
    </div>
  );
}
