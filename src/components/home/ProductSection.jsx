import React from "react";

const ProductSection = () => {
  return (
    <section className="pt-10 bg-background border-y border-toggleBg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-2/5 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-zinc-700/50 text-primary text-xs font-medium mb-6">
              Powerful Platform
            </div>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-6">
              Designed for Modern Teams
            </h2>
            <p className="text-foreground mb-6">
              Our platform offers advanced tools, intuitive interfaces, and
              seamless integrations to help your team collaborate effectively
              and deliver exceptional results.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Intuitive dashboard and analytics",
                "Seamless third-party integrations",
                "Customizable workflows",
                "Real-time collaboration tools",
                "Advanced automation capabilities",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-yellow-100/40 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#FACC15] shadow-md shadow-yellow-400/50" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary hover:bg-yellow-500 text-white px-6 py-2 rounded-md">
              Explore Features
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-3/5 relative">
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 " />
              <img
                src="src\assets\Blockchain.svg"
                alt="Product dashboard"
                className="w-full hidden md:inline-block"
              />
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
