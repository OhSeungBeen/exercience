import { Sen } from 'next/font/google';
import localFont from 'next/font/local';

const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
});

const pretendard = localFont({
  src: '../../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const fonts = {
  sen,
  pretendard,
};
