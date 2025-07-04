import React from "react";
import { Globe } from "lucide-react";

const AirdropCard = ({ name, type, logo, website, x, funding, backer }) => {
  // Max number of backers to show directly
  const MAX_VISIBLE_BACKERS = 3;

  const visibleBackers = backer.slice(0, MAX_VISIBLE_BACKERS);
  const hiddenBackers = backer.slice(MAX_VISIBLE_BACKERS);
  const hiddenCount = hiddenBackers.length;

  const tooltip = hiddenBackers.join(", ");

  return (
    <div className="w-[95%] min-h-[150px] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between m-8 bg-card">
      {/* Left Section - Logo & Name */}
      <div className="flex items-center gap-6">
        <img src={logo} alt={name} className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-blue-500 text-lg font-medium">{type}</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            {/* Website Button */}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-toggleBg text-foreground px-4 py-2 text-lg rounded-lg font-medium flex items-center gap-2"
            >
              <Globe className="w-5 h-5 text-foreground" />
              Website
            </a>

            {/* Twitter X Button */}
            <a
              href={x}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-toggleBg text-foreground px-4 py-2 text-lg rounded-lg font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                className="w-5 h-5 fill-current text-foreground"
              >
                <path d="M1105.58 0H891.89L601.3 418.94L309.2 0H0L461.46 632.68L33.68 1227h213.7l337.11-487.67L920.71 1227H1200L733.42 637.11 1105.58 0z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Center Section - Funding & Backers */}
      <div className="text-lg mt-4 md:mt-0">
        <p className="font-semibold">
          Raised: <span className="text-secondaryText text-xl">{funding}</span>
        </p>
        <p className="flex flex-wrap items-center gap-1">
          <span className="text-foreground font-semibold">Funds and Backers:</span>
          {visibleBackers.map((b, index) => (
            <span key={index} className="text-secondaryText text-xl font-semibold">
              {b}
              {index < visibleBackers.length - 1 ? "," : ""}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span
              className="text-sm bg-muted px-2 py-1 rounded cursor-help text-muted-foreground"
              title={tooltip}
            >
              +{hiddenCount} more
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default AirdropCard;
