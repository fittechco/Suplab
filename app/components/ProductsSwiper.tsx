import { useEffect, useRef, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import _ from 'lodash';
import ProductSwiperSkeleton from '../lib/skeleton/ProductSwiperSkeleton';
import { useRootLoaderData } from '../root';
type Props = {
  products: ProductQuery['product'][] | null;
  title?: string;
};

export default function ProductsSwiper(props: Props) {
  const swiperContainer = useRef<HTMLDivElement | null>(null);
  const rootData = useRootLoaderData();
  const alignRight = rootData.locale.language === 'AR' ? true : false;

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      slidesPerView: 2,
      spaceBetween: 20,
      initialSlide: alignRight ? props.products?.length : 0,
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
  }, [alignRight, props.products]);

  if (props.products == null) {
    return <ProductSwiperSkeleton title={props.title} />;
  }

  return (
    <div className="space-y-4 w-full overflow-hidden">
      {props.title && (
        <div
          className={`flex ${alignRight ? 'arFlexDirection' : 'enFlexDirection'}`}
        >
          <h3
            className={`ft-text-main text-2xl container ${alignRight ? 'arTextAlignItems' : 'enTextAlignItems'
              }`}
          >
            {props.title}
          </h3>
        </div>
      )}
      <div ref={swiperContainer} className="swiper-container container">
        <div
          style={{
            flexDirection: alignRight ? 'row-reverse' : 'row',
            justifyContent: alignRight ? 'flex-end' : 'flex-start',
          }}
          className={`swiper-wrapper ${alignRight ? "flex-row-reverse justify-end" : "flex-row justify-start"}`}>
          {props.products.map((product, index) => {
            return (
              <div
                key={product?.id + (product?.handle || '') + product?.title}
                className="swiper-slide overflow-hidden"
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
