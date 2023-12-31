import { Link as RemixLink } from '@remix-run/react'
import type { RemixLinkProps } from '@remix-run/react/dist/components'
import React from 'react'
import { UseShopStore } from '../root';

type Props = RemixLinkProps & {
    routeLoader?: boolean;
}


export default function Link(props: Props) {
    return (
        <RemixLink {...props} onClick={() => {
            if (props.routeLoader === true) {
                UseShopStore.setState({ routesLoader: true });
            }
        }} />
    )
}
