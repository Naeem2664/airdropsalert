"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import AirdropCard from "@/components/cards/airdropCard";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import CryptoPriceTicker from "@/components/tickers/CryptoPriceTickers";
import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";
import { useGetAirdropsByCategories } from "@/hooks/getAirdrops";
import { Airdrop } from "@/contracts/airdrop.type";

interface CategoryPageProps {
    params: {
        slug: string;
    };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
    const { slug } = params;
    const [searchQuery, setSearchQuery] = useState("");

    const { data: airdrops, isLoading } = useGetAirdropsByCategories(slug);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const filteredAirdrops = useMemo(() => {
        if (!airdrops) return [];
        return airdrops.filter((airdrop: Airdrop) =>
            airdrop.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [airdrops, searchQuery]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <CryptoPriceTicker />

            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
                {/* Top Ad Section */}
                <PageAddSection />

                {/* Main Content */}
                <Box sx={{ flex: 1, py: 4 }}>
                    {/* Header Section */}
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mb: 4 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: "#10B981", mb: 1 }}>
                            {slug.toUpperCase()} Projects
                        </Typography>

                        {/* Search Bar */}
                        <Box
                            component="form"
                            onSubmit={handleSearchSubmit}
                            sx={{ width: "100%", maxWidth: "600px", mb: 3 }}
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
                                            <SearchIcon sx={{ color: "grey.400" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type="submit" sx={{ color: "grey.400", "&:hover": { color: "green.400" } }}>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Airdrop Cards Grid */}
                    {filteredAirdrops.length > 0 ? (
                        <Grid container spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }}>
                            {filteredAirdrops.map((airdrop, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                                    <AirdropCard
                                        {...airdrop}
                                        actions={airdrop.actions ?? undefined}
                                        airdrop_status={airdrop.airdrop_status ?? undefined}
                                        sx={{ width: "100%", height: "100%", maxWidth: "360px" }}
                                    />
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
