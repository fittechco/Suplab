/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type MenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>;

export type ChildMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>;

export type ParentMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
> & {
  items: Array<
    Pick<
      StorefrontAPI.MenuItem,
      'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
    >
  >;
};

export type MenuFragment = Pick<StorefrontAPI.Menu, 'id'> & {
  items: Array<
    Pick<
      StorefrontAPI.MenuItem,
      'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
    > & {
      items: Array<
        Pick<
          StorefrontAPI.MenuItem,
          'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
        >
      >;
    }
  >;
};

export type LayoutQueryVariables = StorefrontAPI.Exact<{[key: string]: never}>;

export type LayoutQuery = {
  menu?: StorefrontAPI.Maybe<{
    items: Array<
      Pick<StorefrontAPI.MenuItem, 'title' | 'url'> & {
        items: Array<
          Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'> & {
            items: Array<Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'>>;
          }
        >;
      }
    >;
  }>;
};

export type FooterQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  footerMenuHandle: StorefrontAPI.Scalars['String'];
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type FooterQuery = {
  menu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<
          StorefrontAPI.MenuItem,
          'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
        > & {
          items: Array<
            Pick<
              StorefrontAPI.MenuItem,
              'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
            >
          >;
        }
      >;
    }
  >;
};

export type LayoutQueryVariables = StorefrontAPI.Exact<{[key: string]: never}>;

export type LayoutQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>;
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{
        image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
      }>;
    }>;
  };
};

export type ShopNameQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type ShopNameQuery = {
  metaobject?: StorefrontAPI.Maybe<{
    fields: Array<
      Pick<StorefrontAPI.MetaobjectField, 'type' | 'key' | 'value'> & {
        references?: StorefrontAPI.Maybe<{
          nodes: Array<
            | {
                __typename:
                  | 'Collection'
                  | 'GenericFile'
                  | 'MediaImage'
                  | 'Page'
                  | 'Product'
                  | 'ProductVariant'
                  | 'Video';
              }
            | ({__typename: 'Metaobject'} & Pick<
                StorefrontAPI.Metaobject,
                'type'
              > & {
                  fields: Array<
                    Pick<
                      StorefrontAPI.MetaobjectField,
                      'key' | 'value' | 'type'
                    > & {
                      references?: StorefrontAPI.Maybe<{
                        nodes: Array<
                          Pick<StorefrontAPI.Metaobject, 'type'> & {
                            fields: Array<
                              Pick<
                                StorefrontAPI.MetaobjectField,
                                'key' | 'value' | 'type'
                              >
                            >;
                          }
                        >;
                      }>;
                      reference?: StorefrontAPI.Maybe<
                        | (Pick<
                            StorefrontAPI.Collection,
                            'handle' | 'title'
                          > & {
                            products: {
                              nodes: Array<
                                Pick<
                                  StorefrontAPI.Product,
                                  'title' | 'handle' | 'description'
                                > & {
                                  priceRange: {
                                    minVariantPrice: Pick<
                                      StorefrontAPI.MoneyV2,
                                      'amount' | 'currencyCode'
                                    >;
                                  };
                                  images: {
                                    nodes: Array<
                                      Pick<StorefrontAPI.Image, 'url'>
                                    >;
                                  };
                                  featuredImage?: StorefrontAPI.Maybe<
                                    Pick<StorefrontAPI.Image, 'url'>
                                  >;
                                }
                              >;
                            };
                          })
                        | {
                            image?: StorefrontAPI.Maybe<
                              Pick<StorefrontAPI.Image, 'url'>
                            >;
                          }
                      >;
                    }
                  >;
                })
          >;
        }>;
      }
    >;
  }>;
};

interface GeneratedQueryTypes {
  '#graphql\n query Layout {\n  menu(handle: "main-menu") {\n    items{\n      title\n      url\n      items {\n        id\n        title\n        url\n        items {\n          id\n          title\n          url\n        }\n      }\n    }\n  }\n}\n': {
    return: LayoutQuery;
    variables: LayoutQueryVariables;
  };
  '#graphql\n  query Footer(\n    $country: CountryCode\n    $footerMenuHandle: String!\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    menu(handle: $footerMenuHandle) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment MenuItem on MenuItem {\n    id\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      ...ChildMenuItem\n    }\n  }\n  fragment Menu on Menu {\n    id\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n': {
    return: FooterQuery;
    variables: FooterQueryVariables;
  };
  '#graphql\n  query layout {\n    shop {\n      id\n      name\n      description\n      primaryDomain {\n        url\n      }\n      brand {\n        logo {\n          image {\n            url\n          }\n        }\n      }\n    }\n  }\n': {
    return: LayoutQuery;
    variables: LayoutQueryVariables;
  };
  '#graphql\nquery shopName{\n  metaobject(handle: {handle: "homepage", type: "page"}) {\n    fields {\n      type\n      key\n      value\n      references(first: 20) {\n        nodes {\n          ... on Metaobject {\n            type\n            fields {\n              key\n              value\n              type\n              references(first: 20) {\n                nodes {\n                  ... on Metaobject {\n                    type\n                    fields {\n                      key\n                      value\n                      type\n                    }\n                  }\n                }\n              }\n              reference {\n                ... on MediaImage {\n                  image {\n                    url\n                  }\n                }\n                ... on Collection {\n                  handle\n                  title\n                  products(first: 20) {\n                    nodes {\n                      title\n                      handle\n                      description\n                      priceRange{\n                        minVariantPrice{\n                          amount\n                          currencyCode\n                        }\n                        }\n                      images(first: 20) {\n                        nodes {\n                          url\n                        }\n                      }\n                      featuredImage {\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          __typename\n        }\n      }\n    }\n  }\n}\n': {
    return: ShopNameQuery;
    variables: ShopNameQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
