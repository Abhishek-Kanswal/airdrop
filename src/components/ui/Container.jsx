import React from "react";
import { Eye, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const Container = ({ airdrop }) => {
  const navigate = useNavigate();
  const taskStatus = useSelector((state) => state.task.value[airdrop.name]);
  return (
    <motion.Card
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.12)",
      }}
      transition={{
        duration: 0.2,
        type: "ease-in-out",
      }}
      onClick={() => {
        navigate(`/app/${airdrop.name}`); // Navigate to the airdrop detail page
      }}
      className="overflow-hidden transition-all hover:shadow-md border border-outline max-w-md w-full m-4 bg-background rounded-lg"
    >
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3 bg-muted flex items-center justify-center">
                <img
                  src={airdrop.logo || "/placeholder.svg"}
                  alt={`${airdrop.name} logo`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {airdrop.name}
                </h3>
                <div className="flex items-center mt-1">
                  <Badge
                    className={`text-xs font-normal border ${
                      airdrop.status === "live"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : airdrop.status === "upcoming"
                        ? "bg-blue-100 text-blue-800 border-blue-300"
                        : "bg-muted text-muted-foreground border-muted"
                    }`}
                  >
                    {airdrop.status.charAt(0).toUpperCase() +
                      airdrop.status.slice(1)}
                  </Badge>
                  <Badge className="flex items-center justify-center ml-2 text-xs font-normal bg-muted text-muted-foreground border border-muted">
                    <p className="text-center">{taskStatus ? "✅" : "❌"}</p>
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-muted-foreground text-xs mb-1">
                <Eye className="h-3 w-3 mr-1" />
                {airdrop.views} views
              </div>
              <p className="text-lg font-bold text-foreground">
                <span className="text-sm font-normal text-muted-foreground">
                  Funding:
                </span>{" "}
                {airdrop.funding || "N/A"}
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {airdrop.details || "No description available."}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              <TooltipProvider>
                {airdrop.requirements?.length > 0 ? (
                  airdrop.requirements.map((req, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Badge className="bg-muted text-muted-foreground hover:bg-muted/70 cursor-help text-xs">
                          {req.label}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{req.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))
                ) : (
                  <Badge className="bg-muted text-muted-foreground text-xs">
                    No tasks
                  </Badge>
                )}
              </TooltipProvider>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="text-xs text-foreground border-outline hover:bg-muted"
            >
              Details
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </motion.Card>
  );
};

export default Container;
