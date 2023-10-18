import { Money, CartForm } from '@shopify/hydrogen';
import Accordion from 'app/components/Accordion';
import CTAButton from 'app/components/CTAButton';
import Quantity from 'app/components/Quantity';
import { Colors } from 'app/ft-lib/shared';
import { UseShopStore } from 'app/root';
import { useEffect, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import ProductOptions from './ProductOptions';

type Props = {
  selectedVariant: NonNullable<ProductQuery['product']>['variants']['nodes'][0];
  product: NonNullable<ProductQuery['product']>;
  isTop?: boolean;
};

export default function ProductForm(props: Props) {
  const { product, selectedVariant } = props;
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        <CartForm
          route="/cart"
          inputs={{
            lines: [
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
            ],
          }}
          action={CartForm.ACTIONS.LinesAdd}
        >
          {(fetcher) => {

            if (fetcher.state !== 'idle') {
              setIsSubmitting(true)
            }
            if (fetcher.state === "idle" && isSubmitting === true) {
              UseShopStore.setState({ showCart: true })
              setIsSubmitting(false)
            }
            return (
              <CTAButton
                className='flex items-center justify-center'
                disabled={
                  !selectedVariant.availableForSale ??
                  fetcher.state !== 'idle'
                }
                fullWidth
              >
                {fetcher.state !== 'idle' ? (
                  <div className="lds-dual-ring lds-dual-ring-white !w-8 !h-8"></div>
                ) : selectedVariant?.availableForSale ? (
                  'Add to cart'
                ) : (
                  'Sold out'
                )}
              </CTAButton>
            );
          }}
        </CartForm>
      </div>
      <Accordion title="Shipping Info" details={'Shipping info goes here'} />
    </div>
  );
}