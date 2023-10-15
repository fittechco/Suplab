import { useFetcher } from '@remix-run/react';
import type { Cart } from '@shopify/hydrogen/storefront-api-types';
import type { loader as cartLoader } from 'app/routes/cart';
import { createContext, useContext, useEffect } from 'react';

const CartContext = createContext<Cart | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const fetcher = useFetcher<typeof cartLoader>();

  useEffect(() => {
    if (fetcher.data || fetcher.state === 'loading') return;
    console.log('fetching cart');
    // fetcher.load('/cart');
    console.log(fetcher, 'fetcher');
  }, [fetcher]);

  const cart = fetcher.data?.cart || undefined;
  console.log(cart, 'provider cart');
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
export function useCart() {
  const data = useContext(CartContext);
  return data;
}

// a function to update the cart in the context
export function updateCart(cart: Cart) {
  CartContext.Provider({ value: cart });
}
