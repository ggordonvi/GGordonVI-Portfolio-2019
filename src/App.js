import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <Navbar />
        <Route exact path="/" component={Banner} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
