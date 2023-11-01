import { AnalyticsEventName, CartForm, type ShopifyAddToCartPayload, getClientBrowserParameters, sendShopifyAnalytics, type ShopifyAnalyticsProduct } from '@shopify/hydrogen';
import type { CartLineInput } from '@shopify/hydrogen/storefront-api-types';
import React, { useEffect, useState } from 'react'
import { UseShopStore } from '../root';
import CTAButton from './CTAButton';
import type { ProductQuery } from '~/storefrontapi.generated';
import { type FetcherWithComponents } from '@remix-run/react';
import { usePageAnalytics } from '../utils';
import type { loader as cartLoader } from '~/app/routes/cart';
import { type SerializeFrom } from '@shopify/remix-oxygen';

type Props = {
  lines: CartLineInput[];
  className?: string;
  disabled?: boolean;
  analytics: {
    products: ShopifyAnalyticsProduct[];
    totalValue: number;
  };
  selectedVariant: NonNullable<ProductQuery['product']>['variants']['nodes'][0];
}

export default function AddToCartButton(props: Props) {
  const { selectedVariant, analytics } = props;

  return (
    <CartForm
      route="/cart"
      inputs={{
        lines: props.lines,
      }}
      action={CartForm.ACTIONS.LinesAdd}
    >
      {(fetcher: FetcherWithComponents<SerializeFrom<typeof cartLoader>>) => {

        return (
          <AddToCartAnalytics fetcher={fetcher}>
            <input
              type="hidden"
              name="analytics"
              value={JSON.stringify(analytics)}
            />
            <CTAButton
              className='flex items-center justify-center'
              disabled={
                !selectedVariant.availableForSale ??
                fetcher.state !== 'idle'
              }
              fullWidth
            >
              {fetcher.state !== 'idle' ? (
                <div className="lds-dual-ring lds-dual-ring-white !w-8 !h-8" />
              ) : selectedVariant?.availableForSale ? (
                'Add to cart'
              ) : (
                'Sold out'
              )}
            </CTAButton>
          </AddToCartAnalytics>
        );
      }}
    </CartForm>
  )
}

function AddToCartAnalytics({
  fetcher,
  children,
}: {
  fetcher: FetcherWithComponents<SerializeFrom<typeof cartLoader>>
  children: React.ReactNode;
}): JSX.Element {
  const fetcherData = fetcher.data;
  const formData = fetcher.formData;
  const pageAnalytics = usePageAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (fetcher.state !== 'idle' && isSubmitting === false) {
      setIsSubmitting(true)
    }
    if (fetcher.state === 'idle' && isSubmitting === true) {
      setIsSubmitting(false)
      UseShopStore.setState({ showCart: true })
    }
  }, [fetcher, isSubmitting])

  useEffect(() => {
    if (formData) {
      const cartData: Record<string, unknown> = {};
      const cartInputs = CartForm.getFormInput(formData);

      try {
        if (cartInputs.inputs.analytics) {
          const dataInForm: unknown = JSON.parse(
            String(cartInputs.inputs.analytics),
          );
          Object.assign(cartData, dataInForm);
        }
      } catch {
        // do nothing
      }

      if (Object.keys(cartData).length && fetcherData) {
        const addToCartPayload: ShopifyAddToCartPayload = {
          shopId: '',
          currency: 'USD',
          hasUserConsent: true,
          ...getClientBrowserParameters(),
          ...pageAnalytics,
          ...cartData,
          cartId: fetcherData.cart?.id || "",
        };

        console.log(addToCartPayload, "addToCartPayload");
        sendShopifyAnalytics({
          eventName: AnalyticsEventName.ADD_TO_CART,
          payload: addToCartPayload,
        });
      }
    }
  }, [fetcherData, formData, pageAnalytics]);
  return <>{children}</>;
}
