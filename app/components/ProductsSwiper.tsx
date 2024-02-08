// import {useEffect, useRef, useState} from 'react';
// import type {ProductQuery} from 'storefrontapi.generated';
// import ProductCard from './ProductCard';
// import Swiper from 'swiper';
// import 'swiper/css/scrollbar';
// import {Scrollbar, Mousewheel, FreeMode} from 'swiper/modules';
// import _ from 'lodash';
// import ProductSwiperSkeleton from '../lib/skeleton/ProductSwiperSkeleton';
// import {useRootLoaderData} from '../root';
// type Props = {
//   products: ProductQuery['product'][] | null;
//   title?: string;
// };

// export default function ProductsSwiper(props: Props) {
//   const swiperContainer = useRef<
//     | (HTMLDivElement & {
//         swiper?: Swiper;
//       })
//     | null
//   >(null);
//   const rootData = useRootLoaderData();
//   const alignRight = rootData.locale.language === 'AR' ? true : false;

//   useEffect(() => {
//     if (swiperContainer.current == null) {
//       return;
//     }
//     const swiper = new Swiper(swiperContainer.current, {
//       slidesPerView: 2,
//       spaceBetween: 20,
//       // initialSlide: 0,
//       initialSlide: alignRight ? props.products?.length : 0,
//       modules: [Scrollbar, Mousewheel, FreeMode],
//       mousewheel: {
//         releaseOnEdges: true,
//       },
//       touchReleaseOnEdges: true,
//       freeMode: true,
//       breakpoints: {
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 20,
//         },
//       },
//     });

//     return () => {
//       if (swiper != null) {
//         swiper.destroy();
//       }
//     };
//     // }, [props.products]);
//   }, [alignRight, props.products]);

//   if (props.products == null) {
//     return <ProductSwiperSkeleton title={props.title} />;
//   }

//   return (
//     <div className="space-y-4 w-full">
//       {/* <div className="space-y-4 w-full overflow-hidden"> */}
//       {props.title && (
//         <div
//           className="flex"
//           // className={`flex ${
//           //   alignRight ? 'arFlexDirection' : 'enFlexDirection'
//           // }`}
//         >
//           <h3
//             className="ft-text-main text-2xl container"
//             // className={`ft-text-main text-2xl container ${
//             //   alignRight ? 'arTextAlignItems' : 'enTextAlignItems'
//             // }`}
//           >
//             {props.title}
//           </h3>
//         </div>
//       )}
//       <div ref={swiperContainer} className="swiper-container container">
//         <div
//           style={
//             {
//               // flexDirection: alignRight ? 'row-reverse' : 'row-reverse',
//               // justifyContent: alignRight ? 'flex-start' : 'flex-end',
//             }
//           }
//           // className="swiper-wrapper"
//           dir='ltr'
//           // dir={alignRight ? 'rtl' : 'ltr'}
//           className={`swiper-wrapper ${
//             alignRight ? 'flex-row-reverse justify-start' : 'justify-start'
//           }`}
//         >
//           {props.products.map((product, index) => {
//             return (
//               <div
//                 key={product?.id + (product?.handle || '') + product?.title}
//                 className="swiper-slide"
//                 // className="swiper-slide overflow-hidden"
//               >
//                 <ProductCard product={product} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import {useEffect, useRef} from 'react';
import type {ProductQuery} from 'storefrontapi.generated';
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import {Scrollbar, Mousewheel, FreeMode, Navigation} from 'swiper/modules';
import ProductSwiperSkeleton from '../lib/skeleton/ProductSwiperSkeleton';
import {useRootLoaderData} from '../root';
import FTicons from '../ft-lib/FTicon';

type Props = {
  products: ProductQuery['product'][] | null;
  title?: string;
};

export default function ProductsSwiper(props: Props) {
  const swiperContainer = useRef<
    | (HTMLDivElement & {
        swiper?: Swiper;
      })
    | null
  >(null);
  const nextElRef = useRef<HTMLDivElement | null>(null);
  const prevElRef = useRef<HTMLDivElement | null>(null);
  const {locale} = useRootLoaderData();
  const isArabic = locale.language.toLowerCase() === 'ar';

  useEffect(() => {
    if (!swiperContainer.current) return;

    const swiper = new Swiper(swiperContainer.current, {
      modules: [Navigation, Scrollbar, Mousewheel, FreeMode],
      navigation: {
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
      },
      slidesPerView: 2,
      spaceBetween: 20,
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
    });

    return () => swiper.destroy();
  }, [props.products, isArabic]);

  const swiperSlides = props.products?.length || 0;
  const slidesPerView = 2;

  if (!props.products) {
    return <ProductSwiperSkeleton title={props.title} />;
  }

  return (
    <div className="space-y-4 w-full overflow-hidden">
      {props.title && (
        <div className="flex">
          <h3 className="ft-text-main text-2xl container">{props.title}</h3>
        </div>
      )}
      <div
        ref={swiperContainer}
        dir={isArabic ? 'rtl' : 'ltr'}
        className="swiper-container container relative"
      >
        <div className="swiper-wrapper">
          {props.products.map((product) => (
            <div
              key={product?.id + (product?.handle || '') + product?.title}
              className="swiper-slide overflow-hidden"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <>
          <div
            style={{
              opacity: 0.5,
              display: swiperSlides <= slidesPerView ? 'none' : 'block',
            }}
            ref={prevElRef}
            onClick={() => swiperContainer.current?.swiper?.slidePrev()}
            className={`swiper-button absolute ${
              isArabic ? 'right-5' : 'left-5'
            } top-1/2 transform -translate-y-1/2 md:hidden z-10`}
          >
            {isArabic ? (
              <FTicons icon="chev-right" className="w-8 h-8" />
            ) : (
              <FTicons icon="chev-left" className="w-8 h-8" />
            )}
          </div>
          <div
            ref={nextElRef}
            style={{
              display: swiperSlides <= slidesPerView ? 'none' : 'block',
            }}
            onClick={() => swiperContainer.current?.swiper?.slideNext()}
            className={`swiper-button absolute ${
              isArabic ? 'left-5' : 'right-5'
            } top-1/2 transform -translate-y-1/2 md:hidden z-10 `}
          >
            {isArabic ? (
              <FTicons icon="chev-left" className="w-8 h-8" />
            ) : (
              <FTicons icon="chev-right" className="w-8 h-8" />
            )}
          </div>
        </>
      </div>
    </div>
  );
}
