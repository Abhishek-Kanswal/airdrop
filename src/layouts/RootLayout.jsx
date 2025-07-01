import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ui/ScrollToTop';

const RootLayout = () => {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <ScrollToTop/>

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <Outlet />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;