import { type Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { fonts } from '@/app/[locale]/fonts';

import { TRPCReactProvider } from '@/trpc/react';

import '@/styles/globals.css';
import 'aos/dist/aos.css';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-theme="light"
      className={`${fonts.sen.variable} ${fonts.pretendard.variable}`}
    >
      <body
        className={
          locale === 'en' ? fonts.sen.className : fonts.pretendard.className
        }
      >
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
