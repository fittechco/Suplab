import {I18nBase, Storefront, createStorefrontClient} from '@shopify/hydrogen';

export default class StorefrontApi {
  static storeFront() {
    const {storefront} = createStorefrontClient({
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
