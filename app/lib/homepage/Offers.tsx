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
import FTSwiper from '~/app/ft-lib/Swiper';

interface OffersSectionProps {
  section: App.HomePageTemplate.OffersSection;
}

const Offers = ({ section }: OffersSectionProps) => {
  const fields = arrayToObject({ array: section.fields });

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
          <p className="section-heading ft-text-main md:text-3xl text-2xl">
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
        <FTSwiper
          navigation
          options={{
            spaceBetween: 10,
            slidesPerView: 1,
            breakpoints: {
              768: {
                spaceBetween: 20,
                slidesPerView: 3.5,
              },
            },
          }}
        >
          {fields?.offers_collection?.reference.products?.nodes?.map(
            (product: ProductQuery['product']) => {
              return (
                <Link
                  className="swiper-slide cursor-pointer"
                  key={product?.id} to={`/products/${product?.handle}`}
                  onClick={() => {
                    UseShopStore.setState({

                    })
                  }}
                >
                  {product?.images != null && (
                    <LazyImage
                      alt="product image"
                      className="object-fill rounded-3xl w-full"
                      src={resizeImage(product.images.nodes[0].url, 400)}
                    />
                  )}
                </Link>
              );
            },
          )}
        </FTSwiper>
      </div>
    </div>
  );
};

export default Offers;
