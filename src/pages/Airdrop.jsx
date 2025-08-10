import { useState, useEffect } from "react";
import Container from "../components/ui/Container";
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
import { fetchAirdropData } from "../app/features/AirdropSlice";
import { useDispatch, useSelector } from "react-redux";

const Airdrop = () => {
  const dispatch = useDispatch();
  const {
    value: airdrops,
    loading,
    error,
  } = useSelector((state) => state.airdrop);
  const [searchParam, setSearchParam] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParam.get("page") || 1)
  );
  const [activeFilter, setActiveFilter] = useState(
    searchParam.get("filter") || "live"
  );
  const [searchInput, setSearchInput] = useState("");
  const pageSize = 9;

  useEffect(() => {
    if (!airdrops || airdrops.length === 0) {
      dispatch(fetchAirdropData());
    }

    dispatch(dailyTaskReset());
  }, [dispatch, airdrops]);

  useEffect(() => {
    if (!searchParam.get("page") || !searchParam.get("filter")) {
      setSearchParam({ page: "1", filter: "live" });
    }
  }, []);

  useEffect(() => {
    setSearchParam({ page: currentPage, filter: activeFilter });
  }, [currentPage, activeFilter]);

  const filteredAirdrops =
    airdrops?.filter(
      (airdrop) =>
        airdrop.status.toLowerCase() === activeFilter.toLowerCase() &&
        (searchInput.trim() === "" ||
          airdrop.name.toLowerCase().includes(searchInput.toLowerCase()))
    ) || [];

  const paginatedAirdrops = filteredAirdrops.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPage = Math.ceil(filteredAirdrops.length / pageSize);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">Drophunting Dashboard</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Find and track live airdrops across top chains with verified tasks
              and funding insights.
            </p>
          </div>
          <div className="flex gap-3 items-start md:items-center">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg border-outline hover:bg-toggleBg transition">
              <Plus size={18} />
              <span className="text-sm font-medium">Submit Suggestion</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              <Users size={18} />
              <span className="text-sm font-medium">Partnership</span>
            </button>
          </div>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <Tabs
            defaultValue="live"
            value={activeFilter}
            onValueChange={(val) => {
              setActiveFilter(val);
              setCurrentPage(1);
            }}
          >
            <TabsList className="bg-toggleBg border border-outline p-1 rounded-md">
              <TabsTrigger value="live">Live</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ended">Ended</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center bg-toggleBg border border-outline rounded-md px-3 py-2 max-w-sm w-full">
            <Search className="text-[#9CA3AF]" size={18} />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search airdrops..."
              className="ml-2 w-full outline-none text-sm bg-transparent text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Airdrop List */}
        <div className="min-h-[78vh] border border-toggleBg rounded-lg p-4 overflow-y-auto bg-toggleBg overflow-x-hidden">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : paginatedAirdrops.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No airdrops found.
            </div>
          ) : (
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch">
              {paginatedAirdrops.map((airdrop) => (
                <Container key={airdrop.id} airdrop={airdrop} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPage > 1 && (
          <div className="flex justify-center mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPage }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPage))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default Airdrop;
