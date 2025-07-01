import React from "react";
import { BarChart3, Lock, Wallet } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Trading Tools",
      description:
        "Access professional-grade charts, indicators, and order types to execute your trading strategy.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Institutional Security",
      description:
        "Your assets are protected by multi-layer security systems and cold storage solutions.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Multi-Asset Wallet",
      description:
        "Store, send, and receive hundreds of cryptocurrencies in one secure wallet.",
    },
  ];

  return (
    <div className="flex justify-center px-4 py-16">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-8 bg-toggleBg border border-zinc-700 rounded-xl hover:bg-zinc-800/20 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h2 className="text-lg font-medium text-foreground">
                {feature.title}
              </h2>
              <p className="text-sm text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;