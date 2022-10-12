/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      purple: {
        default: '#49166C',
        '100': '#260b38',
        '200': '#371052',
        '300': '#40135E',
        '400': '#6C209E',
        '500': '#972CDE',
      },
      
      neutra: {
        default: '#202024',
        '100': '#121214',
        '300': '#7C7C8A',
        '400': '#c4c4cc',
        '500': '#E1E1E6',
      },

      blue: {
        default: '#5439ec',
        '100': '#160F3D',
        '200': '#1E1454',
        '300': '#271A6E',
        '400': '#422DBA',
        '500': '#583CFA',
      },
      
      orange: {
        default: '#FC9114',
        '100': '#331D04',
        '200': '#3D2305',
        '300': '#4A2A06',
        '400': '#8A4F0B',
        '500': '#C97310',
      },
    },

    fontSize: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl' : 32,
    },

    letterSpacing: {
      xs : '0.04em',      
      sm : '0.08em',
    },

    boxShadow: {
      shadowUP: '3px 3px 8px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.5);',
      shadowDown: 'inset 3px 3px 8px rgba(0, 0, 0, 0.5), inset -1px -1px 3px rgba(255, 255, 255, 0.5);',
      shadowLightBlue: '0px 0px 8px #8AA2F5;',
    },

    extend: {
      fontFamily: {
        title: 'Uncial Antiqua',
        'title2': 'Cinzel Decorative',
        subtitle: 'Allerta Stencial',
        body: 'Cinzel',
        'body2': 'Markazi Text'
      }
    },
  },
  plugins: [],
}
