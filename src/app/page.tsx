import type { Metadata } from "next";
import HeroSection from "@/components/sections/homeHeroSection/page";
import { Box } from "@mui/material";
import Airdrops from "@/components/homeSections/index";
import { fetchAirdrops, fetchCategories, fetchAirdrop_Type } from "@/libs/api";

export const metadata: Metadata = {
  title:
    "Crypto Airdrops Tracker | Discover Latest Airdrops (DeFi, AI, Solana)",
  description:
    "Discover top crypto airdrops from DeFi, AI, DeSci, DePIN, Solana, Base, Polygon and more. Stay ahead with real-time updates, filters and sponsored opportunities.",
  keywords: [
    "crypto airdrops",
    "airdrop tracker",
    "best crypto airdrops 2026",
    "DeFi airdrops",
    "Solana airdrop",
    "Base airdrop",
    "free crypto airdrops",
  ],
  openGraph: {
    title: "Crypto Airdrops Tracker – Latest Free Airdrops",
    description:
      "Track the best upcoming and ongoing crypto airdrops. Explore by category, chain or type. Real-time updates.",
    url: "https://airdropsalert.vercel.app",
    siteName: "Airdrops Alert",
    images: [
      {
        url: "https://airdropsalert.vercel.app/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Crypto Airdrops Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Airdrops Tracker",
    description:
      "Discover top crypto airdrops from DeFi, AI, Solana, Base, Polygon and more.",
    images: ["https://airdropsalert.vercel.app/og-home.jpg"],
  },
  alternates: {
    canonical: "https://airdropsalert.vercel.app",
  },
};

export default async function HomePage() {
  const airdrops = await fetchAirdrops();
  const categories = await fetchCategories();
  const airdropTypes = await fetchAirdrop_Type();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeroSection />
      </Box>
      <Box>
        <Airdrops
          airdrops={airdrops}
          categories={categories}
          airdropTypes={airdropTypes}
        />
      </Box>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Airdrops Alert",
            url: "https://airdropsalert.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://airdropsalert.vercel.app/?search={search_term}",
              "query-input": "required name=search_term",
            },
          }),
        }}
      />
    </>
  );
}
