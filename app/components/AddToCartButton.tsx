import { AnalyticsEventName, CartForm, type ShopifyAddToCartPayload, getClientBrowserParameters, sendShopifyAnalytics, type ShopifyAnalyticsProduct } from '@shopify/hydrogen';
import type { CartLineInput } from '@shopify/hydrogen/storefront-api-types';
import React, { useEffect, useState } from 'react'
import { UseShopStore } from '../root';
import CTAButton from './CTAButton';
import type { ProductQuery } from '~/storefrontapi.generated';
import { type FetcherWithComponents } from '@remix-run/react';
import { usePageAnalytics } from '../utils';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <CartForm
      route="/cart"
      inputs={{
        lines: props.lines,
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
          <AddToCartAnalytics fetcher={fetcher}>
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
  fetcher: FetcherWithComponents<any>;
  children: React.ReactNode;
}): JSX.Element {
  const fetcherData = fetcher.data;
  const formData = fetcher.formData;
  const pageAnalytics = usePageAnalytics();

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
          currency: fetcherData.cart.currency.code,
          shopId: fetcherData.cart.shop.id,
          ...getClientBrowserParameters(),
          ...pageAnalytics,
          ...cartData,
          cartId: fetcherData.cart.id,
          hasUserConsent: true,
        };

        sendShopifyAnalytics({
          eventName: AnalyticsEventName.ADD_TO_CART,
          payload: addToCartPayload,
        });
      }
    }
  }, [fetcherData, formData, pageAnalytics]);
  return <>{children}</>;
}
