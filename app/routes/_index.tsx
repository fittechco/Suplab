import React, { useEffect, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { type LoaderArgs, json } from '@shopify/remix-oxygen';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero from '../lib/homepage/Hero';
import type { App } from '../api/type';
import Benefits from '../lib/homepage/Benefits';
import Testimonials from '../lib/homepage/Testimonials';
import ShopTheGoal from '../lib/homepage/ShopTheGoal';
import Contact from '../lib/homepage/Contact';
import Promotion from '../lib/homepage/Promotion';
import FeaturedCollections from '../lib/homepage/FeaturedCollections';
import FAQ from '../lib/homepage/FAQ';
import { UseShopStore } from '~/app/root';
import Offers from '../lib/homepage/Offers';
import { seoPayload } from '../ft-lib/seo.server';
import Services from '../lib/about/Services';

export type Shop = {
  name: string;
};

export async function loader({ context }: LoaderArgs) {
  const storefront = await context.storefront.query(SHOPQUERY, {
    cache: {
      maxAge: 60 * 60 * 24,
      staleWhileRevalidate: 60 * 60,
      // 60 * 60 * 24 is 24 hours in seconds
      // one hour is 
    },
  });
  const { metaobject } = storefront;
  const seo = seoPayload.home()
  return json({
    metaobject,
    seo
  });
}

function HomePage() {
  const { metaobject }: { metaobject: App.HomePageTemplate.Template } =
    useLoaderData();
  const [sections, setSections] = useState<App.HomePageTemplate.Sections>([]);

  useEffect(() => {
    UseShopStore.setState({ routesLoader: false });
  }, []);

  useEffect(() => {
    metaobject.fields.forEach((field) => {
      if (field.key === 'sections') {
        setSections(field.references.nodes);
      }
    });
  }, [metaobject.fields]);

  return (
    <div className="h-full w-full space-y-6">
      {sections.map((section) => {
        if (section.type === 'promotion_section') {
          return <Promotion section={section} key={section.type} />;
        } else if (section.type === 'hero_section') {
          return <Hero section={section} key={section.type} />;
        } else if (section.type === 'benefits_section') {
          return <Benefits section={section} key={section.type} />;
        } else if (section.type === 'section_collection_products') {
          return <FeaturedCollections section={section} key={section.type} />;
        } else if (section.type === 'testimonials_section') {
          return <Testimonials section={section} key={section.type} />;
        } else if (section.type === 'shop_the_goal_section') {
          return <ShopTheGoal section={section} key={section.type} />;
        } else if (section.type === 'offers_section') {
          return <Offers section={section} key={section.type} />;
        } else if (section.type === 'services_section') {
          return <Services section={section} key={section.type} />;
        } else if (section.type === 'contact_section') {
          return <Contact section={section} key={section.type} />;
        } else if (section.type === 'faq_section') {
          return <FAQ section={section} key={section.type} />;
        } else {
          return (
            <div key={''}>
              <h1>Section type not found</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

export default HomePage;

export const ON_METAOBJECT = `#graphql
fragment Metaobject on Metaobject {
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
          fields {
            key
            value
            type
            reference{
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
    reference {
      ... on MediaImage {
        image {
          url
        }
      }
      ... on Collection {
        handle
        title
        products(first: 20) {
          nodes {
            title
            handle
            description
            priceRange{
              minVariantPrice{
                amount
                currencyCode
              }
              }
                variants(first: 1) {
                  nodes {
                    quantityAvailable
                    id
                    title
                    availableForSale
                    price {
                      currencyCode
                      amount
                    }
                    compareAtPrice {
                      currencyCode
                      amount
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
            images(first: 20) {
              nodes {
                url
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  }
}
`;

const SHOPQUERY = `#graphqls
query ShopName {
  metaobject(handle: {handle: "homepage", type: "page"}) {
    fields {
      type
      key
      value
      references(first: 20) {
        nodes {
          ... on Metaobject {
           ...Metaobject
          }
          __typename
        }
      }
    }
  }
}
${ON_METAOBJECT}
`;
