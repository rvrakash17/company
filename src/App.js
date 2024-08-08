import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeroSection from './Components/Hero/HeroSection';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Careers from './Components/Career/Careers'; 
import Section from './Components/Card/Section';
import Header from './Components/Header/Header'
import Solutions from './Components/Solution/Solutions';

function Main() {
  const footerRef = useRef(null);
  
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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


    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
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
            <Footer ref={footerRef} />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} /> {/* Add the Careers route */}
        <Route path="/solutions" element={<Solutions/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
