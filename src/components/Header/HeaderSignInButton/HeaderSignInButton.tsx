import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export default function HeaderSignInButton() {
  const t = useTranslations('header.signInButton');

  return (
    <Link className={`btn btn-xs sm:btn-sm`} href={'/sign-in'}>
      {t('title')}
    </Link>
  );
}
