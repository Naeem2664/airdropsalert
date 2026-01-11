'use client';
import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { Airdrop } from '@/contracts/airdrop.type';
import Image from 'next/image';

interface Props {
  airdrops: Airdrop[];
}

const SponsoredAirdrops: React.FC<Props> = ({ airdrops }) => {
  if (!airdrops || airdrops.length === 0) return null;

  const airdrop = airdrops[0];

  return (
    <Box sx={{ width: '100%', mt: { xs: 4, md: 8 } }}>
      <Paper
        sx={{
          borderRadius: '16px',
          p: { xs: 3, md: 4 },
          textAlign: 'center',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          border: '1px solid #374151',
          backgroundColor: '#111827',
          width: '100%',
        }}
      >
          <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2.25rem' }, fontWeight: 700, color: '#ffffff', mb: 2 }}
        >
          📢 Sponsored Airdrop Alert
        </Typography>
        {/* Logo */}
        <Image
          src={airdrop.image_urls?.[0] || '/assets/images/placeholder.png'}
          alt={`${airdrop.name} logo`}
          width={80}
          height={80}
          style={{ marginBottom: 2, margin: 'auto', borderRadius: '12px' }}
        />

      

        <Paper
          sx={{
            backgroundColor: '#1F2937',
            borderRadius: '12px',
            p: { xs: 3, md: 4 },
            border: '1px solid #4B5563',
            boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            '&:hover': { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' },
            transition: 'all 0.3s ease',
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600, color: '#34D399', mb: 1 }}
          >
            🌟 {airdrop.name} – Claim Now
          </Typography>
          <Typography component={'h5'} sx={{ color: '#9CA3AF', fontSize: { xs: '0.875rem', md: '1rem' }, mb: 2 }}>
            {airdrop.description} Up to{' '}
          </Typography>
          <Typography sx={{ color: '#9CA3AF', fontSize: { xs: '0.875rem', md: '1rem' }, mb: 2 }}>
            <Box component="strong" sx={{ fontWeight: 600 }}>
              {airdrop.total_distribution}
            </Box>{' '}
            tokens for early signups.
          </Typography>
          <Button
            href={airdrop.join_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: '#10B981',
              color: '#ffffff',
              px: 3,
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 600,
              '&:hover': { backgroundColor: '#059669' },
              transition: 'background-color 0.3s ease',
            }}
          >
            Claim Airdrop
          </Button>
        </Paper>

        <Typography sx={{ color: '#6B7280', fontSize: '0.75rem', mt: 3 }}>
          ⚠️ This is a sponsored listing. Do your own research before participating.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SponsoredAirdrops;
