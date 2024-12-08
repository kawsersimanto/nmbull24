import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Expat Global Girls | Stay with local and meet travel partner",
  description:
    "Share your journey, save on stays, and find your perfect travel companion your adventure starts now",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}
