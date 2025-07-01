import React, { useEffect, useState } from "react";

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const coinIds = ["bitcoin", "ethereum", "solana", "polkadot", "sui"];

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(
          ","
        )}&vs_currencies=usd&include_24hr_change=true`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const formattedData = Object.keys(data)
        .map((key) => {
          if (!data[key]) return null;
          return {
            id: key,
            name: key.charAt(0).toUpperCase() + key.slice(1),
            price: data[key].usd?.toFixed(2) ?? "N/A",
            change: data[key].usd_24h_change?.toFixed(2) ?? "N/A",
            logo: `/coins/${key}.png`, // ← load from public/coins/
          };
        })
        .filter(Boolean);

      setCryptoData(formattedData);
    } catch (error) {
      console.error("Error fetching crypto prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className="py-8 border-y border-toggleBg backdrop-blur-sm mx-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-row items-stretch gap-6 md:gap-10 lg:gap-12 overflow-x-auto pb-4 custom-scrollbar">
          {cryptoData.length === 0 && (
            <p className="text-zinc-500">Loading prices...</p>
          )}
          {cryptoData.map((crypto) => (
            <div key={crypto.id} className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
              <div className="rounded-full bg-toggleBg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center p-1.5 flex-shrink-0">
                <img
                  src={crypto.logo}
                  alt={`${crypto.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="flex flex-col justify-center space-y-1 font-medium">
                <span className="text-sm sm:text-base text-foreground whitespace-nowrap">{crypto.name}</span>
                <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                  <span className="text-base sm:text-lg text-foreground whitespace-nowrap">${crypto.price}</span>
                  <span
                    className={`text-xs sm:text-sm whitespace-nowrap ${
                      crypto.change === "N/A"
                        ? "text-zinc-500"
                        : parseFloat(crypto.change) >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {crypto.change === "N/A"
                      ? "N/A"
                      : `${parseFloat(crypto.change) >= 0 ? "+" : ""}${crypto.change}%`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoPrice;
