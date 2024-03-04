const container = 1440;

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { max: '475px' },
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: container + 30 + 'px',
          '@screen xl': {
            maxWidth: '1024px'
          },
          '@screen lg': {
            maxWidth: '768px'
          },
          '@screen md': {
            maxWidth: '640px'
          },
          '@screen sm': {
            maxWidth: '475px'
          },
          '@screen xs': {
            maxWidth: '100%'
          }
        }
      });
    }
  ]
};
