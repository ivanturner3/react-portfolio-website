import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Resume from '../Resume'
import resumePDF from '../.././assets/Ivan Turner Resume.pdf'

const CTA = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='cta'>
        <Routes>
            <Route path='/resume' element={<Resume />} />    
        </Routes>
        {isMobile ? (
          <a href={resumePDF} download className='btn'>View Resume</a>
        ) : (
          <Link to='/resume' className='btn'>View Resume</Link>
        )}
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA