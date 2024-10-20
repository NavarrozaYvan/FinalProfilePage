import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="text-center">
      <h1>About Me</h1>
      <p> I am a 3rd Year Computer Science student in Pamantasan ng Cabuyao, My hobbies are Editing,
            Photography, Videography, Graphic designing, and playing drums.
            I want to explore and learn more
            skills in my hobbies and also in my field of my course</p>
            <p>I want to explore and learn more
            skills in my hobbies and also in my field of my course</p>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default About;
