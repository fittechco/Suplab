import Link from '../components/Link';
import { Image, Money } from '@shopify/hydrogen';
import { Colors } from 'app/ft-lib/shared';
import React from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import resizeImage from '../ft-lib/resizeImages';
import LazyImage from '../ft-lib/LazyImage';

type Props = {
  product: ProductQuery['product'];
  style?: React.CSSProperties;
};

// https://cdn.shopify.com/s/files/1/0814/6046/1881/files/91KmDwHGHyL._AC_SL1500.jpg?v=1695242046&width=1000&crop=center
// The function will take image urls and width param then return the new url


export default function ProductCard(props: Props) {
  const { product } = props;
  if (product == null) {
    return null;
  }
  return (
    <Link
      routeLoader
      relative="path"
      to={`/products/${product.handle}`}
      style={{
        border: `1px solid rgb(240, 238, 232)`,
        borderRadius: 12,
        height: "fit-content",
        ...props.style,
      }}
      key={product.id}
      className="search-result-item flex flex-col gap-2"
    >
      <div
        style={{
          backgroundColor: Colors.offWhite,
          borderRadius: 12,
          overflow: 'hidden',
        }}
        className="md:h-[260px] h-[200px] w-full max-md:h-[200px] max-md:mx-auto"
      >
        <LazyImage
          style={{
            objectFit: 'cover',
            height: '100%',
            width: 'auto',
            margin: 'auto',
            // aspectRatio: "1/1",
            borderRadius: '24px',
          }}
          className=""
          src={resizeImage(product.images.nodes[0].url, 2000)}
        />
      </div>
      <div
        style={{
        }}
        className="flex flex-col p-1">
        <h3
          style={{
            color: Colors.secondaryDark,
            fontWeight: 400,
          }}
          className="text-base font-bold uppercase">
          {product.title}
        </h3>
        <Money
          style={{
            color: Colors.secondary,
          }}
          className="font-mainFont font-bold text-base"
          data={product.priceRange.minVariantPrice}
          // data={{
          //   amount: '100',
          //   currencyCode: 'USD',
          // }}
          withoutTrailingZeros
        />
      </div>
    </Link>
  );
}
