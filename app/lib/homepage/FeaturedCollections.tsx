import React, { useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import type { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from 'app/ft-lib/ArrayToObject';
import { Colors } from 'app/ft-lib/shared';
import ProductCard from 'app/components/ProductCard';
import ProductsSwiper from 'app/components/ProductsSwiper';
import Link from '~/app/components/Link';

interface FeaturedCollectionsSectionProps {
  section: App.HomePageTemplate.SectionCollectionProducts;
}

type ActiveCollectionsName = "collection_one" | "collection_two"

const FeaturedCollections = ({ section }: FeaturedCollectionsSectionProps) => {
  const fields = arrayToObject({ array: section.fields });

  const collectionOneProducts = fields.collection_one?.reference.products.nodes || [];
  const collectionTwoProducts = fields.collection_two?.reference.products.nodes || [];

  const [activeButton, setActiveButton] = useState<ActiveCollectionsName>('collection_one');

  const handleButtonClick = (buttonName: ActiveCollectionsName) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName: string) => ({
    color:
      activeButton === buttonName ? Colors.textSecondary : Colors.secondary,
    backgroundColor:
      activeButton === buttonName ? Colors.primaryDark : 'transparent',
  });

  if (fields.collection_one == null && fields.collection_two == null) {
    return null;
  }

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="featuredCollectionsSection w-full mx-auto"
    >
      <div className="featuredCollectionsSection__buttons container mb-10">
        <div className="flex justify-between items-center">
          {fields.title != null && (
            <p className="ft-text-main md:text-3xl text-2xl w-fit">
              {fields.title.value}
            </p>
          )}
          {fields.shop_button_text != null && (
              <Link
                style={{
                  backgroundColor: Colors.primary,
                  color: Colors.textSecondary,
                }}
                to={`/collections/${activeButton === 'collection_one' ? fields.collection_one?.reference.handle : activeButton === "collection_two" && fields.collection_two?.reference.handle}`}
                className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize shrink-0"
              >
                {fields.shop_button_text.value}
              </Link>
          )}
        </div>
        <div className="flex">
          <div
            style={{
              width: 'fit-content',
            }}
            className="flex items-center gap-5 w-full featuredCollectionsButtonsContainer"
          >
            {fields.collection_one_button_text != null && (
              <button
                style={getButtonStyle('collection_one')}
                className="btn my-1 py-1.5 md:px-4 px-3 rounded-full text-main text-center w-fit font-bold md:text-lg text-xs uppercase -tracking-tight"
                onClick={() => handleButtonClick('collection_one')}
              >
                {fields.collection_one_button_text.value}
              </button>
            )}
            {fields.collection_two_button_text != null && (
              <button
                style={getButtonStyle('collection_two')}
                className="btn my-1 py-1.5 md:px-4 px-3 rounded-full text-main text-center w-fit font-bold md:text-lg text-xs uppercase -tracking-tight"
                onClick={() => handleButtonClick('collection_two')}
              >
                {fields.collection_two_button_text.value}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="featuredCollectionsSection__products">
        {activeButton === 'collection_one' ? (
          <div>
            <ProductsSwiper products={collectionOneProducts} />
          </div>
        ) : (
          <div>
            <ProductsSwiper products={collectionTwoProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCollections;
