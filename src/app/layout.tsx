import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArifLogs",
  description: "Logging my stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body className={`${spaceGrotesk.className} `}>
        <Navbar />
        <div className="h-12"></div>
        <div className="container max-w-5xl mx-auto px-4 lg:px-0">
          {children}
        </div>
        <div className="h-12"></div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
