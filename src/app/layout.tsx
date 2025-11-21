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

const siteUrl = "https://www.yourwebsite.com"; // Replace with your actual domain

// --- SEO Optimizations ---

// 1. Enhanced and detailed Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Your Website Name: Catchy Tagline",
    template: "%s | Your Website Name", // Suffix for individual page titles
  },
  description:
    "A brief yet descriptive summary of your website's content and purpose. Use relevant keywords.",
  keywords: [
    "keyword1",
    "keyword2",
    "keyword3",
  ],
  authors: [{ name: "Your Name or Company", url: siteUrl }],
  creator: "Your Name or Company",
  // 2. Open Graph (Social Sharing) metadata for better previews
  openGraph: {
    title: "Your Website Name: Catchy Tagline",
    description: "A brief yet descriptive summary of your website's content and purpose.",
    url: siteUrl,
    siteName: "Your Website Name",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Add an Open Graph image file in your public directory
        width: 1200,
        height: 630,
        alt: "Your Website Name",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // 3. Twitter metadata (often uses the same info as Open Graph)
  twitter: {
    card: "summary_large_image",
    title: "Your Website Name: Catchy Tagline",
    description: "A brief yet descriptive summary of your website's content and purpose.",
    images: [`${siteUrl}/og-image.jpg`],
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
