import { TypedQuery } from '../../app/api/storefrontApi';
import { App } from '../../app/api/type';

class CartService {
  static async createCart(): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      mutation cartCreate {
        cartCreate() {
          cart {
            id
          }
          userErrors {
            message
          }
        }
      }
    `;
    const { data } = await storeFrontApi({ query });
    return data.cartCreate.cart;
  }

  static async getCart(
    cartId: string,
  ): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      query($cartId: ID!) {
        cart(id: $cartId) {
          id
          createdAt
          updatedAt
          lines(first: 10) {
            nodes {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
              attributes {
                key
                value
              }
            }
          }
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
          buyerIdentity {
            email
            phone
            customer {
              id
            }
            countryCode
            deliveryAddressPreferences {
              ... on MailingAddress {
                address1
                address2
                city
                provinceCode
                countryCodeV2
                zip
              }
            }
          }
        }
      }
    `;
    const variables = { cartId };
    const { data } = await storeFrontApi({ query, variables });
    return data.node;
  }

  static async addProductToCart(
    cartId: string,
    productId: string,
    quantity: number,
  ): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      mutation($cartId: ID!, $productId: ID!, $quantity: Int!) {
        cartLinesAdd(cartId: $cartId, lines: [{ quantity: $quantity, merchandiseId: $productId }]) {
          cart {
            id
          }
          userErrors {
            message
          }
        }
      }
    `;
    const variables = { cartId, productId, quantity };
    const { data } = await storeFrontApi({ query, variables });
    return data.cartLinesAdd.cart;
  }

  static async removeProductFromCart(
    cartId: string,
    lineIds: string,
  ): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      mutation($cartId: ID!, $lineIds: ID!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
          }
          userErrors {
            message
          }
        }
      }
    `;
    const variables = { cartId, lineIds };
    const { data } = await storeFrontApi({ query, variables });
    return data.cartLinesRemove.cart;
  }

  static async updateProductInCart(
    cartId: string,
    lineIds: string,
    quantity: number,
  ): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      mutation($cartId: ID!, $lineIds: ID!, $quantity: Int!) {
        cartLinesUpdate(cartId: $cartId, lines: [{ id: $lineIds, quantity: $quantity }]) {
          cart {
            id
          }
          userErrors {
            message
          }
        }
      }
    `;
    const variables = { cartId, lineIds, quantity };
    const { data } = await storeFrontApi({ query, variables });
    return data.cartLinesUpdate.cart;
  }

  static async clearCart(
    cartId: string,
    lineIds: string[],
  ): Promise<App.Shopify.Storefront.Cart.Cart> {
    const query = `#graphql
      mutation($cartId: ID!, $lineIds: ID!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
          }
          userErrors {
            message
          }
        }
      }
    `;
    const variables = { cartId, lineIds };
    const { data } = await storeFrontApi({ query, variables });
    return data.cartLinesRemove.cart;
  }
}

export default CartService;
