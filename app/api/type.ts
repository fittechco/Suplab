import type { MenuItem } from "@shopify/hydrogen/storefront-api-types";
import { type } from "os";
import type { FooterQuery, HeaderQuery, ShopLayoutQuery } from "storefrontapi.generated";

export namespace App {
  export namespace HomePageTemplate {
    export type Template = {
      fields: Array<
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'sections';
          references: {
            nodes: Sections;
          };
        }>
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
      >;
    };

    export type SectionType =
      | 'promotion_section'
      | 'hero_section'
      | 'benefits_section'
      | 'collection_products_section'
      | 'testimonials_section'
      | 'shop_the_goal_section'
      | 'offers_section'
      | 'contact_section'
      | 'faq_section';

    export type PromotionsSection = {
      type: 'promotion_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title' | 'button_text';
        }>
        | Shopify.MetaobectsDef.FileReference<{
          key: 'desktop_image' | 'mobile_image';
          reference: {
            image: {
              url: string;
            };
          };
        }>
      >;
    };

    export type HeroSection = {
      type: 'hero_section';
      fields: Array<
        | Shopify.MetaobectsDef.Multi_Line_Text_Field<'sub_headline'>
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'headline' | 'button_text';
        }>
        | Shopify.MetaobectsDef.FileReference<{
          key: 'desktop_image' | 'mobile_image';
          reference: {
            image: {
              url: string;
            };
          };
        }>
      >;
    };

    export type BenefitsSection = {
      type: 'benefits_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'benefits';
          references: {
            nodes: Array<{
              type: 'benefit';
              fields: Array<
                | Shopify.MetaobectsDef.Single_Line_Text_Field<{
                  key: 'title';
                }>
                | Shopify.MetaobectsDef.Multi_Line_Text_Field<'description'>
                | Shopify.MetaobectsDef.FileReference<{
                  key: 'image';
                  reference: {
                    image: {
                      url: string;
                    };
                  };
                }>
              >;
            }>;
          };
        }>
      >;
    }

    export type SectionCollectionProducts = {
      type: 'section_collection_products';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title' | 'shop_button_text' | 'collection_one_button_text' | 'collection_two_button_text';
        }>
        | Shopify.MetaobectsDef.Metaobject_Reference<{
          key: 'collection_one' | 'collection_two';
          reference: Shopify.Storefront.Collection;
        }>
      >;
    };

    export type TestimonialsSection = {
      type: 'testimonials_section';
      fields: Array<
        Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'testimonials';
          references: {
            nodes: Array<{
              type: 'testimonial';
              fields: Array<
                | Shopify.MetaobectsDef.Single_Line_Text_Field<{
                  key: 'name';
                }>
                | Shopify.MetaobectsDef.Multi_Line_Text_Field<'description'>
                | Shopify.MetaobectsDef.FileReference<{
                  key: 'before_image' | 'after_image';
                  reference: {
                    image: {
                      url: string;
                    };
                  };
                }
                >
              >;
            }>;
          };
        }>
      >;
    };

    export type ShopTheGoalSection = {
      type: 'shop_the_goal_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'shop_the_goals';
          references: {
            nodes: Array<{
              type: 'shop_the_goal';
              fields: Array<
                | Shopify.MetaobectsDef.Single_Line_Text_Field<{
                  key: 'goal_title' | 'button_text';
                }>
                | Shopify.MetaobectsDef.FileReference<{
                  key: 'goal_image';
                  reference: {
                    image: {
                      url: string;
                    };
                  };
                }>
              >;
            }>;
          };
        }>
      >;
    };

    export type OffersSection = {
      type: 'offers_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'button_text';
        }>
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'offers';
          references: {
            nodes: Array<{
              type: 'offer';
              fields: Array<
                | Shopify.MetaobectsDef.FileReference<{
                  key: 'image';
                  reference: {
                    image: {
                      url: string;
                    };
                  };
                }>
              >;
            }>;
          };
        }>
      >;
    };

    export type ContactSection = {
      type: 'contact_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'email' | 'phone' | 'location_button_text' | 'contact_button_text';
        }>
        | Shopify.MetaobectsDef.FileReference<{
          key: 'image';
          reference: {
            image: {
              url: string;
            };
          };
        }>
      >;
    };

    export type FaqSection = {
      type: 'faq_section';
      fields: Array<
        | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'title';
        }>
        | Shopify.MetaobectsDef.List_Metaobject_Reference<{
          key: 'faqs';
          references: {
            nodes: Array<{
              type: 'faq';
              fields: Array<
                | Shopify.MetaobectsDef.Single_Line_Text_Field<{
                  key: 'question' | 'answer';
                }>
              >;
            }>;
          };
        }>
      >;
    };

    export type Sections = Array<
      PromotionsSection | HeroSection | BenefitsSection | SectionCollectionProducts | TestimonialsSection | ShopTheGoalSection | OffersSection | ContactSection | FaqSection
    >;
  }

  export namespace Shopify {
    export namespace Storefront {
      export type Collection = {
        id: string;
        title: string;
        description: string;
        products: {
          nodes: Array<Product>;
        };
      };

      export type Product = {
        id: string;
        title: string;
        handle: string;
        description: string;
        images: {
          nodes: Array<{
            url: string;
          }>;
        };
        featuredImage: {
          url: string;
        };
        priceRange: {
          minVariantPrice: {
            amount: string;
            currencyCode: 'USD';
          };
        };
      };
      export namespace Cart {
        export type LineItem = {
          id: string;
          title: string;
          quantity: number;
          variant: {
            id: string;
            title: string;
            priceV2: {
              amount: string;
              currencyCode: string;
            };
          };
        };

        export type Cart = {
          id: string;
          webUrl: string;
          lineItems: {
            edges: Array<{
              node: LineItem;
            }>;
          };
          error: {
            message: string;
          }[];
        };
      }
    }

    type Shop = {

    };
    export type Layout = {
      shop: ShopLayoutQuery["shop"]
      header: HeaderQuery
      footer: FooterQuery
    };
    export type NavMenu = {
      items: {
        id: string;
        title: string;
        url?: string;

        items?: NavMenu['items'];
      }[];
    };

    export type Item = Pick<MenuItem, "title" | "url"> & {
      items?: Item[];
    }

    export namespace MetaobectsDef {
      export type Single_Line_Text_Field<
        V extends {
          key: string;
        },
      > = {
        key: V['key'];
        type: 'single_line_text_field';
        value: string;
      };

      export type Multi_Line_Text_Field<V extends string> = {
        key: V;
        type: 'multi_line_text_field';
        value: string;
      };

      export type Metaobject_Reference<
        V extends {
          key: string;
          reference: any;
        },
      > = {
        key: V['key'];
        type: string;
        value: string;
        reference: V['reference'];
      };

      export type List_Mixed_Reference<
        V extends {
          key: string;
          references: any;
        },
      > = {
        key: V['key'];
        type: string;
        value: string;
        references: V['references'];
      };
      export type List_Metaobject_Reference<
        V extends {
          key: string;
          references: any;
        },
      > = {
        key: V['key'];
        type: string;
        value: string;
        references: V['references'];
      };
      export type FileReference<
        V extends {
          key: string;
          reference: any;
        },
      > = {
        key: V['key'];
        type: 'file_reference';
        value: string;
        reference: V['reference'];
      };
    }
  }
}
