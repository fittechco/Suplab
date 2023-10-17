import { I18nBase, Storefront, createStorefrontClient } from '@shopify/hydrogen';

export default class StorefrontApi {
  static async storeFront() {
    const cache = await caches.open('hydrogen')
    const { storefront } = createStorefrontClient({
      cache,
      publicStorefrontToken: "967cc50208baf40e210a0d27ad61f85a",
      storeDomain: 'suplab.myshopify.com',
      storefrontId: 'gid://shopify/Storefront/Storefront',
      storefrontApiVersion: '2023-07',

    });
    return storefront;
  }

  // static async SetStorefront(storefront: Storefront<I18nBase>) {
  //     StorefrontApi.shopifyStorefront = storefront;
  //     console.log(this.shopifyStorefront, "Storefront");
  // }
}
