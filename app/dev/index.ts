import SearchController from "../ft-lib/ft-server/controllers/SearchController"
import util from "util"

const METAOBJECTQUERY = `#graphql
metafield(handle: "offers") {
    fields{
        key
        value
    }
}
`
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
` as const


async function storeFrontApiTest() {


  // todo - search is not working
  const res = await SearchController.searchProducts({ query: "whey" })
  console.log(util.inspect(res, { depth: null }));


}

void storeFrontApiTest()