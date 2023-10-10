import { LoaderArgs } from '@shopify/remix-oxygen';
import StorefrontApi from '../../../api/storefront';
import invariant from 'tiny-invariant';
import type { ProductFilter } from '@shopify/hydrogen/storefront-api-types';

// the following is a fragment of what the product fields are
export const PRODUCTFRAGMENT = `#graphql
  fragment ProductFragment on Product {
    id
    title
    vendor
    handle
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
        nodes {
          url
          height
          width
          altText
        }
    }
    options {
      name,
      values
    }
    variants(first: 10) {
      nodes {
        quantityAvailable
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
    `;

class ProductService {
  static async getAllProducts() {
    const query = `#graphql
      query AllProducts{
        products(first: 20) {
          edges {
            node {
              ...ProductFragment
            }
          }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await StorefrontApi.storeFront().query(query);
    return data.products.edges.map((edge: any) => edge.node);
  }

  static async getProduct(args: {
    id: string;
    selectedOptions: { name: string; value: string }[];
  }) {
    const query = `#graphql
      query Product($id: ID!, $selectedOptions: [SelectedOptionInput!]!) {
        product(id: $id) {
          ...ProductFragment
          selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
            id
            quantityAvailable
            availableForSale
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
            product {
              title
              handle
            }
          }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        id: args.id,
        selectedOptions: args.selectedOptions,
      },
    });
    invariant(data.product != null, 'Product not found');
    return data.product;
  }

  static async getProductsByCollection(args: { collectionId: string }) {
    const query = `#graphql
      query ProductByCollection($collectionId: ID!) {
        collection(id: $collectionId) {
          products(first: 10) {
           nodes{
            ...ProductFragment
           }
          }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        collectionId: args.collectionId,
      },
    });
    invariant(data.collection != null, 'Collection not found');
    return data.collection.products.nodes.map((edge: any) => edge.node);
  }

  static async getProductsByTag(args: { tag: string }) {
    const query = `#graphql
      query ProductsByTag ($tag: String!){
        products(first: 10, query: "tag: $tag") {
            nodes {
              ...ProductFragment
            }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        tag: args.tag,
      },
    });
    return data.products;
  }

  static async getProductByHandle(args: {
    handle: string;
    selectedOptions: { name: string; value: string }[];
  }) {
    const query = `#graphql
      query ProductByHandle($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
        productByHandle(handle: $handle) {
          ...ProductFragment
          selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
            id
            quantityAvailable
            availableForSale
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
            product {
              title
              handle
            }
          }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        handle: args.handle,
        selectedOptions: args.selectedOptions,
      },
    });
    invariant(data.productByHandle != null, 'Product not found');
    return data.productByHandle;
  }

  static async getProductMetafields(args: { productId: string }) {
    const query = `#graphql
      query ProductMetafields($productId: ID!) {
        product(id: $productId) {
          description
          metafields(
            identifiers: [{namespace: "tabs", key: "warnings"}, {namespace: "tabs", key: "ingredients"}, {namespace: "tabs", key: "directions"}]
          ) {
            id
            key
            value
            reference {
              ... on Metaobject {
                fields {
                  key
                  value
                  reference {
                    ... on MediaImage {
                      image {
                        width
                        height
                        url
                        altText
                      }
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
        productId: args.productId,
      },
    });
    invariant(data.product != null, 'Product not found');
    return data.product;
  }
  static async getFilteredProducts(args: { handle: string; filters: ProductFilter[] }) {
    const query = `#graphql
      query GetFilteredProducts($handle: String!, $filters: [ProductFilter!]) {
        collection(handle: $handle) {
          id
          title
          image {
            url
          }
          description
          products(first: 10, filters: $filters) {
            nodes {
              id
              title
              handle
              images(first: 5) {
                nodes {
                  url
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              availableForSale
              productType
              vendor
              variants(first: 10) {
                nodes {
                  selectedOptions {
                    name
                    value
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
        handle: args.handle,
        filters: args.filters,
      },
    });
    console.log('data', data);
    invariant(data.collection != null, 'Collection not found');
    return data.collection;
  }

  static async getAvailableFilters(args: { handle: string }) {
    console.log('args from service', args);
    const query = `#graphql
    query GetAvailableFilters($handle: String!) {
      collection(handle: $handle) {
        handle
        products(first: 10) {
          filters {
            id
            label
            type
            values {
              id
              label
              count
              input
            }
          }
        }
      }
    }
    `;

    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        handle: args.handle,
      },
    });
    console.log('data', data);
    invariant(data.collection != null, 'Collection not found');
    return data.collection;
  }

  static async getProductRecommendations(args: { productId: string }) {
    const query = `#graphql
      query ProductRecommendations($productId: ID!) {
        productRecommendations(productId: $productId) {
            ...ProductFragment 
        }
      }
      ${PRODUCTFRAGMENT}
    `;

    const data = await StorefrontApi.storeFront().query(query, {
      variables: {
        productId: args.productId,
      },
    });
    invariant(data.productRecommendations != null, 'Product not found');
    return data.productRecommendations;
  }
}

export default ProductService;
