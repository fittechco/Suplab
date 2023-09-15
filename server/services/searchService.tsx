import {storeFrontApi} from '../../app/api/storefrontApi';
import {App} from '../../app/api/type';

class SearchService {
  static async searchProducts(
    searchQuery: string,
  ): Promise<App.Shopify.Storefront.Product[]> {
    const query = `#graphql
      query{
          products(query: "${searchQuery}", first: 10) {
              edges {
                  node {
                      ... on Product {
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
              }
      
            }
      }
  `;
    const {data} = await storeFrontApi({query});
    return data.searchProducts.edges.map((edge: any) => edge.node);
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
    const {data} = await storeFrontApi({query, variables});
    return data.search.edges.map((edge: any) => edge.node);
  }
}

export default SearchService;
