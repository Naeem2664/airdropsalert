"use client";
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  TextField, 
  InputAdornment,
  MenuItem,
  Menu
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useMemo } from "react";
import AirdropCard from "@/components/cards/airdropCard";
import { Airdrop } from "@/contracts/airdrop.type";
import { Category } from "@/contracts/category.type";
import Link from "next/link";
import { useGetPlatforms } from "@/hooks/getPlatforms";

export default function AirdropTypeSection({ 
  typeName, 
  airdrops, 
  categories 
}: { 
  typeName: string; 
  airdrops: Airdrop[] | undefined; 
  categories: Category[] | undefined; 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [platformAnchorEl, setPlatformAnchorEl] = useState<HTMLElement | null>(null);
  const { data: platforms } = useGetPlatforms();

  console.log("Airdrops in Type Section:", airdrops);
  console.log("Categories in Type Section:", categories);
  console.log("Platforms data:", platforms);

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

  // Filter airdrops based on the selected type, search query, and platform
  const filteredAirdrops = useMemo(() => {
    if (!airdrops) return [];
    
    let filtered = airdrops.filter(
      (airdrop: Airdrop) =>
        airdrop.airdrop_status?.toLowerCase() === typeName &&
        airdrop.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by selected platform
    if (selectedPlatform !== "all") {
      filtered = filtered.filter((airdrop: Airdrop) => 
        airdrop.platform?.toLowerCase() === selectedPlatform.toLowerCase()
      );
    }

    return filtered;
  }, [airdrops, typeName, searchQuery, selectedPlatform]);

  const getPlatformDisplayName = () => {
    if (selectedPlatform === "all") return "All Platforms";
    return platforms?.find(p => p.name.toLowerCase() === selectedPlatform.toLowerCase())?.name || "All Platforms";
  };

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
        <Typography variant="h4" component="h4" sx={{ mb: 2, fontWeight: 800 }} color="#10B981">
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)} Projects
        </Typography>

        {/* Search and Filter Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: "100%",
            maxWidth: "800px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          {/* Search Bar */}
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "400px" },
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
              fontSize: "1rem",
              "&:hover": {
                borderColor: "#059669",
                backgroundColor: "rgba(16, 185, 129, 0.04)",
              },
            }}
          >
            {getPlatformDisplayName()}
          </Button>

          <Menu
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
          </Menu>
        </Box>

        {/* Airdrop Cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
          {filteredAirdrops.map((airdrop: Airdrop, index: number) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center", flex: '0 0 320px', maxWidth: '360px' }}>
              <Link href={`/airdrop/${airdrop.id}`} key={airdrop.id}>
                <AirdropCard {...airdrop} sx={{ width: "100%", maxWidth: "360px" }} />
              </Link>
            </Box>
          ))}
        </Box>

        {filteredAirdrops.length === 0 && (
          <Typography color="grey.400" sx={{ mt: 4 }}>
            No {typeName} airdrops found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedPlatform !== "all" && ` on ${getPlatformDisplayName()}`}.
          </Typography>
        )}

        {/* Load More Button */}
        {filteredAirdrops.length > 0 && (
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
        )}
      </Container>
    </Box>
  );
}