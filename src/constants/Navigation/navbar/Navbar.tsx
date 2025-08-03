"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { 
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider
} from "@mui/material";
import { navLinks } from "@/constants/components/links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar 
      sx={{ 
        backgroundColor: '#000000',
        boxShadow: 3,
        py: 2,
        marginBottom: '1rem'
      }}
    >
      <Toolbar sx={{ 
        maxWidth: '1536px', 
        width: '100%', 
        mx: 'auto',
        px: { xs: 2, md: 4 },
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link href="/" passHref>
          <Button
            component="a"
            sx={{
              fontSize: '1.875rem',
              fontWeight: '800',
              color: '#10B981',
              textTransform: 'none',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              '&:hover': {
                color: '#0ea371',
                bgcolor: 'transparent'
              }
            }}
          >
            AirdropX
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <Button
                component="a"
                sx={{
                  color: '#10B981',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  textTransform: 'none',
                  letterSpacing: '0.025em',
                  '&:hover': {
                    color: '#0ea371',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ 
            color: '#10B981',
            display: { md: 'none' },
            '&:hover': { 
              color: '#0ea371',
              backgroundColor: 'rgba(16, 185, 129, 0.1)'
            }
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#000000',
            mt: '88px',
            color: '#10B981'
          }
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <Link href={link.href} passHref>
                <ListItemButton
                  onClick={() => setIsOpen(false)}
                  sx={{
                    color: '#10B981',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    py: 3,
                    px: 4,
                    '&:hover': {
                      color: '#0ea371',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)'
                    }
                  }}
                >
                  {link.name}
                </ListItemButton>
              </Link>
              <Divider sx={{ borderColor: '#1F2937' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;