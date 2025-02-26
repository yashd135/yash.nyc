/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        },
        '.card': {
          backgroundColor: theme('colors.gray.800'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
        },
        '.card-hover': {
          '@apply card transition-transform hover:scale-105 hover:shadow-lg': {},
        },
        '.icon-button': {
          backgroundColor: theme('colors.gray.800'),
          color: theme('colors.white'),
          borderRadius: '9999px', // full
          padding: theme('spacing.4'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '4rem',
          height: '4rem',
          marginBottom: theme('spacing.2'),
          transition: 'background-color 150ms',
          '&:hover': {
            backgroundColor: theme('colors.gray.700'),
          },
        },
      });
    },
  ],
} 