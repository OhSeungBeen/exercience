import { headers } from 'next/headers';
import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './messages/**/*.json'],
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
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#d12d31',
          'base-content': '#000000',
        },
        dark: {
          ...require('daisyui/src/theming/themes').dark,
          primary: '#d12d31',
          'base-content': '#ffffff',
        },
      },
    ],
  },
} satisfies Config;
