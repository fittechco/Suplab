import { useLocation } from '@remix-run/react'
import { useNonce } from '@shopify/hydrogen'
import { useEffect } from 'react'

type Props = {
    environment: "development" | "production"
    gtmTrackingId?: string
}

export function ExternalScripts(props: Props) {
    const location = useLocation()
    const { environment, gtmTrackingId } = props
    const nonce = useNonce()

    useEffect(() => {
        if (environment !== 'development' && gtmTrackingId?.length) {
            const gtmScript = document.getElementById('g-tag-manajer') as HTMLScriptElement | null
            if (gtmScript != null) {
                gtmScript.innerHTML = `
                    (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                    })(window, document, 'script', 'dataLayer', '${gtmTrackingId}', );`


                gtmScript.type = 'text/javascript'
            }
        }
    }, [location, gtmTrackingId, environment, nonce])

    return environment === 'development' || !gtmTrackingId ? null : (
        <>
            {/* GOOGLE TAG MANAGER NOSCRIPT */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${gtmTrackingId}`}
                    title='google-tag-manager'
                    height="0" width="0"
                    style={{
                        display: "none",
                        visibility: "hidden"
                    }} />
            </noscript>
        </>
    )
}