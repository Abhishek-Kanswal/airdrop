import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../components/ui/Container";
import airdrops from "../components/common/AirdropData";
import { Search, Users, Plus } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dailyTaskReset } from "@/app/features/TaskSlice";
import { useDispatch } from "react-redux";

export default function Page() {
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (!searchParam.get("page") || !searchParam.get("filter")) {
      setSearchParam({ page: "1", filter: "live" });
    }
  }, []);

  let pageFromURL = parseInt(searchParam.get("page") || 1);
  let filterFromURL = searchParam.get("filter") || "live";

  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const [activeFilter, setActiveFilter] = useState(filterFromURL);
  const pageSize = 9;
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dailyTaskReset());
  }, []);

  const filteredAirdrops = Object.values(airdrops).filter((airdrop) => {
    const statusMatches =
      airdrop.status.toLowerCase() === activeFilter.toLowerCase();
    const nameMatches = airdrop.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    return statusMatches && (searchInput.trim() === "" || nameMatches);
  });

  const paginatedAirdrops = filteredAirdrops.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPage = Math.ceil(filteredAirdrops.length / pageSize);
  useEffect(() => {
    setSearchParam({ page: currentPage, filter: activeFilter });
  }, [activeFilter, currentPage, setSearchParam]);
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-toggleBg aspect-video rounded-xl" />
        <div className="bg-toggleBg aspect-video rounded-xl" />
        <div className="bg-toggleBg aspect-video rounded-xl" />
      </div>
      <div className="bg-toggleBg min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        {/* Airdrop List */}
        <div className="min-h-[78vh] border border-toggleBg rounded-lg p-4 overflow-y-auto bg-toggleBg">
          {paginatedAirdrops.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No airdrops found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedAirdrops.map((airdrop) => (
                <Container key={airdrop.id} airdrop={airdrop} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
