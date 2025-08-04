"use client";
import HeroSection from "@/components/sections/homeHeroSection/page";
import { Box} from "@mui/material";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
import Airdrops from "@/components/homeSections/index";
export default function Home() {

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
        <CryptoPriceTicker/>
        <HeroSection />
      </Box>
      <Box
      >
        <Airdrops />
      </Box>
    </>
  );
}