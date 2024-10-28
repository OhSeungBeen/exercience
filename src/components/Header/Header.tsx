'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import clsx from 'clsx';
import useScrollPosition from '@react-hook/window-scroll';

import HeaderMenu from '@/components/Header/HeaderMenu';
import HeaderMenuDropDown from '@/components/Header/HeaderMenuDropDown';
import HeaderSignInButton from '@/components/Header/HeaderSignInButton';
import HeaderUserAvatar from '@/components/Header/HeaderUserAvatar';

import HeaderLanguageSwitcher from './HeaderLanguageSwitcher';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  const { data: session, status } = useSession();

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    setIsSticky(scrollY > headerRef.current?.offsetHeight);
  }, [scrollY]);

  const languages: {
    locale: 'en' | 'ko';
    label: string;
    image: string;
  }[] = [
    { locale: 'en', label: 'English', image: '/images/header/flag-us.png' },
    { locale: 'ko', label: '한국어', image: '/images/header/flag-kr.png' },
  ];

  const onScrollTo = (name: string) => {
    scroller.scrollTo(name, {
      offset: headerRef.current ? -headerRef.current.offsetHeight : 0,
    });
  };

  return (
    <header
      ref={headerRef}
      className={clsx(
        'navbar justify-between bg-base-100 transition-all duration-300 ease-in-out sm:px-7',
        isSticky &&
          'sticky top-0 z-50 bg-primary opacity-90 shadow-xl [&_.header-sticky-change-color]:text-white',
      )}
    >
      <div className="flex items-center">
        <HeaderMenuDropDown onScrollTo={onScrollTo} />
        <HeaderLogo
          logo={
            isSticky
              ? '/images/header/logo-white.png'
              : '/images/header/logo.png'
          }
        />
      </div>
      <div className="gap-1 sm:gap-6">
        <HeaderMenu onScrollTo={onScrollTo} />
        <div className="flex items-center">
          <HeaderLanguageSwitcher languages={languages} />
          {/* {status === 'loading' && (
          <div className="skeleton h-8 min-w-[72px]"></div>
        )} */}
          {status === 'unauthenticated' && <HeaderSignInButton />}
          {status === 'authenticated' && (
            <HeaderUserAvatar
              userName={session.user.name}
              userImage={session.user.image}
              userRole={session.user.role}
            />
          )}
        </div>
      </div>
    </header>
  );
}
