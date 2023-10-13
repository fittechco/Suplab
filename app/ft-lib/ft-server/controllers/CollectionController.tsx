import CollectionService from "../services/collectionService";

class CollectionController {
    static async getAllCollections() {
        const collections = await CollectionService.getAllCollections();
        return collections;
    }

    static async getCollection(args: { collectionId: string }) {
        const { collectionId } = args;
        const collection = await CollectionService.getCollectionById(collectionId);
        return collection;
    }
    static async getCollectionByHandle(args: {
        handle: string
    }) {
        const collection = await CollectionService.getCollectionByHandle(args.handle);

        return collection;
    }
}



export default CollectionController;
