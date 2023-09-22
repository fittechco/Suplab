import storefront from "../api/storefrontApi";

const METAOBJECTQUERY = `#graphql
metafield(handle: "offers") {
    fields{
        key
        value
    }
}
`
const LAYOUT_QUERY = `#graphql
  query layout {
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
` as const


async function storeFrontApiTest() {


  const res = await storefront.query(LAYOUT_QUERY)

}

void storeFrontApiTest()