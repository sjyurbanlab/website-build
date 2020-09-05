const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '90': '22.5rem',
        '100': '25rem',
        '120': '30rem',
      },
      width: {
        'fit-content': 'fit-content',
      },
      maxHeight: {
        none: 'none',
        xxxs: '5rem',
        xxs: '12rem',
        xs: '18rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      scale: {
        '102': '1.02',
      },
      colors: {
        white: '#FDFBFD',
        'emerald-green': {
          light: '#64CE87',
          default: '#50C878',
          dark: '#45C46F',
        },
        'cobalt-blue': {
          light: '#164EB6',
          default: '#1446A0',
          dark: '#123F91',
        },
        'razzmatazz-red': {
          light: '#DD4075',
          default: '#DB3069',
          dark: '#D0255E',
        },
        'mustard-yellow': {
          light: '#F7DC64',
          default: '#F5D547',
          dark: '#F5D33D',
        },
        'jet-black': {
          light: '#484847',
          default: '#3C3C3B',
          dark: '#343432',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
