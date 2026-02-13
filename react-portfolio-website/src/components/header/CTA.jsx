/**
 * CTA Component - Call To Action Buttons
 * 
 * Displays the primary call-to-action buttons in the header section.
 * Includes Resume and Contact buttons with smart device detection.
 * 
 * Features:
 * - Device-aware resume link (mobile vs desktop)
 * - Mobile: Direct PDF download
 * - Desktop: Navigate to resume viewer page
 * - Contact button scrolls to contact form
 * 
 * Uses React Router for navigation on desktop and native download
 * on mobile devices for better user experience.
 */

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Resume from '../Resume'
import resumePDF from '../.././assets/Ivan Turner Resume.pdf'

const CTA = () => {
  // Detect mobile devices to determine resume viewing strategy
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='cta'>
        {/* Resume route configuration */}
        <Routes>
            <Route path='/resume' element={<Resume />} />    
        </Routes>
        
        {/* Mobile devices: direct PDF download */}
        {/* Desktop: navigate to resume viewer page */}
        {isMobile ? (
          <a href={resumePDF} download className='btn'>View Resume</a>
        ) : (
          <Link to='/resume' className='btn'>View Resume</Link>
        )}
        
        {/* Contact button - scrolls to contact section */}
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA