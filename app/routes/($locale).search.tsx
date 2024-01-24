import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import SearchController from '../ft-lib/ft-server/controllers/SearchController';
import invariant from 'tiny-invariant';

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const SC = new SearchController({storefront: context.storefront});
  // getting the search value from the url
  const searchParams = new URL(request.url).searchParams;
  // getting the search value from the url
  const q = searchParams.get('q');
  invariant(q != null, 'search query is null');
  const res = await SC.searchProducts({query: q});
  return res;
}

export default function Search() {
  return <div>search</div>;
}
