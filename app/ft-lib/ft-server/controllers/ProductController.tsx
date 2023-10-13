import type { ProductFilter } from '@shopify/hydrogen/storefront-api-types';
import ProductService from '../services/productService'

class ProductController {
  static async getAllProducts() {
    const products = await ProductService.getAllProducts();
    return products;
  }

  static async getProductById(args: { id: string }) {
    const { id } = args;
    const product = await ProductService.getProduct({
      id: args.id,
      selectedOptions: [],
    });
    return product;
  }

  static async getProductsByTag(args: { tag: string }) {
    const { tag } = args;
    const products = await ProductService.getProductsByTag({ tag });
    return products;
  }

  static async getProductsByCollection(args: { collectionId: string }) {
    const { collectionId } = args;
    const products = await ProductService.getProductsByCollection({
      collectionId,
    });
    return products;
  }

  static async getProductByHandle(args: {
    handle: string;
    selectedOptions: { name: string; value: string }[];
  }) {
    const { handle } = args;
    const product = await ProductService.getProductByHandle({
      handle,
      selectedOptions: args.selectedOptions,
    });
    return product;
  }

  // <<<<<<< Updated upstream
  static async getProductMetafields(args: { productId: string }) {
    const { productId } = args;
    const metafields = await ProductService.getProductMetafields({
      productId,
    });
    return metafields;
  }

  static async getFilteredProducts(args: { handle: string; filters: ProductFilter[], cursor: string | null }) {
    try {
      const { handle } = args;
      console.log('filters', args.filters);
      const filteredProducts = await ProductService.getFilteredProducts({ handle, filters: args.filters, cursor: args.cursor });
      return filteredProducts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAvailableFilters(args: { handle: string }) {
    const { handle } = args;
    const availableFilters = await ProductService.getAvailableFilters({ handle });
    return availableFilters;
    // >>>>>>> Stashed changes
  }

  static async getProductRecommendations(args: { productId: string }) {
    const { productId } = args;
    const products = await ProductService.getProductRecommendations({
      productId,
    });
    return products;
  }
}

export default ProductController;
