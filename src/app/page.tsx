import type { Metadata } from "next";
import HeroSection from "@/components/sections/homeHeroSection/page";
import { Box } from "@mui/material";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
import Airdrops from "@/components/homeSections/index";

export const metadata: Metadata = {
  title: "Discover the Latest Crypto Airdrops – Airdrops Alert",
  description:
    "Stay ahead in Web3 with real-time updates on the top crypto airdrops from DeFi, AI, DeSci, DePIN, and Solana,Polygon, Ethereum, Base, Arbitrum, Optimism, Avalanche, Gnosis, and more. Claim the latest sponsored airdrops now!",
  openGraph: {
    title: "Discover the Latest Crypto Airdrops – Airdrops Alert",
    description:
      "Stay ahead in Web3 with real-time updates on the top crypto airdrops from DeFi, AI, DeSci, DePIN, and Solana. Claim the latest sponsored airdrops now!",
    url: "https://airdropsalert.vercel.app",
    siteName: "Airdrops Alert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover the Latest Crypto Airdrops – AirdropX",
    description:
      "Stay ahead in Web3 with real-time updates on the top crypto airdrops from DeFi, AI, DeSci, DePIN, and Solana. Claim the latest sponsored airdrops now!",
  },
};

export default function HomePage() {
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
        <CryptoPriceTicker />
        <HeroSection />
      </Box>
      <Box>
        <Airdrops />
      </Box>
    </>
  );
}
