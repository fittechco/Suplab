import type { ProductFilter } from '@shopify/hydrogen/storefront-api-types';
import ProductService from '../services/productService'
import { Storefront, I18nBase } from '@shopify/hydrogen';

class ProductController {
  storefront: Storefront<I18nBase>;
  // CollectionService should be initialized with a StorefrontApi instance from the loader
  constructor(props: {
    storefront: Storefront<I18nBase>
  }) {
    this.storefront = props.storefront;
  }

  async getAllProducts() {
    const PS = new ProductService({ storefront: this.storefront });
    const products = await PS.getAllProducts();
    return products;
  }

  async getProductById(args: { id: string }) {
    const { id } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const product = await PS.getProduct({
      id: args.id,
      selectedOptions: [],
    });
    return product;
  }

  async getProductsByTag(args: { tag: string }) {
    const { tag } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const products = await PS.getProductsByTag({ tag });
    return products;
  }

  async getProductsByCollection(args: { collectionId: string }) {
    const { collectionId } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const products = await PS.getProductsByCollection({
      collectionId,
    });
    return products;
  }

  async getProductByHandle(args: {
    handle: string;
    selectedOptions: { name: string; value: string }[];
  }) {
    const { handle } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const product = await PS.getProductByHandle({
      handle,
      selectedOptions: args.selectedOptions,
    });
    return product;
  }

  // <<<<<<< Updated upstream
  async getProductMetafields(args: { productId: string }) {
    const { productId } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const metafields = await PS.getProductMetafields({
      productId,
    });
    return metafields;
  }

  async getFilteredProducts(args: { handle: string; filters: ProductFilter[], cursor: string | null }) {
    try {
      const { handle } = args;
      console.log('filters', args.filters);
      const PS = new ProductService({ storefront: this.storefront });
      const filteredProducts = await PS.getFilteredProducts({ handle, filters: args.filters, cursor: args.cursor });
      return filteredProducts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAvailableFilters(args: { handle: string }) {
    const { handle } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const availableFilters = await PS.getAvailableFilters({ handle });
    return availableFilters;
    // >>>>>>> Stashed changes
  }

  async getProductRecommendations(args: { productId: string }) {
    const { productId } = args;
    const PS = new ProductService({ storefront: this.storefront });
    const products = await PS.getProductRecommendations({
      productId,
    });
    return products;
  }
}

export default ProductController;
