// app/airdrop/[id]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
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
import { SwapHoriz as SwapIcon } from "@mui/icons-material";
import { fetchAirdropById } from "@/libs/api";
interface Detail {
  title: string;
  content: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const airdrop = await fetchAirdropById(id);

  if (!airdrop) {
    return {
      title: "Airdrop Details | Crypto Airdrops",
      description: "Discover crypto airdrop details, participate, and earn tokens.",
      openGraph: {
        title: "Airdrop Details",
        description: "Crypto airdrop information.",
        url: `${BASE_URL}/airdrop/${id}`,
        images: [],
      },
      alternates: { canonical: `${BASE_URL}/airdrop/${id}` },
    };
  }

  const shortDescription = airdrop.actions?.slice(0, 150) || "Participate in this crypto airdrop and earn rewards.";

  return {
    title: `${airdrop.name} Airdrop | Crypto Giveaway`,
    description: shortDescription,
    openGraph: {
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
      url: `${BASE_URL}/airdrop/${id}`,
      images: airdrop.image_urls ?? [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
      images: airdrop.image_urls ?? [],
    },
    alternates: { canonical: `${BASE_URL}/airdrop/${id}` },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const airdrop = await fetchAirdropById(id);

  if (!airdrop) return <p>Airdrop not found.</p>;

  const details: Detail[] = airdrop.details || [];
  const socials: SocialLink[] = airdrop.social_links || [];

  const customColors = {
    primaryGreen: "#10B981",
    darkGreen: "#0ea371",
    primaryBlack: "#0a1932",
    lightBlack: "#111827",
    gray800: "#1e293b",
    textPrimary: "#f3f4f6",
    textSecondary: "#9ca3af",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: airdrop.name,
    url: `${BASE_URL}/airdrop/${id}`,
    description: airdrop.actions,
    image: airdrop.image_urls ?? [],
    publisher: {
      "@type": "Organization",
      name: "AirdropX",
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "Action",
      name: "Participate in Airdrop",
      target: airdrop.join_link ?? `${BASE_URL}/airdrop/${id}`,
    },
    mainEntity: {
      "@type": "Event",
      name: airdrop.name,
      startDate: airdrop.listing_date ?? undefined,
      eventStatus: airdrop.airdrop_status ?? "Active",
      offers: {
        "@type": "Offer",
        url: airdrop.join_link ?? `${BASE_URL}/airdrop/${id}`,
      },
    },
  };

  return (
    <>
      <Script
        id={`airdrop-jsonld-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <PageAddSection />
            <Grid container spacing={1}  sx={{ py: 6, px: { xs: 1, md: 3 }, backgroundColor: customColors.lightBlack, mb: 20 }}>
              {/* Left Column - Key Info */}
              <Grid sx={{ flex: { xs: '0 0 100%', md: '0 0 25%' } }}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    mb: 4,
                    backgroundColor: customColors.primaryBlack,
                    border: `1px solid ${customColors.gray800}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: customColors.primaryGreen }}
                  >
                    Key Information
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: customColors.gray800 }} />
                  <Avatar
                    src={airdrop.image_urls[0]}
                    sx={{
                      width: 90,
                      height: 90,
                      bgcolor: customColors.darkGreen,
                      color: customColors.textPrimary,
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  />
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Token"
                        secondary={airdrop?.name || ""}
                        primaryTypographyProps={{
                          color: customColors.textSecondary,
                        }}
                        secondaryTypographyProps={{
                          color: customColors.textPrimary,
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Platform"
                        secondary={airdrop?.platform || ""}
                        primaryTypographyProps={{
                          color: customColors.textSecondary,
                        }}
                        secondaryTypographyProps={{
                          color: customColors.textPrimary,
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Total Distribution"
                        secondary={airdrop?.total_distribution || ""}
                        primaryTypographyProps={{
                          color: customColors.textSecondary,
                        }}
                        secondaryTypographyProps={{
                          color: customColors.textPrimary,
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Actions"
                        secondary={airdrop?.actions || ""}
                        primaryTypographyProps={{
                          color: customColors.textSecondary,
                        }}
                        secondaryTypographyProps={{
                          color: customColors.textPrimary,
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Status"
                        secondary={airdrop?.airdrop_status || ""}
                        primaryTypographyProps={{
                          color: customColors.textSecondary,
                        }}
                        secondaryTypographyProps={{
                          color: customColors.textPrimary,
                        }}
                      />
                    </ListItem>
                  </List>

                  {socials.length > 0 && (
                    <>
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
                        sx={{ my: 2, borderColor: customColors.gray800 }}
                      />
                      {socials.map((social, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
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
                    </>
                  )}

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    component={Link}
                    href={airdrop.join_link || "#"}
                    sx={{
                      mt: 2,
                      backgroundColor: customColors.primaryGreen,
                      "&:hover": { backgroundColor: customColors.darkGreen },
                    }}
                    startIcon={<SwapIcon />}
                  >
                    Participate Now
                  </Button>
                </Paper>
              </Grid>

              {/* Right Column - Details */}
              <Grid sx={{ flex: { xs: '0 0 100%', md: '0 0 70%' },px: { xs: 0, md: 4 } }}>
                <Box mb={6} textAlign="center">
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
                    sx={{ fontWeight: 700, color: "white" }}
                  >
                    {airdrop.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: customColors.primaryGreen }}
                  >
                    {airdrop.actions}
                  </Typography>
                </Box>

                {details.map((detail, idx) => (
                  <Box mb={4} key={idx}>
                    <Typography
                      variant="h4"
                      component="h2"
                      gutterBottom
                      sx={{ fontWeight: 600, color: "white" }}
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
                ))}

                {/* CTA */}
                <Box textAlign="center" mt={6}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href={airdrop.join_link || "#"}
                    sx={{
                      px: 6,
                      py: 1.5,
                      backgroundColor: customColors.primaryGreen,
                      "&:hover": { backgroundColor: customColors.darkGreen },
                    }}
                    startIcon={<SwapIcon />}
                  >
                    Start Earning Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
        <PageAddSection />
      </Container>
    </>
  );
}
