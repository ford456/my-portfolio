"use client";

import Script from "next/script";

export default function GoogleAnalytics({ enabled }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!enabled || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          // Consent Mode v2. This script only loads after the visitor accepts
          // analytics cookies, so analytics starts granted. The site runs no
          // ads, so every ad signal stays denied.
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          gtag('js', new Date());

          // GA4 derives country from the IP address, which VPNs and proxies
          // skew. The device time zone is a second signal for the real location.
          var timeZone = 'unknown';
          try {
            timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown';
          } catch (e) {}

          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            user_properties: {
              user_timezone: timeZone
            }
          });
        `}
      </Script>
    </>
  );
}