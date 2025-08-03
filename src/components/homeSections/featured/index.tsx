"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AirdropCard from "@/components/cards/airdropCard";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export default function FeaturedAirdrops() {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          py: 4,
          width: "100%",
          maxWidth: "1536px", // Equivalent to max-w-7xl
          px: { xs: 2, sm: 4 }, // Responsive padding
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // This ensures content is centered
        }}
      >
        <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 800 }} color="#10B981">
          Featured Projects
        </Typography>
        {/* Header Section */}
        <Box
          sx={{
            width: "100%", // Ensure full width of container
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        ></Box>
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            flex: 1,
            mx: 4, // equivalent to mx-8 (32px) since MUI uses 8px units
            width: "50%",
            margin: "5 auto", // center the search bar
            marginBottom: "30px",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "28px", // rounded-full equivalent
                backgroundColor: "grey.900",
                color: "white",
                fontSize: "1.125rem", // text-lg
                paddingRight: "12px",
                "& fieldset": {
                  borderColor: "transparent", // remove default border
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  boxShadow: "0 0 0 2px #10B981", // focus:ring-2 focus:ring-green-500
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
              sx: {
                px: "10px", // equivalent to px-6
              },
            }}
          />
        </Box>

        {/* Airdrop Cards Grid */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }}
          sx={{
            width: "100%",
            justifyContent: "center", // Center grid items
          }}
        >
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
                  maxWidth: "360px", // Optional: prevents cards from getting too wide
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            width: "100%",
          }}
        >
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
      </Container>
    </Box>
  );
}
