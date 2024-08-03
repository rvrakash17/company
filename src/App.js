import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DesignServices />
      <CareerGuidance />
      <ProjectIdeas />
      <SecurityAwareness />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
