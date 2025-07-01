import React from "react";
import browserIcon from "../../assets/browser.svg";
import xIcon from "../../assets/x.svg";

const AirdropCard = ({ name, type, logo, website, x, funding, backer }) => {
  return (
    <div className="w-[95%] h-[150px] rounded-xl p-6 flex items-center justify-between m-8 bg-white">
      {/* Left Section - Logo & Name */}
      <div className="flex items-center gap-6">
        <img src={logo} alt={name} className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-blue-500 text-lg font-medium">{type}</p>
          <div className="flex gap-3 mt-2">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-toggleBg text-foreground px-4 py-2 text-lg rounded-lg font-medium flex items-center gap-2"
            >
              <img src={browserIcon} alt="Website" className="w-5 h-5" />
              Website
            </a>
            <a
              href={x}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-toggleBg text-foreground px-4 py-2 text-lg rounded-lg font-medium flex items-center gap-2"
            >
              <img fill="currentColor"src={xIcon} alt="X (Twitter)" className="w-5 h-5 text-white" />
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Center Section - Funding & Backers */}
      <div className="text-lg">
        <p className="font-semibold">
          Raised: <span className="text-black text-xl">{funding}</span>
        </p>
        <p className="text-gray-600">
          Funds and Backers:{" "}
          <span className="font-semibold text-xl">{backer.join(", ")}</span>
        </p>
      </div>
    </div>
  );
};

export default AirdropCard;