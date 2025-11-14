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

const TermsAndConditionsPage = () => {
  const customColors = {
    primaryGreen: "#10B981",
    darkGreen: "#0ea371",
    primaryBlack: "#0a1929",
    lightBlack: "#111827",
    gray800: "#1e293b",
    textPrimary: "#f3f4f6",
    textSecondary: "#9ca3af",
  };

  const effectiveDate = "December 1, 2024";

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
              Terms and Conditions
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: customColors.primaryGreen }}
            >
              Effective Date: {effectiveDate}
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
              1. Acceptance of Terms
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              Welcome to AirdropX (Platform, we, us, or our). By accessing or using our 
              cryptocurrency airdrop platform, website, and related services (collectively, the Services), 
              you agree to be bound by these Terms and Conditions and our Privacy Policy.
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              If you do not agree to these terms, you must not access or use our Services. We reserve 
              the right to modify these terms at any time, and your continued use constitutes acceptance 
              of such modifications.
            </Typography>
          </Box>

          {/* Eligibility */}
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
              2. Eligibility and Account Registration
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              2.1 Age and Legal Capacity
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              You must be at least 18 years old and have the legal capacity to enter into binding 
              contracts in your jurisdiction to use our Services. By using AirdropX, you represent 
              and warrant that you meet these requirements.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              2.2 Jurisdictional Restrictions
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              Certain airdrops may be restricted in your jurisdiction due to local laws and regulations. 
              It is your responsibility to ensure that your participation in any airdrop complies with 
              applicable laws in your country of residence.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              2.3 Account Security
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              You are responsible for maintaining the confidentiality of your account credentials, 
              wallet addresses, and any other security information. We are not liable for any losses 
              resulting from unauthorized access to your account.
            </Typography>
          </Box>

          {/* Airdrop Participation */}
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
              3. Airdrop Participation
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Eligibility Requirements:</strong> Each airdrop has specific eligibility criteria 
                set by the project team. We do not guarantee that you will qualify for any airdrop.
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Completion of Tasks:</strong> You must complete all required tasks (social media 
                follows, referrals, etc.) to qualify for airdrop rewards.
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Verification Process:</strong> We reserve the right to verify your task completion 
                and may disqualify participants who provide false information.
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Token Distribution:</strong> Token distribution timelines are determined by the 
                project teams. We are not responsible for delays in distribution.
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Tax Obligations:</strong> You are solely responsible for any tax liabilities 
                arising from airdrop rewards in your jurisdiction.
              </ListItem>
            </List>
          </Box>

          {/* User Responsibilities */}
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
              4. User Responsibilities and Conduct
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              Prohibited Activities
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Creating multiple accounts to manipulate airdrop systems
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Using automated bots, scripts, or other unauthorized methods
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Providing false information or impersonating others
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Engaging in fraudulent activities or money laundering
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Violating any applicable laws or regulations
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Attempting to hack, disrupt, or compromise our platform
              </ListItem>
            </List>

            <Typography
              variant="h6"
              sx={{ color: "white", mb: 2 }}
            >
              Wallet Security
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              You are solely responsible for the security of your cryptocurrency wallets. We never 
              request your private keys or seed phrases. Any request for this information is fraudulent.
            </Typography>
          </Box>

          {/* Intellectual Property */}
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
              5. Intellectual Property
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              All content on the AirdropX platform, including but not limited to text, graphics, logos, 
              images, and software, is our property or the property of our licensors and is protected 
              by intellectual property laws.
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              You may not reproduce, distribute, modify, or create derivative works of our content 
              without our express written permission. Airdrop project information is provided for 
              informational purposes only and remains the property of the respective projects.
            </Typography>
          </Box>

          {/* Disclaimer of Warranties */}
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
              6. Disclaimer of Warranties
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              THE SERVICES ARE PROVIDED AS IS AND AS AVAILABLE WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, WE DISCLAIM ALL 
              WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Warranties of merchantability or fitness for a particular purpose
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Guarantees of airdrop token value or future performance
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Assurance of uninterrupted or error-free service
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Endorsement of any blockchain project or token
              </ListItem>
            </List>
          </Box>

          {/* Limitation of Liability */}
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
              7. Limitation of Liability
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Loss of profits, data, or cryptocurrency assets
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Damages resulting from airdrop project failures or rug pulls
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Losses due to market volatility or token depreciation
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Security breaches of your personal wallets or accounts
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Regulatory actions or legal consequences in your jurisdiction
              </ListItem>
            </List>
          </Box>

          {/* Risk Acknowledgement */}
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
              8. Cryptocurrency Risks Acknowledgement
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              You acknowledge and understand the inherent risks associated with cryptocurrency 
              activities, including:
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Market Volatility:</strong> Cryptocurrency prices can fluctuate dramatically
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Regulatory Uncertainty:</strong> Changing laws may affect token value and legality
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Project Risks:</strong> Airdrop projects may fail or be abandoned
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Technical Risks:</strong> Smart contract vulnerabilities or blockchain issues
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                <strong>Scam Projects:</strong> Some projects may be fraudulent despite our vetting
              </ListItem>
            </List>
          </Box>

          {/* Termination */}
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
              9. Termination
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              We may suspend or terminate your access to the Services at any time, with or without 
              cause, with or without notice. Reasons for termination may include:
            </Typography>
            <List sx={{ mb: 3 }}>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Violation of these Terms and Conditions
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Suspicious or fraudulent activity
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Requests from law enforcement or regulatory authorities
              </ListItem>
              <ListItem sx={{ color: customColors.textSecondary, display: 'list-item', ml: 2 }}>
                Technical or security issues
              </ListItem>
            </List>
          </Box>

          {/* Governing Law */}
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
              10. Governing Law and Dispute Resolution
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
              without regard to its conflict of law provisions.
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              Any disputes arising from these Terms or your use of the Services shall be resolved through 
              binding arbitration in accordance with the rules of [Arbitration Association]. You agree to 
              waive your right to participate in class-action lawsuits.
            </Typography>
          </Box>

          {/* Changes to Terms */}
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
              11. Changes to Terms
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary }}
            >
              We reserve the right to modify these Terms and Conditions at any time. We will notify 
              users of material changes through platform notifications or email. Your continued use 
              of the Services after such changes constitutes acceptance of the modified terms.
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
              12. Contact Information
            </Typography>
            <Typography
              paragraph
              sx={{ color: customColors.textSecondary, mb: 3 }}
            >
              For questions about these Terms and Conditions, please contact us at:
            </Typography>
            <Box sx={{ color: customColors.textSecondary }}>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Email: legal@airdropx.com
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Discord: AirdropX Legal Support
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Twitter: @AirdropX_Official
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
            By using AirdropX, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms and Conditions. These terms constitute the entire agreement between you 
            and AirdropX regarding your use of the Services.
          </Typography>
        </Paper>
      </Container>
      <PageAddSection />
    </Container>
  );
};

export default TermsAndConditionsPage;