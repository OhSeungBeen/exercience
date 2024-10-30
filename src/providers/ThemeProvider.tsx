'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider enableSystem={false} attribute="data-theme">
      {children}
    </NextThemeProvider>
  );
}
