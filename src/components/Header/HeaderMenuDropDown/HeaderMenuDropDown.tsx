import { useTranslations } from 'next-intl';
import { animateScroll } from 'react-scroll';
import clsx from 'clsx';

type Props = {
  color: 'white' | 'black';
  onScrollTo: (name: string) => void;
};

export default function HeaderMenuDropDown({ color, onScrollTo }: Props) {
  const t = useTranslations('header.menu');

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx('h-5 w-5', `text-${color}`)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a
            className="cursor-pointer"
            onClick={() => animateScroll.scrollToTop()}
          >
            {t('home')}
          </a>
        </li>
        <li>
          <a className="cursor-pointer" onClick={() => onScrollTo('program')}>
            {t('program')}
          </a>
        </li>
        <li>
          <a className="cursor-pointer" onClick={() => onScrollTo('profile')}>
            {t('profile')}
          </a>
        </li>
      </ul>
    </div>
  );
}
