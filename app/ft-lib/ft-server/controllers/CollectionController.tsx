import { Storefront, I18nBase } from "@shopify/hydrogen";
import CollectionService from "../services/collectionService";

class CollectionController {

    storefront: Storefront<I18nBase>;
    // CollectionService should be initialized with a StorefrontApi instance from the loader
    constructor(props: {
        storefront: Storefront<I18nBase>
    }) {
        this.storefront = props.storefront;
    }

    async getAllCollections() {
        const CS = new CollectionService({ storefront: this.storefront });
        const collections = await CS.getAllCollections();
        return collections;
    }

    async getCollection(args: { collectionId: string }) {
        const { collectionId } = args;
        const CS = new CollectionService({ storefront: this.storefront });

        const collection = await CS.getCollectionById(collectionId);
        return collection;
    }
    async getCollectionByHandle(args: {
        handle: string
    }) {
        const CS = new CollectionService({ storefront: this.storefront });
        const collection = await CS.getCollectionByHandle(args.handle);

        return collection;
    }
}



export default CollectionController;
