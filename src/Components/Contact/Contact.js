import React from 'react';
import Footer from '../Footer/Footer'; // Import Footer component

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <div className="contact-card">

         <center><h2>Contact Us</h2></center>
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Include Footer component here */}
    </div>
  );
}

export default Contact;