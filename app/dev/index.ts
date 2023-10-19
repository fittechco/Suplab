import SearchController from '../ft-lib/ft-server/controllers/SearchController';
import ProductController from '../ft-lib/ft-server/controllers/ProductController';
import util from 'util';
import JudgeMeService from '../ft-lib/apps/JudgeMe';

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
  const JA = new JudgeMeService()
  // JA.getProductReviews("8598241116473").then(console.log)
  JA.getWidgetSettings().then(console.log)
}

void storeFrontApiTest();
