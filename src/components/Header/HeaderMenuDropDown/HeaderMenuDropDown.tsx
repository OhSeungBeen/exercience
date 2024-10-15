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

      <ul className="menu dropdown-content menu-sm z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <button onClick={() => animateScroll.scrollToTop()}>
            {t('home')}
          </button>
        </li>
        <li>
          <button onClick={() => onScrollTo('program')}>{t('program')}</button>
        </li>
        <li>
          <button onClick={() => onScrollTo('profile')}>{t('profile')}</button>
        </li>
      </ul>
    </div>
  );
}
