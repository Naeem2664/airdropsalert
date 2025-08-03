"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const CryptoPriceTicker = () => {
  const theme = useTheme();
  const [prices, setPrices] = useState([
    { symbol: "BTC", price: "$113,122.00", change: "0.00%" },
    { symbol: "ETH", price: "$3,415.02", change: "-0.05%" },
    { symbol: "LTC", price: "$107.50", change: "0.39%" },
    { symbol: "ADA", price: "$0.70", change: "0.07%" },
    { symbol: "BNB", price: "$739.78", change: "-0.15%" },
    { symbol: "DOGE", price: "$0.19", change: "0.13%" },
    { symbol: "LINK", price: "$15.78", change: "0.00%" },
    { symbol: "SOL", price: "$159.75", change: "-0.04%" },
  ]);

  // Simulate price updates (replace with real API calls)
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await response.json();
        // Process data and update state
        setPrices([
          {
            symbol: "BTC",
            price: `$${data.bitcoin.usd}`,
            change: `${data.bitcoin.usd_24h_change}%`,
          },
          {
            symbol: "ETH",
            price: `$${data.ethereum.usd}`,
            change: `${data.ethereum.usd_24h_change}%`,
          },
          {
            symbol: "LTC",
            price: `$${data.litecoin.usd}`,
            change: `${data.litecoin.usd_24h_change}%`,
          },
          {
            symbol: "ADA",
            price: `$${data.cardano.usd}`,
            change: `${data.cardano.usd_24h_change}%`,
          },
          {
            symbol: "BNB",
            price: `$${data.bnb.usd}`,
            change: `${data.bnb.usd_24h_change}%`,
          },
          {
            symbol: "DOGE",
            price: `$${data.dogecoin.usd}`,
            change: `${data.dogecoin.usd_24h_change}%`,
          },
          {
            symbol: "LINK",
            price: `$${data.chainlink.usd}`,
            change: `${data.chainlink.usd_24h_change}%`,
          },
          {
            symbol: "SOL",
            price: `$${data.solana.usd}`,
            change: `${data.solana.usd_24h_change}%`,
          },
        ]);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 1,
        px: 2,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {prices.map((coin) => (
          <Box
            key={coin.symbol}
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
          >
            <Typography variant="body2" fontWeight="bold">
              {coin.symbol}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {coin.price}
            </Typography>
            <Typography
              variant="body2"
              color={
                coin.change.startsWith("-") ? "error.main" : "success.main"
              }
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
