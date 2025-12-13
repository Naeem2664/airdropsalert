import { Metadata } from "next";
import Script from "next/script";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import Link from "next/link"; // Import Link for internal navigation

// SEO Metadata for Google and AI Chatbots
export const metadata: Metadata = {
  title: "About AirdropsAlert | Your Guide to Free Crypto Airdrops",
  description: "AirdropsAlert is your premier platform for discovering legitimate and high-value crypto airdrops. Learn about our mission to help you earn free cryptocurrency, blockchain rewards, and stay ahead in the Web3 space. We provide timely alerts, detailed guides, and resources for enthusiasts and investors.",
  keywords: "about us, airdropsalert, crypto airdrops, free crypto, blockchain rewards, web3, cryptocurrency, airdrop alerts, earn crypto, airdrop guide, crypto news",
  openGraph: {
    title: "About AirdropsAlert | Your Guide to Free Crypto Airdrops",
    description: "AirdropsAlert is your premier platform for discovering legitimate and high-value crypto airdrops. Learn about our mission to help you earn free cryptocurrency, blockchain rewards, and stay ahead in the Web3 space. We provide timely alerts, detailed guides, and resources for enthusiasts and investors.",
    url: "https://www.airdropsalert.com/about",
    siteName: "AirdropsAlert",
    images: [
      {
        url: "https://www.airdropsalert.com/assets/images/airdrop.jpg", // Replace with a relevant image for the about page if available
        width: 1200,
        height: 630,
        alt: "AirdropsAlert - Discover Free Crypto Airdrops",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AirdropsAlert | Your Guide to Free Crypto Airdrops",
    description: "AirdropsAlert is your premier platform for discovering legitimate and high-value crypto airdrops. Learn about our mission to help you earn free cryptocurrency, blockchain rewards, and stay ahead in the Web3 space. We provide timely alerts, detailed guides, and resources for enthusiasts and investors.",
    images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"], // Replace with a relevant image for the about page if available
  },
  alternates: {
    canonical: "https://www.airdropsalert.com/about",
  },
};

const AboutPage = () => {
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
    "@type": "AboutPage",
    "name": "About AirdropsAlert",
    "url": "https://www.airdropsalert.com/about",
    "description": "AirdropsAlert is a leading platform dedicated to helping users discover and participate in legitimate cryptocurrency airdrops, enabling them to earn free digital assets.",
    "publisher": {
      "@type": "Organization",
      "name": "AirdropsAlert",
      "url": "https://www.airdropsalert.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.airdropsalert.com/next.svg" // Assuming next.svg is your logo, adjust if needed
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.airdropsalert.com/about"
    }
  };


  return (
    <Container maxWidth="xl" sx={{ py: 8, color: customColors.textPrimary }}>
      {/* JSON-LD Script */}
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Paper
        elevation={1}
        sx={{
          p: { xs: 3, md: 5 },
          mb: 4,
          backgroundColor: customColors.lightBlack,
          border: `1px solid ${customColors.gray800}`,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            color: customColors.textPrimary,
            mb: 4,
            fontSize: { xs: "2.2rem", md: "3rem" },
          }}
        >
          About AirdropsAlert
        </Typography>

        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ mb: 5, color: customColors.textSecondary, lineHeight: 1.6 }}
        >
          Your ultimate destination for discovering and securing the latest and most legitimate cryptocurrency airdrops.
        </Typography>

        <Divider sx={{ my: 4, borderColor: customColors.gray800 }} />

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: customColors.primaryGreen,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            At AirdropsAlert, our mission is to simplify the process of finding and participating in cryptocurrency airdrops. We believe that everyone should have the opportunity to earn free digital assets and become part of the rapidly evolving Web3 ecosystem. Our platform is meticulously curated to provide timely, accurate, and actionable information, helping you navigate the exciting world of blockchain rewards with confidence.
          </Typography>
          <Typography variant="body1" sx={{ color: customColors.textSecondary, lineHeight: 1.7 }}>
            We strive to be the most trusted resource for airdrop enthusiasts, from beginners to seasoned investors.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: customColors.primaryGreen,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            What We Offer
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            <ul>
              <li>
                <strong>Legitimate Airdrop Listings:</strong> We meticulously verify every airdrop to ensure you only encounter genuine opportunities, minimizing scams and time-wasting efforts.
              </li>
              <li>
                <strong>Timely Alerts:</strong> Stay informed with our up-to-the-minute alerts on new and upcoming airdrops, so you never miss a chance to claim free tokens.
              </li>
              <li>
                <strong>Detailed Guides:</strong> Our comprehensive guides provide step-by-step instructions on how to participate in various airdrops, making the process easy for everyone.
              </li>
              <li>
                <strong>Educational Resources:</strong> Understand the ins and outs of the crypto space, learn about different blockchain projects, and deepen your knowledge of digital assets.
              </li>
              <li>
                <strong>Community Focus:</strong> While not a direct community platform, our content is geared towards empowering the crypto community with valuable, accessible information.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: customColors.primaryGreen,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Why Choose AirdropsAlert?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            In a fast-paced and sometimes confusing crypto landscape, AirdropsAlert stands out by offering clarity, reliability, and a user-centric approach. We are passionate about helping you maximize your crypto earnings and engage effectively with the decentralized future. Our commitment to accuracy and user safety makes us the go-to resource for free crypto opportunities.
          </Typography>
        </Box>

        <Box textAlign="center" mt={6}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: customColors.textPrimary, fontWeight: 600 }}
          >
            Join thousands of users who trust AirdropsAlert for their free crypto journey!
          </Typography>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Typography component="a" variant="button" sx={{
              mt: 2,
              display: 'inline-block',
              px: 4,
              py: 1.5,
              backgroundColor: customColors.primaryGreen,
              color: customColors.primaryBlack,
              borderRadius: 1,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: customColors.darkGreen,
                color: customColors.textPrimary,
              },
            }}>
              Explore Airdrops
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;