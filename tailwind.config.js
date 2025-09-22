module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Soft rose for romantic warmth
        primary: {
          DEFAULT: "#E8B4CB", // rose-300
          50: "#FDF2F8", // rose-50
          100: "#FCE7F3", // rose-100
          200: "#FBCFE8", // rose-200
          300: "#E8B4CB", // rose-300
          400: "#F472B6", // rose-400
          500: "#EC4899", // rose-500
        },
        
        // Secondary Colors - Lavender for gentle depth
        secondary: {
          DEFAULT: "#D8C4E8", // purple-200
          50: "#FAF5FF", // purple-50
          100: "#F3E8FF", // purple-100
          200: "#D8C4E8", // purple-200
          300: "#C4B5FD", // purple-300
          400: "#A78BFA", // purple-400
          500: "#8B5CF6", // purple-500
        },
        
        // Accent Colors - Yellow flower harmony
        accent: {
          DEFAULT: "#F4D03F", // yellow-300
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#F4D03F", // yellow-300
          400: "#FBBF24", // yellow-400
          500: "#F59E0B", // yellow-500
        },
        
        // Background Colors
        background: "#FDF8F0", // orange-50 - Warm cream canvas
        surface: "#F9F3F7", // rose-25 - Subtle rose-tinted elevation
        
        // Text Colors
        text: {
          primary: "#4A4A4A", // gray-600 - Readable without harshness
          secondary: "#7A7A7A", // gray-500 - Clear hierarchy maintenance
          muted: "#9CA3AF", // gray-400
        },
        
        // Status Colors
        success: {
          DEFAULT: "#82C09A", // green-300 - Gentle positive confirmation
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
        },
        
        warning: {
          DEFAULT: "#F7B731", // amber-400 - Warm attention without alarm
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        
        error: {
          DEFAULT: "#E17055", // red-400 - Soft concern communication
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean readability that disappears into content flow
        dancing: ['Dancing Script', 'cursive'], // Romantic elegance for emotional moments
        poppins: ['Poppins', 'sans-serif'], // Friendly confidence for interaction moments
        accent: ['Great Vibes', 'cursive'], // Handwritten intimacy for special phrases
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      
      boxShadow: {
        'soft': '0 4px 20px rgba(232, 180, 203, 0.15)', // Soft, warm shadows for gentle elevation
        'gift': '0 8px 32px rgba(232, 180, 203, 0.25)', // Deeper shadows for gift container emphasis
        'gentle': '0 2px 12px rgba(232, 180, 203, 0.1)', // Subtle elevation
      },
      
      animation: {
        'gentle-fade': 'gentleFade 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'gift-reveal': 'giftReveal 800ms cubic-bezier(0.4, 0, 0.2, 1)',
        'text-reveal': 'textReveal 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)', // Organic, breath-like timing
      },
      
      transitionDuration: {
        '300': '300ms', // Standard duration
        '400': '400ms', // Slow duration for important moments
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
      
      backgroundImage: {
        'gradient-romantic': 'linear-gradient(135deg, #FDF2F8, #FAF5FF)',
        'gradient-warm': 'linear-gradient(135deg, #FDF8F0, #F9F3F7)',
      },
    },
  },
  plugins: [],
}