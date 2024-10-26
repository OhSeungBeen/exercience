import { type Config } from 'tailwindcss';

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
    },
    backgroundImage: {
      none: 'none',
      'home-check-list': "url('/images/home/check-list.jpg')",
      'home-search': "url('/images/home/search.jpg')",
      'home-running': "url('/images/home/running.jpg')",
      'home-paper': "url('/images/home/paper.jpg')",
    },
    aspectRatio: {
      square: '1 / 1',
      '1/2': '1 / 2',
      '190/271': '190 / 271',
    },
  },
  darkMode: 'class',
  presets: [require('@premieroctet/next-admin/preset')],
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#d12d31',
          secondary: '#F7DCDC',
        },
        dark: {
          ...require('daisyui/src/theming/themes').dark,
          primary: '#d12d31',
          secondary: '#F7DCDC',
        },
      },
    ],
  },
} satisfies Config;
