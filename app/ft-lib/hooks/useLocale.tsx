// write below the code to get the locale from the session and redirect to the locale path

import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {countries} from '../data/countries';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {redirect, json} from '@shopify/remix-oxygen';

export const loader = async ({request, context}: LoaderFunctionArgs) => {
  const {session} = context;
  const formData = await request.formData();

  // Make sure the form request is valid
  const languageCode = formData.get('language');
  const countryCode = formData.get('country');

  // Determine where to redirect to relative to where user navigated from
  // ie. hydrogen.shop/collections -> ca.hydrogen.shop/collections
  const path = formData.get('path');
  const toLocale = countries[`${languageCode}`.toLowerCase()];

  const cartId = await session.get('cartId');

  // Update cart buyer's country code if there is a cart id
  //   if (cartId) {
  //     await updateCartBuyerIdentity(context, {
  //       cartId,
  //       buyerIdentity: {
  //         countryCode,
  //       },
  //     });
  //   }

  const redirectUrl = new URL(
    `${toLocale.pathPrefix || ''}${path}`,
    `https://${toLocale.host}`,
  );

  return redirect(redirectUrl.toString(), 302);
};

export default function useLocale() {
  const data = useLoaderData();
  return json(data);
}
