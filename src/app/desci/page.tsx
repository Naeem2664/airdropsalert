"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import AirdropCard from "@/components/cards/airdropCard";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";
export default function FeaturedAirdropsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  // Mock data - replace with your actual airdrop data
  const airdrops = Array(20).fill({
    title: "Airdrop Name",
    description:
      "This is a sample airdrop description that explains what the project is about.",
    status: "Live",
    endDate: "2023-12-31",
    participants: 15000,
    rating: 4.5,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CryptoPriceTicker />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Top Ad Section */}
        <PageAddSection />
        {/* Main Content */}
        <Box sx={{ flex: 1, py: 4 }}>
          {/* Header Section - Left Aligned */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mb: 4,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "#10B981",
                mb: 1,
              }}
            >
              DESCI Projects
            </Typography>

            {/* Search Bar */}
            <Box
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                width: "100%",
                maxWidth: "600px",
                mb: 3,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "28px",
                    backgroundColor: "grey.900",
                    color: "white",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                      boxShadow: "0 0 0 2px #10B981",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "grey.400" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        sx={{
                          color: "grey.400",
                          "&:hover": {
                            color: "green.400",
                          },
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Airdrop Cards Grid */}
          <Grid container spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }}>
            {airdrops.map((airdrop, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AirdropCard
                  {...airdrop}
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "360px",
                  }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#10B981",
                color: "#ffffff",
                px: 3,
                py: 1.5,
                borderRadius: "8px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#059669",
                },
                transition: "background-color 0.3s ease",
              }}
            >
              Load More
            </Button>
          </Box>
        </Box>

        {/* Bottom Ad Section */}
        <PageAddSection />
      </Container>
    </Box>
  );
}
