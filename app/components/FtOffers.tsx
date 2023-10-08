import StorefrontApi from 'app/api/storefront';
import type {App} from 'app/api/type';
import arrayToObject from 'app/ft-lib/ArrayToObject';
import FTicons from 'app/ft-lib/FTicon';
import {Colors} from 'app/ft-lib/shared';
import {OFFERS_QUERY} from 'app/layout/MobileNav';
import {useQuery} from 'react-query';

const storefront = StorefrontApi.storeFront();

export default function Offer() {
  const offers = useQuery('offers', async () => {
    const res = await StorefrontApi.storeFront().query(OFFERS_QUERY);
    return res.metaobject;
  });

  if (offers.data == null) {
    return null;
  }

  const fields = arrayToObject({array: offers.data?.fields});

  if (fields.offers.references == null) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="offers-container w-full space-y-4">
      <div className="offers-header flex justify-between items-center px-4">
        <h3
          style={{
            color: Colors.text,
          }}
          className="text-base font-bold"
        >
          {fields.title.value}
        </h3>
        <button
          style={{
            color: Colors.textSecondary,
            backgroundColor: Colors.primary,
            borderRadius: '9999px',
          }}
          className="main-button ft-text-main text-base px-3 py-1.5"
        >
          {fields.button_text.value}
        </button>
      </div>
      <div
        style={{
          margin: 0,
        }}
        className="offers-wrapper w-full flex overflow-x-scroll  snap-proximity snap-x snap-center gap-2 px-4 py-4"
      >
        {fields.offers.references.nodes.map((offer, index) => {
          const offerfields = arrayToObject({array: offer.fields});
          return (
            <div key={index} className="offer w-full flex-shrink-0 card-shadow">
              {/* todo add image skeleton */}
              {offerfields.image.reference?.image != null && (
                <img src={offerfields.image.reference.image.url} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
