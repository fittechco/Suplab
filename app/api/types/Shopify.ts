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

  export type Layout = {
    shop: {
      name: string;
    };
    header: Shopify.NavMenu;
    footer: Shopify.NavMenu;
  };

  export type NavMenu = {
    items: {
      title: string;
      url: string;
      items: NavMenu['items'];
    }[];
  };

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
      reference: V['reference'];
    };
  }
}
