import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';

export default function HomeProfile() {
  const t = useTranslations('home.profile');

  return (
    <Element
      id="profile"
      name="profile"
      className="flex flex-col items-center justify-center gap-2 p-2 pt-20 sm:mx-auto sm:w-[1024px] sm:p-0 sm:pb-28 sm:pt-40"
    >
      <div className="relative flex">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          data-aos-delay="500"
          className="absolute left-0 top-0 z-10 h-[271px] w-[190px] sm:h-[542px] sm:w-full sm:max-w-[380px]"
        >
          <Image src="/images/home/profile.png" alt="profile" fill />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          data-aos-delay="500"
          className="flex h-[272px] flex-col justify-center gap-2 pl-[190px] sm:h-[230px] sm:gap-6 sm:pl-[350px]"
        >
          <div
            className="text-center text-lg font-bold sm:text-3xl"
            dangerouslySetInnerHTML={{ __html: t.raw('title') as HTMLElement }}
          ></div>
          <div className="text-center text-base font-medium sm:text-xl">
            {t('job')}
          </div>
          <div className="text-center text-lg font-bold sm:text-2xl">
            {t('name')}
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out"
        data-aos-duration="800"
        data-aos-delay="500"
        className="-mt-4 flex gap-2 rounded-2xl bg-[#F7DCDC] px-2 py-3 sm:ml-[350px] sm:px-5 sm:py-6"
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
