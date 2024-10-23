import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MdArrowDropDown } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeTrainingProgram() {
  const t = useTranslations('home.trainingProgram');

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.training-program-container',
          start: 'top top',
          scrub: true,
          anticipatePin: 1,
          pin: true,
          onLeave: (self) => {
            gsap.to('.training-program-container', {
              autoAlpha: 0,
              duration: 1,
            });
            gsap.to(
              ['.profile-container', (self as { spacer?: HTMLElement }).spacer],
              {
                backgroundColor: '#F7DCDC',
                duration: 1,
              },
            );
            gsap.to('.profile-container .content', {
              autoAlpha: 1,
              duration: 1,
              y: 0,
            });
          },
          onEnterBack: (self) => {
            gsap.to('.training-program-container', {
              autoAlpha: 1,
              duration: 1,
            });
            gsap.to(
              ['.profile-container', (self as { spacer?: HTMLElement }).spacer],
              {
                backgroundColor: '#ffffff',
                duration: 1,
              },
            );
            gsap.to('.profile-container .content', {
              autoAlpha: 0,
              duration: 1,
              y: 200,
            });
          },
        },
      })
      .from('.training-program-container .title', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .program1', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .program2', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .program3', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .program4', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .program5', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.training-program-container .rotate', {
        scale: 0,
        rotate: 360,
        duration: 10,
      });
  });

  return (
    <div className="training-program-container flex flex-col items-center justify-center gap-8 px-4 pb-[124px] pt-[144px] sm:ml-[calc(-50vw+50%)] sm:w-screen sm:gap-16 sm:pb-[234px]">
      <div className="title text-center text-2xl font-extrabold sm:text-4xl">
        TRAINING PROGRAM
      </div>
      <div className="flex flex-col gap-8 sm:w-[1024px] sm:gap-16">
        <div className="program1 relative flex items-center gap-4">
          <div>
            <div className="relative w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl">
              {t('title1')}
            </div>
          </div>
          <div className="flex flex-1 items-center text-sm sm:text-xl">
            {t('description1')}
          </div>
          <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl text-black sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
        </div>
        <div className="program2 relative flex gap-4">
          <div>
            <div className="relative w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl">
              {t('title2')}
            </div>
          </div>
          <div className="flex flex-1 items-center text-sm sm:text-xl">
            {t('description2')}
          </div>
          <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl text-black sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
        </div>
        <div className="relative">
          <div className="program3 relative z-10 w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl">
            {t('title3')}
          </div>
          <div className="rotate absolute bottom-[-98px] left-[70px] z-0 h-[140px] w-[140px] sm:bottom-[-202px] sm:left-[251px] sm:h-[280px] sm:w-[280px]">
            <Image src="/images/home/rotate.png" alt="rotate" fill />
          </div>
          <div
            data-aos-offset="-20"
            className="program4 absolute -bottom-[124px] left-[94px] z-10 w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-white sm:-bottom-[234px] sm:left-[218px] sm:w-[328px] sm:min-w-[232px] sm:p-3 sm:text-2xl"
          >
            {t('title4')}
          </div>
          <div className="program5 absolute -bottom-[34px] left-[140px] z-10 min-w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-white sm:-bottom-[74px] sm:left-[346px] sm:w-[328px] sm:p-3 sm:text-2xl">
            {t('title5')}
          </div>
        </div>
      </div>
    </div>
  );
}
