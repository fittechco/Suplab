import SearchService from '../services/searchService';

class SearchController {
  static async searchProducts(args: { query: string }) {
    const { query } = args;
    const products = await SearchService.searchProducts(query);
    return products;
  }

  static async searchWithFilters(args: { searchQuery: string }) {
    const { searchQuery } = args;
    const products = await SearchService.searchWithFilters(searchQuery);
    return products;
  }
}

export default SearchController;
