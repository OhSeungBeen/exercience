import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeProfile() {
  const t = useTranslations('home.profile');

  return (
    <Element
      name="profile"
      className="profile-container flex flex-col items-center justify-center gap-2 px-4 pb-20 pt-[144px]"
    >
      <div className="content translate-y-[200px] opacity-0">
        <div className="flex sm:w-[1024px]">
          <div className="flex flex-1 flex-col justify-end">
            <div className="profile-image relative z-10 aspect-[190/271] w-full">
              <Image src="/images/home/profile.png" alt="profile" fill />
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-start gap-2 sm:w-3/5 sm:gap-5">
            <div className="flex flex-1 justify-center">
              <div className="relative h-full border-x-[1px] border-primary">
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary sm:h-3 sm:w-3"></span>
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
        <div className="bg-#d12d31 flex gap-2 rounded-2xl bg-base-100 px-2 py-3 shadow-xl sm:px-6 sm:py-6">
          <div className="flex-1">
            <div className="mb-1 text-sm font-bold sm:text-xl">
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
            <div className="mb-1 text-sm font-bold sm:text-xl">
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
      </div>
    </Element>
  );
}
