import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
//import Navbar from './Navbar';
import Skill from './Skill';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div className = "App">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/skill" element = {<Skill />} />
          <Route path="/contact" element = {<Contact />} />
 
        </Routes>
      </div>
    </Router>


  );
};
export default App;