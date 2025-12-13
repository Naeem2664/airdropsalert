'use client'
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import PageAddSection from "@/components/sections/adsSections/homeUpperAdSection/page";

const PrivacyPolicyPage = () => {
  const customColors = {
    primaryGreen: "#10B981",
    darkGreen: "#0ea371",
    primaryBlack: "#0a1929",
    lightBlack: "#111827",
    gray800: "#1e293b",
    textPrimary: "#f3f4f6",
    textSecondary: "#9ca3af",
  };

  const lastUpdated = "December 1, 2024";

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } ,mt:4}}>
      <Container
        maxWidth="xl"
        sx={{
          py: 6,
          backgroundColor: customColors.primaryBlack,
          marginBottom: 20,
        }}
      >
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
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "white",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: customColors.primaryGreen }}
            >
              Last Updated: {lastUpdated}
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: customColors.gray800 }} />

          {/* Introduction */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Introduction
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              Welcome to AirdropsAlert (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy
              and ensuring the security of your personal information. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our cryptocurrency
              airdrop platform.
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              By accessing or using AirdropsAlert, you agree to the terms of this Privacy Policy. If you do 
              not agree with the terms, please do not access the platform.
            </Typography>
          </Box>

          {/* Information We Collect */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Information We Collect
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              Personal Information
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Wallet addresses and blockchain transaction data
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Email address for account verification and notifications
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Social media account information for airdrop verification
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                KYC/AML documentation when required for specific airdrops
              </ListItem>
            </List>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              Technical Information
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                IP address and browser type
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Device information and operating system
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Usage data and platform interaction metrics
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Cookies and similar tracking technologies
              </ListItem>
            </List>
          </Box>

          {/* How We Use Your Information */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              How We Use Your Information
            </Typography>
            <List>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To facilitate airdrop participation and token distribution
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To verify eligibility for specific airdrop campaigns
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To communicate important updates about airdrops and platform changes
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To improve our platform and user experience
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To comply with legal obligations and prevent fraudulent activities
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To provide customer support and resolve technical issues
              </ListItem>
            </List>
          </Box>

          {/* Information Sharing */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Information Sharing
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              We do not sell your personal information to third parties. However, we may share your 
              information in the following circumstances:
            </Typography>
            <List>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                With blockchain projects conducting airdrops to verify participation
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                With service providers who assist in platform operations
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                When required by law, regulation, or legal process
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                To protect our rights, property, or safety, or that of our users
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                In connection with a business transfer, such as a merger or acquisition
              </ListItem>
            </List>
          </Box>

          {/* Data Security */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Data Security
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </Typography>
            <List>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Encryption of sensitive data in transit and at rest
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Regular security assessments and vulnerability testing
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Access controls and authentication mechanisms
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Secure development practices and employee training
              </ListItem>
            </List>
          </Box>

          {/* Your Rights */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Your Rights
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              Depending on your jurisdiction, you may have the following rights regarding your 
              personal information:
            </Typography>
            <List>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Access and review the personal information we hold about you
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Request correction of inaccurate or incomplete information
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Request deletion of your personal information
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Object to or restrict certain processing activities
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Data portability rights
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Withdraw consent where processing is based on consent
              </ListItem>
            </List>
          </Box>

          {/* Cookies and Tracking */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Cookies and Tracking Technologies
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              We use cookies and similar tracking technologies to enhance your experience on our 
              platform. These technologies help us:
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Remember your preferences and settings
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Analyze platform usage and improve performance
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Provide personalized content and recommendations
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Detect and prevent fraudulent activities
              </ListItem>
            </List>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              You can control cookie settings through your browser preferences, but disabling cookies 
              may affect certain platform features.
            </Typography>
          </Box>

          {/* Third-Party Links */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Third-Party Links
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              Our platform may contain links to third-party websites, including blockchain projects, 
              exchanges, and other cryptocurrency services. This Privacy Policy does not apply to 
              third-party websites, and we are not responsible for their privacy practices. We 
              encourage you to review the privacy policies of any third-party sites you visit.
            </Typography>
          </Box>

          {/* International Data Transfers */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              International Data Transfers
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              As a global cryptocurrency platform, your personal information may be transferred to 
              and processed in countries other than your own. We ensure appropriate safeguards are 
              in place to protect your information in accordance with this Privacy Policy and 
              applicable data protection laws.
            </Typography>
          </Box>

          {/* Changes to This Policy */}
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Changes to This Policy
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. We will notify you of any material 
              changes by posting the updated policy on our platform and updating the &ldquo;Last Updated&rdquo; date.
            </Typography>
          </Box>

          {/* Contact Information */}
          <Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: customColors.primaryGreen,
                mb: 3,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              If you have any questions, concerns, or requests regarding this Privacy Policy or our 
              data practices, please contact us at:
            </Typography>
            <Box sx={{ color: customColors.textSecondary }}>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Email: privacy@airdropsalert.com
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Discord: AirdropsAlert Support
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Twitter: @AirdropsAlert_Support
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 6, borderColor: customColors.gray800 }} />

          <Typography
            variant="body2"
            sx={{
              color: customColors.textSecondary,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            This Privacy Policy is effective as of {lastUpdated}. By using AirdropsAlert, you acknowledge 
            that you have read and understood this Privacy Policy.
          </Typography>
        </Paper>
      </Container>
    </Container>
  );
};

export default PrivacyPolicyPage;
