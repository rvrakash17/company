import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
