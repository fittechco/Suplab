import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';

interface PromotionSectionProps {
  section: App.HomePageTemplate.PromotionsSection;
}

const Promotion = ({section}: PromotionSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  return (
    <div 
      key={section.type}
      style={{
        height: '20vh',
      }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <p>
          {fields.title.value}
        </p>
    </div>
  );
};

export default Promotion;

