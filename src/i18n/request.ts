import { notFound } from 'next/navigation';
import { type AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as 'en' | 'ko')) notFound();

  return {
    messages: (
      (await import(`../../messages/${locale}.json`)) as {
        default: AbstractIntlMessages;
      }
    ).default,
  };
});
