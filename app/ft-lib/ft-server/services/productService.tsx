import { LoaderArgs } from '@shopify/remix-oxygen';
import StorefrontApi from '../../../api/storefront';
import invariant from 'tiny-invariant';

class ProductService {
  static async getAllProducts() {
    const query = `#graphql
      query AllProducts{
        products(first: 20) {
          edges {
            node {
              id
              title
              description
              images(first: 2) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
    `;
    const data = await StorefrontApi.storeFront().query(query);
    return data.products.edges.map((edge: any) => edge.node);
  }

  static async getProduct(args: { id: string }) {
    const query = `#graphql
      query Product($id: ID!) {
        product(id: $id) {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
              nodes {
                url
              }
          }
        }
      }
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        id: args.id
      }
    });
    invariant(data.product != null, 'Product not found');
    return data.product;
  }

  static async getProductsByCollection(
    args: { collectionId: string, }
  ) {
    const query = `#graphql
      query ProductByCollection($collectionId: ID!) {
        collection(id: $collectionId) {
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        collectionId: args.collectionId
      }
    })
    invariant(data.collection != null, 'Collection not found');
    return data.collection.products.edges.map((edge: any) => edge.node);
  }

  static async getProductsByTag(
    args: { tag: string, }
  ) {
    const query = `#graphql
      query ProductsByTag ($tag: String!){
        products(first: 10, query: "tag: $tag") {
            nodes {
              id
              title
              description
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
            }
        }
      }
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        tag: args.tag
      }
    })
    return data.products;
  }

  static async getProductByHandle(
    args: { handle: string, }
  ) {
    const query = `#graphql
      query ProductByHandle($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          description
          images(first: 10) {
              nodes {
                url
              }
          }
          variants(first: 1) {
            nodes {
              id
              title
              availableForSale
              price {
                currencyCode
                amount
              }
              compareAtPrice {
                currencyCode
                amount
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        handle: args.handle
      }
    })
    invariant(data.productByHandle != null, 'Product not found');
    return data.productByHandle;
  }

  static async getProductRecommendations(
    args: { productId: string, }
  ) {
    const query = `#graphql
      query ProductRecommendations($productId: ID!) {
        productRecommendations(productId: $productId) {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          variants(first: 1) {
            nodes {
              id
              title
              availableForSale
              price {
                currencyCode
                amount
              }
              compareAtPrice {
                currencyCode
                amount
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    `;

    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        productId: args.productId
      }
    })
    invariant(data.productRecommendations != null, 'Product not found');
    return data.productRecommendations;
  }
}

export default ProductService;