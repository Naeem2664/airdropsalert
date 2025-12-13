import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import Navbar from "@/constants/Navigation/navbar/Navbar";
import Footer from "@/constants/Navigation/footer/Footer";
import { Roboto_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

const siteUrl = "https://www.airdropsalert.com"; // Replace with your actual domain

// --- SEO Optimizations ---

// 1. Enhanced and detailed Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AirdropsAlert: Stay Updated with Latest Crypto Airdrops",
    template: "%s | AirdropsAlert", // Suffix for individual page titles
  },
  description:
    "Stay updated with the latest crypto airdrops and earn free tokens.",
  keywords: [
    "crypto airdrops",
    "free crypto",
    "blockchain rewards",
    "airdrop alerts",
    "cryptocurrency",
    "airdrop",
    "crypto",
    "web3"
  ],
  authors: [{ name: "AirdropsAlert Team", url: siteUrl }],
  creator: "AirdropsAlert Team",
  // 2. Open Graph (Social Sharing) metadata for better previews
  openGraph: {
    title: "AirdropsAlert: Stay Updated with Latest Crypto Airdrops",
    description: "Stay updated with the latest crypto airdrops and earn free tokens.",
    url: siteUrl,
    siteName: "AirdropsAlert",
    images: [
      {
        url: `${siteUrl}/assets/images/airdrop.jpg`, // Add an Open Graph image file in your public directory
        width: 1200,
        height: 630,
        alt: "AirdropsAlert Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // 3. Twitter metadata (often uses the same info as Open Graph)
  twitter: {
    card: "summary_large_image",
    title: "AirdropsAlert: Stay Updated with Latest Crypto Airdrops",
    description: "Stay updated with the latest crypto airdrops and earn free tokens.",
    images: [`${siteUrl}/assets/images/airdrop.jpg`],
  },
  // 5. Adds a default canonical URL
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AirdropsAlert",
            "url": "https://www.airdropsalert.com",
            "logo": "https://www.airdropsalert.com/assets/images/airdrop.jpg",
            "sameAs": [
              // Add social media profiles here if available
              // "https://twitter.com/airdropsalert",
              // "https://facebook.com/airdropsalert"
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AirdropsAlert",
            "url": "https://www.airdropsalert.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.airdropsalert.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${robotoMono.variable} antialiased`}>
        <div className="pt-[100px]">
          <ThemeRegistry >
          <Providers>
            <Navbar />
              <CryptoPriceTicker />
            
            {children}
            <Footer />
          </Providers>
          </ThemeRegistry>
        </div>

        {/* Toast container for global notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </body>
    </html>
  );
}
