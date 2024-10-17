import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';

export default function HomeProfile() {
  const t = useTranslations('home.profile');

  return (
    <Element
      id="profile"
      name="profile"
      className="flex flex-col justify-center gap-2 p-2 pt-20 sm:mx-auto sm:p-0 sm:pb-28 sm:pt-40"
    >
      <div className="flex">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          data-aos-delay="500"
          className="flex flex-1 flex-col justify-end"
        >
          <div className="relative z-10 aspect-[190/271] w-full sm:h-[542px] sm:w-[380px]">
            <Image src="/images/home/profile.png" alt="profile" fill />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          data-aos-delay="500"
          className="flex flex-1 flex-col justify-start gap-2 sm:gap-5"
        >
          <div className="flex flex-1 justify-center">
            <div className="relative h-full border-x-[1px] border-primary">
              <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"></span>
            </div>
          </div>
          <div className="flex flex-[2_2_0%] flex-col items-center justify-start gap-2 sm:gap-8">
            <div
              className="text-center text-lg font-bold sm:text-3xl"
              dangerouslySetInnerHTML={{
                __html: t.raw('title') as HTMLElement,
              }}
            />
            <div className="flex justify-center">
              <div className="relative inline-block text-center text-base font-medium before:absolute before:-top-[2px] before:left-1/2 before:h-1 before:w-1/2 before:-translate-x-1/2 before:bg-primary sm:text-xl sm:before:-top-[10px] sm:before:h-2">
                {t('job')}
              </div>
            </div>
            <div className="text-center text-lg font-bold sm:text-2xl">
              {t('name')}
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out"
        data-aos-duration="800"
        data-aos-delay="500"
        className="flex gap-2 rounded-2xl bg-[#F7DCDC] px-2 py-3 sm:px-6 sm:py-6"
      >
        <div className="flex-1">
          <div className="text-sm font-bold sm:text-xl">
            {t('educationHistory.title')}
          </div>
          <ul className="text-xs sm:text-sm">
            <li>· {t('educationHistory.history1')}</li>
            <li>· {t('educationHistory.history2')}</li>
            <li>· {t('educationHistory.history3')}</li>
            <li>· {t('educationHistory.history4')}</li>
            <li>· {t('educationHistory.history5')}</li>
            <li>· {t('educationHistory.history6')}</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold sm:text-xl">
            {t('workHistory.title')}
          </div>
          <ul className="text-xs sm:text-sm">
            <li>· {t('workHistory.history1')}</li>
            <li>· {t('workHistory.history2')}</li>
            <li>· {t('workHistory.history3')}</li>
            <li>· {t('workHistory.history4')}</li>
            <li>· {t('workHistory.history5')}</li>
            <li>· {t('workHistory.history6')}</li>
            <li>· {t('workHistory.history7')}</li>
          </ul>
        </div>
      </div>
    </Element>
  );
}
