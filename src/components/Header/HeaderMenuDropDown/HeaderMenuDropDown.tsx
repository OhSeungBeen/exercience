import { useTranslations } from 'next-intl';
import { animateScroll } from 'react-scroll';

type Props = {
  onScrollTo: (name: string) => void;
};

export default function HeaderMenuDropDown({ onScrollTo }: Props) {
  const t = useTranslations('header.menu');

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost px-2 sm:px-4 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header-sticky-change-color sm: h-5 w-5 sm:h-6 sm:w-6"
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
            onClick={() =>
              animateScroll.scrollToTop({
                duration: 1000,
                delay: 500,
                smooth: true,
              })
            }
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
