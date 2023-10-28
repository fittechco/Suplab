import type { EntryContext } from '@shopify/remix-oxygen';
import { RemixServer } from '@remix-run/react';
import isbot from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { createContentSecurityPolicy } from '@shopify/hydrogen';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const { nonce, header, NonceProvider } = createContentSecurityPolicy({
    // we need to allow google fonts because we are using them in the app
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://cdn.shopify.com',
      'https://cdn.jsdelivr.net/',
      "https://fonts.googleapis.com",
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    connectSrc: [
      "https://monorail-edge.shopifysvc.com/",
      "https://www.google-analytics.com",
      "https://suplab.myshopify.com/",
      "https://suplabstore.com/",
      // add localhost for development,
      // this will be removed in production
      "http://localhost:8002/",
      "ws://localhost:8002/",
      "http://localhost:3000/",
      "http://172.20.10.5:3000/",
      "https://cold-islands-find.loca.lt",
      "https://judge.me/"
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      "https://cdn.jsdelivr.net/",
      "https://cdn.shopify.com/",
      "https://www.google-analytics.com",
      "https://suplab.myshopify.com/",
      "https://suplabstore.com/",
      "https://cold-islands-find.loca.lt",

      // add localhost for development,
      // this will be removed in production
      "http://localhost:8002/",
      "ws://localhost:8002/",
      "http://localhost:3000/",
      "https://judge.me/",
      // allow a hash for the judge.me script
      // this will be removed in production
      "'sha256-b9hcUr50t5f9qt3iHIOZ+Hjbwyd2DFT7hqqgBSyJCA0='"
    ]
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);
  responseHeaders.set('Access-Control-Allow-Headers', '*');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
