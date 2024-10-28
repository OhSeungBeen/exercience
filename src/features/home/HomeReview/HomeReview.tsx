import { useLocale, useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Locale } from '@prisma/client';

import HomeReviewCard from '@/features/home/HomeReview/HomeReviewCard.tsx';
import HomeReviewModal from '@/features/home/HomeReview/HomeReviewModal';

import { api } from '@/trpc/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeReview() {
  const t = useTranslations('home.review');

  const locale = useLocale();

  const { data: reviews } = api.reviews.getBestReviews.useQuery({
    isBest: true,
    locale: locale.toUpperCase() as Locale,
  });

  const HomeReviewModalRef = useRef<HTMLDialogElement>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  const onOpenReviewModal = (index: number) => {
    setActiveReviewIndex(index);
    HomeReviewModalRef.current?.showModal();
  };

  if (!reviews) {
    return null;
  }

  return (
    <Element
      name="review"
      className="bg-paper pt-[144px] sm:ml-[calc(-50vw+50%)] sm:w-screen"
    >
      <div className="flex flex-col justify-center gap-8">
        <div className="text-center text-2xl font-extrabold sm:text-4xl">
          BEST REVIEW
        </div>
        <div className="text-center font-semibold text-gray-500">
          {t('title')}
        </div>
        <Swiper
          slidesPerView={1}
          speed={1500}
          spaceBetween={30}
          loop
          centeredSlides
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          breakpoints={{
            '640': { slidesPerView: 2, centeredSlides: true },
            '768': { slidesPerView: 3, centeredSlides: true },
            '1024': { slidesPerView: 3, centeredSlides: true },
            '1280': { slidesPerView: 4, centeredSlides: true },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full !p-4"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={review.id}
              onClick={() => onOpenReviewModal(index)}
            >
              <HomeReviewCard
                title={review.title}
                writer={review.writer}
                content={review.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {reviews[activeReviewIndex] && (
          <HomeReviewModal
            ref={HomeReviewModalRef}
            title={reviews[activeReviewIndex].title}
            writer={reviews[activeReviewIndex].writer}
            content={reviews[activeReviewIndex].content}
          />
        )}
      </div>
    </Element>
  );
}
