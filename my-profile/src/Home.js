import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Home = () => {
  return (
    <div className="text-center page-container">
      <h1 className="display-4 mb-4">Welcome to my Profile</h1>
      <p className="lead">My career goal is to be more knowledgeable and contribute to meaningful projects.</p>
      <div className="d-flex flex-column">
        <Link to="/about" className="btn btn-outline-light btn-lg my-2 animate-button">Go to About</Link>
        <Link to="/skill" className="btn btn-outline-light btn-lg my-2 animate-button">Go to Skills</Link>
        <Link to="/contact" className="btn btn-outline-light btn-lg my-2 animate-button">Go to Contact</Link>
      </div>
    </div>
  );
};

export default Home;
