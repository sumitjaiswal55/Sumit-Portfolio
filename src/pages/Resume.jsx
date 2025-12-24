import React from 'react';
import resume from "../assets/resume.pdf" 
const Resume = () => {
  return (
    <div style={{ 
      backgroundColor: '#121212', // Dark background
      padding: '30px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh' 
    }}>
      
      <h2 style={{ color: 'white', marginBottom: '20px' }}>My Resume</h2>

      {/* Ye hai wo IFRAME section */}
      <iframe 
        src={resume}
        title="My Resume"
        width="80%" 
        height="600px" 
        style={{ 
          border: 'none', 
          borderRadius: '8px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)' 
        }}
      />
    </div>
  );
}

export default Resume;