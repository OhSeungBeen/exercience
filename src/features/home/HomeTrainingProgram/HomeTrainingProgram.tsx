import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { MdArrowDropDown } from 'react-icons/md';
import gsap from 'gsap';
import Rotate from 'public/svgs/home/rotate.svg';
import { useGSAP } from '@gsap/react';
export default function HomeTrainingProgram() {
  const t = useTranslations('home.trainingProgram');

  const { theme } = useTheme();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.training-program-container',
            start: 'top top',
            end: '+=' + window.innerHeight * 2,
            scrub: true,
            anticipatePin: 1,
            pin: true,
            onLeave: (self) => {
              gsap.to('.training-program-container', {
                autoAlpha: 0,
                duration: 1,
              });
              gsap.to(
                [
                  '.profile-container',
                  (self as { spacer?: HTMLElement }).spacer,
                ],
                {
                  backgroundColor: theme === 'light' ? '#fce8e8' : '#4c0d11',
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
                [
                  '.profile-container',
                  (self as { spacer?: HTMLElement }).spacer,
                ],
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
          duration: 1,
        });
    },
    {
      revertOnUpdate: true,
      dependencies: [theme],
    },
  );

  return (
    <div className="training-program-container flex h-screen flex-col gap-8 bg-base-100 px-4 pb-[124px] pt-[144px] sm:gap-16 sm:pb-[234px]">
      <div className="title text-center text-2xl font-extrabold sm:text-4xl">
        TRAINING PROGRAM
      </div>
      <div className="flex flex-col gap-8 sm:mx-auto sm:w-[1024px] sm:gap-16">
        <div className="program1 relative flex items-center gap-4">
          <div>
            <div className="relative w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-base-100 sm:w-[328px] sm:p-3 sm:text-2xl">
              {t('title1')}
            </div>
          </div>
          <div className="flex flex-1 items-center text-sm sm:text-xl">
            {t('description1')}
          </div>
          <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
        </div>
        <div className="program2 relative flex gap-4">
          <div>
            <div className="relative w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-base-100 sm:w-[328px] sm:p-3 sm:text-2xl">
              {t('title2')}
            </div>
          </div>
          <div className="flex flex-1 items-center text-sm sm:text-xl">
            {t('description2')}
          </div>
          <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
        </div>
        <div className="relative">
          <div className="program3 relative z-10 w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-base-100 sm:w-[328px] sm:p-3 sm:text-2xl">
            {t('title3')}
          </div>
          <Rotate className="rotate absolute bottom-[-98px] left-[70px] z-0 h-[140px] w-[140px] fill-base-content sm:bottom-[-202px] sm:left-[251px] sm:h-[280px] sm:w-[280px]" />
          <div
            data-aos-offset="-20"
            className="program4 absolute -bottom-[124px] left-[94px] z-10 w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-base-100 sm:-bottom-[234px] sm:left-[218px] sm:w-[328px] sm:min-w-[232px] sm:p-3 sm:text-2xl"
          >
            {t('title4')}
          </div>
          <div className="program5 absolute -bottom-[34px] left-[140px] z-10 min-w-[114px] rounded-2xl bg-primary p-2 text-center font-extrabold text-base-100 sm:-bottom-[74px] sm:left-[346px] sm:w-[328px] sm:p-3 sm:text-2xl">
            {t('title5')}
          </div>
        </div>
      </div>
    </div>
  );
}
