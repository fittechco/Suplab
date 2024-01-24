import Link from '../components/Link';
import {Image, Money} from '@shopify/hydrogen';
import {Colors} from 'app/ft-lib/shared';
import React from 'react';
import type {ProductQuery} from 'storefrontapi.generated';
import resizeImage from '../ft-lib/resizeImages';
import LazyImage from '../ft-lib/LazyImage';
import invariant from 'tiny-invariant';
import ProductSkeleton from '../lib/skeleton/ProductSkeleton';
import {useRootLoaderData} from '../root';
import {RemixLink} from './RemixLink';

type Props = {
  product: ProductQuery['product'];
  // product: App.CollectionPageTemplate.ProductCard;
  style?: React.CSSProperties;
};

// https://cdn.shopify.com/s/files/1/0814/6046/1881/files/91KmDwHGHyL._AC_SL1500.jpg?v=1695242046&width=1000&crop=center
// The function will take image urls and width param then return the new url

export default function ProductCard(props: Props) {
  const {product} = props;
  let isDiscounted = false;

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const ar = locale.language.toLowerCase() === 'ar' ? locale : '';

  if (product == null) {
    return <ProductSkeleton />;
  }
  if (product.variants.nodes.length > 0) {
    const productFirstVariant = product.variants.nodes[0];
    if (
      productFirstVariant.compareAtPrice != null &&
      productFirstVariant.price != null
    ) {
      isDiscounted =
        productFirstVariant.compareAtPrice.amount >
        productFirstVariant.price.amount;
    }
  }

  return (
    <RemixLink
      relative="path"
      to={`/products/${product.handle}`}
      style={{
        border: `1px solid rgb(240, 238, 232)`,
        borderRadius: 12,
        height: 'fit-content',
        ...props.style,
      }}
      key={product.id}
      // className="search-result-item flex flex-col gap-2"
      className="search-result-item flex flex-col gap-2 h-[300px]"
    >
      <div
        style={{
          backgroundColor: Colors.offWhite,
          borderRadius: 12,
          overflow: 'hidden',
        }}
        className="md:h-[260px] h-[200px] w-full max-md:h-[200px] max-md:mx-auto relative"
      >
        <LazyImage
          alt={product.title}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: 'auto',
            margin: 'auto',
            // aspectRatio: "1/1",
            borderRadius: '24px',
          }}
          className=""
          src={resizeImage(product.images.nodes[0].url, 1000)}
        />
        {isDiscounted === true && (
          <div
            style={{
              backgroundColor: Colors.primary,
              color: Colors.offWhite,
              borderRadius: 9999,
            }}
            className="discount-badge text-sm absolute top-0 left-0 m-2 px-2 py-1.5 z-50"
          >
            Sale
          </div>
        )}
      </div>
      <div className={`flex flex-col p-1`}>
        <h3
          style={{
            color: Colors.secondaryDark,
            fontWeight: 400,
          }}
          className={`text-base font-bold uppercase ${
            isArabic ? 'arTextAlignItems' : 'enTextAlignItems'
          }`}
        >
          {product.title}
        </h3>
        <div
          className={`money flex gap-3 ${
            isArabic ? 'arFlexDirection' : 'enFlexDirection'
          }`}
        >
          <Money
            style={{
              color: Colors.secondary,
            }}
            className={`font-mainFont font-bold text-base `}
            data={product.priceRange.minVariantPrice}
            withoutTrailingZeros
          />
          {isDiscounted && product.variants.nodes[0].compareAtPrice != null && (
            <Money
              style={{
                color: Colors.secondaryDark,
              }}
              className={`font-mainFont font-bold text-base line-through opacity-50 `}
              data={product.variants.nodes[0].compareAtPrice}
              // data={{
              //   amount: '100',
              //   currencyCode: 'USD',
              // }}
              withoutTrailingZeros
            />
          )}
        </div>
      </div>
    </RemixLink>
  );
}
