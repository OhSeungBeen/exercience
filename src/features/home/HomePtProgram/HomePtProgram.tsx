'use client';

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

  const ptPrograms = [
    {
      id: 'recovery',
      title: t('recoveryTitle'),
      description: t('recoveryDescription'),
      SvgComponent: Recovery,
    },
    {
      id: 'correction',
      title: t('correctionTitle'),
      description: t('correctionDescription'),
      SvgComponent: Correction,
    },
    {
      id: 'diet',
      title: t('dietTitle'),
      description: t('dietDescription'),
      SvgComponent: Diet,
    },
  ];

  useGSAP(() => {
    const timeline = gsap
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
      });

    ptPrograms.forEach((ptProgram) => {
      timeline.from(`#${ptProgram.id}`, {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      });
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
        {ptPrograms.map((ptProgram) => (
          <div
            key={ptProgram.id}
            id={ptProgram.id}
            className="flex gap-4 py-1 sm:gap-8"
          >
            <div className="relative rounded-2xl bg-base-200 shadow-md">
              <ptProgram.SvgComponent className="h-[78px] w-[78px] fill-base-content sm:h-[156px] sm:w-[156px]" />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <div className="text-base font-extrabold sm:text-2xl">
                {ptProgram.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-base">
                {ptProgram.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
