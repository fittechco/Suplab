import {type Storefront, type I18nBase} from '@shopify/hydrogen';

class MetaobjectService {
  storefront: Storefront<I18nBase>;
  // CollectionService should be initialized with a StorefrontApi instance from the loader
  constructor(props: {storefront: Storefront<I18nBase>}) {
    this.storefront = props.storefront;
  }

  async getMetaobjectByHandle(args: {
    handle: string;
    type: string;
    language: string;
    country: string;
  }) {
    const {handle, type, language, country} = args;
    const query = `#graphql
    query AnnouncementBar($country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
        metaobject(
          handle: {handle: "announcement-bar-section", type: "announcement_bar_section"}
        ) {
          fields {
            type
            key
            value
            references(first: 20) {
              nodes {
                ... on Metaobject {
                  type
                  handle
                  fields {
                    key
                    value
                    type
                    references(first: 20) {
                      nodes {
                        ... on Metaobject {
                          id
                          type
                          handle
                          fields {
                            key
                            value
                            type
                            reference {
                              ... on MediaImage {
                                image {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                __typename
              }
            }
          }
        }
      }`;
    const variables = {
      handle,
    };
    const {metaobject} = await this.storefront.query(query, {variables});
    return metaobject;
  }
}

export default MetaobjectService;
