import arrayToObject from 'app/ft-lib/ArrayToObject';
import Offers from '../lib/homepage/Offers';
import { useFetcher } from '@remix-run/react';
import type { loader as offersLoader } from '~/app/routes/($locale).offers';
import { useEffect } from 'react';

export default function Offer() {
  const fetcher = useFetcher<typeof offersLoader>();

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load("/offers")
    }
  }, [fetcher])

  if (fetcher.data == null) {
    return null;
  }

  const fields = arrayToObject({ array: fetcher.data.fields });

  if (fields.offers?.references == null) {
    return <div>Loading ...</div>;
  }


  return (
    <div className="offers-container w-full space-y-4">
      <Offers swiperOptions={{
        spaceBetween: 10,
        slidesPerView: 1.5,
      }} section={fetcher.data} />
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
