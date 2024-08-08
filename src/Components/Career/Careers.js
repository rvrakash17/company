import React from 'react';
import './Careers.css';

function Careers() {
  return (
    <div className="careers-page">
      <header className="careers-header">
        <h1>Join Our Team</h1>
        <p>Discover exciting career opportunities and be a part of our dynamic team!</p>
      </header>

      <section className="current-openings">
        <h2>Current Job Openings</h2>
        <ul>
          <li>
            <h3>Frontend Developer</h3>
            <p>Location: Remote</p>
            <p>HTML,CSS,JS Theriyanum Kanna</p>
            <a href="/apply">Apply Now</a>
          </li>
          <li>
            <h3>Graphic Designer</h3>
            <p>Location: Remote</p>
            <p>Poster Adikka Theriyanum Kanna</p>
            <a href="/apply">Apply Now</a>
          </li>
          <li>
            <h3>Backend Developer</h3>
            <p>Location: Remote</p>
            <p>PHP Therinja Podhum Kanna</p>
            <a href="/apply">Apply Now</a>
          </li>
          {/* Add more job listings as needed */}
        </ul>
      </section>

      <section className="company-culture">
        <h2>Company Culture</h2>
        <div className="testimonials">
          <h3>What Our Employees Say</h3>
          <blockquote>
            <p>“Semma Company pa Idhu ” - ANANTH K</p>
          </blockquote>
          <blockquote>
            <p>“Amukku Gummkuu dhaan” - BALAJI </p>
          </blockquote>
        </div>
      </section>

      <section className="career-pathways">
        <h2>Career Pathways</h2>
        <p>Learn about how you can grow with us...</p>
        {/* Add detailed content about career growth opportunities */}
      </section>

      <section className="application-process">
        <h2>How to Apply</h2>
        <p>Follow these steps to apply for a position with us...</p>
        {/* Add detailed instructions */}
      </section>

      <section className="benefits-perks">
        <h2>Benefits and Perks</h2>
        <ul>
          <li>Health Insurance</li>
          <li>Retirement Plan</li>
          <li>Paid Time Off</li>
          <li>Unique Perks</li>
          {/* List more benefits */}
        </ul>
      </section>
    </div>
  );
}

export default Careers;
