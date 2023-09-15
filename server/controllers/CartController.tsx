import CartService from "server/services/CartService";

class CartController {
  static async createCart() {
    try {
      const cart = await CartService.createCart();
      return cart;
    } catch (error) {
      return {error: 'Internal server error'};
    }
  }

  static async getCart(args: {cartId: string}) {
    const {cartId} = args;
    try {
      const cart = await CartService.getCart(cartId);
      return cart;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }

  static async addProductToCart(args: {
    cartId: string;
    productId: string;
    quantity: number;
  }) {
    const {cartId, productId, quantity} = args;
    try {
      const cart = await CartService.addProductToCart(cartId, productId, quantity);
      return cart;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }

  static async removeProductFromCart(args: {cartId: string; lineIds: string}) {
    const {cartId, lineIds} = args;
    try {
      const cart = await CartService.removeProductFromCart(cartId, lineIds);
      return cart;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }

  static async updateProductInCart(args: { cartId: string; lineItemId: string; quantity: number }) {
    const {cartId, lineItemId, quantity} = args;
    try {
      const cart = await CartService.updateProductInCart(cartId, lineItemId, quantity);
      return cart;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }

  static async clearCart(args: {cartId: string; lineIds: string[]}) {
    const {cartId, lineIds} = args;
    try {
      const cart = await CartService.clearCart(cartId, lineIds);
      return cart;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }
}

export default CartController;
