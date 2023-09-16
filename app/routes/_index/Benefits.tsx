import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import benefitImage1 from '../../../public/florian-kurrasch-HyivyCRdz14-unsplash.png';

interface BenefitsSectionProps {
  section: App.HomePageTemplate.BenefitsSection;
}

const Benefits = ({ section }: BenefitsSectionProps) => {
  console.log(section);
  const fields = arrayToObject({ array: section.fields });
  return (
    <div
      key={section.type}
      style={{
        height: "100%",
      }}
      className="benefitSection max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <p className="ft-text-main">{fields.title.value}</p>

      <div className="benefitSection__benefits">
        {fields.benefits.references.nodes.map((benefit, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? "row" : "row-reverse";
          const refs = arrayToObject({ array: benefit.fields });
          return (
            <div
              className="benefitSection__benefit"
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "40px",
                gap: "39px",
                flexDirection: flexDirection,
              }}
            >
              {/* Image div */}
              <div
                className="benefit-image"
                style={{
                  width: "661px",
                  height: "450px",
                  flexShrink: "0",
                }}
              >
                {benefit.fields.map((field, fieldIndex) => {
                  console.log(field, "field");
                  if (field.key === 'image') {
                    return <img src={benefitImage1} alt="img" />;
                  }
                })}
              </div>

              {/* Title and Description div */}
              <div
                style={{
                  display: "flex",
                  width: "654px",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                {benefit.fields.map((field, fieldIndex) => {
                  console.log(field, "field");
                  if (field.key === 'title') {
                    return (
                      <p className="benefit_title_text" key={fieldIndex}>
                        {field.value}
                      </p>
                    );
                  }

                  if (field.key === 'description') {
                    return (
                      <p className="benefit_description_text" key={fieldIndex}>
                        {field.value}
                      </p>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
