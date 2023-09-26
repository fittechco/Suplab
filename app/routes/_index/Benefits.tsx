import React, {useEffect, useState} from 'react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import {useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import benefitImage1 from '../../../public/florian-kurrasch-HyivyCRdz14-unsplash.png';

interface BenefitsSectionProps {
  section: App.HomePageTemplate.BenefitsSection;
}

const Benefits = ({section}: BenefitsSectionProps) => {
  console.log(section);
  const fields = arrayToObject({array: section.fields});

  return (
    <div
      key={section.type}
      style={{
        height: '100%',
        marginTop: '40px',
      }}
      className="benefitSection w-full !container mx-auto"
    >
      <p className="ft-text-main text-3xl">{fields.title.value}</p>

      <div className="benefitSection__benefits">
        {fields.benefits.references.nodes.map((benefit, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? 'row' : 'row-reverse';
          const benefitFields = arrayToObject({array: benefit.fields});
          const imageUrl =
            benefitFields.image?.reference?.image?.url || benefitImage1;

          const paddingStyle = isEven
            ? {paddingLeft: '40px'}
            : {paddingRight: '40px'};

          return (
            <div
              className="benefitSection__benefit my-10 flex items-center justify-center"
              key={index}
            >
              <div
                className="w-[100%] flex items-center content-center relative"
                style={{flexDirection: flexDirection}}
              >
                <div className="w-[70%] h-[195px] md:w-1/2 md:h-full">
                  <img
                    src={imageUrl}
                    alt="img"
                    className="w-full h-full"
                    style={{
                      borderRadius: '24px',
                    }}
                  />
                </div>

                <div
                  className="w-full h-full absolute flex items-center justify-end md:items-start"
                  style={{flexDirection: flexDirection, ...paddingStyle}}
                >
                  <div className="benefit_content w-[55%] md:w-1/2 p-2 md:p-4">
                    <p className="benefit_title_text">
                      {benefitFields.title?.value}
                    </p>
                    <p className="benefit_description_text">
                      {benefitFields.description?.value}
                    </p>
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
