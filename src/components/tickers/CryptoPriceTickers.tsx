"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

interface CryptoPrice {
  symbol: string;
  price: string;
  change: string;
}

const CryptoPriceTicker = () => {
  const theme = useTheme();
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  // Default prices for fallback
  const defaultPrices: CryptoPrice[] = useMemo(() => [
    { symbol: "BTC", price: "$67,122.00", change: "0.00%" },
    { symbol: "ETH", price: "$3,415.02", change: "-0.05%" },
    { symbol: "BNB", price: "$585.78", change: "-0.15%" },
    { symbol: "SOL", price: "$159.75", change: "-0.04%" },
    { symbol: "XRP", price: "$0.52", change: "0.13%" },
    { symbol: "ADA", price: "$0.48", change: "0.07%" },
    { symbol: "DOGE", price: "$0.15", change: "0.13%" },
    { symbol: "AVAX", price: "$36.25", change: "0.25%" },
    { symbol: "DOT", price: "$7.12", change: "-0.08%" },
    { symbol: "MATIC", price: "$0.73", change: "0.10%" },
    { symbol: "LTC", price: "$84.50", change: "0.39%" },
    { symbol: "LINK", price: "$18.45", change: "0.00%" },
    { symbol: "UNI", price: "$11.20", change: "-0.12%" },
    { symbol: "SHIB", price: "$0.000025", change: "0.45%" },
    { symbol: "ATOM", price: "$8.75", change: "0.18%" },
    { symbol: "ETC", price: "$31.40", change: "-0.05%" },
    { symbol: "XLM", price: "$0.115", change: "0.22%" },
    { symbol: "XMR", price: "$165.80", change: "0.15%" },
  ], []);

  // Fetch real prices from CoinGecko API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple,cardano,dogecoin,avalanche-2,polkadot,polygon-pos,litecoin,chainlink,uniswap,shiba-inu,cosmos,ethereum-classic,stellar,monero&vs_currencies=usd&include_24hr_change=true"
        );

        const data = response.data;
        
        const updatedPrices: CryptoPrice[] = [
          {
            symbol: "BTC",
            price: `$${data.bitcoin?.usd?.toLocaleString() || "67,122"}`,
            change: `${data.bitcoin?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "ETH",
            price: `$${data.ethereum?.usd?.toLocaleString() || "3,415"}`,
            change: `${data.ethereum?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "BNB",
            price: `$${data.binancecoin?.usd?.toLocaleString() || "585"}`,
            change: `${data.binancecoin?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "SOL",
            price: `$${data.solana?.usd?.toLocaleString() || "159"}`,
            change: `${data.solana?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "XRP",
            price: `$${data.ripple?.usd?.toLocaleString() || "0.52"}`,
            change: `${data.ripple?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "ADA",
            price: `$${data.cardano?.usd?.toLocaleString() || "0.48"}`,
            change: `${data.cardano?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "DOGE",
            price: `$${data.dogecoin?.usd?.toLocaleString() || "0.15"}`,
            change: `${data.dogecoin?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "AVAX",
            price: `$${data["avalanche-2"]?.usd?.toLocaleString() || "36.25"}`,
            change: `${data["avalanche-2"]?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "DOT",
            price: `$${data.polkadot?.usd?.toLocaleString() || "7.12"}`,
            change: `${data.polkadot?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "MATIC",
            price: `$${data["polygon-pos"]?.usd?.toLocaleString() || "0.73"}`,
            change: `${data["polygon-pos"]?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "LTC",
            price: `$${data.litecoin?.usd?.toLocaleString() || "84.50"}`,
            change: `${data.litecoin?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "LINK",
            price: `$${data.chainlink?.usd?.toLocaleString() || "18.45"}`,
            change: `${data.chainlink?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "UNI",
            price: `$${data.uniswap?.usd?.toLocaleString() || "11.20"}`,
            change: `${data.uniswap?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "SHIB",
            price: `$${data["shiba-inu"]?.usd?.toFixed(8) || "0.000025"}`,
            change: `${data["shiba-inu"]?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "ATOM",
            price: `$${data.cosmos?.usd?.toLocaleString() || "8.75"}`,
            change: `${data.cosmos?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "ETC",
            price: `$${data["ethereum-classic"]?.usd?.toLocaleString() || "31.40"}`,
            change: `${data["ethereum-classic"]?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "XLM",
            price: `$${data.stellar?.usd?.toLocaleString() || "0.115"}`,
            change: `${data.stellar?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
          {
            symbol: "XMR",
            price: `$${data.monero?.usd?.toLocaleString() || "165.80"}`,
            change: `${data.monero?.usd_24h_change?.toFixed(2) || "0.00"}%`,
          },
        ];

        setPrices(updatedPrices);
      } catch (error) {
        console.error("Error fetching prices:", error);
        // Fallback to default prices if API fails
        setPrices(defaultPrices);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [defaultPrices]);

  if (loading && prices.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 1,
          px: 2,
          textAlign: "center",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="body2" color="white">
          Loading crypto prices...
        </Typography>
      </Box>
    );
  }

  const displayPrices = prices.length > 0 ? prices : defaultPrices;

  return (
    <Box
      sx={{
        width: "100%",
        py: 1.5,
        px: 2,
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        "&:hover": {
          "& .scroll-animation": {
            animationPlayState: "paused",
          },
        },
      }}
    >
      <Box
        className="scroll-animation"
        sx={{
          display: "inline-flex",
          gap: 4,
          alignItems: "center",
          animation: "scroll 90s linear infinite",
          "@keyframes scroll": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        {/* Duplicate the prices for seamless scrolling */}
        {[...displayPrices, ...displayPrices].map((coin, index) => (
          <Box
            key={`${coin.symbol}-${index}`}
            sx={{ 
              display: "flex", 
              gap: 1, 
              alignItems: "center",
              minWidth: "fit-content",
              px: 0.5,
            }}
          >
            <Typography 
              variant="body2" 
              fontWeight="bold" 
              color="#10b981"
            >
              {coin.symbol}
            </Typography>
            <Typography 
              variant="body2" 
              color="white"
            >
              {coin.price}
            </Typography>
            <Typography
              variant="body2"
              color={coin.change.startsWith("-") ? "#ef4444" : "#10b981"}
              sx={{ 
                fontWeight: "bold",
                textAlign: "right",
                fontSize: "0.75rem",
              }}
            >
              {coin.change}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CryptoPriceTicker;