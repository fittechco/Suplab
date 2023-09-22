import { createStorefrontClient } from '@shopify/hydrogen';
import { createClient, everything } from './gqlts'
import { getStorefrontHeaders, createRequestHandler } from '@shopify/remix-oxygen';


const SHOPQUERY = `#graphql
query shopName{
    shop{
        name
    }
}
`



// export const TypedQuery = createClient({
//     url: 'https://suplab.myshopify.com/api/2023-07/graphql.json',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': "a27f5c0f35281e7103b79896b9c21a04"
//     },
// })


// // gqlts --endpoint https://suplab.myshopify.com/api/2023-07/graphql.json --output ./app/api/gqlts -H "X-Shopify-Storefront-Access-Token: a27f5c0f35281e7103b79896b9c21a04"

// // gqlts --endpoint https://countries.trevorblades.com --output ./generated -H 'Authorization: Bearer myToken'

type Props = {
    query: string;
    variables?: Record<string, unknown>;
}
export async function StorefrontApi(props: Props) {
    const requestBody = {
        query: props.query,
        variables: props.variables || {}
    };
    const res: any = await fetch(`https://suplab.myshopify.com/api/2023-04/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': "a27f5c0f35281e7103b79896b9c21a04"
        },
        body: JSON.stringify(requestBody),
    })
        .then(async (response) => {
            const resolveRes = await Promise.resolve(response.json());
            return resolveRes;
        })
        .catch(error => {
            console.error('Error:', error);
        });



}

const env = process.env

const { storefront } = createStorefrontClient({
    /* Cache API instance */
    // cache: await caches.open('hydrogen'),
    /* Private Storefront API token for your store */
    /* Public Storefront API token for your store */
    publicStorefrontToken: "a27f5c0f35281e7103b79896b9c21a04",
    /* Desired Storefront API version to use */
    storefrontApiVersion: env.PUBLIC_STOREFRONT_API_VERSION,
    /* Your store domain: "https://{shop}.myshopify.com" */
    storeDomain: `https://${env.PUBLIC_STORE_DOMAIN}`,
    /* Headers to send with each request */

    /**
     * Storefront API headers containing:
     * - buyerIp: The IP address of the customer.
     * - requestGroupId: A unique ID to group all the logs for this request.
     * - cookie: The 'cookie' header from the request.
     */
});


export default storefront;