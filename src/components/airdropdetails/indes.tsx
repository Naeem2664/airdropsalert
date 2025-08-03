import React from 'react';
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
  ListItemIcon,
  ListItemText,
  Container
} from '@mui/material';
import PageAddSection from '@/components/sections/adsSections/homeUpperAdSection/page'; 

import {
  Bolt as BoltIcon,
  Link as LinkIcon,
  SwapHoriz as SwapIcon,
  AttachMoney as MoneyIcon,
  Timeline as VolumeIcon,
  Groups as CommunityIcon
} from '@mui/icons-material';

const WardenAirdropPage = () => {
  const customColors = {
    primaryGreen: '#10B981',
    darkGreen: '#0ea371',
    primaryBlack: '#0a1929',
    lightBlack: '#111827',
    gray800: '#1e293b',
    textPrimary: '#f3f4f6',
    textSecondary: '#9ca3af'
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <PageAddSection />
        <Container maxWidth="lg" sx={{ 
      py: 6,
      backgroundColor: customColors.primaryBlack,
      marginBottom: 20
    }}>
        {/* Top Ad Section */}
                

      <Paper elevation={3} sx={{ 
        p: { xs: 3, md: 6 }, 
        borderRadius: 4,
        backgroundColor: customColors.lightBlack,
        border: `1px solid ${customColors.gray800}`
      }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Chip
            label="Active Airdrop"
            sx={{ 
              mb: 2,
              backgroundColor: customColors.primaryGreen,
              color: 'white',
              fontWeight: 600
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontWeight: 700,
            color: 'white'
          }}>
            Warden Protocol Airdrop Guide
          </Typography>
          <Typography variant="h5" sx={{ color: customColors.primaryGreen }}>
            Earn PUMP Tokens Through Real Crypto Usage
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left Column - Content */}
          <Grid size={{ xs: 12, md: 8 }}    >
            {/* What is Warden Protocol */}
            <Box mb={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ 
                fontWeight: 600,
                color: 'white'
              }}>
                What is Warden Protocol?
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Warden Protocol is a full-stack purpose-built Layer 1 blockchain specifically designed 
                for developers to build Intelligent Applications. As an AI-native blockchain, Warden makes 
                machine learning models accessible to anyone and anywhere.
              </Typography>
              
              <List dense sx={{ mb: 3 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <BoltIcon sx={{ color: customColors.primaryGreen }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Unlimited building potential for intelligent applications" 
                    primaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <LinkIcon sx={{ color: customColors.primaryGreen }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Cross-chain compatibility (Cosmos, Ethereum, Solana)" 
                    primaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SwapIcon sx={{ color: customColors.primaryGreen }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Chain-agnostic accessibility across networks" 
                    primaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
              </List>

              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                With over 2 million users joining in just 21 days and 95,000 daily signups, 
                Warden has demonstrated significant traction in the crypto community.
              </Typography>
            </Box>

            {/* Airdrop Details */}
            <Box mb={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ 
                fontWeight: 600,
                color: 'white'
              }}>
                Airdrop Details
              </Typography>
              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                The Warden Protocol airdrop centers around the Swap Till You Drop campaign, 
                which rewards users for actual crypto usage rather than social media tasks.
              </Typography>

              <Paper elevation={2} sx={{ 
                p: 3, 
                mb: 4, 
                backgroundColor: customColors.primaryBlack,
                border: `1px solid ${customColors.gray800}`
              }}>
                <Typography variant="h6" gutterBottom sx={{ 
                  fontWeight: 600,
                  color: customColors.primaryGreen
                }}>
                  Reward Structure
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <MoneyIcon sx={{ 
                        color: customColors.primaryGreen,
                        mr: 1 
                      }} />
                      <Typography sx={{ color: customColors.textPrimary }}>
                        <strong>100 PUMPs</strong> per successful swap
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <SwapIcon sx={{ 
                        color: customColors.primaryGreen,
                        mr: 1 
                      }} />
                      <Typography sx={{ color: customColors.textPrimary }}>
                        <strong>1,000 PUMPs</strong> for 5 swaps (500 bonus)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box display="flex" alignItems="center">
                      <VolumeIcon sx={{ 
                        color: customColors.primaryGreen,
                        mr: 1 
                      }} />
                      <Typography sx={{ color: customColors.textPrimary }}>
                        <strong>Volume bonuses</strong> for $1,000+ swaps
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>

              <Typography paragraph sx={{ color: customColors.textSecondary }}>
                Warden has allocated 10% of the total SWARD token supply to a Public Goods Pool 
                designed for active app users.
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Key Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={2} sx={{ 
              p: 3, 
              mb: 4, 
              position: 'sticky', 
              top: 20,
              backgroundColor: customColors.primaryBlack,
              border: `1px solid ${customColors.gray800}`
            }}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 600,
                color: customColors.primaryGreen
              }}>
                Key Information
              </Typography>
              <Divider sx={{ 
                my: 2,
                borderColor: customColors.gray800
              }} />
              
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Token" 
                    primaryTypographyProps={{ color: customColors.textSecondary }}
                    secondary="SWARD" 
                    secondaryTypographyProps={{ 
                      color: customColors.textPrimary, 
                      fontWeight: 500 
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Network" 
                    primaryTypographyProps={{ color: customColors.textSecondary }}
                    secondary="Warden Protocol (Layer 1)" 
                    secondaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Total Allocation" 
                    primaryTypographyProps={{ color: customColors.textSecondary }}
                    secondary="10% of supply" 
                    secondaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Campaign" 
                    primaryTypographyProps={{ color: customColors.textSecondary }}
                    secondary="Swap Till You Drop" 
                    secondaryTypographyProps={{ color: customColors.textPrimary }}
                  />
                </ListItem>
              </List>

              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                sx={{ 
                  mt: 2,
                  backgroundColor: customColors.primaryGreen,
                  '&:hover': {
                    backgroundColor: customColors.darkGreen
                  }
                }}
                startIcon={<SwapIcon />}
              >
                Participate Now
              </Button>
            </Paper>

            <Paper elevation={2} sx={{ 
              p: 3,
              backgroundColor: customColors.primaryBlack,
              border: `1px solid ${customColors.gray800}`
            }}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 600,
                color: customColors.primaryGreen
              }}>
                Community Growth
              </Typography>
              <Divider sx={{ 
                my: 2,
                borderColor: customColors.gray800
              }} />
              <Box display="flex" alignItems="center" mb={2}>
                <CommunityIcon sx={{ 
                  color: customColors.primaryGreen,
                  mr: 1 
                }} />
                <Typography sx={{ color: customColors.textPrimary }}>
                  <strong>2M+ users</strong> in 21 days
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <CommunityIcon sx={{ 
                  color: customColors.primaryGreen,
                  mr: 1 
                }} />
                <Typography sx={{ color: customColors.textPrimary }}>
                  <strong>95K daily</strong> signups
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box textAlign="center" mt={6}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              px: 6, 
              py: 1.5,
              backgroundColor: customColors.primaryGreen,
              '&:hover': {
                backgroundColor: customColors.darkGreen
              }
            }}
            startIcon={<SwapIcon />}
          >
            Start Earning PUMP Tokens
          </Button>
          <Typography variant="body2" sx={{ 
            mt: 2,
            color: customColors.textSecondary
          }}>
            No minimum swap amount required - participate at any level
          </Typography>
        </Box>
      </Paper>
    </Container>
    <PageAddSection />

    </Container>
    
  );
};

export default WardenAirdropPage;