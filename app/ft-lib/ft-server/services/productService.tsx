import { LoaderArgs } from '@shopify/remix-oxygen';
import { TypedQuery } from '../../api/storefrontApi';
import { App } from '../../app/api/type';
import invariant from 'tiny-invariant';

class ProductService {
  static async getAllProducts() {

    const products = await TypedQuery.query({
      products: [
        {
          first: 20,
        },
        {
          nodes: {
            id: true,
            title: true,
            description: true,
            images: [
              {
                first: 2
              },
              {
                nodes: {
                  url: true
                }
              }
            ]
          }
        }
      ]
    }).then((res) => {
      invariant(res.data != null, 'Product not found');
      return res.data.products.nodes;

    })

    return products;
  }

  static async getProduct(args: { id: string }) {

    const res = await TypedQuery.query({
      product: [
        {
          id: args.id
        },
        {
          id: true,
          description: true,
          title: true,
          images: [
            {
              first: 2
            },
            {
              nodes: {
                url: true
              }
            }
          ]
        }
      ]
    })

    invariant(res.data?.product != null, 'Product not found');
    return res.data.product;
  }

  static async getProductsByCollection(
    collectionId: string,
  ) {
    const res = await TypedQuery.query({
      collection: [
        {
          id: collectionId
        },
        {
          products: [{
            first: 10,
          },
          {
            nodes: {
              id: true,
              title: true,
              description: true,
              images: [
                {
                  first: 2
                },
                {
                  nodes: {
                    url: true
                  }
                }
              ]
            }
          }
          ]
        }
      ]
    })
    invariant(res.data?.collection != null, 'Collection not found');
    return res.data.collection
  }

  static async getProductsByTag(
    tag: string,
  ) {
    const res = await TypedQuery.query({
      products: [
        {
          first: 10,
          query: `tag:${tag}`,
        },
        {
          nodes: {
            id: true,
            title: true,
            description: true,
            images: [
              {
                first: 2,
              },
              {
                nodes: {
                  url: true
                }
              }
            ]
          }
        }
      ]
    })
    invariant(res.data?.products != null, 'Products not found');
    return res.data.products.nodes
  }

  static async getProductByHandle(
    handle: string,
  ) {
    const res = await TypedQuery.query({
      product: [
        {
          handle,
        },
        {
          id: true,
          title: true,
          description: true,
          images: [
            {
              first: 2,
            },
            {
              nodes: {
                url: true
              }
            }
          ]
        }
      ]
    });
    invariant(res.data?.product != null, 'Product not found');
    return res.data.product;
  }

  static async getProductRecommendations(
    productId: string,
  ) {
    const res = await TypedQuery.query({
      productRecommendations: [
        {
          productId
        },
        {
          id: true,
          title: true,
          description: true,
          images: [
            {
              first: 2,
            },
            {
              nodes: {
                url: true
              }
            }
          ]
        }
      ]
    });

    const query = `#graphql
      query ($productId: ID!) {
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
        }
      }
    `;
    invariant(res.data?.productRecommendations != null, 'Product not found');
    return res.data.productRecommendations;
  }
}

export default ProductService;
