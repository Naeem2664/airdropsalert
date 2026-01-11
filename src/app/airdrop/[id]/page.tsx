import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Stack
} from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaDiscord,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";
import { SwapHoriz as SwapIcon } from "@mui/icons-material";
import { fetchAirdropById } from "@/libs/api";

interface DetailItem {
  subtitle: string;
  content: string;
}
interface AirdropDetails {
  title: string;
  items: DetailItem[];
}

interface SocialLink {
  platform: string;
  url: string;
}

// Helper function to get the appropriate social icon
const getSocialIcon = (platform: string) => {
  const iconStyle = { fontSize: '27px'};
  switch (platform.toLowerCase()) {
    case 'facebook':
      return <FaFacebookF style={{...iconStyle, color: '#3b5998' }} />;
    case 'instagram':
      return <FaInstagram style={{...iconStyle, color: '#c13584'}} />;
    case 'telegram':
      return <FaTelegramPlane style={{...iconStyle, color: '#0088cc'}} />;
    case 'x':
    case 'twitter':
      return <FaXTwitter style={{...iconStyle, color:'#000'}} />;
    case 'discord':
      return <FaDiscord style={{...iconStyle, color: '#5865F2'}} />;
    case 'website':
      return <FaGlobe style={{...iconStyle,color: '#000'}} />;
    default:
      return <FaGlobe style={{...iconStyle,color: '#000'}} />;
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const airdrop = await fetchAirdropById(id);

  if (!airdrop) {
    return {
      title: "Airdrop Not Found | Crypto Airdrops",
      description:
        "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      openGraph: {
        title: "Airdrop Not Found",
        description:
          "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      },
      twitter: {
        card: "summary_large_image",
        title: "Airdrop Not Found",
        description:
          "This airdrop does not exist. Discover other crypto airdrops and earn tokens.",
      },
    };
  }

  const shortDescription = airdrop.description
    ? airdrop.description.length > 160
      ? airdrop.description.substring(0, 157) + "..."
      : airdrop.description
    : "Stay updated with the latest crypto airdrops and claim free tokens.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${airdrop.name} Airdrop`,
    description:
      airdrop.description ??
      `Participate in the ${airdrop.name} airdrop to claim free tokens.`,
    startDate: airdrop.listing_date ?? undefined,
    eventStatus: "schema.org",
    eventAttendanceMode: "schema.org",
    location: {
      "@type": "VirtualLocation",
      url: airdrop.join_link || "https://airdropsalert.vercel.app",
    },
    organizer: {
      "@type": "Organization",
      name: "Airdrops Alert",
      url: "https://airdropsalert.vercel.app",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "schema.org",
      url: airdrop.join_link || "https://airdropsalert.vercel.app",
      offeredBy: {
        "@type": "Organization",
        name: airdrop.name,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.airdropsalert.com/airdrop/${id}`,
    },
    image: [airdrop.image_urls?.[0] || "/assets/images/placeholder.png"],
  };

  return {
    title: `${airdrop.name} Airdrop | Claim Free Crypto Tokens`,
    description: shortDescription,
    openGraph: {
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
      siteName: "AirdropsAlert",
      type: "website",
      images: [
        {
          url: airdrop.image_urls?.[0] || "/assets/images/placeholder.png",
          width: 1200,
          height: 630,
          alt: `${airdrop.name} Airdrop Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${airdrop.name} Airdrop`,
      description: shortDescription,
      images: [airdrop.image_urls?.[0] || "/assets/images/placeholder.png"],
    },
    alternates: {
      canonical: `https://www.airdropsalert.com/airdrop/${airdrop.id}`,
    },
    other: {
      "script[type=\"application/ld+json\"]": JSON.stringify(jsonLd),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params
  const airdrop = await fetchAirdropById(id);

  if (!airdrop) {
    return (
      <Container maxWidth="md" sx={{ py: 20, textAlign: "center" }}>
        <Typography variant="h2" sx={{ color: "#fff" }}>
          Oops! Airdrop not found.
        </Typography>
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{ mt: 4, backgroundColor: "#10B981" }}
          >
            Browse Other Airdrops
          </Button>
        </Link>
      </Container>
    );
  }

  const airdropDetails: AirdropDetails[] = airdrop.details || [];
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

  return (
    <>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <PageAddSection />

        <Grid
          container
          spacing={1}
          sx={{
            py: 6,
            px: { xs: 1, md: 3 },
            backgroundColor: customColors.lightBlack,
            mb: 20,
          }}
        >
          <Grid sx={{ flex: { xs: "0 0 100%", md: "0 0 25%" } }}>
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
              <Image
                src={airdrop.image_urls?.[0] ?? "/assets/images/placeholder.png"}
                alt={`${airdrop.name} logo`}
                width={90}
                height={90}
                priority={true} 
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary="Token"
                    secondary={airdrop.name || ""}
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
                    secondary={airdrop.platform || ""}
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
                    secondary={airdrop.total_distribution || ""}
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
                    secondary={airdrop.airdrop_status || ""}
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
                    sx={{ fontWeight: 600, color: customColors.primaryGreen }}
                  >
                    Social Links
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: customColors.gray800 }} />
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    {socials.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        style={{ color: customColors.textPrimary,backgroundColor:'#f9ffe6', borderRadius: '30%', padding: '5px' }}
                      >
                        {getSocialIcon(social.platform)}
                      </Link>
                    ))}
                  </Stack>
                </>
              )}

              <Link href={airdrop.join_link || "#"} passHref>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    backgroundColor: customColors.primaryGreen,
                    "&:hover": { backgroundColor: customColors.darkGreen },
                  }}
                  startIcon={<SwapIcon />}
                >
                  Participate Now
                </Button>
              </Link>
            </Paper>
          </Grid>

          <Grid
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 70%" },
              px: { xs: 0, md: 4 },
            }}
          >
            <Box mb={6} textAlign="start">
              <Chip
                label={airdrop.airdrop_status || "Active Airdrop"}
                sx={{
                  mb: 2,
                  backgroundColor: customColors.primaryGreen,
                  color: "#fff",
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h1"
                gutterBottom
                sx={{ fontWeight: 700, color: "#fff" }}
              >
                {airdrop.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: customColors.primaryGreen }}
              >
                {airdrop.description}
              </Typography>
            </Box>

            {airdropDetails?.[0]?.title && (
              <Box mb={4}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontWeight: 700, color: '#fff' }}
                >
                  {airdropDetails[0].title}
                </Typography>
              </Box>
            )}

            {airdropDetails?.[0]?.items.map((item, idx) => (
              <Box mb={4} key={idx}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#fff" }}
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: customColors.textSecondary }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}

            <Box textAlign="center" mt={6}>
              <Link href={airdrop.join_link || "#"} passHref>
                <Button
                  variant="contained"
                  size="large"
                  rel="noopener noreferrer nofollow"
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
              </Link>
            </Box>
          </Grid>
        </Grid>

        <PageAddSection />
      </Container>
    </>
  );
}
