import type {RemixLinkProps} from '@remix-run/react/dist/components';
import {UseShopStore} from '../root';
import {RemixLink} from './RemixLink';

type Props = RemixLinkProps & {
  routeLoader?: boolean;
};

export default function Link(props: Props) {
  return (
    <RemixLink
      {...props}
      onClick={() => {
        if (props.routeLoader === true) {
          UseShopStore.setState({routesLoader: true});
        }
      }}
    />
  );
}
