/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '500px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '7rem',
      full: '9999px',
    },
    extend: {
      colors: {

        // Primary
        lightRedCTA_text: 'hsl(356, 100%, 66%)',
        veryLightRedCTA_hover_background: 'hsl(355, 100%, 74%)',
        veryDarkBlue_headings: 'hsl(208, 49%, 24%)',
        veryDarkBlue_headingsLow: 'hsl(208, 59%, 20%)',

        // Neutral
        whiteText: 'hsl(0, 0%, 100%)',
        whiteTextLow: 'hsl(0, 0%, 90%)',
        grayishBlue_footer_text: 'hsl(240, 2%, 79%)',
        grayishBlue_footer_textLow: 'hsl(240, 2%, 95%)',
        veryDarkGrayishBlue_body_copy: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue_footer_background: 'hsl(240, 10%, 16%)',

        // Gradient
        // Background gradient - Intro/CTA mobile nav:

        veryLightRed: 'hsl(13, 100%, 72%)',
        lightRed: 'hsl(353, 100%, 62%)',

        // Background gradient - body:

        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      },

      fontFamily: {
        ubuntu: [
          'Ubuntu',
        ],
        overpass: [
          'Overpass',
        ]
      },

      fontWeight: {
        light: ['300'],
        semibold: ['600'],
        ubuntu_regular: ['400'],
        ubuntu_medium: ['500'],
        ubuntu_bold: ['700'],
      },
      width: {
        '300': '24rem',
      },
    },
  },
  plugins: [],
}

