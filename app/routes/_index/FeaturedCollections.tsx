import React, { useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from 'app/ft-lib/ArrayToObject';
import { Colors } from 'app/ft-lib/shared';
import ProductCard from 'app/components/ProductCard';

interface FeaturedCollectionsSectionProps {
  section: App.HomePageTemplate.SectionCollectionProducts;
}

const FeaturedCollections = ({ section }: FeaturedCollectionsSectionProps) => {
  const fields = arrayToObject({ array: section.fields });

  const [activeButton, setActiveButton] = useState('collection_one');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName: string) => ({
    color: activeButton === buttonName ? Colors.textSecondary : Colors.secondary,
    backgroundColor: activeButton === buttonName ? Colors.primary : 'transparent',
  });

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="featuredCollectionsSection w-full !container mx-auto"
    >
      <p className="ft-text-main text-3xl">{fields.title.value}</p>
      <div className="featuredCollectionsSection__buttons flex justify-between">
        <div
          style={{
            borderTop: '1px solid #e5e5e5',
            borderBottom: '1px solid #e5e5e5',
            width: '25%',
          }}
          className="flex items-center justify-between w-full"
        >
          <button
            style={getButtonStyle('collection_one')}
            className="btn pl-5 pr-5 rounded-full text-main text-center w-fit font-bold text-xl uppercase -tracking-tight"
            onClick={() => handleButtonClick('collection_one')}
          >
            {fields.collection_one_button_text.value}
          </button>
          <button
            style={getButtonStyle('collection_two')}
            className="btn pl-5 pr-5 rounded-full text-main text-center w-fit font-bold text-xl uppercase -tracking-tight"
            onClick={() => handleButtonClick('collection_two')}
          >
            {fields.collection_two_button_text.value}
          </button>
        </div>
        <div
          style={{
            padding: '8px 0',
          }}
        >
          <button
            style={{
              backgroundColor: Colors.primary,
              color: Colors.textSecondary,
            }}
            className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl uppercase"
          >
            {fields.shop_button_text.value}
          </button>
        </div>
      </div>
      <div className='featuredCollectionsSection__products'>
      </div>
    </div>
  );
};

export default FeaturedCollections;
