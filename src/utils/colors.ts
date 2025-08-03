// File: `utils/colors.js` (or `styles/colors.js`)
export const colors = {
    // Primary Colors
    primaryGreen: '#00FF00',      // Bright green (e.g., buttons)
    primaryBlue: '#0066CC',       // Interactive elements (links, buttons)
    primaryBlack: '#0B0B0B',      // Main text
    primaryWhite: '#FFFFFF',      // Backgrounds

  
    // Secondary Colors
    secondaryBlack: '#800080',     // Secondary text (e.g., "EXPIRY")
    secondaryOrange: '#FFA500',   // Discounted prices
  
    // Accents/Alerts
    errorRed: '#FF0000',          // Error messages (if any)
    successGreen: '#008000',      // Success states
  };
  
  // Optional: Theme variants (light/dark)
  export const lightTheme = {
    background: colors.primaryWhite,
    text: colors.primaryBlack,
    ...colors,
  };
  
  export const darkTheme = {
    background: colors.primaryBlack,
    text: colors.primaryWhite,
    ...colors,
  };