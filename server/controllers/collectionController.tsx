// import CollectionService from '../services/collectionService';
// import { App } from '../../app/api/type';

// class CollectionController {
//   static async getAllCollections(): Promise<
//     App.Shopify.Storefront.Collection[]
//   > {
//     try {
//       const collections = await CollectionService.getAllCollections();
//       return collections;
//     } catch (error) {
//       return [];
//     }
//   }

//   static async getCollection(args: { collectionId: string }) {
//     const { collectionId } = args;
//     try {
//       const collection = await CollectionService.getCollection(collectionId);
//       return collection;
//     } catch (error) {
//       console.error(error);
//       return { error: 'Internal server error' };
//     }
//   }
// }

// export default CollectionController;