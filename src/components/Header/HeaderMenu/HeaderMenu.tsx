'use client';

import { useTranslations } from 'next-intl';

type Props = {
  onScrollTo: (name: string) => void;
};

export default function HeaderMenu({ onScrollTo }: Props) {
  const t = useTranslations('header.menu');

  return (
    <div className="navbar-center hidden text-black lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <div
            onClick={() => window.scrollTo({ top: 0 })}
            className="header-sticky-change-color text-base font-medium text-black"
          >
            {t('home')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('program')}
            className="header-sticky-change-color text-base font-medium text-black"
          >
            {t('program')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('profile')}
            className="header-sticky-change-color text-base font-medium text-black"
          >
            {t('profile')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('review')}
            className="header-sticky-change-color text-base font-medium text-black"
          >
            {t('review')}
          </div>
        </li>
      </ul>
    </div>
  );
}
