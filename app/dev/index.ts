import SearchController from "../ft-lib/ft-server/controllers/SearchController"
import ProductController from "../ft-lib/ft-server/controllers/ProductController"
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


  const res = await ProductController.getAllProducts()
  console.log(util.inspect(res, { depth: null }));


}

void storeFrontApiTest()