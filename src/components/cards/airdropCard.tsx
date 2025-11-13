import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Avatar, 
  Card, 
  CardContent,
  Stack,
  useTheme
} from '@mui/material';
import {colors} from '@/utils/colors';
import { CheckCircle, LocalFireDepartment, Construction } from '@mui/icons-material';

interface AirdropCardProps {
  name: string;
  image_urls?: string[];
  actions?: string | null;
  airdrop_status?: string | null;
  trust_score?: number | null;
  sx?: object;
}

const AirdropCard: React.FC<AirdropCardProps> = ({
  name,
  image_urls,
  actions,
  airdrop_status,
  trust_score,
  sx,
}) => {
  const theme = useTheme();

  // Use first image as avatar or fallback to name initials
  const avatarContent = image_urls && image_urls.length > 0 
    ? <Avatar src={image_urls[0]} sx={{ width: 60, height: 60 }} />
    : <Avatar sx={{ width: 60, height: 60, bgcolor: 'warning.light', color: colors.primaryWhite }}>
        {name?.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
      </Avatar>;

  return (
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 280,
          height: '100%',
          bgcolor: colors.primaryBlack,
          border: `1px solid #10B981`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[6],
            bgcolor: "#323332"
          },
          ...sx
        }}
        elevation={0}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header with logo/avatar and title */}
          <Stack direction="row" alignItems="flex-start" spacing={2} mb={2}>
            {avatarContent}
            <Typography variant="h6" fontWeight="bold" component="div" color={colors.primaryWhite}>
              {name}
            </Typography>
          </Stack>

          {/* Action section */}
          {actions && (
            <Box mb={3}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Construction fontSize="small" color="action" />
                <Typography variant="body1" fontWeight="medium" color={colors.primaryWhite}>
                  Action: {actions}
                </Typography>
              </Stack>
            </Box>
          )}

          {/* Footer with status and trust score */}
          <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between' }}>
            {airdrop_status && (
              <Chip
                icon={<CheckCircle fontSize="small" />}
                label={airdrop_status}
                size="small"
                sx={{
                  bgcolor: 'success.light',
                  color: 'success.dark',
                  fontWeight: 'medium'
                }}
              />
            )}
            
            {trust_score != null && (
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LocalFireDepartment fontSize="small" color="error" />
                <Typography variant="body1" fontWeight="medium" color={colors.primaryWhite}>
                  {trust_score}
                </Typography>
              </Stack>
            )}
          </Box>
        </CardContent>
      </Card>
  );
};

export default AirdropCard;
