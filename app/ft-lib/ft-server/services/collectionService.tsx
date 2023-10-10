import StorefrontApi from '../../../api/storefront';
import { PRODUCTFRAGMENT } from './productService';

const storefront = StorefrontApi.storeFront()

class CollectionService {
    static async getAllCollections() {
        const query = `#graphql
        query GetAllCollections {
            collections(first: 6) {
                nodes {
                    id
                    products(first: 5) {
                        nodes {
                            id
                        }
                    }
                }
            }
        }
        `;
        const { collections } = await storefront.query(query);
        return collections.nodes.map((edge: any) => edge.node);
    }

    static async getCollectionById(
        id: string,
    ) {
        const query = `#graphql
        query GetCollectionById ($id: ID!) {
            collection(id: $id) {
                id
                products(first: 10) {
                    nodes {
                        id
                    }
                }
            }
        }
        `;
        const variables = { id };
        const { collection } = await storefront.query(query, {
            variables,
        });
        return collection;
    }

    static async getCollectionByHandle(
        handle: string,
    ) {
        const query = `#graphql
        query GetCollectionByHandle ($handle: String!) {
            collectionByHandle(handle: $handle) {
                id
                products(first: 10) {
                    nodes {
                        ...ProductFragment
                    }
                }
            }
        }
        ${PRODUCTFRAGMENT}
        `;
        const variables = { handle };
        const { collectionByHandle } = await storefront.query(query, {
            variables,
        });
        return collectionByHandle;
    }
}

export default CollectionService;
