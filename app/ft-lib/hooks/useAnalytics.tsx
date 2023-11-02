import { useLocation } from '@remix-run/react';
import type { ShopifyPageViewPayload } from '@shopify/hydrogen';
import {
    AnalyticsEventName,
    getClientBrowserParameters,
    sendShopifyAnalytics,
    useShopifyCookies,
} from '@shopify/hydrogen';
import { useEffect, useRef } from 'react';
import { usePageAnalytics } from './usePageAnalytics';


export function useAnalytics(hasUserConsent: boolean) {
    useShopifyCookies({ hasUserConsent });

    const location = useLocation();
    const lastLocationKey = useRef<string>('');
    const pageAnalytics = usePageAnalytics({ hasUserConsent: true });

    // Page view analytics
    // We want useEffect to execute only when location changes
    // which represents a page view
    useEffect(() => {
        if (lastLocationKey.current === location.key) return;

        lastLocationKey.current = location.key;

        const payload: ShopifyPageViewPayload = {
            ...getClientBrowserParameters(),
            ...pageAnalytics,
        };

        console.log(payload, "payload");
        sendShopifyAnalytics({
            eventName: AnalyticsEventName.PAGE_VIEW,
            payload,
        });
    }, [location, pageAnalytics]);
}