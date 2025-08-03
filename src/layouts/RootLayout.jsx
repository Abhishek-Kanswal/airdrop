import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const theme = useSelector((state) => state.theme.value);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <ScrollToTop />

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
