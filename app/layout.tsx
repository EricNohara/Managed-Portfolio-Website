import type { Metadata } from "next";
import "./globals.css";
import { UserDataProvider } from "./context/UserDataProvider";

export const metadata: Metadata = {
  title: "Managed Portfolio Website",
  description: "Portfolio website managed by the portfolio website manager project",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <UserDataProvider>
          {children}
        </UserDataProvider>
      </body>
    </html>
  );
}
