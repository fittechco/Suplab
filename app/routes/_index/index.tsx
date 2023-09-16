
import React, { useEffect, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero from './Hero';
import { App } from '../../api/type';
import ProductList from '../../components/ProductList';
import Collections from '../../components/Collections';
import Benefits from './Benefits';
import FeaturedCollections from './FeaturedCollections';
import Testimonials from './Testimonials';
import ShopTheGoal from './ShopTheGoal';
import InstagramSection from './Offers';
import Contact from './Contact';
import FAQ from './FAQ';
import Promotion from './Promotion';
import Offers from './Offers';

export type Shop = {
  name: string;
};

export async function loader({ context }: LoaderArgs) {
  const storefront =
    await context.storefront.query(SHOPQUERY);
  const { metaobject } = storefront;
  return json({
    metaobject,
  });
}

function HomePage() {
  const { metaobject }: { metaobject: App.HomePageTemplate.Template } =
    useLoaderData();
  const [sections, setSections] = useState<App.HomePageTemplate.Sections>([]);


  useEffect(() => {
    metaobject.fields.forEach((field) => {
      if (field.key === 'sections') {
        setSections(field.references.nodes);
        console.log(field.references.nodes);
      }
    });
  }, [metaobject.fields]);

  return (
    <div className="h-full w-full space-y-6">
      {sections.map((section) => {
        if (section.type === 'promotion_section') {
          return <Promotion section={section} key={section.type} />;
        }

        if (section.type === 'hero_section') {
          return <Hero section={section} key={section.type} />;
        }

        if (section.type === 'benefits_section') {
          return <Benefits section={section} key={section.type} />;
        }

        if (section.type === 'testimonials_section') {
          return <Testimonials section={section} key={section.type} />;
        }

        if (section.type === 'shop_the_goal_section') {
          return <ShopTheGoal section={section} key={section.type} />;
        }

        if (section.type === 'offers_section') {
          return <Offers section={section} key={section.type} />;
        }

        if (section.type === 'contact_section') {
          return <Contact section={section} key={section.type} />;
        }


      })}
    </div>
  );
}

export default HomePage;

const SHOPQUERY = `#graphql
query shopName{
  metaobject(handle: {handle: "homepage", type: "page"}) {
    fields {
      type
      key
      value
      references(first: 20) {
        nodes {
          ... on Metaobject {
            type
            fields {
              key
              value
              type
              references(first: 20) {
                nodes {
                  ... on Metaobject {
                    type
                    fields {
                      key
                      value
                      type
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
          __typename
        }
      }
    }
  }
}
`;