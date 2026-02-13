/**
 * Footer Component - Site Footer
 * 
 * Provides navigation, social links, and copyright information at the
 * bottom of the page.
 * 
 * Features:
 * - Logo/name link that scrolls to top
 * - Duplicate site navigation for easy access
 * - Social media links (Facebook, LinkedIn, GitHub)
 * - Dynamic copyright year
 * - "Back to Top" link
 * - Unique footer ID for IntersectionObserver (used by Nav component)
 * 
 * The footer serves as both a navigation aid and a visual endpoint
 * for the single-page application.
 */

import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  // Get current year for copyright notice
  const year = new Date().getFullYear();
  
  return (
    <footer id="footer">
      {/* Footer logo/name - links to top */}
      <a href="#home" className="footer__logo">Ivan Turner</a>

      {/* Site navigation links */}
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Social media links */}
      <div className="footer__socials">
        <a href='https://www.facebook.com/ivanmturner3' target='_blank' rel="noreferrer noopener"><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/ivanturner/' target='_blank' rel="noreferrer noopener"><BsLinkedin /></a>
        <a href='https://github.com/ivanturner3' target='_blank' rel="noreferrer noopener"><BsGithub/></a>
      </div>

      {/* Copyright notice with dynamic year */}
      <div className="footer__copyright">
        <small>&copy;{year} Ivan Turner. All rights reserved.</small>
      </div>

      {/* Back to top link */}
      <a href='#home' className='to__top'>Back to Top</a>
    </footer>
  )
}

export default Footer