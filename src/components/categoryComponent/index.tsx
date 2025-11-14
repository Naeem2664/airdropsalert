"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  MenuItem,
  Menu as MuiMenu,
} from "@mui/material";
import AirdropCard from "@/components/cards/airdropCard";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";
import { useGetAirdropsByCategories } from "@/hooks/getAirdrops";
import { Airdrop } from "@/contracts/airdrop.type";
import Link from "next/link";
import { useGetPlatforms } from "@/hooks/getPlatforms";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SlugParams {
  slug: string;
}

// interface Platform {
//   id?: string | number;
//   name: string;
//   description: string | null;
//   created_at?: string;
//   updated_at?: string;
// }

const CategoryPage = ({ slug }: SlugParams) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [platformAnchorEl, setPlatformAnchorEl] = useState<HTMLElement | null>(null);
  
  const { data: airdrops, isLoading } = useGetAirdropsByCategories(slug);
  const { data: platforms} = useGetPlatforms();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePlatformMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPlatformAnchorEl(event.currentTarget);
  };

  const handlePlatformMenuClose = () => {
    setPlatformAnchorEl(null);
  };

  const handlePlatformSelect = (platformName: string) => {
    setSelectedPlatform(platformName);
    handlePlatformMenuClose();
  };

  const filteredAirdrops = useMemo(() => {
    if (!airdrops) return [];
    
    let filtered = airdrops.filter((airdrop: Airdrop) =>
      airdrop.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by selected platform
    if (selectedPlatform !== "all") {
      filtered = filtered.filter((airdrop: Airdrop) => 
        airdrop.platform?.toLowerCase() === selectedPlatform.toLowerCase()
      );
    }

    return filtered;
  }, [airdrops, searchQuery, selectedPlatform]);

  const getPlatformDisplayName = () => {
    if (selectedPlatform === "all") return "All Platforms";
    return platforms?.find(p => p.name.toLowerCase() === selectedPlatform.toLowerCase())?.name || "All Platforms";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CryptoPriceTicker />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Top Ad Section */}
        <PageAddSection />

        {/* Main Content */}
        <Box sx={{ flex: 1, py: 4 }}>
          {/* Header Section */}
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
              sx={{ fontWeight: 600, color: "#10B981", mb: 1 }}
            >
              {slug.toUpperCase()} Projects
            </Typography>

            {/* Search and Filter Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                width: "100%",
                maxWidth: "800px",
                mb: 3,
              }}
            >
              {/* Search Bar */}
              <Box
                component="form"
                onSubmit={handleSearchSubmit}
                sx={{ flex: 1, minWidth: { xs: "100%", sm: "400px" } }}
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
                        <SearchIcon style={{ color: "grey.400" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="submit"
                          sx={{
                            color: "grey.400",
                            "&:hover": { color: "green.400" },
                          }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Platform Filter Dropdown */}
              <Button
                variant="outlined"
                onClick={handlePlatformMenuOpen}
                endIcon={<ExpandMoreIcon />}
                sx={{
                  minWidth: { xs: "100%", sm: "200px" },
                  borderColor: "#10B981",
                  color: "#10B981",
                  borderRadius: "28px",
                  py: 1.5,
                  "&:hover": {
                    borderColor: "#059669",
                    backgroundColor: "rgba(16, 185, 129, 0.04)",
                  },
                }}
              >
                {getPlatformDisplayName()}
              </Button>

              <MuiMenu
                anchorEl={platformAnchorEl}
                open={Boolean(platformAnchorEl)}
                onClose={handlePlatformMenuClose}
                MenuListProps={{
                  sx: { 
                    backgroundColor: "#1a1a1a", 
                    color: "#10B981",
                    minWidth: "200px",
                  },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #10B981",
                    borderRadius: "12px",
                    mt: 1,
                  }
                }}
              >
                <MenuItem 
                  onClick={() => handlePlatformSelect("all")}
                  
                  sx={{
                    color: selectedPlatform === "all" ? "#10B981" : "grey.400",
                    py: 1.5,
                    px: 2,
                    borderBottom: '1px solid #2d3748',
                    '&:last-child': {
                      borderBottom: 'none'
                    },
                    "&:hover": { backgroundColor: "rgba(16, 185, 129, 0.1)" },
                  }}
                >
                  All Platforms
                </MenuItem>
                {(platforms ?? []).map((platform) => (
                  <MenuItem 
                    key={platform.name} 
                    onClick={() => handlePlatformSelect(platform.name)}
                    sx={{
                      color: selectedPlatform === platform.name.toLowerCase() ? "#10B981" : "grey.400",
                      "&:hover": { backgroundColor: "rgba(16, 185, 129, 0.1)" },
                    }}
                  >
                    {platform.name}
                  </MenuItem>
                ))}
              </MuiMenu>
            </Box>

            {/* Results Count */}
            <Typography variant="body2" sx={{ color: "grey.400", mb: 2 }}>
              Showing {filteredAirdrops.length} project{filteredAirdrops.length !== 1 ? 's' : ''}
              {selectedPlatform !== "all" && ` on ${getPlatformDisplayName()}`}
            </Typography>
          </Box>

          {/* Airdrop Cards Grid */}
          {filteredAirdrops.length > 0 ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
              {filteredAirdrops.map((airdrop, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flex: "0 0 320px",
                    maxWidth: "360px",
                  }}
                >
                  <Link href={`/airdrop/${airdrop.id}`}>
                    <AirdropCard
                      {...airdrop}
                      actions={airdrop.actions ?? undefined}
                      airdrop_status={airdrop.airdrop_status ?? undefined}
                      sx={{ width: "100%", height: "100%", maxWidth: "360px" }}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1" sx={{ mt: 4, color: "grey.400" }}>
              {isLoading ? "Loading..." : "No projects found for this search."}
            </Typography>
          )}

          {/* Load More Button */}
          {filteredAirdrops.length > 0 && (
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
                  "&:hover": { backgroundColor: "#059669" },
                  transition: "background-color 0.3s ease",
                }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Box>

        {/* Bottom Ad Section */}
        <PageAddSection />
      </Container>
    </Box>
  );
};

export default CategoryPage;