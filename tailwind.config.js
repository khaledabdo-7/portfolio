/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#010736',    // Deep Midnight Navy (Primary Background)
          surface: '#0D1C42',    // Dark Royal Navy (Cards / Surfaces)
          border: '#22396F',     // Steel Blue (Borders, Dividers, Accents)
        },
        cream: {
          DEFAULT: '#FCF1D0',    // Warm Cream Gold (Primary Highlight, Accent, CTA)
          hover: '#F7E7B8',
          muted: '#E5D6A8',
        },
        text: {
          main: '#FFFFFF',
          soft: '#E2E8F0',
          muted: '#94A3B8',
          accent: '#FCF1D0',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(252, 241, 208, 0.15)',
        'glow-md': '0 0 25px -5px rgba(252, 241, 208, 0.25)',
        'glow-accent': '0 0 30px -5px rgba(34, 57, 111, 0.5)',
        'card': '0 10px 30px -10px rgba(1, 7, 54, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
