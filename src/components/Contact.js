import React from 'react';
import Layout from './Layout';

const Contact = () => {
  return (
    <Layout>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export default Contact;
