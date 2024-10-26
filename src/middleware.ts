import { type NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales, routing } from '@/i18n/routing';
import { getSession } from '@/server/auth';

const intlMiddleware = createMiddleware(routing, {
  localeDetection: false,
});

const adminPage = ['/admin'];
const authPages = ['/sign-in', '/sign-up'];

const testPathnameRegex = (pages: string[], pathName: string): boolean => {
  return RegExp(
    `^(/(${locales.join('|')}))?(${pages.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?.*$`,
    'i',
  ).test(pathName);
};

export default async function middleware(req: NextRequest) {
  if (testPathnameRegex(adminPage, req.nextUrl.pathname)) {
    const session = await getSession();
    return session?.user && session.user.role === 'ADMIN'
      ? intlMiddleware(req)
      : NextResponse.redirect(
          new URL(`/sign-in?callbackUrl=${req.url}`, req.url),
        );
  }

  if (testPathnameRegex(authPages, req.nextUrl.pathname)) {
    return (await getSession())
      ? NextResponse.redirect(new URL('/', req.url))
      : intlMiddleware(req);
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
