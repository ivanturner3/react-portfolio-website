
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import resumePDF from '.././assets/Ivan Turner Resume.pdf'

const Resume = () => {
  return (
    <div style={{textAlign: "center", paddingTop: "1rem"}}>
      <Routes>
            <Route exact path='/' element={<><Link to='/' className='btn' style={{marginBottom: "1rem", padding: "0.5rem 0.75rem"}}>Return to Home</Link><iframe title="Resume" src={resumePDF} style={{ width: '100%', height: '100vh' }} /></>} />
      </Routes>
    </div>
  );
};

export default Resume;
