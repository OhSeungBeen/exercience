import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';

export default function HomeTrainingProgram() {
  const [rotateOffset, setRotateOffset] = useState(200);
  const [reAssessmentOffset, SetReAssessmentOffset] = useState(200);
  const isXs = useMediaQuery({ maxWidth: 639 });

  useEffect(() => {
    setRotateOffset(isXs ? 200 : 400);
    SetReAssessmentOffset(isXs ? 140 : 280);
  }, [isXs]);

  useEffect(() => {
    AOS.refresh();
  }, [rotateOffset]);

  const t = useTranslations('home.trainingProgram');

  return (
    <div className="relative flex justify-center bg-cover bg-center p-2 pb-32 pt-20 sm:mx-auto sm:mt-0 sm:aspect-auto sm:w-[1024px] sm:flex-1 sm:bg-none sm:p-0 sm:pb-60 sm:pt-40">
      <div className="absolute inset-0 bg-white opacity-50 sm:hidden" />
      <div className="flex animate-fade-left flex-col justify-center gap-8 animate-delay-[1400ms] sm:gap-16 sm:p-0">
        <div className="text-center text-2xl font-extrabold sm:text-4xl">
          TRAINING PROGRAM
        </div>
        <div className="flex flex-col gap-8 sm:gap-16">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="800"
            data-aos-delay="500"
            className="relative flex items-center gap-4"
          >
            <div>
              <div className="relative w-[110px] rounded-2xl bg-primary p-1 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl">
                {t('title1')}
              </div>
            </div>
            <div className="flex flex-1 items-center text-xs sm:text-xl">
              {t('description1')}
            </div>
            <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl text-black sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="800"
            data-aos-delay="500"
            className="relative flex gap-4"
          >
            <div>
              <div className="relative w-[110px] rounded-2xl bg-primary p-1 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl">
                {t('title2')}
              </div>
            </div>
            <div className="flex flex-1 items-center text-xs sm:text-xl">
              {t('description2')}
            </div>
            <MdArrowDropDown className="absolute -bottom-8 left-[55px] -translate-x-1/2 text-4xl text-black sm:-bottom-14 sm:left-[160px] sm:text-5xl" />
          </div>
          <div className="relative">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out"
              data-aos-duration="800"
              data-aos-delay="500"
              className="relative z-10 w-[110px] rounded-2xl bg-primary p-1 text-center font-extrabold text-white sm:w-[328px] sm:p-3 sm:text-2xl"
            >
              {t('title3')}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset={rotateOffset}
              className="absolute bottom-[-98px] left-[67px] z-0 h-[140px] w-[140px] sm:bottom-[-202px] sm:left-[251px] sm:h-[280px] sm:w-[280px]"
            >
              <Image src="/images/home/rotate.png" alt="rotate" fill />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset="-20"
              className="absolute -bottom-[118px] left-[94px] z-10 w-[110px] rounded-2xl bg-primary p-1 text-center font-extrabold text-white sm:-bottom-[234px] sm:left-[218px] sm:w-[328px] sm:min-w-[232px] sm:p-3 sm:text-2xl"
            >
              {t('title4')}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset={reAssessmentOffset}
              className="absolute left-[140px] z-10 min-w-[110px] rounded-2xl bg-primary p-1 text-center font-extrabold text-white sm:left-[346px] sm:w-[328px] sm:p-3 sm:text-2xl"
            >
              {t('title5')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
