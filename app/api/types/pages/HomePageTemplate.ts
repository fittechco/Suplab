import { Shopify } from "../Shopify";

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
    | 'promotions_section'
    | 'hero_section'
    | 'benefits_section'
    | 'collection_products_section'
    | 'testimonials_section'
    | 'shop_the_goal_section'
    | 'offers_section'
    | 'contact_section'
    | 'faq_section';

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

  export type SectionTestimonials = {
    type: 'section_testimonials';
    fields: Array<
      Shopify.MetaobectsDef.List_Metaobject_Reference<{
        key: 'testimonials';
        references: {
          nodes: Array<{
            type: 'testimonial';
            fields: Array<
              | Shopify.MetaobectsDef.Single_Line_Text_Field<{
                  key: 'author' | 'profession';
                }>
              | Shopify.MetaobectsDef.Multi_Line_Text_Field<'quote'>
            >;
          }>;
        };
      }>
    >;
  };

  export type SectionCollectionProducts = {
    type: 'section_collection_products';
    fields: Array<
      | Shopify.MetaobectsDef.Single_Line_Text_Field<{
          key: 'button_text';
        }>
      | Shopify.MetaobectsDef.Metaobject_Reference<{
          key: 'collection';
          reference: Shopify.Storefront.Collection;
        }>
    >;
  };

  export type Sections = Array<
    HeroSection | SectionTestimonials | SectionCollectionProducts
  >;
}
