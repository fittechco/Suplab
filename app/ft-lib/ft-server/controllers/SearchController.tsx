import { I18nBase, Storefront } from '@shopify/hydrogen';
import SearchService from '../services/searchService';

class SearchController {

  storefront: Storefront<I18nBase>;
    // CollectionService should be initialized with a StorefrontApi instance from the loader
    constructor(props: {
        storefront: Storefront<I18nBase>
    }) {
        this.storefront = props.storefront;
    }

  async searchProducts(args: { query: string }) {
    const { query } = args;
    const SS = new SearchService({storefront: this.storefront})
    const products = await SS.searchProducts(query);
    return products;
  }

  async searchWithFilters(args: { searchQuery: string }) {
    const { searchQuery } = args;
    const SS = new SearchService({storefront: this.storefront})
    const products = await SS.searchWithFilters(searchQuery);
    return products;
  }
}

export default SearchController;
