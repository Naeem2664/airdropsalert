import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const Page = () => {
  return (
    <Box
      sx={{
        maxWidth: "1536px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {/* Left Content */}
      <Box sx={{ 
        width: { xs: "100%", lg: "50%" },
        display: "flex",
        flexDirection: "column"
      }}>
        <Box component="header">
          <Typography
            variant="h1"
            sx={{
              color: "#ffffff", // text-white
              fontSize: { xs: "1rem", md: "2rem", lg: "4rem", xl: "5rem" },
              fontWeight: 800, // font-extrabold
              mb: { xs: 2, lg: 5 },
              letterSpacing: 1, // tracking-wider
              lineHeight: 1.625 // leading-relaxed
            }}
          >
            Discover the Latest{" "}
            <Box component="span" sx={{ color: "#10B981" }}> {/* text-green-500 */}
              Crypto Airdrops
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#D1D5DB", // text-gray-300
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.625 // leading-relaxed
            }}
          >
            Stay ahead in Web3 with real-time updates on the top airdrops and
            events from <Box component="strong" sx={{ fontWeight: 600 }}>DeFi</Box>, <Box component="strong" sx={{ fontWeight: 600 }}>AI</Box>,{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>DeSci</Box>, <Box component="strong" sx={{ fontWeight: 600 }}>DePIN</Box>, and the{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>Solana</Box> ecosystem. Never miss a chance to earn and
            grow in crypto.
          </Typography>
        </Box>
      </Box>

      {/* Right Content */}
      <Box sx={{ 
        width: { xs: "100%", lg: "50%" },
        mt: { xs: 4, md: 0 }
      }}>
        <Paper
          sx={{
            borderRadius: "16px", // rounded-2xl
            p: { xs: 3, md: 4 }, // p-8 md:p-12
            textAlign: "center",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", // shadow-lg
            border: "1px solid #374151", // border-gray-700
            backgroundColor: "transparent",
            width: "100%",
            mt: { xs: 4, md: 8 } // mt-16
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2.25rem" }, // text-2xl md:text-4xl
              fontWeight: 700, // font-bold
              color: "#ffffff", // text-white
              mb: 2 // mb-4
            }}
          >
            📢 Sponsored Airdrop Alert
          </Typography>

          <Paper
            sx={{
              backgroundColor: "#111827", // bg-[#111827]
              borderRadius: "12px", // rounded-xl
              p: { xs: 3, md: 4 }, // p-6 md:p-8
              border: "1px solid #4B5563", // border-gray-600
              boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", // shadow-inner
              "&:hover": {
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" // hover:shadow-xl
              },
              transition: "all 0.3s ease" // transition
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" }, // text-xl md:text-2xl
                fontWeight: 600, // font-semibold
                color: "#34D399", // text-green-400
                mb: 1 // mb-2
              }}
            >
              🌟 Project Nebula Airdrop – Claim Now
            </Typography>
            <Typography
              sx={{
                color: "#9CA3AF", // text-gray-400
                fontSize: { xs: "0.875rem", md: "1rem" }, // text-sm md:text-base
                mb: 2 // mb-4
              }}
            >
              A next-gen DePIN protocol rewarding early adopters. Up to{" "}
              <Box component="strong" sx={{ fontWeight: 600 }}>10,000 NEB</Box> tokens for early signups. Backed
              by top VCs.
            </Typography>
            <Button
              href="https://sponsor-website.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#10B981", // bg-green-500
                color: "#ffffff", // text-white
                px: 3, // px-6
                py: 1.5, // py-3
                borderRadius: "8px", // rounded-lg
                fontWeight: 600, // font-semibold
                "&:hover": {
                  backgroundColor: "#059669" // hover:bg-green-600
                },
                transition: "background-color 0.3s ease" // transition
              }}
            >
              Claim Airdrop
            </Button>
          </Paper>

          <Typography
            sx={{
              color: "#6B7280", // text-gray-500
              fontSize: "0.75rem", // text-xs
              mt: 3 // mt-6
            }}
          >
            ⚠️ This is a sponsored listing. Do your own research before
            participating.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Page;