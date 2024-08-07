import React from 'react';
import './Solutions.css';

function Solutions() {
  return (
    <div className="solutions-page">
      <header className="solutions-header">
        <h1>Our Solutions</h1>
        <p>Explore our services and offerings to enhance your skills and knowledge.</p>
      </header>

      <section className="project-ideas">
        <h2>Project Ideas for College Students</h2>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Project Idea 1</h3>
            <p>Description of the project idea...</p>
            <a href="/project-ideas/1">View</a>
          </div>
          <div className="solution-item">
            <h3>Project Idea 2</h3>
            <p>Description of the project idea...</p>
            <a href="/project-ideas/2">View</a>
          </div>
          {/* Add more project items as needed */}
        </div>
      </section>

      <section className="course-consultancy">
        <h2>Course Consultancy</h2>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Consultancy Service 1</h3>
            <p>Description of the consultancy service...</p>
            <a href="/consultancy/1">View</a>
          </div>
          <div className="solution-item">
            <h3>Consultancy Service 2</h3>
            <p>Description of the consultancy service...</p>
            <a href="/consultancy/2">View</a>
          </div>
          {/* Add more consultancy items as needed */}
        </div>
      </section>

      <section className="webinars">
        <h2>Conducting Webinars</h2>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Webinar Topic 1</h3>
            <p>Description of the webinar...</p>
            <a href="/webinars/1">View</a>
          </div>
          <div className="solution-item">
            <h3>Webinar Topic 2</h3>
            <p>Description of the webinar...</p>
            <a href="/webinars/2">View</a>
          </div>
          {/* Add more webinar items as needed */}
        </div>
      </section>

      <section className="cyber-security">
        <h2>Cyber Security Courses and Tutorials</h2>
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Course 1</h3>
            <p>Description of the course...</p>
            <a href="/cyber-security/1">View</a>
          </div>
          <div className="solution-item">
            <h3>Course 2</h3>
            <p>Description of the course...</p>
            <a href="/cyber-security/2">View</a>
          </div>
          {/* Add more course items as needed */}
        </div>
      </section>
    </div>
  );
}

export default Solutions;
