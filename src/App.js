import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';
import Blog from './components/Blog'; // Import the Blog component

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const triggerBottom = (window.innerHeight / 5) * 4;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Section
                title="#Our Design Services"
                description="We specialize in UI/UX design, graphic design, and logo design to help your brand stand out. Web Designing and Backend Services with the Industry Expertise"
              />
              <Section
                title="#Career Guidance"
                description="Get expert advice on Roadmap, resume building, interview tips, and career planning to achieve your professional goals."
              />
              <Section
                title="#Project Ideas For College Students"
                description="Explore innovative project ideas for college students, from tech projects to business plans."
              />
              <Section
                title="#Security Awareness"
                description="Stay safe online with our cybersecurity tips, safe browsing practices, and data protection advice."
              />
              <Section
                title="#Blog"
                description="Read our latest articles on current affairs in security, design trends, and career tips."
              />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
