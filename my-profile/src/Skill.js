import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skill = () => {
  return (
    <div className="text-center">
      <h2>Skills</h2>
 
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Git and Github</li>

      <button>
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default Skill;
