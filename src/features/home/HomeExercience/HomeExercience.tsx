import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeExercience() {
  const t = useTranslations('home.exercience');

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.exercience-container',
          end: '+=' + window.innerHeight * 2,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })
      .to('.exercience-container .text1', {
        autoAlpha: 1,
        duration: 1,
        top: '50%',
      })
      .to('.exercience-container .text1', {
        autoAlpha: 0,
        duration: 0,
      })
      .to('.exercience-container .text2', {
        autoAlpha: 1,
        duration: 1,
        top: '50%',
      });
  });

  return (
    <div className="exercience-container bg-home-pt relative flex h-screen justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex aspect-square w-full sm:h-[800px] sm:w-[1024px]">
        <div className="text1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-2xl font-extrabold sm:text-[42px]">
            <div className="text-center text-gray-200 dark:text-gray-100">
              exer
            </div>
            <div className="text-gray-200 dark:text-gray-100">&#10230;</div>
            <div className="text-center text-[26px] text-primary sm:text-5xl">
              Exercise
            </div>
            <div className="text-center text-gray-200 dark:text-gray-100">
              cience
            </div>
            <div className="text-gray-200 dark:text-gray-100">&#10230;</div>
            <div className="text-center text-[26px] text-primary sm:text-5xl">
              Science
            </div>
          </div>
        </div>
        <div
          className="text2 absolute left-1/2 top-[calc(50%+100px)] w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-2xl font-medium leading-snug text-gray-50 opacity-0 dark:text-gray-100 sm:text-[42px] sm:leading-normal"
          dangerouslySetInnerHTML={{
            __html: t.raw('title') as string,
          }}
        />
      </div>
    </div>
  );
}
