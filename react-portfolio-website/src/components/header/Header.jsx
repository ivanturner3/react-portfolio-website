/**
 * Header Component - Hero Section
 * 
 * The main landing section of the portfolio website. This component creates
 * the first impression with a full-viewport hero section featuring:
 * - Personal introduction and title
 * - Call-to-action buttons (Resume, Contact)
 * - Social media links
 * - Profile image
 * - Theme toggle (dark/light mode)
 * - Scroll indicator
 * 
 * The header uses a gradient background (defined in CSS) and includes
 * multiple sub-components that are organized to create an engaging
 * entry point to the portfolio.
 */

import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import ThemeToggle from './ThemeToggle'
import { MdArrowForward } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      {/* Theme toggle button (dark/light mode) positioned absolutely */}
      <ThemeToggle />
      
      {/* Empty section used as scroll anchor for "home" navigation */}
      <section id="home"></section>
      
      <div className="container header__container">
        {/* Introduction text */}
        <h5> Hello, I'm</h5>
        <h1>Ivan Turner</h1>
        <h5 className='text-light'>Software Developer & Data Scientist</h5>
        
        {/* Call-to-action buttons (Resume, Contact) */}
        <CTA />
        
        {/* Social media links (LinkedIn, GitHub, Facebook) */}
        <HeaderSocials />

        {/* Profile image */}
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        {/* Scroll down indicator with animation */}
        <a href='#about' className='scroll__down'>
          Scroll Down
          <MdArrowForward />
        </a>
      </div>
      
      </header>
  )
}

export default Header