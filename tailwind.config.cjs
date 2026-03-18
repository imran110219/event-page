/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8ebff',
          200: '#b9dbff',
          300: '#89c4ff',
          400: '#58a7ff',
          500: '#2d85f4',
          600: '#1667d6',
          700: '#1453ad',
          800: '#17478f',
          900: '#1a3d76'
        },
        accent: {
          500: '#00b894',
          600: '#009879'
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 12px 34px -16px rgba(15, 23, 42, 0.35)',
        card: '0 16px 44px -22px rgba(2, 6, 23, 0.5)'
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'Tahoma', 'sans-serif'],
        display: ['Sora', 'Manrope', 'Segoe UI', 'sans-serif']
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.7 }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
