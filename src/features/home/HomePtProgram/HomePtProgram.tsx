import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';

export default function HomePtProgram() {
  const t = useTranslations('home.ptProgram');

  return (
    <Element
      name="program"
      className="element p-2 pt-20 sm:relative sm:mx-auto sm:w-[1024px] sm:bg-cover sm:bg-center sm:p-0 sm:pt-40"
    >
      <div className="relative flex justify-center bg-cover bg-center sm:mt-0 sm:aspect-auto sm:flex-1 sm:bg-none">
        <div className="absolute inset-0 bg-white opacity-50 sm:hidden" />
        <div className="z-10 flex flex-col justify-center gap-8 sm:gap-16 sm:p-0">
          <div className="text-center text-2xl font-extrabold sm:text-4xl">
            1:1 PT PROGRAMS
          </div>
          <div className="flex flex-col gap-8 sm:gap-14">
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="800"
              className="flex gap-3"
            >
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
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="800"
              className="flex gap-3"
            >
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
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="800"
              className="flex gap-3"
            >
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
        </div>
      </div>
    </Element>
  );
}
