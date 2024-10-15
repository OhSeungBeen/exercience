import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  defaultLocale: 'en',
  locales: ['en', 'ko'],
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
