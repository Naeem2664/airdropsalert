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

const AirdropCard = ({ 
  title = "WAB Summit",
  action = "Complete the social quest",
  status = "CONFIRMED",
  points = 500,
  image = null 
}) => {
  const theme = useTheme();

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
        }
      }}
      elevation={0}
    >
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header with logo and title */}
        <Stack direction="row" alignItems="flex-start" spacing={2} mb={2} >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: 'warning.light',
              color: colors.primaryWhite,
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            {image || 'LOGO'}
          </Avatar>
          <Typography variant="h6" fontWeight="bold" component="div" color={colors.primaryWhite}>
            {title}
          </Typography>
        </Stack>

        {/* Action section */}
        <Box mb={3}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Construction fontSize="small" color="action" />
            <Typography variant="body1" fontWeight="medium" color={colors.primaryWhite}>
              Action: {action}
            </Typography>
          </Stack>
        </Box>

        {/* Footer with status and points */}
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Chip
            icon={<CheckCircle fontSize="small" />}
            label={status}
            size="small"
            sx={{
              bgcolor: 'success.light',
              color: 'success.dark',
              fontWeight: 'medium'
            }}
          />
          
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <LocalFireDepartment fontSize="small" color="error" />
            <Typography variant="body1" fontWeight="medium" color={colors.primaryWhite}>
              {points}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AirdropCard;