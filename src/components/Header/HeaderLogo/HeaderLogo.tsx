import Image from 'next/image';

import { Link } from '@/i18n/routing';

type Props = {
  logo: string;
};

export default function HeaderLogo({ logo }: Props) {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <div className="sm:h-9sm:w-9 relative h-7 w-7">
        <Image src={logo} alt="logo" fill />
      </div>
      <div className="header-sticky-change-color font-sen text-xl font-semibold text-black sm:text-2xl">
        exercience
      </div>
    </Link>
  );
}
