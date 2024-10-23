'use client';

import { useTranslations } from 'next-intl';
import { animateScroll } from 'react-scroll';
import clsx from 'clsx';

type Props = {
  color: 'white' | 'black';
  onScrollTo: (name: string) => void;
};

export default function HeaderMenu({ color, onScrollTo }: Props) {
  const t = useTranslations('header.menu');

  return (
    <div className={clsx('navbar-center hidden sm:flex', `text-${color}}`)}>
      <ul className="menu menu-horizontal px-1">
        <li>
          <div
            onClick={() => animateScroll.scrollToTop()}
            className={clsx(`text-base font-medium text-${color}`)}
          >
            {t('home')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('program')}
            className={clsx(`text-base font-medium text-${color}`)}
          >
            {t('program')}
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('profile')}
            className={clsx(`text-base font-medium text-${color}`)}
          >
            {t('profile')}
          </div>
        </li>
      </ul>
    </div>
  );
}
