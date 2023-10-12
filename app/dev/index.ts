import SearchController from '../ft-lib/ft-server/controllers/SearchController';
import ProductController from '../ft-lib/ft-server/controllers/ProductController';
import util from 'util';

const METAOBJECTQUERY = `#graphql
metafield(handle: "offers") {
    fields{
        key
        value
    }
}
`;
const LAYOUT_QUERY = `#graphql
  query testLayout {
    shop {
      id
      name
      description
      primaryDomain {
        url
      }
      brand {
        logo {
          image {
            url
          }
        }
      }
    }
  }
` as const;

async function storeFrontApiTest() {
  await fetch('https://suplab.myshopify.com/contact', {
    method: 'POST',
    body: JSON.stringify({
      "contact[email]": "testdev@gmail.com",
      "contact[comment]": "test",
      "contact[name]": "testdev",
      "contact[phone]": "1234567890",
    })
  }).then(res => {
    console.log(res);
    return res.json()
  })
    .then(res => console.log(res))

}

void storeFrontApiTest();
