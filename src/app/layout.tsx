import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/shared/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingUtilityRail } from "@/components/layout/FloatingUtilityRail";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { ThemeScript } from "@/lib/theme/ThemeScript";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${dmSans.variable}`}
    >
      <head>
        <meta name="p:domain_verify" content="31b53ffedd46b0853a195ddeb5ccf4d5"/>
        {/* Google Tag Manager */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCKP4NVG');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZN76MNJCBQ"
        />
        <script
          id="google-tag-gtag"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZN76MNJCBQ');
            `,
          }}
        />
        <ThemeScript />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sasvale Insights"
          href="/feed.xml"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans antialiased selection:bg-[#C6A56B] selection:text-slate-950 transition-colors duration-200">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCKP4NVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScrollProvider>
          {/* WCAG 2.2 AA Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#C6A56B] focus:text-slate-950 focus:font-semibold focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6A56B]"
          >
            Skip to main content
          </a>

          {/* Global Structured Data */}
          <JsonLd data={[organizationSchema, websiteSchema]} />

          {/* Global Authentic Header */}
          <SiteHeader />

          {/* Main Content Landmark */}
          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>

          {/* Global Authentic Footer */}
          <SiteFooter />

          {/* Floating Utility Rail */}
          {/* <FloatingUtilityRail /> */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
