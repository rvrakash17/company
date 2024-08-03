import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/services" component={Services} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
