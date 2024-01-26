import { useEffect, useRef, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import FTicons from './FTicon';
import type { SwiperOptions } from 'swiper/types/swiper-options';
import invariant from 'tiny-invariant';
import type { Except } from 'type-fest';
import { useRootLoaderData } from '../root';

export type FTSwiperOptions = Except<SwiperOptions, 'breakpoints'> & {
  breakpoints?: {
    768: SwiperOptions;
    1024: SwiperOptions;
  };
};

type Props = {
  children?: React.ReactNode;
  options?: FTSwiperOptions;
  navigation?: boolean;
  childrenNumber?: number;
};


export default function FTSwiper(props: Props) {
  const swiperContainer = useRef<
    | (HTMLDivElement & {
      swiper?: Swiper;
    })
    | null
  >(null);
  const nextElRef = useRef<HTMLDivElement | null>(null);
  const prevElRef = useRef<HTMLDivElement | null>(null);
  const rootData = useRootLoaderData();
  const alignRight = rootData.locale.language === 'AR' ? true : false;

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      modules: [Navigation],
      initialSlide: alignRight ? props.childrenNumber : 0,
      on: {
        activeIndexChange(swiper) {
          if (swiper?.slides.length == null) {
            return;
          }
          if (swiper.activeIndex === swiper.slides.length - 1) {
            nextElRef.current?.style.setProperty('opacity', '0.5');
          } else {
            nextElRef.current?.style.setProperty('opacity', '1');
          }
          if (swiper.activeIndex === 0) {
            prevElRef.current?.style.setProperty('opacity', '0.5');
          } else {
            prevElRef.current?.style.setProperty('opacity', '1');
          }
        },
      },
      ...props.options,
    });
    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, [alignRight, props.childrenNumber, props.options]);
  const [breakPointSLidePerView, setBreakPointSLidePerView] = useState(
    props.options?.slidesPerView,
  );
  const swiperSlides = swiperContainer.current?.swiper?.slides.length ?? 0;
  const slidesPerView =
    breakPointSLidePerView != 'auto' ? breakPointSLidePerView : null;
  useEffect(() => {
    if (swiperContainer.current?.swiper == null) {
      return;
    }
    if (slidesPerView == null) {
      return;
    }
    // based on the screen size we need to use the breakpoints to set the slidesPerView
    const breakPointResize = () => {
      if (window.innerWidth > 1024) {
        setBreakPointSLidePerView(
          props.options?.breakpoints?.[1024]?.slidesPerView ||
          props.options?.slidesPerView,
        );
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setBreakPointSLidePerView(
          props.options?.breakpoints?.[768]?.slidesPerView ||
          props.options?.slidesPerView,
        );
      } else {
        setBreakPointSLidePerView(props.options?.slidesPerView);
      }
    };
    window.addEventListener('resize', breakPointResize);
    breakPointResize();
    return () => {
      window.removeEventListener('resize', breakPointResize);
    };
  }, [props.options?.breakpoints, props.options?.slidesPerView, slidesPerView]);

  invariant(slidesPerView != null, 'slidesPerView is null');

  return (
    <div ref={swiperContainer} className="swiper-container relative">
      <div className={`swiper-wrapper ${alignRight ? "flex-row-reverse justify-end" : "flex-row justify-start"}`}>
        {props.children}
      </div>
      {props.navigation === true && (
        <>
          <div
            style={{
              opacity: 0.5,
              display: swiperSlides <= slidesPerView ? 'none' : 'block',
            }}
            ref={prevElRef}
            onClick={() => swiperContainer.current?.swiper?.slidePrev()}
            className={`swiper-button absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden z-10`}
          >
            <FTicons icon="chev-left" className="w-8 h-8" />
          </div>
          <div
            ref={nextElRef}
            style={{
              display: swiperSlides <= slidesPerView ? 'none' : 'block',
            }}
            onClick={() => swiperContainer.current?.swiper?.slideNext()}
            className={`swiper-button absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden z-10 `}
          >
            <FTicons icon="chev-right" className="w-8 h-8" />
          </div>
        </>
      )}
    </div>
  );
}
