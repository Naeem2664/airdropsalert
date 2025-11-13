'use client'
import React from "react";
import Link from 'next/link';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Avatar,
} from "@mui/material";
import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";
import {
  
  SwapHoriz as SwapIcon,
} from "@mui/icons-material";
import { useGetAirdropById } from "@/hooks/getAirdrops";

interface Props{
        id: string;
    }

    
const AirdropDetailsPage = ({id}:Props) => {
    const {data:airdrop}=useGetAirdropById(id)
    console.log("Airdrop ID:", id); 
    console.log("Fetched Airdrop Data:", airdrop);

    const details=airdrop?.details;
    const socials=airdrop?.social_links;

    console.log("Airdrop Details:", airdrop);
  const customColors = {
    primaryGreen: "#10B981",
    darkGreen: "#0ea371",
    primaryBlack: "#0a1929",
    lightBlack: "#111827",
    gray800: "#1e293b",
    textPrimary: "#f3f4f6",
    textSecondary: "#9ca3af",
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
      <PageAddSection />
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          backgroundColor: customColors.primaryBlack,
          marginBottom: 20,
        }}
      >
        {/* Top Ad Section */}

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: customColors.lightBlack,
            border: `1px solid ${customColors.gray800}`,
          }}
        >
          {/* Header Section */}

          <Grid container spacing={6}>
            {/* Right Content */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  top: 20,
                  backgroundColor: customColors.primaryBlack,
                  border: `1px solid ${customColors.gray800}`,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: customColors.primaryGreen,
                  }}
                >
                  Key Information
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    borderColor: customColors.gray800,
                  }}
                />
                <Avatar
                src={airdrop ? airdrop.image_urls[0] : undefined}
                  sx={{
                    width: 90,
                    height: 90,
                    bgcolor: customColors.darkGreen,
                    color: customColors.textPrimary,
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                </Avatar>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Token"
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={airdrop ? airdrop.name : ""}
                      secondaryTypographyProps={{
                        color: customColors.textPrimary,
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Platform"
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={airdrop ? airdrop.platform : ""}
                      secondaryTypographyProps={{
                        color: customColors.textPrimary,
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Total Distribution"
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={airdrop ? airdrop.total_distribution : ""}
                      secondaryTypographyProps={{
                        color: customColors.textPrimary,
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Actions"
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={airdrop ? airdrop.actions : ""}
                      secondaryTypographyProps={{
                        color: customColors.textPrimary,
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Status"
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={airdrop ? airdrop.airdrop_status : ""}
                      secondaryTypographyProps={{
                        color: customColors.textPrimary,
                      }}
                    />
                  </ListItem>
                </List>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: customColors.primaryGreen,
                  }}
                >
                  Links
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    borderColor: customColors.gray800,
                  }}
                />
                {socials?.map((social: Record<string, string>, index: number) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText
                      primary={social.platform}
                      primaryTypographyProps={{
                        color: customColors.textSecondary,
                      }}
                      secondary={
                        <Link
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: customColors.textPrimary }}
                        >
                          {social.url}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  component={Link}
                  href={airdrop?.join_link || ""}
                  sx={{
                    mt: 2,
                    backgroundColor: customColors.primaryGreen,
                    "&:hover": {
                      backgroundColor: customColors.darkGreen,
                    },
                  }}
                  startIcon={<SwapIcon />}
                >
                  Participate Now
                </Button>
              </Paper>
            </Grid>
            {/* Right Column - Content */}
            <Grid size={{ xs: 12, md: 8 }}>
              {/* What is Warden Protocol */}
              <Box mb={6}>
                <Box textAlign="center" mb={6}>
                  <Chip
                    label="Active Airdrop"
                    sx={{
                      mb: 2,
                      backgroundColor: customColors.primaryGreen,
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {airdrop ? airdrop.name : ""}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: customColors.primaryGreen }}
                  >
                    {airdrop ? airdrop.actions : ""}
                  </Typography>
                </Box>
                {
                    details?.map((detail: Record<string, unknown>, index: number) => (
                        <Box mb={4} key={index}>

                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                    {detail.title as string}
                </Typography>
                <Typography
                  paragraph
                  sx={{ color: customColors.textSecondary }}
                >
                    {detail.content as string}
                </Typography>

                        </Box>
                    ))
                }
              </Box>             
            </Grid>

            {/* Right Column - Key Info */}
          </Grid>

          {/* CTA Section */}
          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={airdrop?.join_link || ""}
              sx={{
                px: 6,
                py: 1.5,
                backgroundColor: customColors.primaryGreen,
                "&:hover": {
                  backgroundColor: customColors.darkGreen,
                },
              }}
              startIcon={<SwapIcon />}
            >
              Start Earning Now
            </Button>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: customColors.textSecondary,
              }}
            >
            </Typography>
          </Box>
        </Paper>
      </Container>
      <PageAddSection />
    </Container>
  );
};

export default AirdropDetailsPage;
