'use client';

import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import clsx from 'clsx';

import HeaderMenu from '@/components/Header/HeaderMenu';
import HeaderMenuDropDown from '@/components/Header/HeaderMenuDropDown';

import useScrollPosition from '@react-hook/window-scroll';

import HeaderLanguageSwitcher from './HeaderLanguageSwitcher';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    setIsSticky(scrollY > 64);
  }, [scrollY]);

  const color = isSticky ? 'white' : 'black';

  const languages: {
    lang: 'en' | 'ko';
    label: string;
    imageSrc: string;
  }[] = [
    { lang: 'en', label: 'English', imageSrc: '/images/header/flag-us.png' },
    { lang: 'ko', label: '한국어', imageSrc: '/images/header/flag-kr.png' },
  ];

  const onScrollTo = (name: string) => {
    if (!document) {
      return;
    }
    document.getElementById(name)?.scrollIntoView();
    // scroller.scrollTo(name, {
    //   duration: 800,
    //   delay: 0,
    //   smooth: false,
    //   offset: headerRef.current ? -headerRef.current.offsetHeight : 0,
    // });
  };

  return (
    <div
      ref={headerRef}
      className={clsx(
        'navbar transition-all duration-300 ease-in-out sm:px-7 sm:py-5',
        isSticky
          ? 'sticky top-0 z-50 bg-primary opacity-90 shadow-xl'
          : 'bg-base-100',
      )}
    >
      <div className="navbar-start">
        <HeaderMenuDropDown color={color} onScrollTo={onScrollTo} />
        <HeaderLogo
          logoSrc={
            isSticky
              ? '/images/header/logo-white.png'
              : '/images/header/logo.png'
          }
          color={color}
        />
      </div>
      <div className="navbar-end gap-10">
        <HeaderMenu color={color} onScrollTo={onScrollTo} />
        <HeaderLanguageSwitcher languages={languages} color={color} />
      </div>
    </div>
  );
}
