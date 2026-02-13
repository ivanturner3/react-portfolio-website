/**
 * ThemeToggle Component - Dark/Light Mode Switcher
 * 
 * Provides a toggle button to switch between dark and light themes.
 * Theme preference is persisted in localStorage for user convenience.
 * 
 * Features:
 * - Toggles between dark and light themes
 * - Persists user preference in localStorage
 * - Updates CSS variables via data-theme attribute
 * - Icon changes based on current theme
 * - Accessible with proper aria-label
 * 
 * Theme Implementation:
 * - Sets data-theme attribute on document root
 * - CSS variables defined in index.css respond to theme
 * - Default theme is dark
 */

import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  // Apply theme to document and persist to localStorage whenever it changes
  useEffect(() => {
    // Set data-theme attribute on root element for CSS variable switching
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save preference to localStorage for persistence across sessions
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {/* Show sun icon in dark mode, moon icon in light mode */}
      {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
