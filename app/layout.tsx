import type { Metadata } from "next";
import "./style/globals.css";
import { UserDataProvider } from "./context/UserDataProvider";

export const metadata: Metadata = {
  title: "Managed Portfolio Website",
  description:
    "Portfolio website managed by the portfolio website manager project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <UserDataProvider>{children}</UserDataProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
      </body>
    </html>
  );
}
