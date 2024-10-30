'use client';

import { useTranslations } from 'next-intl';

type Props = {
  onScrollTo: (name: string) => void;
};

export default function HeaderMenu({ onScrollTo }: Props) {
  const t = useTranslations('header.menu');

  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <div
            onClick={() => window.scrollTo({ top: 0 })}
            className="btn btn-ghost font-medium"
          >
            {t('home')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('program')}
            className="btn btn-ghost font-medium"
          >
            {t('program')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('profile')}
            className="btn btn-ghost font-medium"
          >
            {t('profile')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('review')}
            className="btn btn-ghost font-medium"
          >
            {t('review')}
          </div>
        </li>
      </ul>
    </div>
  );
}
