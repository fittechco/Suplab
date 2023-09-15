import { createClient, everything } from './gqlts'


const SHOPQUERY = `#graphql
query shopName{
    shop{
        name
    }
}
`



export const TypedQuery = createClient({
    url: 'https://suplab.myshopify.com/api/2023-07/graphql.json',
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': "a27f5c0f35281e7103b79896b9c21a04"
    },
})






// // gqlts --endpoint https://suplab.myshopify.com/api/2023-07/graphql.json --output ./app/api/gqlts -H "X-Shopify-Storefront-Access-Token: a27f5c0f35281e7103b79896b9c21a04"

// // gqlts --endpoint https://countries.trevorblades.com --output ./generated -H 'Authorization: Bearer myToken'

// const shopifyRes: any = await fetch(`https://suplab.myshopify.com/api/2023-04/graphql.json`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': "a27f5c0f35281e7103b79896b9c21a04"
//     },
//     body: JSON.stringify(requestBody),
// })
//     .then(async (response) => {
//         const resolveRes = await Promise.resolve(response.json());
//         return resolveRes;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// return shopifyRes