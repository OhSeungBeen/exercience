'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import clsx from 'clsx';

import { Link, usePathname } from '@/i18n/routing';

type Props = {
  languages: {
    lang: 'en' | 'ko';
    label: string;
    imageSrc: string;
  }[];
  color: 'white' | 'black';
};

export default function HeaderLanguageSwitcher({ languages, color }: Props) {
  const pathName = usePathname();
  const { locale } = useParams();

  return (
    <div className="flex gap-2 sm:gap-3">
      {languages.map(({ lang, label, imageSrc }) => (
        <Link
          key={lang}
          href={pathName}
          locale={lang}
          className={clsx(
            'flex items-center justify-center gap-1',
            `text-${color}`,
            {
              'font-semibold': locale === lang,
              'font-sen': lang === 'en',
              'font-pretendard': lang === 'ko',
            },
          )}
        >
          <div className="relative h-[15px] w-5 sm:h-[18px] sm:w-6">
            <Image src={imageSrc} alt={`flag-${lang}`} fill />
          </div>
          <div className="text-xs sm:text-sm">{label}</div>
        </Link>
      ))}
    </div>
  );
}
