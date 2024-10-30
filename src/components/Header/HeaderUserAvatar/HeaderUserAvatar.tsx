import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { type Role } from '@prisma/client';

import { Link } from '@/i18n/routing';

type Props = {
  userImage?: string | null;
  userName?: string | null;
  userRole: Role;
};

export default function HeaderUserAvatar({
  userImage,
  userName,
  userRole,
}: Props) {
  const t = useTranslations('header.avatar');

  return (
    <div className="dropdown dropdown-end">
      {userImage ? (
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <div className="avatar flex cursor-pointer">
            <div className="relative h-9 w-9 rounded-full sm:h-10 sm:w-10">
              <Image src={userImage} fill alt="user-image" />
            </div>
          </div>
        </div>
      ) : (
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <div className="avatar placeholder cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-neutral text-neutral-content sm:h-12 sm:w-12">
              <div className="text-xl">
                {userName ? userName.charAt(0) : ''}
              </div>
            </div>
          </div>
        </div>
      )}
      <ul
        tabIndex={0}
        className="menu dropdown-content z-20 mt-3 rounded-box bg-base-200 p-2 shadow"
      >
        {userRole === 'ADMIN' && (
          <li className="text-xs sm:text-sm">
            <Link href={'/admin'}>{t('admin')}</Link>
          </li>
        )}
        <li className="text-xs sm:text-sm">
          <button className="!whitespace-nowrap" onClick={() => signOut()}>
            {t('signOut')}
          </button>
        </li>
      </ul>
    </div>
  );
}
