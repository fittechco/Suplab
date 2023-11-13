import React, { useEffect, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { type LoaderFunctionArgs, json } from '@shopify/remix-oxygen';
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
import { AnalyticsPageType } from '@shopify/hydrogen';

export type Shop = {
  name: string;
};

export async function loader({ context }: LoaderFunctionArgs) {
  const storefront = await context.storefront.query(SHOPQUERY, {
    cache: {
      maxAge: 60 * 60 * 24,
      staleWhileRevalidate: 60 * 60,
      // 60 * 60 * 24 is 24 hours in seconds
      // one hour is 60 * 60 

    },
  });
  const { metaobject } = storefront;
  const seo = seoPayload.home()
  return json({
    metaobject,
    seo,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
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
          return <Offers
            swiperOptions={{
              spaceBetween: 10,
              slidesPerView: 1.5,
              breakpoints: {
                768: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 20,
                  slidesPerView: 4,
                },
              },
            }}
            section={section} key={section.type} />;
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

// collection ref fragment
export const COLLECTION_REF = `#graphql
fragment CollectionRef on Collection {
  handle
  title
  id
  image{
    url
  }
}
`

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
        ... on Collection {
          ...CollectionRef
        }
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
        ...CollectionRef
        products(first: 10) {
          nodes {
            title
            handle
            id
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
${COLLECTION_REF}
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
