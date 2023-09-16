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
        marginTop: "115px",
        display: "flex",
        height: "215px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        background: "var(--Main-Color, #93C147)",
        boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.16)"
      }}
      className="promotionSection max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <p className="ft-text-main">
          {fields.title.value}
        </p>
    </div>
  );
};

export default Promotion;

