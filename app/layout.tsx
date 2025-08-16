import type { Metadata, Viewport } from "next";
import "./../styles/globals.css";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadfusion.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LeadFusion — Agencia de Marketing con IA",
  description: "Creatividad + datos + IA para escalar demanda con leads calificados.",
  openGraph: { title: "LeadFusion — Crecimiento con IA", description: "Campañas, automatización y analítica para generar demanda predecible.", url: siteUrl, siteName: "LeadFusion", type: "website" },
  twitter: { card: "summary_large_image", title: "LeadFusion", description: "Crecimiento con IA" }
};
export const viewport: Viewport = { themeColor: "#0b0f17" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  return (
    <html lang="es">
      <body>
        {GA_ID && (<>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga4">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
        </>)}
        {META_PIXEL_ID && (<>
          <Script id="meta-pixel">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}</Script>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <noscript><img height="1" width="1" style={{display:"none"}} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>
        </>)}
        {children}
      </body>
    </html>
  );
}
