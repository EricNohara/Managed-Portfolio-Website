import type { Metadata } from "next";
import "./style/globals.css";
import { UserDataProvider } from "./context/UserDataProvider";
import { font } from "./style/fonts/localFonts";
import Script from "next/script";

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
      <body>
        <UserDataProvider>{children}</UserDataProvider>
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
