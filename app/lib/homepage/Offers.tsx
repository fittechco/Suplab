import type { App } from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import { Colors } from 'app/ft-lib/shared';
import type { ProductQuery } from '~/storefrontapi.generated';
import { Link } from 'react-router-dom';
import { UseShopStore, useRootLoaderData } from '~/app/root';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import FTSwiper, { type FTSwiperOptions } from '~/app/ft-lib/Swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { useParams } from '@remix-run/react';

type Props = {
  section: App.HomePageTemplate.OffersSection;
  swiperOptions: FTSwiperOptions;
};

const Offers = (props: Props) => {
  const { section, swiperOptions } = props;
  const fields = arrayToObject({ array: section.fields });

  const rootData = useRootLoaderData();
  const { locale } = rootData;
  const alignRight = rootData.locale.language === 'AR' ? true : false;

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
      <div
        className={`flex items-center justify-between mb-10 ${alignRight ? 'arFlexDirection' : 'enFlexDirection'
          }`}
      >
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
            to={`collections/offers`}
            className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
          >
            {fields.button_text.value}
          </Link>
        )}
      </div>
      <div className="offersSection__offers relative">
        <FTSwiper
          childrenNumber={fields?.offers_collection?.reference.products?.nodes?.length}
          navigation
          options={{
            ...swiperOptions,
          }}
        >
          {fields?.offers_collection?.reference.products?.nodes?.map(
            (product: ProductQuery['product']) => {
              return (
                <Link
                  className="swiper-slide cursor-pointer"
                  key={product?.id}
                  to={`products/${product?.handle}`}
                  onClick={() => {
                    UseShopStore.setState({});
                  }}
                >
                  {product?.images != null && (
                    <LazyImage
                      alt="product image"
                      className="rounded-3xl w-full aspect-[1.2] object-cover"
                      src={resizeImage(product.images.nodes[0].url, 500)}
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
