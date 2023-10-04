/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type ShopName1QueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type ShopName1Query = {shop: Pick<StorefrontAPI.Shop, 'name'>};

export type ProductFragmentFragment = Pick<
  StorefrontAPI.Product,
  'id' | 'title' | 'vendor' | 'handle' | 'description'
> & {
  priceRange: {
    minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
  };
  images: {
    nodes: Array<
      Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
    >;
  };
  options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
  variants: {
    nodes: Array<
      Pick<
        StorefrontAPI.ProductVariant,
        'quantityAvailable' | 'id' | 'title' | 'availableForSale'
      > & {
        price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
        compareAtPrice?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
        >;
        selectedOptions: Array<
          Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
        >;
      }
    >;
  };
};

export type AllProductsQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type AllProductsQuery = {
  products: {
    edges: Array<{
      node: Pick<
        StorefrontAPI.Product,
        'id' | 'title' | 'vendor' | 'handle' | 'description'
      > & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        images: {
          nodes: Array<
            Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
          >;
        };
        options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'quantityAvailable' | 'id' | 'title' | 'availableForSale'
            > & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
            }
          >;
        };
      };
    }>;
  };
};

export type ProductQueryVariables = StorefrontAPI.Exact<{
  id: StorefrontAPI.Scalars['ID'];
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
}>;

export type ProductQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      'id' | 'title' | 'vendor' | 'handle' | 'description'
    > & {
      selectedVariant?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ProductVariant,
          'id' | 'quantityAvailable' | 'availableForSale' | 'sku' | 'title'
        > & {
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          image?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
        }
      >;
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
      images: {
        nodes: Array<
          Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
        >;
      };
      options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
      variants: {
        nodes: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'id' | 'title' | 'availableForSale'
          > & {
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
          }
        >;
      };
    }
  >;
};

export type ProductByCollectionQueryVariables = StorefrontAPI.Exact<{
  collectionId: StorefrontAPI.Scalars['ID'];
}>;

export type ProductByCollectionQuery = {
  collection?: StorefrontAPI.Maybe<{
    products: {
      nodes: Array<
        Pick<
          StorefrontAPI.Product,
          'id' | 'title' | 'vendor' | 'handle' | 'description'
        > & {
          priceRange: {
            minVariantPrice: Pick<
              StorefrontAPI.MoneyV2,
              'amount' | 'currencyCode'
            >;
          };
          images: {
            nodes: Array<
              Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
            >;
          };
          options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
          variants: {
            nodes: Array<
              Pick<
                StorefrontAPI.ProductVariant,
                'quantityAvailable' | 'id' | 'title' | 'availableForSale'
              > & {
                price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
                compareAtPrice?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                >;
                selectedOptions: Array<
                  Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
                >;
              }
            >;
          };
        }
      >;
    };
  }>;
};

export type ProductsByTagQueryVariables = StorefrontAPI.Exact<{
  tag: StorefrontAPI.Scalars['String'];
}>;

export type ProductsByTagQuery = {
  products: {
    nodes: Array<
      Pick<
        StorefrontAPI.Product,
        'id' | 'title' | 'vendor' | 'handle' | 'description'
      > & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        images: {
          nodes: Array<
            Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
          >;
        };
        options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'quantityAvailable' | 'id' | 'title' | 'availableForSale'
            > & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
            }
          >;
        };
      }
    >;
  };
};

export type ProductByHandleQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String'];
  selectedOptions:
    | Array<StorefrontAPI.SelectedOptionInput>
    | StorefrontAPI.SelectedOptionInput;
}>;

export type ProductByHandleQuery = {
  productByHandle?: StorefrontAPI.Maybe<
    Pick<
      StorefrontAPI.Product,
      'id' | 'title' | 'vendor' | 'handle' | 'description'
    > & {
      selectedVariant?: StorefrontAPI.Maybe<
        Pick<
          StorefrontAPI.ProductVariant,
          'id' | 'quantityAvailable' | 'availableForSale' | 'sku' | 'title'
        > & {
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
          image?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          unitPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>
          >;
          product: Pick<StorefrontAPI.Product, 'title' | 'handle'>;
        }
      >;
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
      images: {
        nodes: Array<
          Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
        >;
      };
      options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
      variants: {
        nodes: Array<
          Pick<
            StorefrontAPI.ProductVariant,
            'quantityAvailable' | 'id' | 'title' | 'availableForSale'
          > & {
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >;
            selectedOptions: Array<
              Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
            >;
          }
        >;
      };
    }
  >;
};

export type ProductRecommendationsQueryVariables = StorefrontAPI.Exact<{
  productId: StorefrontAPI.Scalars['ID'];
}>;

export type ProductRecommendationsQuery = {
  productRecommendations?: StorefrontAPI.Maybe<
    Array<
      Pick<
        StorefrontAPI.Product,
        'id' | 'title' | 'vendor' | 'handle' | 'description'
      > & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        images: {
          nodes: Array<
            Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
          >;
        };
        options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'quantityAvailable' | 'id' | 'title' | 'availableForSale'
            > & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
            }
          >;
        };
      }
    >
  >;
};

export type SearchWithFiltersQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String'];
  first?: StorefrontAPI.InputMaybe<StorefrontAPI.Scalars['Int']>;
  productFilters?: StorefrontAPI.InputMaybe<
    Array<StorefrontAPI.ProductFilter> | StorefrontAPI.ProductFilter
  >;
}>;

export type SearchWithFiltersQuery = {
  search: {
    edges: Array<{
      node: Pick<StorefrontAPI.Product, 'id' | 'title' | 'vendor'>;
    }>;
  };
};

export type SearchProductsQueryVariables = StorefrontAPI.Exact<{
  query: StorefrontAPI.Scalars['String'];
}>;

export type SearchProductsQuery = {
  products: {
    nodes: Array<
      Pick<
        StorefrontAPI.Product,
        'id' | 'title' | 'vendor' | 'handle' | 'description'
      > & {
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
        images: {
          nodes: Array<
            Pick<StorefrontAPI.Image, 'url' | 'height' | 'width' | 'altText'>
          >;
        };
        options: Array<Pick<StorefrontAPI.ProductOption, 'name' | 'values'>>;
        variants: {
          nodes: Array<
            Pick<
              StorefrontAPI.ProductVariant,
              'quantityAvailable' | 'id' | 'title' | 'availableForSale'
            > & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >;
              selectedOptions: Array<
                Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
              >;
            }
          >;
        };
      }
    >;
  };
};

export type OffersQueryVariables = StorefrontAPI.Exact<{[key: string]: never}>;

export type OffersQuery = {
  metaobject?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Metaobject, 'type'> & {
      fields: Array<
        Pick<StorefrontAPI.MetaobjectField, 'key' | 'value' | 'type'> & {
          references?: StorefrontAPI.Maybe<{
            nodes: Array<
              Pick<StorefrontAPI.Metaobject, 'type'> & {
                fields: Array<
                  Pick<
                    StorefrontAPI.MetaobjectField,
                    'key' | 'value' | 'type'
                  > & {
                    reference?: StorefrontAPI.Maybe<{
                      image?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'url'>
                      >;
                    }>;
                  }
                >;
              }
            >;
          }>;
          reference?: StorefrontAPI.Maybe<
            | (Pick<StorefrontAPI.Collection, 'handle' | 'title'> & {
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
                      images: {nodes: Array<Pick<StorefrontAPI.Image, 'url'>>};
                      featuredImage?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'url'>
                      >;
                    }
                  >;
                };
              })
            | {image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>}
          >;
        }
      >;
    }
  >;
};

export type MobileLayoutQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type MobileLayoutQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>;
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{
        image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
      }>;
    }>;
  };
};

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

export type HeaderQueryVariables = StorefrontAPI.Exact<{[key: string]: never}>;

export type HeaderQuery = {
  menu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'title' | 'handle'> & {
      items: Array<
        Pick<StorefrontAPI.MenuItem, 'title' | 'url'> & {
          items: Array<
            Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'> & {
              items: Array<
                Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'> & {
                  items: Array<
                    Pick<StorefrontAPI.MenuItem, 'id' | 'title' | 'url'>
                  >;
                }
              >;
            }
          >;
        }
      >;
    }
  >;
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

export type ShopLayoutQueryVariables = StorefrontAPI.Exact<{
  [key: string]: never;
}>;

export type ShopLayoutQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>;
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{
        image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
      }>;
    }>;
  };
};

export type MetaobjectFragment = Pick<StorefrontAPI.Metaobject, 'type'> & {
  fields: Array<
    Pick<StorefrontAPI.MetaobjectField, 'key' | 'value' | 'type'> & {
      references?: StorefrontAPI.Maybe<{
        nodes: Array<
          Pick<StorefrontAPI.Metaobject, 'type'> & {
            fields: Array<
              Pick<StorefrontAPI.MetaobjectField, 'key' | 'value' | 'type'> & {
                reference?: StorefrontAPI.Maybe<{
                  image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
                }>;
              }
            >;
          }
        >;
      }>;
      reference?: StorefrontAPI.Maybe<
        | (Pick<StorefrontAPI.Collection, 'handle' | 'title'> & {
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
                  images: {nodes: Array<Pick<StorefrontAPI.Image, 'url'>>};
                  featuredImage?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.Image, 'url'>
                  >;
                }
              >;
            };
          })
        | {image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>}
      >;
    }
  >;
};

export type GetCollectionQueryVariables = StorefrontAPI.Exact<{
  collectionId: StorefrontAPI.Scalars['ID'];
}>;

export type GetCollectionQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Collection, 'id' | 'title'> & {
      image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>>;
      products: {
        edges: Array<{
          node: Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle'> & {
            images: {nodes: Array<Pick<StorefrontAPI.Image, 'url'>>};
            priceRange: {
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
          };
        }>;
      };
    }
  >;
};

export type MoneyFragment = Pick<
  StorefrontAPI.MoneyV2,
  'currencyCode' | 'amount'
>;

export type CartLineFragment = Pick<
  StorefrontAPI.CartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
  };
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >;
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id'>;
    selectedOptions: Array<
      Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
    >;
  };
};

export type CartApiQueryFragment = Pick<
  StorefrontAPI.Cart,
  'id' | 'checkoutUrl' | 'totalQuantity' | 'note'
> & {
  buyerIdentity: Pick<
    StorefrontAPI.CartBuyerIdentity,
    'countryCode' | 'email' | 'phone'
  > & {
    customer?: StorefrontAPI.Maybe<
      Pick<
        StorefrontAPI.Customer,
        'id' | 'email' | 'firstName' | 'lastName' | 'displayName'
      >
    >;
  };
  lines: {
    nodes: Array<
      Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
        attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
        cost: {
          totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
          amountPerQuantity: Pick<
            StorefrontAPI.MoneyV2,
            'currencyCode' | 'amount'
          >;
          compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
          >;
        };
        merchandise: Pick<
          StorefrontAPI.ProductVariant,
          'id' | 'availableForSale' | 'requiresShipping' | 'title'
        > & {
          compareAtPrice?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
          >;
          price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
          image?: StorefrontAPI.Maybe<
            Pick<
              StorefrontAPI.Image,
              'id' | 'url' | 'altText' | 'width' | 'height'
            >
          >;
          product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id'>;
          selectedOptions: Array<
            Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>
          >;
        };
      }
    >;
  };
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>;
    totalDutyAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
    totalTaxAmount?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >;
  };
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>;
  discountCodes: Array<
    Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>
  >;
};

interface GeneratedQueryTypes {
  '#graphql\nquery shopName1{\n    shop{\n        name\n    }\n}\n': {
    return: ShopName1Query;
    variables: ShopName1QueryVariables;
  };
  '#graphql\n      query AllProducts{\n        products(first: 20) {\n          edges {\n            node {\n              ...ProductFragment\n            }\n          }\n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: AllProductsQuery;
    variables: AllProductsQueryVariables;
  };
  '#graphql\n      query Product($id: ID!, $selectedOptions: [SelectedOptionInput!]!) {\n        product(id: $id) {\n          ...ProductFragment\n          selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {\n            id\n            quantityAvailable\n            availableForSale\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              id\n              url\n              altText\n              width\n              height\n            }\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n            sku\n            title\n            unitPrice {\n              amount\n              currencyCode\n            }\n            product {\n              title\n              handle\n            }\n          }\n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: ProductQuery;
    variables: ProductQueryVariables;
  };
  '#graphql\n      query ProductByCollection($collectionId: ID!) {\n        collection(id: $collectionId) {\n          products(first: 10) {\n           nodes{\n            ...ProductFragment\n           }\n          }\n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: ProductByCollectionQuery;
    variables: ProductByCollectionQueryVariables;
  };
  '#graphql\n      query ProductsByTag ($tag: String!){\n        products(first: 10, query: "tag: $tag") {\n            nodes {\n              ...ProductFragment\n            }\n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: ProductsByTagQuery;
    variables: ProductsByTagQueryVariables;
  };
  '#graphql\n      query ProductByHandle($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {\n        productByHandle(handle: $handle) {\n          ...ProductFragment\n          selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {\n            id\n            quantityAvailable\n            availableForSale\n            selectedOptions {\n              name\n              value\n            }\n            image {\n              id\n              url\n              altText\n              width\n              height\n            }\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n            sku\n            title\n            unitPrice {\n              amount\n              currencyCode\n            }\n            product {\n              title\n              handle\n            }\n          }\n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: ProductByHandleQuery;
    variables: ProductByHandleQueryVariables;
  };
  '#graphql\n      query ProductRecommendations($productId: ID!) {\n        productRecommendations(productId: $productId) {\n            ...ProductFragment \n        }\n      }\n      #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n    ': {
    return: ProductRecommendationsQuery;
    variables: ProductRecommendationsQueryVariables;
  };
  '#graphql\n          query searchWithFilters($query: String!, $first: Int, $productFilters: [ProductFilter!]) {\n              search(query: $query, first: $first, productFilters: $productFilters) {\n                  edges {\n                      node {\n                          ... on Product {\n                              id\n                              title\n                              vendor\n                          }\n                      }\n                  }\n              }\n          }\n      ': {
    return: SearchWithFiltersQuery;
    variables: SearchWithFiltersQueryVariables;
  };
  '#graphql\n    query SearchProducts($query: String!) {\n        products(query: $query, first: 100) {\n                nodes {\n                    ... on Product {\n                         ...ProductFragment\n                    }\n                }\n        }\n    }\n    #graphql\n  fragment ProductFragment on Product {\n    id\n    title\n    vendor\n    handle\n    description\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    images(first: 10) {\n        nodes {\n          url\n          height\n          width\n          altText\n        }\n    }\n    options {\n      name,\n      values\n    }\n    variants(first: 10) {\n      nodes {\n        quantityAvailable\n        id\n        title\n        availableForSale\n        price {\n          currencyCode\n          amount\n        }\n        compareAtPrice {\n          currencyCode\n          amount\n        }\n        selectedOptions {\n          name\n          value\n        }\n      }\n    }\n  }\n    \n': {
    return: SearchProductsQuery;
    variables: SearchProductsQueryVariables;
  };
  '#graphql\nquery Offers {\n    metaobject(handle: {handle:"offers", type:"offers_section"}) {\n        ...Metaobject\n    }\n  }\n  #graphql\nfragment Metaobject on Metaobject {\n  type\n  fields {\n    key\n    value\n    type\n    references(first: 20) {\n      nodes {\n        ... on Metaobject {\n          type\n          fields {\n            key\n            value\n            type\n            reference{\n              ... on MediaImage {\n                image {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    reference {\n      ... on MediaImage {\n        image {\n          url\n        }\n      }\n      ... on Collection {\n        handle\n        title\n        products(first: 20) {\n          nodes {\n            title\n            handle\n            description\n            priceRange{\n              minVariantPrice{\n                amount\n                currencyCode\n              }\n              }\n            images(first: 20) {\n              nodes {\n                url\n              }\n            }\n            featuredImage {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n': {
    return: OffersQuery;
    variables: OffersQueryVariables;
  };
  '#graphql\n  query MobileLayout {\n    shop {\n      id\n      name\n      description\n      primaryDomain {\n        url\n      }\n      brand {\n        logo {\n          image {\n            url\n          }\n        }\n      }\n    }\n  }\n': {
    return: MobileLayoutQuery;
    variables: MobileLayoutQueryVariables;
  };
  '#graphql\n query Header {\n  menu(handle: "main-menu") {\n    title\n    handle\n    items{\n      title\n      url\n      items {\n        id\n        title\n        url\n        items {\n          id\n          title\n          url\n          items {\n            id\n            title\n            url\n          }\n        }\n      }\n    }\n  }\n}\n': {
    return: HeaderQuery;
    variables: HeaderQueryVariables;
  };
  '#graphql\n  query Footer(\n    $country: CountryCode\n    $footerMenuHandle: String!\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    menu(handle: $footerMenuHandle) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment MenuItem on MenuItem {\n    id\n    resourceId\n    tags\n    title\n    type\n    url \n  }\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      ...ChildMenuItem\n    }\n  }\n  fragment Menu on Menu {\n    id\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n': {
    return: FooterQuery;
    variables: FooterQueryVariables;
  };
  '#graphql\n  query ShopLayout {\n    shop {\n      id\n      name\n      description\n      primaryDomain {\n        url\n      }\n      brand {\n        logo {\n          image {\n            url\n          }\n        }\n      }\n    }\n  }\n': {
    return: ShopLayoutQuery;
    variables: ShopLayoutQueryVariables;
  };
  '#graphql\nquery GetCollection($collectionId: ID!) {\n  collection(id: $collectionId) {\n    id\n    title\n    image {\n      url\n    }\n    products(first: 10) {\n      edges {\n        node {\n          id \n          title\n          handle\n          images(first: 5) {\n            nodes {\n              url\n            }\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n}\n': {
    return: GetCollectionQuery;
    variables: GetCollectionQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
