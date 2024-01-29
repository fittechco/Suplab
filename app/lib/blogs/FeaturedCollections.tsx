import React, {useState} from 'react';
import ProductsSwiper from 'app/components/ProductsSwiper';
import Link from '~/app/components/Link';
import {Colors} from 'app/ft-lib/shared';
import type {ProductQuery} from '~/storefrontapi.generated';
import {useRootLoaderData} from '~/app/root';

type ActiveCollectionsName = 'collection_one' | 'collection_two';

export type FeaturedCollectionsProps = {
  handle: string;
  title: string;
  id: string;
  image: {
    url: string;
  };
  products: {
    nodes: ProductQuery['product'][] | null;
  };
};

const FeaturedCollections = ({
  collectionProducts,
}: {
  collectionProducts: FeaturedCollectionsProps[];
}) => {
  const [activeButton, setActiveButton] =
    useState<ActiveCollectionsName>('collection_one');

  const handleButtonClick = (buttonName: ActiveCollectionsName) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName: string) => ({
    color:
      activeButton === buttonName ? Colors.textSecondary : Colors.secondary,
    backgroundColor:
      activeButton === buttonName ? Colors.primaryDark : 'transparent',
  });

  const rootData = useRootLoaderData();
  const {locale} = rootData;

  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <div
      className="featuredCollectionsSection w-full mx-auto"
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
    >
      <div className="featuredCollectionsSection__buttons mb-10">
        <div
          className={`flex justify-between items-center ${
            isArabic ? 'arFlexDirection' : 'enFlexDirection'
          }`}
        >
          {isArabic ? (
            <p className="section-heading ft-text-main md:text-3xl text-2xl w-fit uppercase">
              مجموعات مميزة
            </p>
          ) : (
            <p className="section-heading ft-text-main md:text-3xl text-2xl w-fit uppercase">
              Featured Collections
            </p>
          )}
          {isArabic ? (
            <Link
              style={{
                backgroundColor: Colors.primary,
                color: Colors.textSecondary,
              }}
              to={`/collections/${
                activeButton === 'collection_one'
                  ? collectionProducts[0]?.handle
                  : activeButton === 'collection_two' &&
                    collectionProducts[1]?.handle
              }`}
              className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize shrink-0"
            >
              تسوق كل شيء
            </Link>
          ) : (
            <Link
              style={{
                backgroundColor: Colors.primary,
                color: Colors.textSecondary,
              }}
              to={`/collections/${
                activeButton === 'collection_one'
                  ? collectionProducts[0]?.handle
                  : activeButton === 'collection_two' &&
                    collectionProducts[1]?.handle
              }`}
              className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize shrink-0"
            >
              Shop All
            </Link>
          )}
        </div>
        <div
          className={`flex ${isArabic ? 'arFlexDirection' : 'enFlexDirection'}`}
        >
          <div
            style={{
              width: 'fit-content',
            }}
            className="flex items-center gap-5 w-full featuredCollectionsButtonsContainer"
          >
            <button
              style={getButtonStyle('collection_one')}
              className="btn my-1 py-1.5 md:px-4 px-3 rounded-full text-main text-center w-fit font-bold md:text-lg text-xs uppercase -tracking-tight"
              onClick={() => handleButtonClick('collection_one')}
            >
              {collectionProducts[0]?.title}
            </button>
            <button
              style={getButtonStyle('collection_two')}
              className="btn my-1 py-1.5 md:px-4 px-3 rounded-full text-main text-center w-fit font-bold md:text-lg text-xs uppercase -tracking-tight"
              onClick={() => handleButtonClick('collection_two')}
            >
              {collectionProducts[1]?.title}
            </button>
          </div>
        </div>
      </div>
      <div className="featuredCollectionsSection__products">
        {activeButton === 'collection_one' ? (
          <ProductsSwiper products={collectionProducts[0].products.nodes} />
        ) : (
          <ProductsSwiper products={collectionProducts[1].products.nodes} />
        )}
      </div>
    </div>
  );
};

export default FeaturedCollections;
