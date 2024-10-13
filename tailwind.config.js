const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",], 
  theme: {
    extend: {
      keyframes: {
        'text-reveal': {
          '0%': {opacity: '0', transform: 'translateY(-20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
        'slideDown': 'slideDown 0.7s ease-out forwards'
      },
    },
  },
  plugins: [],
};
