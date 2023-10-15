import { I18nBase, Storefront, createStorefrontClient } from '@shopify/hydrogen';

export default class StorefrontApi {
  static async storeFront() {
    const cache = await caches.open('hydrogen')
    const { storefront } = createStorefrontClient({
      cache,
      publicStorefrontToken: 'a27f5c0f35281e7103b79896b9c21a04',
      storeDomain: 'suplab.myshopify.com',
    });
    return storefront;
  }

  // static async SetStorefront(storefront: Storefront<I18nBase>) {
  //     StorefrontApi.shopifyStorefront = storefront;
  //     console.log(this.shopifyStorefront, "Storefront");
  // }
}
