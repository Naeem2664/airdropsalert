import type { Metadata } from "next";
import HeroSection from "@/components/sections/homeHeroSection/page";
import { Box } from "@mui/material";
import Airdrops from "@/components/homeSections/index";
import { fetchAirdrops, fetchCategories, fetchAirdrop_Type } from "@/libs/api";

export async function generateMetadata(): Promise<Metadata> {
  const airdrops = await fetchAirdrops();
  const sponsored = airdrops.find((a) => a.sponsored);

  const itemListElement = sponsored
    ? [
        {
          "@type": "ListItem",
          position: 1,
          url: sponsored.join_link,
          name: sponsored.name,
          description: sponsored.description,
        },
      ]
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement,
  };

  return {
    title: "Crypto Airdrops Tracker | Discover Latest Airdrops (DeFi, AI, Solana)",
    description: "Discover top crypto airdrops from DeFi, AI, DeSci, DePIN, Solana, Base, Polygon and more. Stay ahead with real-time updates, filters and sponsored opportunities.",
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
      description: "Track the best upcoming and ongoing crypto airdrops. Explore by category, chain or type. Real-time updates.",
      url: "https://www.airdropsalert.com",
      siteName: "AirdropsAlert",
      images: [
        {
          url: "https://www.airdropsalert.com/assets/images/airdrop.jpg",
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
      description: "Discover top crypto airdrops from DeFi, AI, Solana, Base, Polygon and more.",
      images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"],
    },
    alternates: {
      canonical: "https://www.airdropsalert.com",
    },
    other: {
      "script[type=\"application/ld+json\"]": JSON.stringify(jsonLd),
    },
  };
}

export default async function HomePage() {
  const airdrops = await fetchAirdrops();
  const categories = await fetchCategories();
  const airdropTypes = await fetchAirdrop_Type();
  const sponsored = airdrops.find((a) => a.sponsored);

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
        <HeroSection sponsored={sponsored} />
      </Box>
      <Box>
        <Airdrops
          airdrops={airdrops}
          categories={categories}
          airdropTypes={airdropTypes}
        />
      </Box>
    </>
  );
}
