import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to my Profile</h1>
      <p>My career goal is to be more knowledgeable and contribute to more meaningful and helpful projects.</p>
      <button>
        <Link to="/about">Go to About</Link>
      </button>
      <button>
        <Link to="/skill">Go to Skills</Link>
      </button>
      <button>
        <Link to="/contact">Go to Contact</Link>
      </button>
    </div>
  );
};

export default Home;
