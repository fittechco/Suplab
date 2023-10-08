import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import { App } from '../../api/type';

interface FeaturesHeroSectionProps {
  section: App.AboutPageTemplate.FeaturesSection;
}

const Features = ({ section }: FeaturesHeroSectionProps) => {
  console.log(section);
  const fields = arrayToObject({ array: section.fields });

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
        {fields.features.references.nodes.map((feature, index) => {
          const isEven = index % 2 === 0;
          const featureFields = arrayToObject({ array: feature.fields });
          console.log(featureFields, 'fields');

          const imageUrl = featureFields.image?.reference?.image?.url;

          const paddingStyle = 
          window.innerWidth < 768 ? { paddingLeft: '0px' } :
          isEven
            ? { paddingLeft: '40px' }
            : { paddingRight: '40px' };

          const flexDirection = window.innerWidth < 768 ? 'column' : isEven ? 'row' : 'row-reverse';

          return (
            <div
              className="featureSection__feature my-[80px] md:my-10 flex items-center md:justify-center justify-between"
              key={index}
            >
              <div
                className="w-[100%] flex items-center content-center relative"
                style={{ flexDirection: flexDirection }}
              >
                {imageUrl && (
                  <div className="w-full h-[195px] md:w-1/2 md:h-full">
                    <img
                      src={imageUrl}
                      alt="img"
                      className="w-full h-full rounded-3xl"
                    />
                  </div>
                )}

                <div
                  className="w-[90%] md:w-full h-full absolute flex md:top-0 top-[25%] items-center justify-end md:justify-end md:items-start"
                  style={{ flexDirection: flexDirection, ...paddingStyle }}
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
