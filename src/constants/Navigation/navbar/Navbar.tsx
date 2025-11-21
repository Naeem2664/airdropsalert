"use client";
import { useState,useEffect } from "react";
import { NoSsr } from "@mui/material";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { 
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItemButton,
  Divider,
  Menu as MuiMenu,
  MenuItem
} from "@mui/material";
import { useGetCategories } from "@/hooks/getCategories";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);
  const { data: categories } = useGetCategories();
  const categoriesList= categories ?? [];

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
          {/* Separate buttons */}
          <Link href="/" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Home</Button>
          </Link>
          
          {/* Categories Dropdown */}
          <Button
            sx={{ 
              color: '#10B981', 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              textTransform: 'none', 
              '&:hover': { 
                color: '#0ea371', 
                backgroundColor: 'transparent' 
              },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
            onClick={handleMenuOpen}
            endIcon={<ChevronDown size={20} />}
          >
            Categories
          </Button>
          
          <MuiMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ 
              sx: { 
                backgroundColor: '#1a1a1a', 
                color: '#10B981',
                minWidth: '200px',
                border: '1px solid #10B981',
                borderRadius: '8px',
                py: 0
              } 
            }}
            PaperProps={{
              sx: {
                backgroundColor: '#1a1a1a',
                border: '1px solid #10B981',
                borderRadius: '8px',
                mt: 1,
                overflow: 'hidden'
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <NoSsr>
            {isClient && categoriesList.map((link) => (
              <MenuItem 
                key={link.name} 
                onClick={handleMenuClose}
                sx={{ 
                  color: '#10B981',
                  py: 1.5,
                  px: 2,
                  borderBottom: '1px solid #2d3748',
                  '&:last-child': {
                    borderBottom: 'none'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#0ea371'
                  }
                }}
              >
                <Link 
                  href={`/categories/${link.slug}`} 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    width: '100%',
                    display: 'block'
                  }}
                >
                  {link.name}
                </Link>
              </MenuItem>
            ))}
            </NoSsr>
           
          </MuiMenu>

          <Link href="/about" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>About Us</Button>
          </Link>
          {/* <Link href="/blog" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Blog</Button>
          </Link> */}
          <Link href="/contact" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Contact Us</Button>
          </Link>
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
          {/* Separate mobile buttons */}
          <Link href="/" passHref>
            <ListItemButton 
              onClick={() => setIsOpen(false)} 
              sx={{ 
                color: '#10B981', 
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#0ea371'
                }
              }}
            >
              Home
            </ListItemButton>
          </Link>
          
          <Link href="/about" passHref>
            <ListItemButton 
              onClick={() => setIsOpen(false)} 
              sx={{ 
                color: '#10B981', 
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#0ea371'
                }
              }}
            >
              About Us
            </ListItemButton>
          </Link>
          
          {/* <Link href="/blog" passHref>
            <ListItemButton 
              onClick={() => setIsOpen(false)} 
              sx={{ 
                color: '#10B981', 
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#0ea371'
                }
              }}
            >
              Blog
            </ListItemButton>
          </Link> */}
          
          <Link href="/contact" passHref>
            <ListItemButton 
              onClick={() => setIsOpen(false)} 
              sx={{ 
                color: '#10B981', 
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#0ea371'
                }
              }}
            >
              Contact Us
            </ListItemButton>
          </Link>

          <Divider sx={{ borderColor: '#1F2937', my: 1 }} />

          {/* Categories section header */}
          <ListItemButton 
            sx={{ 
              color: '#10B981', 
              py: 2,
              fontWeight: '600',
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              '&:hover': {
                backgroundColor: 'rgba(16, 185, 129, 0.05)'
              }
            }}
          >
            Categories
          </ListItemButton>

          {/* Categories mobile items */}
          <NoSsr>
          {isClient && categoriesList.map((link) => (
            <Link key={link.name} href={`/categories/${link.slug}`} passHref>
              <ListItemButton 
                onClick={() => setIsOpen(false)} 
                sx={{ 
                  color: '#10B981', 
                  py: 2,
                  pl: 4,
                  '&:hover': {
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#0ea371'
                  }
                }}
              >
                {link.name}
              </ListItemButton>
            </Link>
          ))}
          </NoSsr>
         
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;