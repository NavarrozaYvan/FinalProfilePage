import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import Home from './Pages/Home';  
import About from './Pages/About';  
import Contact from './Pages/Contact';  
import Skills from './Pages/Skills';

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
