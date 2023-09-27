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
    console.log('getProductById controller', args);
    const { id } = args;
    try {
      const product = await ProductService.getProduct({ id: args.id });
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
      const products = await ProductService.getProductsByCollection(
        { collectionId }
      );
      return products;
    } catch (error) {
      console.error(error);
      return error
    }
  }

  static async getProductByHandle(args: { handle: string }) {
    const { handle } = args;
    try {
      const product = await ProductService.getProductByHandle({ handle });
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getProductRecommendations(args: { productId: string }) {
    const { productId } = args;
    try {
      const products = await ProductService.getProductRecommendations(
        { productId }
      );
      return products;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default ProductController;
