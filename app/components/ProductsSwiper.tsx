import { useEffect, useRef, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import _ from 'lodash';
import ProductSkeleton from '../lib/skeleton/ProductSkeleton';
import ProductSwiperSkeleton from '../lib/skeleton/ProductSwiperSkeleton';
type Props = {
  products: ProductQuery['product'][] | null;
  title?: string;
};

export default function ProductsSwiper(props: Props) {
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
  }, [props.products]);

  if (props.products == null) {
    return (
      <ProductSwiperSkeleton title={props.title} />
    )
  }

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
          {props.products.map((product, index) => {
            return (
              <div key={product?.id + (product?.handle || "") + product?.title} className="swiper-slide overflow-hidden">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
