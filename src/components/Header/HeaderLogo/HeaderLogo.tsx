import Image from 'next/image';

import { Link } from '@/i18n/routing';

type Props = {
  logo: string;
};

export default function HeaderLogo({ logo }: Props) {
  return (
    <Link href="/" className="btn btn-ghost gap-2 px-2 sm:px-4">
      <div className="relative h-5 w-5 sm:h-7 sm:w-7">
        <Image src={logo} alt="logo" fill />
      </div>
      <div className="header-sticky-change-color font-sen text-xl font-semibold text-black sm:text-2xl">
        exercience
      </div>
    </Link>
  );
}
