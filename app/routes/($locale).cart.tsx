import {Await, Link, useLoaderData} from '@remix-run/react';
import {CartForm, Money, type CartQueryData} from '@shopify/hydrogen';
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {defer, json} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import LineItem from '../lib/cart/LineItem';
import CTAButton from '../components/CTAButton';
import {Colors} from '../ft-lib/shared';
import CollectionController from '../ft-lib/ft-server/controllers/CollectionController';
import {Suspense} from 'react';
import ProductsSwiper from '../components/ProductsSwiper';
import {useRootLoaderData} from '../root';

export async function action({request, context}: ActionFunctionArgs) {
  const {cart} = context;

  const formData = await request.formData();
  const {action, inputs} = CartForm.getFormInput(formData);

  let result: CartQueryData;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    case CartForm.ACTIONS.DiscountCodesUpdate:
      const formDiscountCode = inputs.discountCode;

      // User inputted discount code
      const discountCodes = (
        formDiscountCode ? [formDiscountCode] : []
      ) as string[];

      // Combine discount codes already applied on cart
      discountCodes.push(...inputs.discountCodes);

      result = await cart.updateDiscountCodes(discountCodes);
      break;
    default:
      invariant(false, `${action} cart action is not defined`);
  }

  // The Cart ID might change after each mutation, so update it each time.
  const headers = cart.setCartId(result.cart.id);
  return json(
    {
      ...result,
      analytics: {
        cartId: result.cart.id,
      },
    },
    {status: 200, headers},
  );
}

export async function loader({context}: LoaderFunctionArgs) {
  const {cart} = context;
  const CC = new CollectionController({storefront: context.storefront});
  const cartProductsRecommendations = CC.getCollectionByHandle({handle: 'all'});

  return defer({
    cart: await cart.get(),
    cartProductsRecommendations,
  });
}

export default function CartRoute() {
  const {cart, cartProductsRecommendations} = useLoaderData<typeof loader>();

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const similarProducts = isArabic ? 'منتجات مشابهة' : 'Similar Products';

  if (cart == null) {
    return null;
  }

  return (
    <div className="cart-container  space-y-4 md:space-y-6">
      <div className="container">
        <div className="cart-header">
          <h1 className="text-2xl ft-text-main">{`Your bag (${cart.totalQuantity})`}</h1>
        </div>
        <div className="cartWrapper flex">
          <div className="cart-line-items flex gap-5 flex-wrap w-[70%]">
            {cart?.lines.nodes.map((line) => {
              if (line == null) {
                return null;
              }
              return (
                <div key={line.id} className="w-96">
                  <LineItem lineItem={line} />
                </div>
              );
            })}
          </div>
          <div className="cart-summary w-[30%]">
            <div className="cart-summary space-y-3 md:space-y-5 px-3 md:px-5">
              <div className="total-price flex gap-1 font-bold text-xl">
                <h3 className="">Total:</h3>
                <Money data={cart.cost.totalAmount}></Money>
                <div
                  style={{
                    borderColor: Colors.secondaryLight,
                  }}
                  className="border-l text-lg font-medium pl-1"
                >
                  {`${cart.lines.nodes.length} ${
                    cart.lines.nodes.length > 1 ? 'items' : 'item'
                  }`}
                </div>
              </div>
              <div className="check-out">
                <Link to={cart.checkoutUrl} className="w-full">
                  <CTAButton fullWidth className="w-full">
                    {isArabic ? 'الدفع' : 'Checkout'}
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className='className="recommended-prducts relative"'>
        <Suspense
          fallback={<ProductsSwiper title={similarProducts} products={null} />}
        >
          <Await resolve={cartProductsRecommendations}>
            {(productRecommendations) => {
              return (
                <ProductsSwiper
                  title={similarProducts}
                  products={productRecommendations?.products.nodes || []}
                />
              );
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
