'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { BsChevronDown } from 'react-icons/bs';
import clsx from 'clsx';

import { Link, usePathname } from '@/i18n/routing';

type Props = {
  languages: {
    locale: 'en' | 'ko';
    label: string;
    image: string;
  }[];
};

export default function HeaderLanguageSwitcher({ languages }: Props) {
  const pathName = usePathname();
  const { locale } = useParams();

  const language = languages.find((language) => language.locale === locale);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm rounded-btn"
      >
        <div className={`relative h-[15px] w-5 sm:h-[18px] sm:w-6`}>
          {language && (
            <Image src={language.image} alt={`flag-${language?.locale}`} fill />
          )}
        </div>
        <div
          className={`header-sticky-change-color text-xs text-black sm:text-sm`}
        >
          {language?.label}
        </div>
        <BsChevronDown
          className={`header-sticky-change-color h-3 w-3 text-black sm:h-4 sm:w-4`}
        />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-20 mt-4 rounded-box bg-base-100 p-2 shadow"
      >
        {languages.map((language) => (
          <li key={language.locale}>
            <Link
              href={pathName}
              locale={language.locale}
              className={clsx({
                'font-semibold': locale === language.locale,
                'font-sen': language.locale === 'en',
                'font-pretendard': language.locale === 'ko',
              })}
            >
              <div className="relative h-[15px] w-5 sm:h-[18px] sm:w-6">
                <Image
                  src={language.image}
                  alt={`flag-${language.locale}`}
                  fill
                />
              </div>
              <div className="text-xs sm:text-sm">{language.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
