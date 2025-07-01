import React from "react";
import Main from "../components/home/HeroSection";
import CryptoPrice from "../components/home/CryptoPrice";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductSection from "../components/home/ProductSection";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-yellow-400/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10">
          <Main />
          <CryptoPrice />
          <ProductSection/>
          <FeaturesSection/>
        </div>
      </div>
    </>
  );
};

export default Home;
