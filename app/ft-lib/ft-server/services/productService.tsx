import {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import type {ProductFilter} from '@shopify/hydrogen/storefront-api-types';
import {COLLECTIONFRAGMENT} from './collectionService';
import {type Storefront, type I18nBase} from '@shopify/hydrogen';

// the following is a fragment of what the product fields are
export const PRODUCTFRAGMENT = `#graphql
  fragment ProductFragment on Product {
    id
    title
    vendor
    handle
    productType
    description
    seo {
      description
      title
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
  storefront: Storefront<I18nBase>;
  // CollectionService should be initialized with a StorefrontApi instance from the loader
  constructor(props: {storefront: Storefront<I18nBase>}) {
    this.storefront = props.storefront;
  }

  async getAllProducts() {
    const query = `#graphql
      query AllProducts{
        products(first: 20) {
            nodes {
              ...ProductFragment
            }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await this.storefront.query(query);
    return data.products;
  }

  async getProduct(args: {
    id: string;
    selectedOptions: {name: string; value: string}[];
  }) {
    const query = `#graphql
      query Product(
        $id: ID!
        $selectedOptions: [SelectedOptionInput!]!
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
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
    const data = await this.storefront.query(query, {
      variables: {
        id: args.id,
        selectedOptions: args.selectedOptions,
      },
    });
    invariant(data.product != null, 'Product not found');
    return data.product;
  }

  async getProductsByCollection(args: {collectionId: string}) {
    const query = `#graphql
      query ProductByCollection(
        $collectionId: ID! 
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
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
    const data = await this.storefront.query(query, {
      variables: {
        collectionId: args.collectionId,
      },
    });
    invariant(data.collection != null, 'Collection not found');
    return data.collection.products.nodes.map((edge: any) => edge.node);
  }

  async getProductsByTag(args: {tag: string}) {
    const query = `#graphql
      query ProductsByTag (
        $tag: String! 
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language){
        products(first: 10, query: "tag: $tag") {
            nodes {
              ...ProductFragment
            }
        }
      }
      ${PRODUCTFRAGMENT}
    `;
    const data = await this.storefront.query(query, {
      variables: {
        tag: args.tag,
      },
    });
    return data.products;
  }

  async getProductByHandle(args: {
    handle: string;
    selectedOptions: {name: string; value: string}[];
  }) {
    const query = `#graphql
      query ProductByHandle(
        $handle: String!
        $selectedOptions: [SelectedOptionInput!]! 
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
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
    const data = await this.storefront.query(query, {
      variables: {
        handle: args.handle,
        selectedOptions: args.selectedOptions,
      },
    });
    invariant(data.productByHandle != null, 'Product not found');
    return data.productByHandle;
  }

  async getProductMetafields(args: {productId: string}) {
    const query = `#graphql
      query ProductMetafields(
        $productId: ID! 
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
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
    const data = await this.storefront.query(query, {
      variables: {
        productId: args.productId,
      },
    });
    invariant(data.product != null, 'Product not found');
    return data.product;
  }
  async getFilteredProducts(args: {
    handle: string;
    filters: ProductFilter[];
    variables: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      endCursor: string;
      startCursor: string;
    };
  }) {
    const query = `#graphql
      query GetFilteredProducts(
        $handle: String!
        $filters: [ProductFilter!] 
        $first: Int
        $last: Int
        $startCursor: String
        $endCursor: String
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
        collection(handle: $handle) {
          ...Collection
          id
          handle
          title
          image {
            url
          }
          description
          products(
            first: 10,
             filters: $filters,
             before: $startCursor,
             after: $endCursor
             ) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              endCursor
              startCursor
            }
            nodes {
              ...ProductFragment
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
      ${COLLECTIONFRAGMENT}
      ${PRODUCTFRAGMENT}
    `;

    const data = await this.storefront.query(query, {
      variables: {
        handle: args.handle,
        filters: args.filters,
        ...args.variables,
      },
      cache: {
        maxAge: 60 * 60 * 24,
        staleWhileRevalidate: 60 * 60,
      },
    });
    invariant(data.collection != null, 'Collection not found');
    return data.collection;
  }

  async getAvailableFilters(args: {handle: string}) {
    const query = `#graphql
    query GetAvailableFilters(
      $handle: String! 
      $country: CountryCode
      $language: LanguageCode
      ) @inContext(country: $country, language: $language) {
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

    const data = await this.storefront.query(query, {
      variables: {
        handle: args.handle,
      },
    });
    invariant(data.collection != null, 'Collection not found');
    return data.collection;
  }

  async getProductRecommendations(args: {productId: string}) {
    const query = `#graphql
      query ProductRecommendations(
        $productId: ID! 
        $country: CountryCode
        $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
          productRecommendations(productId: $productId) {
              ...ProductFragment 
          }
        }
      ${PRODUCTFRAGMENT}
    `;

    const data = await this.storefront.query(query, {
      variables: {
        productId: args.productId,
      },
    });
    invariant(data.productRecommendations != null, 'Product not found');
    return data.productRecommendations;
  }
}

export default ProductService;
