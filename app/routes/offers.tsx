import type { LoaderFunctionArgs } from '@shopify/remix-oxygen'
import React from 'react'
import StorefrontApi from '../api/storefront';
import type { App } from '../api/type';

export async function loader({ context }: LoaderFunctionArgs) {
  const res = await context.storefront.query(OFFERS_QUERY, {
    cache: {
      maxAge: 60 * 60 * 24,
      staleWhileRevalidate: 60 * 60,
    }
  });
  return res.metaobject as App.HomePageTemplate.OffersSection;
}

function offers() {
  return (
    <div>offers</div>
  )
}

export default offers

export const OFFERS_QUERY = `#graphql
query Offers {
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
