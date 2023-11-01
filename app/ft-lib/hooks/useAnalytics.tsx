import { useLocation } from '@remix-run/react';
import type { ShopifyPageViewPayload } from '@shopify/hydrogen';
import {
    AnalyticsEventName,
    getClientBrowserParameters,
    sendShopifyAnalytics,
    useShopifyCookies,
} from '@shopify/hydrogen';
import { useEffect, useRef } from 'react';
import { usePageAnalytics } from '~/app/utils';


export function useAnalytics(hasUserConsent: boolean) {
    useShopifyCookies({ hasUserConsent });

    const location = useLocation();
    const lastLocationKey = useRef<string>('');
    const pageAnalytics = usePageAnalytics();

    // Page view analytics
    // We want useEffect to execute only when location changes
    // which represents a page view
    useEffect(() => {
        if (lastLocationKey.current === location.key) return;

        lastLocationKey.current = location.key;

        const payload: ShopifyPageViewPayload = {
            shopId: '',
            currency: "USD",
            hasUserConsent: true,
            ...getClientBrowserParameters(),
            ...pageAnalytics,
        };

        console.log(
            {
                eventName: AnalyticsEventName.PAGE_VIEW,
                payload
            }
        );
        sendShopifyAnalytics({
            eventName: AnalyticsEventName.PAGE_VIEW,
            payload,
        });
    }, [location, pageAnalytics]);
}