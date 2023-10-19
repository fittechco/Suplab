import { useEffect, useState } from 'react';
import type { App } from '../api/type';
// import CartController from 'server/controllers/CartController';

type IProduct = Pick<
  NonNullable<App.Shopify.Storefront.Product>,
  'id' | 'title' | 'description' | 'images'
>;

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [cart, setCart] = useState<App.Shopify.Storefront.Cart.Cart>();

  useEffect(() => {
    const fetchProducts = async () => {
      // const productData = await ProductController.getAllProducts();
      //   const cartData: App.Shopify.Storefront.Cart.Cart = await CartController.getCart({
      //     cartId: 'gid://shopify/Cart/c1-f5ddd640baaa313a9c0b1e85d1e87088'
      // });
      // setProducts(productData);
      // setCart(cartData);
    };
    fetchProducts();
  }, []);

  if (products == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      {cart && (
        <div className="cart">
          <h2>Cart</h2>
          <p>{cart.id}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
