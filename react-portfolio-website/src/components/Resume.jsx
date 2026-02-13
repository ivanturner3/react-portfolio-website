/**
 * Resume Component - PDF Resume Viewer
 * 
 * This component provides a dedicated page for viewing the resume as a PDF.
 * It's accessed via the /resume route and displays the PDF in an embedded iframe.
 * 
 * Features:
 * - Full-screen PDF viewing experience
 * - Navigation back to main portfolio
 * - Responsive iframe sizing
 * 
 * The component uses React Router's Routes/Route for nested routing within
 * the resume page, allowing for potential future expansion (e.g., different
 * resume versions or formats).
 */

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import resumePDF from '.././assets/Ivan Turner Resume.pdf'

const Resume = () => {
  return (
    <div style={{textAlign: "center", paddingTop: "1rem"}}>
      <Routes>
            {/* Main resume route - displays PDF with return button */}
            <Route exact path='/' element={
              <>
                {/* Return to home button */}
                <Link to='/' className='btn' style={{marginBottom: "1rem", padding: "0.5rem 0.75rem"}}>
                  Return to Home
                </Link>
                {/* Embedded PDF viewer */}
                <iframe 
                  title="Resume" 
                  src={resumePDF} 
                  style={{ width: '100%', height: '100vh' }} 
                />
              </>
            } />
      </Routes>
    </div>
  );
};

export default Resume;
