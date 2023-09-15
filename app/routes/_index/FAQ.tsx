import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p>
        FAQ Section
      </p>
    </div>
  );
};

export default FAQ;
