import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { fetchAirdrops } from "../../../libs/api"; // server-side fetch
import Link from "next/link";



export default async function Page() {
  const allAirdrops = await fetchAirdrops();
  const sponsored = allAirdrops.find((a) => a.sponsored);

  if (!sponsored) {
    return (
      <Box sx={{ textAlign: "center", color: "#ffffff", py: 10 }}>
        <Typography variant="h2">
          No sponsored airdrops available right now.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "1536px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        mx: "auto",
        mt: { xs: 2, md: 4, lg: 6, xl: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header>
          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "1rem", md: "2rem", lg: "4rem", xl: "5rem" },
              fontWeight: 800,
              mb: { xs: 2, lg: 5 },
              letterSpacing: 1,
              lineHeight: 1.625,
            }}
          >
            Discover the Latest{" "}
            <Box component="span" sx={{ color: "#10B981" }}>
              Crypto Airdrops
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#D1D5DB",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.625,
            }}
          >
            Stay ahead in Web3 with real-time updates on top airdrops and events
            from{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              DeFi
            </Box>
            ,{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              AI
            </Box>
            ,{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              DeSci
            </Box>
            ,{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              DePIN
            </Box>
            , and the{" "}
            <Box component="strong" sx={{ fontWeight: 600 }}>
              Solana
            </Box>{" "}
            ecosystem.
          </Typography>
        </header>
      </Box>

      {/* Right Content */}
      <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
        <Paper
          sx={{
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            textAlign: "center",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            border: "1px solid #374151",
            backgroundColor: "#111827",
            width: "100%",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#ffffff",
              mb: 2,
            }}
          >
            📢 Sponsored Airdrop Alert
          </Typography>

          <Link href={`/airdrop/${sponsored.id}`}>
            <Paper
              sx={{
                backgroundColor: "#1F2937",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                border: "1px solid #4B5563",
                boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
              }}
            >
              <Box
                component="img"
                src={sponsored.image_urls?.[0] || "no image"}
                alt={`${sponsored.name} logo`}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  mx: "auto",
                  borderRadius: "12px",
                }}
              />
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                  color: "#34D399",
                  mb: 1,
                }}
              >
                🌟 {sponsored.name} – Claim Now
              </Typography>
              <Typography component="p" sx={{ color: "#9CA3AF", mb: 1 }}>
                {sponsored.description}
              </Typography>
              <Typography component="p" sx={{ color: "#9CA3AF" }}>
                <Box component="strong" sx={{ fontWeight: 600 }}>
                  {sponsored.total_distribution}
                </Box>{" "}
                tokens for early signups.
              </Typography>
              <Button
                href={sponsored.join_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#10B981",
                  "&:hover": { backgroundColor: "#059669" },
                }}
              >
                Claim Airdrop
              </Button>
            </Paper>
            <Box
              component="script"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ItemList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      url: sponsored.join_link,
                      name: sponsored.name,
                      description: sponsored.description,
                    },
                  ],
                }),
              }}
            />
          </Link>
        </Paper>
      </Box>
    </Box>
  );
}
