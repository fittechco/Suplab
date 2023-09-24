import SearchService from "../services/searchService";

class SearchController {
    static async searchProducts(args: { query: string }) {
        const { query } = args;
        try {
            const products = await SearchService.searchProducts(query);
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async searchWithFilters(args: { searchQuery: string }) {
        const { searchQuery } = args;
        try {
            const products = await SearchService.searchWithFilters(searchQuery);
            return products;
        } catch (error) {
            console.error(error);
            return error
        }
    }
}

export default SearchController;
