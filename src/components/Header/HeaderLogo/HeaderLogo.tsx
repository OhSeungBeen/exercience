import Logo from 'public/svgs/common/logo.svg';

import { Link } from '@/i18n/routing';

export default function HeaderLogo() {
  return (
    <Link href="/" className="btn btn-ghost gap-2 px-2 sm:px-4">
      <Logo className="h-5 w-5 fill-primary sm:h-7 sm:w-7" />
      <div className="font-sen text-xl font-semibold sm:text-2xl">
        exercience
      </div>
    </Link>
  );
}
