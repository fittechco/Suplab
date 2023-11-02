import { useEffect, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { type LoaderFunctionArgs, json } from '@shopify/remix-oxygen';
import type { App } from '../api/type';
import AboutUsHero from '../lib/about/AboutUsHero';
import Features from '../lib/about/Features';
import Services from '../lib/about/Services';
import Contact from '../lib/homepage/Contact';
import FAQ from '../lib/homepage/FAQ';

export type Shop = {
  name: string;
};

export async function loader({ context }: LoaderFunctionArgs) {
  const storefront = await context.storefront.query(SHOPQUERY);
  const { metaobject } = storefront;
  return json({
    metaobject,
  });
}

function AboutPage() {
  const { metaobject }: { metaobject: App.AboutPageTemplate.Template } =
    useLoaderData();
  const [sections, setSections] = useState<App.AboutPageTemplate.Sections>([]);

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
        if (section.type === 'hero_section') {
          return <AboutUsHero section={section} key={section.type} />;
        } else if (section.type === 'features_section') {
          return <Features section={section} key={section.type} />;
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

export default AboutPage;

export const ON_METAOBJECT = `#graphql
fragment AboutMetaobject on Metaobject {
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
query AboutShopName {
  metaobject(handle: {handle: "aboutpage", type: "page"}) {
    fields {
      type
      key
      value
      references(first: 20) {
        nodes {
          ... on Metaobject {
           ...AboutMetaobject
          }
          __typename
        }
      }
    }
  }
}
${ON_METAOBJECT}
`;
