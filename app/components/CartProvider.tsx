import { useFetcher } from '@remix-run/react';
import { Cart } from '@shopify/hydrogen/storefront-api-types'
import { loader } from 'app/routes/cart';
import { createContext, useContext, useEffect } from 'react'
import { json } from 'stream/consumers';

const CartContext = createContext<Cart | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const fetcher = useFetcher<typeof loader>();

    useEffect(() => {
        if (fetcher.data || fetcher.state === 'loading') return;

        fetcher.load('/cart');
    }, [fetcher]);
    const cart = fetcher.data?.cart || undefined;

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>;
}
export function useCart() {
    const data = useContext(CartContext);
    return data;
}

// a function to update the cart in the context
export function updateCart(cart: Cart) {
    CartContext.Provider({ value: cart })
}