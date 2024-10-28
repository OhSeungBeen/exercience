import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export default function HeaderSignInButton() {
  const t = useTranslations('header.signInButton');

  return (
    <Link className="btn btn-ghost px-2 sm:px-4" href={'/sign-in'}>
      <div className="header-sticky-change-color text-sm sm:text-base">
        {t('title')}
      </div>
    </Link>
  );
}
