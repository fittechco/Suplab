import { Money, CartForm, type ShopifyAnalyticsProduct } from '@shopify/hydrogen';
import Accordion from 'app/components/Accordion';
import CTAButton from 'app/components/CTAButton';
import Quantity from 'app/components/Quantity';
import { Colors } from 'app/ft-lib/shared';
import { UseShopStore } from 'app/root';
import { useEffect, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import ProductOptions from './ProductOptions';
import AddToCartButton from '~/app/components/AddToCartButton';

type Props = {
  selectedVariant: NonNullable<ProductQuery['product']>['variants']['nodes'][0];
  product: NonNullable<ProductQuery['product']>;
  isTop?: boolean;
  analytics: {
    products: ShopifyAnalyticsProduct[];
    totalValue: number;
  };
};

export default function ProductForm(props: Props) {
  const { product, selectedVariant, analytics } = props;
  const [quantity, setQuantity] = useState(1);
  const productAnalytics: ShopifyAnalyticsProduct = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <div className="product-form flex flex-col gap-5 w-full">
      <span
        style={{
          backgroundColor: Colors.secondaryLight,
          color: Colors.textSecondary,
        }}
        className="p-1 text-sm w-fit rounded-md"
      >
        {product.vendor}
      </span>
      <div>
        <div className="product-title">
          <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
        </div>
        <div className="product-price">
          <Money
            data={product.priceRange.minVariantPrice}
            className="text-xl md:text-2xl font-bold"
          />
        </div>
      </div>
      <ProductOptions
        selectedVariant={selectedVariant}
        options={product.options}
      />
      <Quantity
        onChange={(value) => {
          setQuantity(value);
        }}
        max={selectedVariant.quantityAvailable}
        value={quantity}
      />
      <div className="flex items-center w-full max-md:bottom-9 max-md:sticky">
        <AddToCartButton
          analytics={{
            products: [productAnalytics],
            totalValue: analytics.totalValue,
          }}
          selectedVariant={selectedVariant}
          className="w-full"
          lines={[
            {
              merchandiseId: selectedVariant.id,
              quantity,
              attributes: selectedVariant.selectedOptions.map((option) => {
                return {
                  key: option.name,
                  value: option.value,
                };
              }),
            },
          ]}
        />
      </div>
      <Accordion
        title="Shipping Info"
        details={`Shipping is same day inside Beirut and 
        Outside Beirut shipping takes 2-3 days.
        100$ and above free delivery`} />
    </div>
  );
}