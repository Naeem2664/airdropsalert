"use client";
import { Box, Button, Container, Grid, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useMemo } from "react";
import AirdropCard from "@/components/cards/airdropCard";
import { Airdrop } from "@/contracts/airdrop.type";
import Link from "next/link";
export default function AirdropTypeSection({ typeName, airdrops,categories }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Airdrops in Type Section:", airdrops);
  console.log("Categories in Type Section:", categories);

  // Filter airdrops based on the selected type and search query
  const filteredAirdrops = useMemo(() => {
    if (!airdrops) return [];
    return airdrops.filter(
      (airdrop: Airdrop) =>
        airdrop.airdrop_status?.toLowerCase() === typeName &&
        airdrop.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [airdrops, typeName, searchQuery]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Container
        maxWidth={false}
        sx={{
          py: 4,
          width: "100%",
          maxWidth: "1536px",
          px: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 800 }} color="#10B981">
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)} Projects
        </Typography>

        {/* Search Bar */}
        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            flex: 1,
            mx: 4,
            width: "50%",
            marginBottom: "30px",
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
                fontSize: "1.125rem",
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
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
            }}
          />
        </Box>

        {/* Airdrop Cards */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }} justifyContent="center">
          {filteredAirdrops.map((airdrop: Airdrop, index: number) => (
            <Grid key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
              <Link href={`/airdrop/${airdrop.id}`} key={airdrop.id}>
              <AirdropCard {...airdrop} sx={{ width: "100%", maxWidth: "360px" }} />
              </Link>
            </Grid>
          ))}
        </Grid>

        {filteredAirdrops.length === 0 && (
          <Typography color="grey.400" sx={{ mt: 4 }}>
            No {typeName} airdrops found.
          </Typography>
        )}

        {/* Load More Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100%" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#10B981",
              color: "#ffffff",
              px: 3,
              py: 1.5,
              borderRadius: "8px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#059669" },
              transition: "background-color 0.3s ease",
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
