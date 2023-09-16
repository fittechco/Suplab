import React, {useEffect, useState} from 'react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import {useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import beforeAndAfter from '../../../public/before&after.png';

interface TestimonialsSectionProps {
  section: App.HomePageTemplate.TestimonialsSection;
}

const Testimonials = ({section}: TestimonialsSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  return (
    <div
      key={section.type}
      style={{
        height: '100vh',
        display: 'inline-flex',
        padding: '0px 13px 0.71px 0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        backgroundColor: '#F2F2F2',
      }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <p>{fields.title.value}</p>
      <div
        className="testimonialsSection__testimonials"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        {fields.testimonials.references.nodes.map((testimonial, index) => {
          return (
            <div
              className="testimonialsSection__testimonial"
              key={index}
              style={{
                width: '315px',
                height: '441.29px',
                flexShrink: '0',
                borderRadius: '17.419px',
                background: `url(${beforeAndAfter}), lightgray 50% / cover no-repeat`,
                boxShadow: '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '291.774px',
                  padding: '8px',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  gap: '5.806px',
                  borderRadius: '17.419px',
                  background: 'rgba(250, 249, 246, 0.60)',
                  backdropFilter: 'blur(3.6290323734283447px)',
                  marginBottom: '15px',
                }}
                className="testimonial__content"
              >
                {testimonial.fields.map((field, fieldIndex) => {
                  if (field.key === 'name') {
                    return (
                      <p
                        key={fieldIndex}
                        style={{
                          marginTop: '20px',
                          marginLeft: '20px',
                          fontFamily: 'Montserrat',
                          fontStyle: 'normal',
                          fontWeight: 'bold',
                          fontSize: '20px',
                          lineHeight: '24px',
                          color: '#FFFFFF',
                        }}
                      >
                        {field.value}
                      </p>
                    );
                  }
                  if (field.key === 'description') {
                    return (
                      <p
                        key={fieldIndex}
                        style={{
                          marginTop: '20px',
                          marginLeft: '20px',
                          fontFamily: 'Montserrat',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '14px',
                          lineHeight: '17px',
                          color: '#FFFFFF',
                        }}
                      >
                        {field.value}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
