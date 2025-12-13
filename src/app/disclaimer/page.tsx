import { Metadata } from "next";
import Script from "next/script";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import Link from "next/link"; // Import Link for internal navigation

// SEO Metadata for Google and AI Chatbots
export const metadata: Metadata = {
  title: "AirdropsAlert Disclaimer | Understand Airdrop Risks",
  description: "Read AirdropsAlert's full disclaimer regarding cryptocurrency airdrops. We provide information on airdrops but do not guarantee their legitimacy or financial returns. Users must conduct their own research and understand the inherent risks.",
  keywords: "airdrop disclaimer, crypto disclaimer, airdrop risks, cryptocurrency risks, not financial advice, AirdropsAlert, crypto scams, web3 risks, passive income disclaimer",
  openGraph: {
    title: "AirdropsAlert Disclaimer | Understand Airdrop Risks",
    description: "Read AirdropsAlert's full disclaimer regarding cryptocurrency airdrops. We provide information on airdrops but do not guarantee their legitimacy or financial returns. Users must conduct their own research and understand the inherent risks.",
    url: "https://www.airdropsalert.com/disclaimer",
    siteName: "AirdropsAlert",
    images: [
      {
        url: "https://www.airdropsalert.com/assets/images/airdrop.jpg", // Replace with a relevant image if available
        width: 1200,
        height: 630,
        alt: "AirdropsAlert - Disclaimer on Crypto Airdrops",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirdropsAlert Disclaimer | Understand Airdrop Risks",
    description: "Read AirdropsAlert's full disclaimer regarding cryptocurrency airdrops. We provide information on airdrops but do not guarantee their legitimacy or financial returns. Users must conduct their own research and understand the inherent risks.",
    images: ["https://www.airdropsalert.com/assets/images/airdrop.jpg"], // Replace with a relevant image if available
  },
  alternates: {
    canonical: "https://www.airdropsalert.com/disclaimer",
  },
};

const DisclaimerPage = () => {
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
    "name": "AirdropsAlert Disclaimer",
    "url": "https://www.airdropsalert.com/disclaimer",
    "description": "Disclaimer information for AirdropsAlert, outlining the risks associated with cryptocurrency airdrops and the site's role as an informational platform.",
    "publisher": {
      "@type": "Organization",
      "name": "AirdropsAlert",
      "url": "https://www.airdropsalert.com"
    },
    "about": {
      "@type": "TextDigitalDocument",
      "headline": "AirdropsAlert Disclaimer"
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8, color: customColors.textPrimary }}>
      {/* JSON-LD Script */}
      <Script
        id="disclaimer-jsonld"
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
            color: 'white',
            mb: 4,
            fontSize: { xs: "2.2rem", md: "3rem" },
          }}
        >
          AirdropsAlert Disclaimer
        </Typography>

        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ mb: 5, color: customColors.textSecondary, lineHeight: 1.6 }}
        >
          Important information regarding the nature of cryptocurrency airdrops and your responsibilities.
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
            No Guarantees on Airdrop Legitimacy or Value
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            AirdropsAlert operates as an informational platform, curating and listing various cryptocurrency airdrop opportunities as they become available. While we strive to provide accurate and timely information, we DO NOT guarantee the legitimacy, success, or future value of any listed airdrop.
          </Typography>
          <Typography variant="body1" sx={{ color: customColors.textSecondary, lineHeight: 1.7 }}>
            The projects offering these airdrops are third-party entities, and their actions, intentions, or the eventual distribution of tokens are beyond our control. Participation in any airdrop is at your own discretion and risk.
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
            Do Your Own Research (DYOR)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            We strongly advise all users to conduct their own thorough research (DYOR) before participating in any cryptocurrency airdrop. Investigate the project, its team, whitepaper, community, and technology. Be wary of projects that promise unrealistic returns or demand sensitive personal information.
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
            Risks Associated with Airdrops
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            Participating in airdrops carries inherent risks, including but not limited to:
            <ul>
              <li><strong>Scams and Phishing:</strong> Malicious actors often use airdrops as a front for phishing scams or to distribute malware.</li>
              <li><strong>Rug Pulls:</strong> Projects may abandon development after gaining traction, rendering distributed tokens worthless.</li>
              <li><strong>Lack of Value:</strong> Many airdropped tokens may never gain significant market value or liquidity.</li>
              <li><strong>Security Vulnerabilities:</strong> Interacting with smart contracts or websites from unverified projects could expose your digital assets to theft.</li>
              <li><strong>Regulatory Uncertainty:</strong> The regulatory landscape for cryptocurrencies and airdrops is evolving and varies by jurisdiction.</li>
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
            Not Financial Advice
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            The content provided on AirdropsAlert is for informational and educational purposes only. It does not constitute financial, investment, legal, or any other professional advice. We are not liable for any losses or damages incurred as a result of relying on the information presented on this website. Always consult with a qualified professional before making any financial decisions.
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
            Best Practices
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: customColors.textSecondary, lineHeight: 1.7 }}>
            To mitigate risks, we recommend:
            <ul>
              <li>Using a dedicated, separate wallet for airdrops that holds minimal funds.</li>
              <li>Never sharing your private keys or seed phrases with anyone.</li>
              <li>Being cautious with requests for personal information beyond what is strictly necessary.</li>
              <li>Revoking token approvals from suspicious contracts.</li>
            </ul>
          </Typography>
        </Box>

        <Box textAlign="center" mt={6}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: customColors.textPrimary, fontWeight: 600 }}
          >
            By using AirdropsAlert, you acknowledge and agree to this disclaimer.
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
              Return to Homepage
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default DisclaimerPage;