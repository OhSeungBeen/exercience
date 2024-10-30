import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export default function HeaderSignInButton() {
  const t = useTranslations('header.signInButton');

  return (
    <Link className="btn btn-ghost px-2 sm:px-4" href={'/sign-in'}>
      <div className="text-sm sm:text-sm">{t('title')}</div>
    </Link>
  );
}
