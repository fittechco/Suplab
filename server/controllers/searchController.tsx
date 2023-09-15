import SearchService from "server/services/SearchService";

class SearchController {
  static async searchProducts(args: {searchQuery: string}) {
    const {searchQuery} = args;
    try {
      const products = await SearchService.searchProducts(searchQuery);
      return products;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }

  static async searchWithFilters(args: {searchQuery: string}) {
    const {searchQuery} = args;
    try {
      const products = await SearchService.searchWithFilters(searchQuery);
      return products;
    } catch (error) {
      console.error(error);
      return {error: 'Internal server error'};
    }
  }
}

export default SearchController;
