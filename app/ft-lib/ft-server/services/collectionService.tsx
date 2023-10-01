// import { storeFrontApi } from '../../app/api/storefrontApi';
// import { App } from '../../app/api/type';

// class CollectionService {
//     static async getAllCollections(): Promise<
//         App.Shopify.Storefront.Collection[]
//     > {
//         const query = `#graphql
            // query {
            //     collections(first: 6) {
            //         edges {
            //             node {
            //                 id
            //                 products(first: 5) {
            //                     edges {
            //                         node {
            //                             id
            //                         }
            //                     }
            //                 }
            //              }
            //         }
            //     }
            // }
//         `;
//         const { data } = await storeFrontApi({ query });
//         return data.collections.edges.map((edge: any) => edge.node);
//     }

//     static async getCollection(
//         id: string,
//     ): Promise<App.Shopify.Storefront.Collection> {
//         const query = `#graphql
            // query ($id: ID!) {
            //     collection(id: $id) {
            //         id
            //         products(first: 10) {
            //             edges {
            //                 node {
            //                     id
            //                 }
            //             }
            //         }
            //     }
            // }
//         `;
//         const variables = { id };
//         const { data } = await storeFrontApi({ query, variables });
//         return data.collection;
//     }

//     static async getCollectionByHandle(
//         handle: string,
//     ): Promise<App.Shopify.Storefront.Collection> {
//         const query = `#graphql
//             query ($handle: String!) {
//                 collectionByHandle(handle: $handle) {
//                     id
//                     products(first: 10) {
//                         edges {
//                             node {
//                                 id
//                             }
//                         }
//                     }
//                 }
//             }
//         `;
//         const variables = { handle };
//         const { data } = await storeFrontApi({ query, variables });
//         return data.collectionByHandle;
//     }
// }

// export default CollectionService;
