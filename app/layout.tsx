import type { Metadata } from "next";
import "./style/globals.css";
import { UserDataProvider } from "./context/UserDataProvider";
import { font } from "./style/fonts/localFonts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Managed Portfolio Website",
  description:
    "Portfolio website managed by the portfolio website manager project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link
          rel="preconnect"
          href="https://jfsetifsqcpkwdtcrhdt.supabase.co"
          crossOrigin=""
        />
        <link
          rel="dns-prefetch"
          href="https://jfsetifsqcpkwdtcrhdt.supabase.co"
        />
        <link
          rel="preconnect"
          href="https://va.vercel-scripts.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link
          rel="preload"
          href="./style/fonts/font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="./style/fonts/title-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body>
        <UserDataProvider>{children}</UserDataProvider>
        <Analytics />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
