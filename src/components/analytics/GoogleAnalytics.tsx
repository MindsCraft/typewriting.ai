'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/utils/gtag';

export default function GoogleAnalytics() {
  // Don't load GA in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Google Analytics script failed to load', e);
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Only initialize GA if not on localhost
            if (window.location.hostname !== 'localhost') {
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                transport_url: 'https://www.google-analytics.com',
                first_party_collection: true,
                send_page_view: true
              });
            }
            
            // Add error handler for gtag calls
            window.gtag = function() {
              try {
                if (window.location.hostname !== 'localhost') {
                  dataLayer.push(arguments);
                }
              } catch (e) {
                console.warn('GTAG Error:', e);
              }
            };
          `,
        }}
      />
    </>
  );
}
