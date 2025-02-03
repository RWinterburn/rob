import React from 'react';
import Card from '/src/components/Card';

const About = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      <Card 
        title="Project 1"
        description="This is my first project"
        image="https://via.placeholder.com/300"
      />
      <Card 
        title="Project 2"
        description="This is my second project"
        image="https://via.placeholder.com/300"
      />
    </div>
  );
};

export default About;

  