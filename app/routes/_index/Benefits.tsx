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
        marginTop: '4%',
      }}
      className="benefitSection w-full !container mx-auto"
    >
      <p className="ft-text-main">{fields.title.value}</p>

      <div className="benefitSection__benefits">
        {fields.benefits.references.nodes.map((benefit, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? 'row' : 'row-reverse';
          const benefitFields = arrayToObject({array: benefit.fields});
          const imageUrl =
            benefitFields.image?.reference?.image?.url || benefitImage1; // Use the actual image URL or a default if not available
          return (
            // <div
            //   className="benefitSection__benefit w-full"
            //   key={index}
            //   style={{
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "flex-start",
            //     marginTop: "40px",
            //     gap: "39px",
            //     flexDirection: flexDirection,
            //   }}
            // >
            //   <div
            //     className="benefit-image rounded-3xl flex justify-center items-center md:w-1/2 w-3/4"
            //     style={{
            //       background: "#4F4F4F",
            //       boxShadow: "0px 7px 14px 0px rgba(0, 0, 0, 0.16)",
            //       backdropFilter: "blur(2.5px)",
            //       objectFit: "contain",
            //     }}
            //   >
            //     <img src={imageUrl} alt="img" className='w-full h-full' style={{
            //       borderRadius: "24px",
            //     }}/>
            //   </div>

            //   <div
            //     style={{
            //       padding: "20px",
            //       gap: "20px",
            //     }}
            //     className='flex flex-col justify-center md:w-1/2 w-3/4'
            //   >
            //     <p className="benefit_title_text md:text-4xl text-2xl">{benefitFields.title?.value}</p>
            //     <p className="benefit_description_text">{benefitFields.description?.value}</p>
            //   </div>
            // </div>

            <div className="benefitSection__benefit my-16 flex items-center items-center justify-center bg-red-800">
              <div className="w-[100%] flex items-center items-center content-center bg-red-100 relative">
                <div className="w-[70%] h-[300px] bg-blue-100"></div>

                <div className="w-full h-full absolute flex items-center justify-end">
                  <div className="w-[40%] h-[100px] bg-slate-400"></div>
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
