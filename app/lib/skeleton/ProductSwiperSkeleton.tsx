import _ from 'lodash';
import React, {useEffect, useRef} from 'react';
import Swiper from 'swiper';
import {Scrollbar, Mousewheel, FreeMode} from 'swiper/modules';
import ProductSkeleton from './ProductSkeleton';

type Props = {
  title?: string;
};

export default function ProductSwiperSkeleton(props: Props) {
  const swiperContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      slidesPerView: 2,
      spaceBetween: 20,
      modules: [Scrollbar, Mousewheel, FreeMode],
      mousewheel: {
        releaseOnEdges: true,
      },
      touchReleaseOnEdges: true,
      freeMode: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="space-y-4">
      {props.title && (
        <h3 className="ft-text-main text-2xl  container">{props.title}</h3>
      )}
      <div
        ref={swiperContainer}
        className="swiper-container overflow-hidden container"
      >
        <div className="swiper-wrapper">
          {/* this is a skeleton, with lodash we will have an array of 6 iterations */}
          {_.times(6, (index) => {
            return (
              <div key={index} className="swiper-slide overflow-hidden">
                <ProductSkeleton />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
