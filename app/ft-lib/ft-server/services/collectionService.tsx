import {type I18nBase, type Storefront} from '@shopify/hydrogen';
import {PRODUCTFRAGMENT} from './productService';

export const COLLECTIONFRAGMENT = `#graphql
    fragment Collection on Collection {
        id
        handle
        title
        description
        seo {
            description
            title
        }
        image {
            id
            url
            width
            height
            altText
        }
    }
`;

class CollectionService {
  storefront: Storefront<I18nBase>;
  // CollectionService should be initialized with a StorefrontApi instance from the loader
  constructor(props: {storefront: Storefront<I18nBase>}) {
    this.storefront = props.storefront;
  }

  async getAllCollections() {
    const query = `#graphql
        query GetAllCollections (
            $country: CountryCode
            $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
            collections(first: 50) {
              nodes {
                id
                title
                description
                handle
                image{
                    id
                    altText
                    url
                }
              }
            }
          }
        `;
    const {collections} = await this.storefront.query(query);
    return collections;
  }

  async getCollectionById(id: string) {
    const query = `#graphql
        query GetCollectionById (
          $id: ID! 
          $country: CountryCode
          $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
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
    const variables = {id};
    const {collection} = await this.storefront.query(query, {
      variables,
    });
    return collection;
  }

  async getCollectionByHandle(handle: string) {
    const query = `#graphql
        query GetCollectionByHandle (
          $handle: String! 
          $country: CountryCode
          $language: LanguageCode
        ) @inContext(country: $country, language: $language) {
            collectionByHandle(handle: $handle) {
                ...Collection
                products(first: 10) {
                    nodes {
                        ...ProductFragment
                    }
                }
            }
        }
        ${COLLECTIONFRAGMENT}
        ${PRODUCTFRAGMENT}
        `;
    const variables = {handle};
    const {collectionByHandle} = await this.storefront.query(query, {
      variables,
    });
    return collectionByHandle;
  }
}

export default CollectionService;
