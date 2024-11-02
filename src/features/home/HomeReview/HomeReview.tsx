'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGSAP } from '@gsap/react';
import { type Locale } from '@prisma/client';

import HomeReviewCard from '@/features/home/HomeReview/HomeReviewCard.tsx';
import HomeReviewCardSkelton from '@/features/home/HomeReview/HomeReviewCardSkelton.tsx';
import HomeReviewModal from '@/features/home/HomeReview/HomeReviewModal';

import { api } from '@/trpc/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function HomeReview() {
  const t = useTranslations('home.review');

  const locale = useLocale();

  const { data: reviews, isLoading: isLoadingReviews } =
    api.reviews.getBestReviews.useQuery({
      isBest: true,
      locale: locale.toUpperCase() as Locale,
    });

  const HomeReviewModalRef = useRef<HTMLDialogElement>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  const onOpenReviewModal = (index: number) => {
    setActiveReviewIndex(index);
    HomeReviewModalRef.current?.showModal();
  };

  const container = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.review-container',
          start: 'top top',
          end: '+=' + window.innerHeight * 2,
          scrub: true,
          anticipatePin: 1,
          pin: true,
          pinSpacing: true,
        },
      })
      .from('.review-container .title', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.review-container .description', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      })
      .from('.review-container .reviews', {
        autoAlpha: 0,
        duration: 1,
        y: 50,
      });
  });

  return (
    <div ref={container}>
      <Element
        name="review"
        className="review-container bg-paper h-full min-h-screen pt-[144px]"
      >
        <div className="flex flex-col justify-center gap-8">
          <div className="title text-center text-2xl font-extrabold sm:text-4xl">
            BEST REVIEW
          </div>
          <div className="description text-center font-semibold text-gray-500">
            {t('description')}
          </div>
          <Swiper
            slidesPerView={1}
            speed={1500}
            spaceBetween={30}
            loop
            centeredSlides
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              '640': { slidesPerView: 2, centeredSlides: false },
              '768': { slidesPerView: 2, centeredSlides: false },
              '1024': { slidesPerView: 3, centeredSlides: true },
              '1280': { slidesPerView: 4, centeredSlides: true },
            }}
            modules={[Pagination, Autoplay]}
            className="reviews w-full !p-4"
          >
            {isLoadingReviews ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <HomeReviewCardSkelton />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              reviews?.map((review, index) => (
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
              ))
            )}
          </Swiper>
        </div>
        {reviews?.[activeReviewIndex] && (
          <HomeReviewModal
            ref={HomeReviewModalRef}
            title={reviews[activeReviewIndex].title}
            writer={reviews[activeReviewIndex].writer}
            content={reviews[activeReviewIndex].content}
          />
        )}
      </Element>
    </div>
  );
}
