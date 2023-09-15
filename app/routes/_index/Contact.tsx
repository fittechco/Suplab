import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';

interface ContactSectionProps {
  section: App.HomePageTemplate.ContactSection;
}

const Contact = ({section}: ContactSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  return (
    <div 
      key={section.type}
      style={{
        height: '100vh',
      }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <p>
          {fields.email.value}
        </p>
    </div>
  );
};

export default Contact;

