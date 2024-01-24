import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import type {App} from '../api/type';

export async function loader({context}: LoaderFunctionArgs) {
  const res = await context.storefront.query(GET_OFFERS_QUERY, {
    cache: {
      maxAge: 60 * 60 * 24,
      staleWhileRevalidate: 60 * 60,
    },
  });
  return res.metaobject as App.HomePageTemplate.OffersSection;
}

function offers() {
  return <div>offers</div>;
}

export default offers;

export const GET_OFFERS_QUERY = `#graphql
query GetOffers ($country: CountryCode, $language: LanguageCode) 
    @inContext(country: $country, language: $language) {
    metaobject(handle: {handle:"offers", type:"offers_section"}) {
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
        image {
          url
        }
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
  }
`;
