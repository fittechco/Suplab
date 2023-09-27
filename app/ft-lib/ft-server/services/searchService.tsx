import StorefrontApi from '../../../api/storefront';
import type { App } from '../../../api/type';

class SearchService {
    static async searchProducts(
        searchQuery: string,
    ) {

        const data = await StorefrontApi.storeFront().query(SEARCHQUERY, {
            variables: {
                query: searchQuery,
            }
        });
        console.log(data,);
        return data.products;
    }

    static async searchWithFilters(
        searchQuery: string,
    ): Promise<App.Shopify.Storefront.Product[]> {
        const query = `#graphql
          query searchWithFilters($query: String!, $first: Int, $productFilters: [ProductFilter!]) {
              search(query: $query, first: $first, productFilters: $productFilters) {
                  edges {
                      node {
                          ... on Product {
                              id
                              title
                              vendor
                          }
                      }
                  }
              }
          }
      `;
        const variables = {
            query: searchQuery,
            first: 10,
            productFilters: [
                {
                    query: 'vendor: "Nike"',
                },
            ],
        };
        const data = await StorefrontApi.storeFront().query(query, {
            variables: {
                query: searchQuery,
                productFilters: []
            }
        });
        return data.search.edges.map((edge: any) => edge.node);
    }
}

export default SearchService;
const SEARCHQUERY = `#graphql
    query SearchProducts($query: String!) {
        products(query: $query, first: 10) {
                nodes {
                    ... on Product {
                        id
                        title
                        handle
                        description
                        priceRange {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        images(first: 1) {
                                nodes {
                                    url
                                }
                        }
                    }
                }
        }
    }
`;
