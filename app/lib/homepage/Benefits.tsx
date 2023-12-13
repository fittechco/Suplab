import React, { useEffect, useState } from 'react';
import { LoaderFunctionArgs, json } from '@shopify/remix-oxygen';
import type { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import benefitImage1 from '../../../public/florian-kurrasch-HyivyCRdz14-unsplash.png';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';

interface BenefitsSectionProps {
  section: App.HomePageTemplate.BenefitsSection;
}

const Benefits = ({ section }: BenefitsSectionProps) => {
  const fields = arrayToObject({ array: section.fields });

  if (fields.benefits == null) {
    return null;
  }

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
      }}
      className="benefitSection w-full h-full !container mx-auto"
    >
      {fields.title != null && fields.benefits != null && (
        <p className="section-heading ft-text-main md:text-3xl text-2xl">
          {fields.title.value}
        </p>
      )}
      <div className="benefitSection__benefits">
        {fields.benefits && fields.benefits.references.nodes.map((benefit, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? 'row' : 'row-reverse';
          const benefitFields = arrayToObject({ array: benefit.fields });
          const imageUrl =
            benefitFields.image?.reference?.image?.url || benefitImage1;

          const paddingStyle = isEven
            ? { paddingLeft: '40px' }
            : { paddingRight: '40px' };

          return (
            <div
              className="benefitSection__benefit my-10 flex items-center justify-center"
              key={benefit.id}
            >
              <div
                className="w-[100%] flex items-center content-center relative"
                style={{ flexDirection }}
              >
                {imageUrl && (
                  <div className="w-[70%] aspect-[2/1.5] md:w-1/2 md:h-[420px]">
                    <LazyImage
                      alt={benefitFields.title?.value || 'Suplab Supplements'}
                      src={resizeImage(imageUrl, 600)}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                )}

                <div
                  className="w-full h-full absolute flex items-center justify-end md:items-start z-50"
                  style={{ flexDirection, ...paddingStyle }}
                >
                  <div className="benefit_content w-[55%] md:w-1/2 p-2 md:p-4">
                    {benefitFields.title && (
                      <p
                        className="benefit_title_text">
                        {benefitFields.title?.value}
                      </p>
                    )}
                    {benefitFields.description && (
                      <p className="benefit_description_text">
                        {benefitFields.description?.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
