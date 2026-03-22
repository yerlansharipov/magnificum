/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'Noto Sans', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Minimalist Gallery Palette
        'surface':        '#FFFFFF',
        'surface-2':      '#FAF9F6',
        'surface-3':      '#F3F2F0',
        'text-primary':   '#121212',
        'text-secondary': '#4A4A4A',
        'text-muted':     '#8E8E8E',
        
        // Refined Branding
        'kazakh-gold':    '#C5A021', // Professional metallic gold
        'kazakh-gold-muted': '#D4AF37',
        'kazakh-red':     '#8B0000', // Deep professional red for accents
        'kazakh-teal':    '#0F766E',
        'kazakh-violet':  '#4C1D95',
        
        // Functional
        'border-light':   'rgba(0,0,0,0.06)',
        'glass-bg':       'rgba(255,255,255,0.75)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(at 50% 50%, rgba(197, 160, 33, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      },
      boxShadow: {
        'gallery': '0 4px 30px rgba(0, 0, 0, 0.04)',
        'gallery-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'subtle-float': 'subtleFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
