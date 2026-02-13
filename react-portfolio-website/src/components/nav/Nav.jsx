/**
 * Nav Component - Sticky Navigation Bar
 * 
 * A sophisticated sticky navigation component that provides smooth scrolling
 * and intelligent active state tracking based on viewport position.
 * 
 * Key Features:
 * - Sticky positioning that follows user as they scroll
 * - Automatic active state based on viewport scroll position
 * - Smooth scroll animation when navigation items are clicked
 * - Animated indicator that slides between active items
 * - Hides when footer is visible to prevent overlap
 * - Responsive design with icons and labels
 * - Accessibility support with ARIA labels
 * 
 * Technical Details:
 * - Uses IntersectionObserver to detect footer visibility
 * - Tracks scroll position to highlight current section
 * - CSS custom property (--active-index) animates the indicator
 * - Debounces scroll events during programmatic scrolling
 */

import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMailSend } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';

const Nav = () => {
  // State for tracking which navigation link is currently active
  const [activeLink, setActiveLink] = useState('#');
  
  // State for controlling the moving animation of the active indicator
  const [isMoving, setIsMoving] = useState(false);
  
  // State to prevent scroll tracking during programmatic scrolling
  const [isScrolling, setIsScrolling] = useState(false);
  
  // State to track if footer is visible (to hide nav)
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  
  // Order of navigation items for calculating active indicator position
  const navOrder = ['home', 'about', 'skills', 'projects', 'contact'];
  
  // Normalize active link by removing '#' if present
  const normalizedActive = activeLink.startsWith('#') ? activeLink.slice(1) : activeLink;
  
  // Calculate index for CSS animation (0-based)
  // Calculate index for CSS animation (0-based)
  const activeIndex = Math.max(0, navOrder.indexOf(normalizedActive));

  /**
   * Effect: Trigger moving animation when active index changes
   * Sets isMoving to true, then resets after animation duration (750ms)
   */
  useEffect(() => {
    setIsMoving(true);
    const timeoutId = setTimeout(() => setIsMoving(false), 750);
    return () => clearTimeout(timeoutId);
  }, [activeIndex]);

  /**
   * Effect: Observe footer visibility using IntersectionObserver
   * Hides navigation when footer comes into view to prevent overlap
   */
  useEffect(() => {
    const footer = document.querySelector('#footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
        rootMargin: '0px'
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);
  
  /**
   * Effect: Track scroll position and update active link
   * Determines which section is currently in the viewport center
   * and updates the active navigation item accordingly
   */
  useEffect(() => {
    const handleScroll = () => {
      // Don't update during programmatic scrolling
      if (isScrolling) return;
      
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Near top of page - activate home
      if (scrollPosition <= 700) {
        setActiveLink('home');
        return;
      }

      // Check which section is in the center of viewport
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        const halfViewportHeight = viewportHeight / 2;

        // Section is in center of viewport
        if (top < halfViewportHeight && bottom > halfViewportHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  /**
   * Handle navigation click
   * Prevents default anchor behavior and implements smooth scroll
   * with proper offset for sticky header
   */
  const handleClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    setActiveLink(href.replace('#', ''));
    setIsScrolling(true);
    let target = event.target;
  
    // Traverse up to find the anchor element
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
    }
  
    if (target && target.getAttribute('href')) {
      target = target.getAttribute('href');
      setTimeout(() => {
        const section = document.querySelector(target);
        if (section) {
          // Calculate padding offset for smooth scroll
          const padding = Math.max(40, Math.min(window.innerWidth * 0.05, 60));
          window.scrollTo({
            top: section.offsetTop - padding,
            behavior: 'smooth'
          });
          // Re-enable scroll tracking after animation completes
          setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      }, 10);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`${isMoving ? 'nav--moving' : ''} ${isFooterVisible ? 'nav--hidden' : ''}`}
      style={{ '--active-index': activeIndex }}
    >
      {/* Home navigation link */}
      <a 
        href="#home"
        onClick={handleClick} 
        className={normalizedActive === 'home' ? 'active' : ''}
      >
        <AiOutlineHome />
        <span>Home</span>
      </a>
      
      {/* About navigation link */}
      <a
        href="#about"
        onClick={handleClick}
        className={normalizedActive === 'about' ? 'active' : ''}
      >
        <BsPersonCircle />
        <span>About</span>
      </a>
      
      {/* Skills navigation link */}
      <a
        href="#skills"
        onClick={handleClick}
        className={normalizedActive === 'skills' ? 'active' : ''}
      >
        <GiSkills />
        <span>Skills</span>
      </a>
      
      {/* Projects navigation link */}
      <a
        href="#projects"
        onClick={handleClick}
        className={normalizedActive === 'projects' ? 'active' : ''}
      >
        <MdWork />
        <span>Projects</span>
      </a>
      
      {/* Contact navigation link */}
      <a
        href="#contact"
        onClick={handleClick}
        className={normalizedActive === 'contact' ? 'active' : ''}
      >
        <BiMailSend />
        <span>Contact</span>
      </a>
    </nav>
  );
};

export default Nav;
