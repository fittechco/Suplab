import React, {useEffect, useState} from 'react';
import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import type {App} from '../../api/type';
import {Link, useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import {Colors} from 'app/ft-lib/shared';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import {useRootLoaderData} from '~/app/root';

interface ContactSectionProps {
  section: App.HomePageTemplate.ContactSection;
}

const Contact = ({section}: ContactSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const [image, setImage] = React.useState<string | null>(null);

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        marginBottom: '40px',
        height: '680px',
      }}
      className="contactSection w-full !container mx-auto"
    >
      <div
        style={{
          boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
          overflow: 'hidden',
        }}
        className="flex md:flex-row w-full h-full justify-center items-center relative rounded-2xl overflow-hidden"
      >
        {fields.image?.reference.image.url != null && (
          <LazyImage
            alt="Suplab Supplements Store Contact Us"
            className="w-full h-full object-cover rounded-2xl"
            src={resizeImage(fields.image?.reference.image.url, 800)}
          />
        )}
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          className="w-full h-full top-0 left-0 flex flex-col rounded-2xl overflow-hidden gap-5 md:gap-4 items-center justify-end container z-50"
        >
          <div className="contactSection__content w-full md:w-[55%] md:mb-12 mb-6 flex flex-col ">
            <div className="flex flex-col">
              {fields.email != null && (
                <div
                  style={{
                    color: Colors.textSecondary,
                  }}
                  className="flex mb-6 items-end"
                >
                  <p
                    style={{
                      fontFamily: 'Roboto Condensed',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {isArabic ? 'البريد الإلكتروني:' : 'Email:'}
                  </p>
                  <p
                    style={{
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal',
                      marginLeft: '10px',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {fields.email.value}
                  </p>
                </div>
              )}
              {fields.phone != null && (
                <div
                  style={{
                    color: Colors.textSecondary,
                  }}
                  className="flex mb-6 items-end"
                >
                  <p
                    style={{
                      fontFamily: 'Roboto Condensed',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {isArabic ? 'رقم الهاتف:' : 'Phone:'}
                  </p>
                  <p
                    style={{
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal',
                      marginLeft: '10px',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {fields.phone.value}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              {fields.contact_button_text != null && (
                <Link
                  to={`${fields.contact_url?.value}`}
                  target="_blank"
                  style={{
                    backgroundColor: Colors.primary,
                    color: Colors.textSecondary,
                    cursor: 'pointer',
                  }}
                  className="w-full btn px-4 py-2 rounded-full text-main text-center w- font-bold text-xl capitalize mb-6"
                >
                  <p
                    style={{
                      color: 'var(--Off-White, #FAF9F6)',
                      fontFamily: 'Roboto Condensed',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {fields.contact_button_text.value}
                  </p>
                </Link>
              )}
              {fields.location_button_text != null && (
                <Link
                  to={`${fields.location_url?.value}`}
                  target="_blank"
                  style={{
                    backgroundColor: Colors.secondary,
                    color: Colors.textSecondary,
                  }}
                  className="w-full btn px-4 py-2 rounded-full text-main text-center font-bold text-xl capitalize"
                >
                  <p
                    style={{
                      color: 'var(--Off-White, #FAF9F6)',
                      fontFamily: 'Roboto Condensed',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}
                    className="md:text-3xl text-xl"
                  >
                    {fields.location_button_text.value}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
