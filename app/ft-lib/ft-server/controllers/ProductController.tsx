import ProductService from '../services/productService';

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
