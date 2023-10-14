import { Storefront, I18nBase } from '@shopify/hydrogen';
import type { App } from '../../../api/type';
import { PRODUCTFRAGMENT } from './productService';
class SearchService {

  storefront: Storefront<I18nBase>;
  // CollectionService should be initialized with a StorefrontApi instance from the loader
  constructor(props: {
    storefront: Storefront<I18nBase>
  }) {
    this.storefront = props.storefront;
  }

  async searchProducts(searchQuery: string) {
    const data = await this.storefront.query(SEARCHQUERY, {
      variables: {
        query: searchQuery,
      },
    });
    return data.products;
  }

  async searchWithFilters(
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
    const data = await this.storefront.query(query, {
      variables: {
        query: searchQuery,
        productFilters: [],
      },
    });
    return data.search.edges.map((edge: any) => edge.node);
  }
}

export default SearchService;
const SEARCHQUERY = `#graphql
  query SearchProducts($query: String!) {
    products(query: $query, first: 100) {
      nodes {
        ... on Product {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCTFRAGMENT}
`;
