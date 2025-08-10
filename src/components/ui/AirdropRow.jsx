import React from 'react'
import { Badge } from "@/components/ui/badge";

const AirdropRow = ({ project }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 shadow-sm hover:shadow transition-all">
      {/* 1. Left — Logo, Name, Category */}
      <div className="flex items-center gap-3 min-w-[200px]">
        <div className="relative">
          <img
            src={project.logo}
            alt={project.name}
            className="w-8 h-8 rounded-md border border-border"
          />
          {project.isNew && (
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 text-[9px] py-0 px-1"
            >
              NEW
            </Badge>
          )}
        </div>
        <div>
          <h3 className="font-medium text-xs">{project.name}</h3>
          <p className="text-[11px] text-muted-foreground">
            {project.category}
          </p>
        </div>
      </div>

      {/* 2. Status */}
      <div className="flex flex-col items-start min-w-[100px] text-[11px]">
        <span className="flex items-center gap-1 font-medium text-xs">
          {project.statusIcon} {project.status}
        </span>
        <span className="text-muted-foreground">{project.date}</span>
      </div>

      {/* 3. Middle — Cost & Time */}
      <div className="flex flex-col items-start min-w-[90px] text-[11px]">
        <span className="text-muted-foreground">Cost</span>
        <span className="font-medium">${project.cost}</span>
        <span className="text-muted-foreground mt-0.5">Time</span>
        <span className="font-medium">{project.time}</span>
      </div>

      {/* 4. Type */}
      <div className="min-w-[60px] text-xs">{project.type}</div>

      {/* 5. Funding */}
      <div className="font-semibold min-w-[60px] text-right text-xs">
        ${project.funding}M
      </div>

      {/* 6. Backers */}
      <div className="flex items-center min-w-[70px] -space-x-1">
        {project.backers.map((b, i) => (
          <img
            key={i}
            src={b}
            className="w-5 h-5 rounded-full border border-card"
            alt="backer"
          />
        ))}
        {project.moreBackers > 0 && (
          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded-full border">
            +12
          </span>
        )}
      </div>

      {/* 7. Funding */}
      <div className="font-semibold min-w-[60px] text-right text-xs py-0.5">
        See Detail
      </div>
    </div>
  );
};

export default AirdropRow
