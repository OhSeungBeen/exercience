import { useTranslations } from 'next-intl';

export default function HomeExercience() {
  const t = useTranslations('home.exercience');

  return (
    <div className="relative flex aspect-square justify-center bg-home-running bg-cover bg-center sm:ml-[calc(-50vw+50%)] sm:aspect-auto sm:h-[420px] sm:w-screen">
      <div className="absolute inset-0 bg-primary opacity-80" />
      {/* item2 */}
      <div
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="800"
        className="z-10 flex flex-col justify-center gap-5 p-2 sm:w-[1024px] sm:p-0"
      >
        <div className="text-center text-xl font-extrabold text-white sm:text-3xl">
          &nbsp;&nbsp;exer&nbsp;&nbsp; ┈┈┈▸
          <span className="text-2xl sm:text-4xl"> Exercise</span>
        </div>
        <div className="text-center text-xl font-extrabold text-white sm:text-3xl">
          cience ┈┈┈▸
          <span className="text-2xl sm:text-4xl"> Science</span>
        </div>
        <div
          className="text-center text-2xl font-medium text-white sm:text-3xl"
          dangerouslySetInnerHTML={{
            __html: t.raw('title') as string,
          }}
        />
      </div>
    </div>
  );
}
