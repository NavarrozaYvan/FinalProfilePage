import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const About = () => {
  return (
    <div className="text-center page-container">
      <h1 className="display-4 mb-4">About Me</h1>
      <p>I am a 3rd Year Computer Science student at Pamantasan ng Cabuyao. My hobbies include editing, photography, videography, graphic designing, and playing drums. I want to explore and learn more skills in both my hobbies and my course.</p>
      <div className="d-flex flex-column">
        <Link to="/" className="btn btn-outline-light btn-lg my-2 animate-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default About;
