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
  ListItemButton,
  Divider,
  Menu as MuiMenu,
  MenuItem
} from "@mui/material";
import { useGetCategories } from "@/hooks/getCategories";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { data: categories } = useGetCategories();

  const handleMenuOpen = (event:any) => {
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
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
          {/* Separate buttons */}
          <Link href="/" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Home</Button>
          </Link>
          <Button
            sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}
            onClick={handleMenuOpen}
          >
            Categories
          </Button>
          <MuiMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ sx: { backgroundColor: '#000000', color: '#10B981' } }}
          >
            {(categories ?? []).map((link) => (
              <MenuItem key={link.name} onClick={handleMenuClose}>
                <Link href={`/categories/${link.slug}`} key={link.slug} passHref>
                  <Button sx={{ color: '#10B981', textTransform: 'none' }}>
                    {link.name}
                  </Button>
                </Link>
              </MenuItem>
            ))}
          </MuiMenu>
          <Link href="/about" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>About Us</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Blog</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button sx={{ color: '#10B981', fontSize: '1.125rem', fontWeight: '600', textTransform: 'none', '&:hover': { color: '#0ea371', backgroundColor: 'transparent' } }}>Contact Us</Button>
          </Link>

          {/* Dropdown for categories */}
         
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
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: '#10B981', py: 2 }}>Home</ListItemButton>
          </Link>
          <Link href="/about" passHref>
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: '#10B981', py: 2 }}>About Us</ListItemButton>
          </Link>
          <Link href="/blog" passHref>
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: '#10B981', py: 2 }}>Blog</ListItemButton>
          </Link>
          <Link href="/contact" passHref>
            <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: '#10B981', py: 2 }}>Contact Us</ListItemButton>
          </Link>

          <Divider sx={{ borderColor: '#1F2937', my: 1 }} />

          {/* Categories mobile dropdown */}
          {(categories ?? []).map((link) => (
            <Link key={link.name} href={`/categories/${link.slug}`} passHref>
              <ListItemButton onClick={() => setIsOpen(false)} sx={{ color: '#10B981', py: 2 }}>
                {link.name}
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
