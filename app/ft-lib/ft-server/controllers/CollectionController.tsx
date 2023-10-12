import CollectionService from "../services/CollectionService";

class CollectionController {
    static async getAllCollections() {
        try {
            const collections = await CollectionService.getAllCollections();
            return collections;
        } catch (error) {
            throw new Error();
        }
    }

    static async getCollection(args: { collectionId: string }) {
        const { collectionId } = args;
        try {
            const collection = await CollectionService.getCollectionById(collectionId);
            return collection;
        } catch (error) {
            console.error(error);
            return { error: 'Internal server error' };
        }
    }
    static async getCollectionByHandle(args: {
        handle: string
    }) {
        const collection = await CollectionService.getCollectionByHandle(args.handle);

        return collection;
    }
}



export default CollectionController;
