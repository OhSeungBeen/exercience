import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './messages/**/*.json',
    './node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['var(--font-sen)'],
        pretendard: ['var(--font-pretendard)'],
      },
      backgroundImage: {
        'home-check-list': "url('/images/home/check-list.jpg')",
        'home-pt': "url('/images/home/pt.jpg')",
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '190/271': '190 / 271',
      },
      colors: {
        crimson: {
          50: '#fce8e8',
          100: '#f8c2c3',
          200: '#f09192',
          300: '#e96263',
          400: '#e13a3b',
          500: '#d12d31',
          600: '#b7292b',
          700: '#931f21',
          800: '#701619',
          900: '#4c0d11',
        },
      },
    },
  },
  presets: [require('@premieroctet/next-admin/preset')],
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#d12d31',
          'primary-content': '#000000',
          // 'base-100': colors.white,
          // 'base-200': colors.slate[50],
          // 'base-300': colors.slate[100],
          // 'base-content': colors.slate[900],
        },
        dark: {
          ...require('daisyui/src/theming/themes').dark,
          primary: '#e13a3b',
          'primary-content': '#ffffff',
          // 'base-100': colors.slate[900],
          // 'base-200': colors.slate[800],
          // 'base-300': colors.slate[700],
          'base-content': '#e0e7f6',
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
} satisfies Config;
