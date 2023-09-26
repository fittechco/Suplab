import React, {useEffect, useState} from 'react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import {useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import {Colors} from 'app/ft-lib/shared';

interface ContactSectionProps {
  section: App.HomePageTemplate.ContactSection;
}

const Contact = ({section}: ContactSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const isMobile = window.innerWidth <= 768;
  const [image, setImage] = React.useState<string | null>(null);

  const backgroundImageSrc = isMobile
    ? fields.image.reference.image.url
    : fields.image.reference.image.url;
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
          borderRadius: '24px',
          boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
        className="flex md:flex-row w-full justify-center items-center relative"
      >
        <img
          className="w-full h-full object-cover"
          src={backgroundImageSrc}
          alt=""
        />
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
          }}
          className="w-full flex flex-col gap-5 md:gap-4 z-10 items-center justify-end container"
        >
          <div
            // use styles so that on mobile width is 100% and on desktop width is 55%
            style={{
              width: isMobile ? '100%' : '55%',
            }}
            className="contactSection__content mb-12 flex flex-col"
          >
            <div className="flex flex-col">
              {fields.email.value != null && (
                <div
                  style={{
                    color: Colors.textSecondary,
                    fontSize: '34px',
                  }}
                  className="flex mb-6 items-end"
                >
                  <p
                    style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '34px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                    }}
                    // className="header md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
                  >
                    Email:
                  </p>
                  <p
                    style={{
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal',
                      marginLeft: '10px',
                    }}
                  >
                    {fields.email.value}
                  </p>
                </div>
              )}
              {fields.phone.value != null && (
                <div
                  style={{
                    color: Colors.textSecondary,
                  }}
                  className="flex mb-6 items-end"
                >
                  <p
                    style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '34px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                    }}
                    // className="md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
                  >
                    Phone:
                  </p>
                  <p
                    style={{
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal',
                      marginLeft: '10px',
                    }}
                  >
                    {fields.phone.value}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              {fields.contact_button_text != null && (
                <div
                  style={{
                    backgroundColor: Colors.primary,
                    color: Colors.textSecondary,
                  }}
                  onClick={() => {
                    window.location.href = '/shop';
                  }}
                  className="w-full btn px-4 py-2 rounded-full text-main text-center w- font-bold text-xl capitalize mb-6"
                >
                  <p
                    style={{
                      color: 'var(--Off-White, #FAF9F6)',
                      fontFamily: 'Roboto Condensed',
                      fontSize: '34px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {fields.contact_button_text.value}
                  </p>
                </div>
              )}
              {fields.location_button_text != null && (
                <div
                  style={{
                    backgroundColor: Colors.secondary,
                    color: Colors.textSecondary,
                  }}
                  onClick={() => {
                    window.location.href = '/shop';
                  }}
                  className="w-full btn px-4 py-2 rounded-full text-main text-center font-bold text-xl capitalize"
                >
                  <p
                    style={{
                      color: 'var(--Off-White, #FAF9F6)',
                      fontFamily: 'Roboto Condensed',
                      fontSize: '34px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {fields.location_button_text.value}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
