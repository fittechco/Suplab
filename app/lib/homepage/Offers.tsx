import { useEffect, useState, useRef } from 'react';
import type { App } from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { Colors } from 'app/ft-lib/shared';
import { Navigation } from 'swiper/modules';
import type { ProductQuery } from '~/storefrontapi.generated';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { UseShopStore } from '~/app/root';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';

interface OffersSectionProps {
  section: App.HomePageTemplate.OffersSection;
}

const Offers = ({ section }: OffersSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const swiperContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 20,
      slidesPerView: 1.05,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 2.5,
        },
      },
      modules: [Navigation],
    });

    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, []);

  if (fields.offers_collection == null) {
    return null;
  }

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="offersSection w-full !container mx-auto"
    >
      <div className="flex items-center justify-between mb-10">
        {fields.title != null && fields.offers != null && (
          <p className="ft-text-main md:text-3xl text-2xl">
            {fields.title.value}
          </p>
        )}
        {fields.button_text != null && (
          <Link
            style={{
              backgroundColor: Colors.primary,
              color: Colors.textSecondary,
            }}
            to={`/collections/offers`}
            className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
          >
            {fields.button_text.value}
          </Link>
        )}
      </div>
      <div className="offersSection__offers relative">
        <div ref={swiperContainer} className="swiper-container">
          <div className="swiper-wrapper">
            {fields?.offers_collection?.reference.products?.nodes?.map(
              (product: ProductQuery['product']) => {
                return (
                  <Link
                    className="swiper-slide cursor-pointer w-fit h-fit"
                    key={product?.id} to={`/products/${product?.handle}`}
                    onClick={() => {
                      UseShopStore.setState({

                      })
                    }}
                  >
                    {product?.images != null && (
                      <LazyImage
                        className="object-fill rounded-3xl"
                        src={resizeImage(product.images.nodes[0].url, 400)}
                      />
                    )}
                  </Link>
                );
              },
            )}
          </div>
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/1.5 md:hidden flex"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/1.5 md:hidden flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
