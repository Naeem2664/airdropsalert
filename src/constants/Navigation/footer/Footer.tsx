"use client";
import { Box, Typography, Link, TextField, Button, Divider, Grid } from '@mui/material';
import { colors } from "@/utils/colors";
import { footerLinks, socialLinks } from "@/constants/components/links";

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: colors.secondaryBlack,
        borderTop: `1px solid ${colors.secondaryBlack}`,
        py: 8,
        px: { xs: 3, md: 6 }
      }}
    >
      <Box sx={{ 
        maxWidth: '1530px',
        mx: 'auto',
      }}>
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Link href="/" underline="none">
              <Typography 
                variant="h4" 
                component="div"
                sx={{
                  fontWeight: 800,
                  color: 'white',
                  mb: 2
                }}
              >
                AirdropX
              </Typography>
            </Link>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
              Your premier source for Web3 airdrops and crypto opportunities.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: colors.primaryGreen,
                    '&:hover': {
                      color: colors.primaryGreen
                    }
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.slice(0, 4).map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    underline="hover"
                    sx={{
                      color: 'grey.400',
                      '&:hover': {
                        color: colors.primaryGreen
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Resources
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.slice(4).map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    underline="hover"
                    sx={{
                      color: 'grey.400',
                      '&:hover': {
                        color: colors.primaryGreen
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid  size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
              Subscribe to our newsletter for the latest airdrops.
            </Typography>
            <Box component="form" sx={{ display: 'flex' }}>
              <TextField
                type="email"
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: colors.secondaryBlack,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    '& fieldset': {
                      borderColor: colors.secondaryBlack,
                    },
                    '&:hover fieldset': {
                      borderColor: colors.primaryGreen,
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: colors.primaryGreen,
                  color: 'white',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  px: 3,
                  '&:hover': {
                    backgroundColor: colors.primaryGreen
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Divider sx={{ 
          borderColor: colors.primaryBlack,
          my: 4,
          mx: { xs: -3, md: -6 }
        }} />
        <Typography 
          variant="body2" 
          color="grey.500" 
          align="center"
        >
          © {new Date().getFullYear()} AirdropX. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;