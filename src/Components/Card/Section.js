import React from 'react';

function Section({ title, description }) {
  return (
    <section className="section">
      <div className="glassmorphism">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Section;
