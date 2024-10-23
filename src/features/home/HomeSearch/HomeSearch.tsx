'use client';

import { useLocale } from 'next-intl';
import { BsChevronCompactDown } from 'react-icons/bs';
import Typist from 'react-typist-component';
import clsx from 'clsx';

export default function HomeSearch() {
  const locale = useLocale();

  return (
    <div className="relative flex justify-center bg-home-check-list bg-cover bg-center sm:ml-[calc(-50vw+50%)] sm:w-screen">
      <div className="absolute inset-0 bg-white opacity-50" />
      <div
        className={clsx(
          'z-10 mx-4 flex w-full flex-col items-center gap-2 pt-20 sm:min-h-[800px] sm:w-[1024px] sm:gap-8 sm:pt-40',
          locale === 'en' ? 'min-h-[482px]' : 'min-h-[370px]',
        )}
      >
        <Typist
          typingDelay={50}
          hideCursorWhenDone
          cursor={<span className="cursor">|</span>}
        >
          {locale === 'en' && (
            <div className="text-center text-[28px] font-bold sm:text-[54px]">
              {`Are you looking for a `}
              <strong className="text-3xl font-extrabold text-primary sm:text-6xl">
                {`symptom `}
              </strong>
              {`like this to find a `}
              <strong className="text-3xl font-extrabold text-primary sm:text-6xl">
                fitness expert
              </strong>
              ?
            </div>
          )}
          {locale === 'ko' && (
            <div className="text-center text-[28px] font-bold leading-normal sm:text-[54px] sm:leading-normal">
              {`혹시, 아래와 같은 `}
              <strong className="text-3xl font-extrabold text-primary sm:text-6xl">
                증상
              </strong>
              {`으로 `}
              <strong className="text-3xl font-extrabold text-primary sm:text-6xl">
                운동 전문가
              </strong>
              {`를 찾고 계신가요?`}
            </div>
          )}
          <Typist.Delay ms={300} />
          <div className="text-3xl leading-4 sm:text-6xl sm:leading-4">·</div>
          <Typist.Delay ms={300} />
          <div className="text-3xl leading-4 sm:text-6xl sm:leading-4">·</div>
          <Typist.Delay ms={1000} />
          <Typist.Paste>
            <div
              className={clsx(
                'text-center text-base font-bold leading-normal text-gray-500 sm:text-[28px] sm:leading-normal',
              )}
            >
              {locale === 'en' && (
                <>
                  Chronic muscle pain, turtle neck, curved back, post-surgery
                  rehabilitation, pelvic imbalance,knee and ankle injuries,
                  frozen shoulder, herniated disc, numbness symptoms, weight
                  loss, muscle strengthening
                </>
              )}
              {locale === 'ko' && (
                <>
                  만성 근육통, 거북목, 굽은 등, 수술 후 재활, 골반 불균형,
                  무릎,발목 부상, 오십견, 허리디스크, 저림증상, 체중 감량 및
                  근력 증진
                </>
              )}
            </div>
          </Typist.Paste>
          <Typist.Delay ms={300} />
          <div className="absolute bottom-0 h-10 w-10 text-gray-400 sm:h-20 sm:w-20">
            <BsChevronCompactDown className="h-full w-full animate-bounce font-bold animate-duration-[2500ms]" />
          </div>
        </Typist>
      </div>
    </div>
  );
}
