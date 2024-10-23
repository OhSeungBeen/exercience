import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
          end: '+=' + window.innerHeight * 3,
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
      className="pt-program-container mx-4 flex flex-col items-center justify-center gap-10 pt-[144px] sm:gap-16 sm:pt-[232px]"
    >
      <div className="title text-2xl font-extrabold sm:text-4xl">
        1:1 PT PROGRAMS
      </div>
      <div className="flex flex-col gap-10 sm:gap-14">
        <div className="program1 flex gap-3 py-1">
          <div className="relative h-[82px] w-[82px] rounded-2xl bg-white shadow-md sm:h-[130px] sm:w-[130px]">
            <Image
              className="p-2"
              src="/images/home/pt-1.png"
              alt="pt-1"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title1')}
            </div>
            <div className="text-xs sm:text-base">{t('description1')}</div>
          </div>
        </div>
        <div className="program2 flex gap-3 py-1">
          <div className="relative h-[82px] w-[82px] rounded-2xl bg-white shadow-md sm:h-[130px] sm:w-[130px]">
            <Image
              className="p-2"
              src="/images/home/pt-2.png"
              alt="pt-2"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title2')}
            </div>
            <div className="text-xs sm:text-base">{t('description2')}</div>
          </div>
        </div>
        <div className="program3 flex gap-3 py-1">
          <div className="relative h-[82px] w-[82px] rounded-2xl bg-white shadow-md sm:h-[130px] sm:w-[130px]">
            <Image
              className="p-2"
              src="/images/home/pt-3.png"
              alt="pt-3"
              fill
            />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="text-base font-extrabold sm:text-2xl">
              {t('title3')}
            </div>
            <div className="text-xs sm:text-base">{t('description3')}</div>
          </div>
        </div>
      </div>
    </Element>
  );
}
