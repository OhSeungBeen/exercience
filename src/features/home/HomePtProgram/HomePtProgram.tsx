import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Correction from 'public/svgs/home/correction.svg';
import Diet from 'public/svgs/home/diet.svg';
import Recovery from 'public/svgs/home/recovery.svg';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePtProgram() {
  const t = useTranslations('home.ptProgram');
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pt-program-container',
          start: 'top top',
          end: '+=' + window.innerHeight * 2,
          scrub: true,
          anticipatePin: 1,
          pin: true,
        },
      })
      .from('.pt-program-container .title', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.pt-program-container .program1', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.pt-program-container .program2', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.pt-program-container .program3', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      });
  });

  return (
    <Element
      name="program"
      className="pt-program-container flex h-screen flex-col items-center gap-10 px-4 pt-[144px] sm:gap-16 sm:px-0"
    >
      <div className="title text-2xl font-extrabold sm:text-4xl">
        1:1 PT PROGRAMS
      </div>
      <div className="flex flex-col gap-10 sm:gap-14">
        <div className="program1 flex gap-4 py-1 sm:gap-8">
          <div className="relative rounded-2xl bg-base-200 shadow-md">
            <Recovery className="h-[78px] w-[78px] fill-base-content sm:h-[156px] sm:w-[156px]" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title1')}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-base">
              {t('description1')}
            </div>
          </div>
        </div>
        <div className="program2 flex gap-4 py-1 sm:gap-8">
          <div className="relative rounded-2xl bg-base-200 shadow-md">
            <Correction className="h-[78px] w-[78px] fill-base-content sm:h-[156px] sm:w-[156px]" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title2')}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-base">
              {t('description2')}
            </div>
          </div>
        </div>
        <div className="program3 flex gap-4 py-1 sm:gap-8">
          <div className="relative rounded-2xl bg-base-200 shadow-md">
            <Diet className="h-[78px] w-[78px] fill-base-content sm:h-[156px] sm:w-[156px]" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title3')}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-base">
              {t('description3')}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
