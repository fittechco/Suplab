import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import {Colors} from '../../ft-lib/shared';
import type {App} from '../../api/type';
import {useRootLoaderData} from '~/app/root';

interface FeaturesHeroSectionProps {
  section: App.AboutPageTemplate.FeaturesSection;
}

const Features = ({section}: FeaturesHeroSectionProps) => {
  const fields = arrayToObject({array: section.fields});

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
      }}
      className="featureSection w-full h-full !container mx-auto"
    >
      {fields.title != null && (
        <p className="ft-text-main md:text-3xl text-2xl">
          {fields.title.value}
        </p>
      )}

      <div className="featureSection__features">
        {fields.features?.references.nodes.map((feature, index) => {
          const isEven = index % 2 === 0;
          const featureFields = arrayToObject({array: feature.fields});

          const imageUrl = featureFields.image?.reference?.image?.url;

          const paddingStyle = `pl-0 ${isEven ? 'md:pl-10' : 'md:pr-10'}`;

          const flexDirection = `flex-col ${
            isEven ? 'md:flex-row' : 'md:flex-row-reverse'
          }`;

          return (
            <div
              className="featureSection__feature my-[80px] md:my-10 flex items-center md:justify-center justify-between"
              key={feature.id}
            >
              <div
                className={`${flexDirection} w-[100%] flex items-center content-center relative`}
              >
                {imageUrl && (
                  <div className="w-full h-[195px] md:w-1/2 md:h-full">
                    <img
                      src={imageUrl}
                      alt="Suplab Supplements Store Lebanon"
                      className="w-full h-full rounded-3xl"
                    />
                  </div>
                )}

                <div
                  className={`${flexDirection}  ${paddingStyle} w-[90%] md:w-full h-full absolute flex md:top-0 top-[25%] items-center justify-end md:justify-end md:items-start`}
                >
                  <div className="feature_content w-full md:w-1/2 p-2 md:p-4">
                    {featureFields.title && (
                      <p className="feature_title_text">
                        {featureFields.title?.value}
                      </p>
                    )}
                    {featureFields.description && (
                      <p className="feature_description_text">
                        {featureFields.description?.value}
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

export default Features;
