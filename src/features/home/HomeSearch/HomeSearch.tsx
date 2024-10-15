import { useTranslations } from 'next-intl';

export default function HomeSearch() {
  const t = useTranslations('home.search');

  return (
    <div className="relative flex aspect-square justify-center bg-home-check-list bg-cover bg-center sm:aspect-auto sm:h-[800px]">
      <div className="absolute inset-0 bg-white opacity-75" />
      <div className="z-10 flex flex-col items-center justify-center gap-2 p-2 sm:w-[1024px] sm:gap-8 sm:p-0">
        <div
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="800"
          className="text-center text-xl font-medium sm:text-5xl"
          dangerouslySetInnerHTML={{
            __html: t.raw('title') as string,
          }}
        />
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1500"
          data-aos-duration="800"
          className="text-2xl leading-3 text-[#666666] sm:text-4xl sm:leading-4"
        >
          ·
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="1800"
          data-aos-duration="1000"
          className="text-center text-base font-medium sm:text-2xl"
          dangerouslySetInnerHTML={{
            __html: t.raw('diseases') as string,
          }}
        />
      </div>
    </div>
  );
}
