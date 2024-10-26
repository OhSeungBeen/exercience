import { Element } from 'react-scroll';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import HomeReviewCard from '@/features/home/HomeReview/HomeReviewCard.tsx';

import { api } from '@/trpc/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeReview() {
  const { data: reviews } = api.reviews.getBestReviews.useQuery({
    isBest: true,
  });

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
          실제 회원분들이 작성해주신 진정성 있는 후기입니다.
        </div>
        <Swiper
          slidesPerView={1}
          speed={2000}
          spaceBetween={30}
          loop
          centeredSlides
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            '640': { slidesPerView: 2 },
            '768': { slidesPerView: 3 },
            '1024': { slidesPerView: 3 },
            '1280': { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full !p-4"
        >
          {reviews?.map((review) => (
            <SwiperSlide
              key={review.id}
              className="!h-auto cursor-pointer hover:!-translate-y-2"
            >
              <HomeReviewCard
                title={review.title}
                name={review.name}
                content={review.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Element>
  );
}
