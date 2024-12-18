

import type { Metadata } from "next";
import "./globals.css";

import { Inter, Montserrat } from "next/font/google";
import { Outfit } from "next/font/google"; // Import Outfit font
import ReduxProvider from "@/redux/ReduxProvider";

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

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust the weights as needed
  variable: "--font-outfit",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Adjust the weights as needed
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${outfit.variable}`}>
       <ReduxProvider>
          {
            children
          }
        </ReduxProvider>
      </body>
    </html>
  );
}
