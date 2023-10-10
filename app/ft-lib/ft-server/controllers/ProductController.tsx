import type { ProductFilter } from '@shopify/hydrogen/storefront-api-types';
import ProductService from '../services/productService'

class ProductController {
  static async getAllProducts() {
    try {
      const products = await ProductService.getAllProducts();
      return products;
    } catch (error) {
      return [];
    }
  }

  static async getProductById(args: { id: string }) {
    const { id } = args;
    try {
      const product = await ProductService.getProduct({
        id: args.id,
        selectedOptions: [],
      });
      return product;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async getProductsByTag(args: { tag: string }) {
    const { tag } = args;
    try {
      const products = await ProductService.getProductsByTag({ tag });
      return products;
    } catch (error) {
      return error;
    }
  }

  static async getProductsByCollection(args: { collectionId: string }) {
    const { collectionId } = args;
    try {
      const products = await ProductService.getProductsByCollection({
        collectionId,
      });
      return products;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getProductByHandle(args: {
    handle: string;
    selectedOptions: { name: string; value: string }[];
  }) {
    const { handle } = args;
    try {
      const product = await ProductService.getProductByHandle({
        handle,
        selectedOptions: args.selectedOptions,
      });
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

// <<<<<<< Updated upstream
  static async getProductMetafields(args: { productId: string }) {
    const { productId } = args;
    try {
      const metafields = await ProductService.getProductMetafields({
        productId,
      });
      return metafields;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getFilteredProducts(args: { handle: string; filters: ProductFilter[] }) {
    try {
      const { handle } = args;
      console.log('handle', handle);
      console.log('filters', args.filters);
      const filteredProducts = await ProductService.getFilteredProducts({ handle, filters: args.filters });
      console.log('filteredProducts', filteredProducts);
      return filteredProducts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }  

  static async getAvailableFilters(args: {handle: string}) {
    try {
      console.log('args from controller', args);
      const { handle } = args;
      const availableFilters = await ProductService.getAvailableFilters({ handle });
      console.log('availableFilters', availableFilters);
      return availableFilters;
// >>>>>>> Stashed changes
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getProductRecommendations(args: { productId: string }) {
    const { productId } = args;
    try {
      const products = await ProductService.getProductRecommendations({
        productId,
      });
      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default ProductController;
