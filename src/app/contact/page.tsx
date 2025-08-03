import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  InputAdornment, 
  Paper,
} from '@mui/material';
import { 
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Message as MessageIcon 
} from '@mui/icons-material';
import { colors } from '@/utils/colors';

const ContactForm = () => {

  return (
    <Box 
      sx={{
        width: '100%',
        py: 8,
        px: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#0a1901'
      }}
    >
      
      <Paper 
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: '700px',
          p: { xs: 3, md: 4 },
          bgcolor: '#111827', // Slightly lighter dark background
          borderRadius: 2,
          border: '1px solid #1e293b' // Subtle border
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 4, 
            fontWeight: 800,
            color: '#10B981', // Your green color
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Contact Us
        </Typography>

        <Box 
          component="form" 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3 
          }}
        >
          {/* Name Field */}
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: '#10B981' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#f3f4f6', // Light text
                '& fieldset': {
                  borderColor: colors.primaryGreen, // Dark border
                },
                '&:hover fieldset': {
                  borderColor: '#10B981', // Green border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#10B981', // Green border when focused
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)' // Green glow
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9ca3af', // Gray label
                '&.Mui-focused': {
                  color: '#10B981' // Green label when focused
                }
              }
            }}
          />

          {/* Phone Field */}
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#10B981' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#f3f4f6',
                '& fieldset': {
                  borderColor: colors.primaryGreen,
                },
                '&:hover fieldset': {
                  borderColor: '#10B981',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#10B981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9ca3af',
                '&.Mui-focused': {
                  color: '#10B981'
                }
              }
            }}
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#10B981' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#f3f4f6',
                '& fieldset': {
                  borderColor: colors.primaryGreen,
                },
                '&:hover fieldset': {
                  borderColor: '#10B981',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#10B981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9ca3af',
                '&.Mui-focused': {
                  color: '#10B981'
                }
              }
            }}
          />

          {/* Message Field */}
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MessageIcon sx={{ color: '#10B981', mt: 0.5 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#f3f4f6',
                '& fieldset': {
                  borderColor: colors.primaryGreen,
                },
                '&:hover fieldset': {
                  borderColor: '#10B981',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#10B981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
                },
                alignItems: 'flex-start'
              },
              '& .MuiInputLabel-root': {
                color: '#9ca3af',
                '&.Mui-focused': {
                  color: '#10B981'
                }
              }
            }}
          />

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: '#10B981',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#0ea371', // Slightly darker green
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;