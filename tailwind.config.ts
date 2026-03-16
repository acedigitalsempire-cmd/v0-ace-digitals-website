/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0F1B2E',
        'electric-blue': '#0088FF',
        'cyan': '#00D4FF',
        'metallic-gold': '#FFD700',
        'gold-highlight': '#FFED4E',
        'background': '#1A2A3E',
        // Custom colors
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'glassmorphic': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2)), linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.08))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};