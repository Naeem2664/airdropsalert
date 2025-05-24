"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { colors } from "@/utils/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "DePIN Projects", href: "/depin" },
    { name: "AI Projects", href: "/ai" },
    { name: "DeSci Projects", href: "/desci" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    setIsOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 py-8 flex items-center justify-between h-25">
        {/* Logo - Hidden when search is active */}
        {!showSearch && (
          <Link 
            href="/" 
            className="text-4xl font-extrabold text-white hover:text-green-500 transition-colors"
            style={{ 
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            AirdropX
          </Link>
        )}

        {/* Search Bar - Visible when active */}
        {showSearch && (
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 mx-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full py-3 px-6 pr-12 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400"
              >
                <Search size={24} />
              </button>
            </div>
          </form>
        )}

        {/* Desktop Nav - Hidden when search is active */}
        {!showSearch && (
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-gray-200 hover:text-green-400 transition-colors duration-300"
                style={{
                  padding: '0.5rem 0',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Button - Hidden on mobile when menu is open */}
          {(!isOpen || showSearch) && (
            <button
              onClick={handleSearchToggle}
              className="p-2 text-gray-200 hover:text-green-400 transition-colors"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              {showSearch ? <X size={32} /> : <Search size={32} />}
            </button>
          )}

          {/* Mobile Menu Button - Hidden when search is active */}
          {!showSearch && (
            <button
              className="md:hidden text-gray-200 hover:text-green-400 transition-colors p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Hidden when search is active */}
      {isOpen && !showSearch && (
        <div 
          className="md:hidden bg-gray-800 px-6 py-4 shadow-xl"
          style={{ backgroundColor: colors.primaryBlack }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-4 text-xl font-medium text-gray-200 hover:text-green-400 transition-colors border-b border-gray-700"
              onClick={() => setIsOpen(false)}
              style={{
                letterSpacing: '0.025em'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;