import arrayToObject from 'app/ft-lib/ArrayToObject';
import { Colors } from 'app/ft-lib/shared';
import { useQuery } from 'react-query';
import StorefrontApi from '../api/storefront';
import { ON_METAOBJECT } from '../routes/_index';
import type { App } from '../api/type';
import Offers from '../routes/_index/Offers';

const storefront = StorefrontApi.storeFront();
export default function Offer() {
  const offers = useQuery('offers', async () => {
    const res = await storefront.query(OFFERS_QUERY);
    return res.metaobject as App.HomePageTemplate.OffersSection;
  });

  if (offers.data == null) {
    return null;
  }

  const fields = arrayToObject({ array: offers.data.fields });

  if (fields.offers?.references == null) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="offers-container w-full space-y-4">
      <Offers section={offers.data} />
    </div>
  );
}

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
