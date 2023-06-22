import React from 'react';

const About = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust the height of the container as needed
        backgroundColor: ' rgb(119, 247, 94)', // Set the background color to green
      };
    
      const h1Style = {
        textAlign: 'center',
      };
    
      return (
        <div style={containerStyle}>
          <h1 style={h1Style}>About Component</h1>
        </div>
      );
};

export default About;
