/**
 * App Component - Main Application Container
 * 
 * This is the root component of the portfolio website. It orchestrates the layout
 * by rendering all major sections in a specific order to create a single-page
 * application experience.
 * 
 * Component Structure:
 * - Header: Hero section with name, title, and profile image
 * - Nav: Sticky navigation bar that tracks scroll position
 * - About: Professional and personal background with tabbed interface
 * - Experience (Skills): Technical skills organized by category
 * - Projects: Portfolio of work with filtering capabilities
 * - Contact: Contact form and contact information
 * - Footer: Social links and site navigation
 * 
 * The app uses React Router for handling the resume page route while maintaining
 * the single-page structure for the main content.
 */

import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
        {/* Hero section with introduction and CTA buttons */}
        <Header />
        
        {/* Sticky navigation that follows user scroll */}
        <Nav />
        
        {/* Professional and personal background */}
        <About />
        
        {/* Technical skills and competencies */}
        <Experience />
        
        {/* Portfolio projects showcase */}
        <Projects />
        
        {/* Contact form and information */}
        <Contact />
        
        {/* Footer with links and copyright */}
        <Footer />
      </>
  )
}

export default App