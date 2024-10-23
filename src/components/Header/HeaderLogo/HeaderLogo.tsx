import Image from 'next/image';
import clsx from 'clsx';

import { Link } from '@/i18n/routing';

type Props = {
  logoSrc: string;
  color: 'white' | 'black';
};

export default function HeaderLogo({ logoSrc, color }: Props) {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <div className="sm:h-9sm:w-9 relative h-7 w-7">
        <Image src={logoSrc} alt="logo" fill />
      </div>
      <div
        className={clsx(
          'font-sen text-xl font-semibold sm:text-2xl',
          `text-${color}`,
        )}
      >
        exercience
      </div>
    </Link>
  );
}
