'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/utils/gtag';

export default function GoogleAnalytics() {
  // Don't load GA in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Analytics is disabled in development');
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
            // Initialize GA with debug mode in development
            const isLocalhost = window.location.hostname === 'localhost';
            const isDev = ${process.env.NODE_ENV !== 'production'};
            
            if (!isLocalhost) {
              // Main configuration
              gtag('config', '${GA_MEASUREMENT_ID}', {
                debug_mode: isDev,
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                // Disable first-party collection to avoid CORS issues
                first_party_collection: false,
                // Use beacon transport for better reliability
                transport_type: 'beacon',
                // Enhanced measurement
                allow_google_signals: true,
                allow_ad_personalization_signals: true,
                // Disable features that might cause CORS
                update: true,
                anonymize_ip: true
              });
              
              console.log('Google Analytics initialized', { 
                measurementId: '${GA_MEASUREMENT_ID}',
                isLocalhost,
                isDev
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
