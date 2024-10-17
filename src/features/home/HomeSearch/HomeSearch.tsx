'use client';

import { useLocale, useTranslations } from 'next-intl';
import Typist from 'react-typist-component';

export default function HomeSearch() {
  const t = useTranslations('home.search');

  const locale = useLocale();

  return (
    <div className="relative flex aspect-square justify-center bg-home-check-list bg-cover bg-center sm:m-0 sm:ml-[calc(-50vw+50%)] sm:aspect-auto sm:h-[800px] sm:w-screen">
      <div className="absolute inset-0 bg-white opacity-75" />
      <div className="z-10 flex flex-col items-center justify-center gap-2 p-2 sm:w-[1024px] sm:gap-8 sm:p-0">
        <Typist
          typingDelay={80}
          hideCursorWhenDone
          cursor={<span className="cursor">|</span>}
        >
          {locale === 'en' && (
            <div className="text-center text-2xl font-medium sm:text-5xl">
              Are you looking for a
              <strong className="text-3xl font-extrabold text-primary sm:text-5xl">
                {' '}
                symptom
              </strong>{' '}
              like this to find a
              <strong className="text-3xl font-extrabold text-primary sm:text-5xl">
                {' '}
                fitness expert
              </strong>
              ?
            </div>
          )}
          {locale === 'ko' && (
            <div className="text-center text-2xl font-medium sm:text-5xl">
              혹시 아래와 같은{' '}
              <strong className="text-3xl font-extrabold text-primary sm:text-5xl">
                증상
              </strong>
              으로{' '}
              <strong className="text-3xl font-extrabold text-primary sm:text-5xl">
                운동 전문가
              </strong>
              를 찾고 계신가요 ?
            </div>
          )}

          <Typist.Delay ms={500} />
          <div className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4">
            ·
          </div>
          <Typist.Delay ms={500} />
          <div className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4">
            ·
          </div>
          <Typist.Delay ms={1500} />
          <Typist.Paste>
            <div className="text-center text-base font-medium sm:text-2xl">
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
                  무릎,발목 부상, 오십견 허리디스크, 저림증상, 체중 감량 및 근력
                  증진
                </>
              )}
            </div>
          </Typist.Paste>
        </Typist>
        {/* <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1500"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div> */}
        {/* <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="1800"
          data-aos-duration="1000"
          className="text-center text-base font-medium sm:text-2xl"
          dangerouslySetInnerHTML={{
            __html: t.raw('diseases') as string,
          }}
        /> */}
      </div>
    </div>
  );
}
