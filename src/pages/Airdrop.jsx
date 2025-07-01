import { useState } from "react";
import Container from "../components/ui/Container"; // Assumed to be AirdropCard
import airdrops from "../components/common/AirdropData";
import { Search, Users, Plus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { setTaskReset } from "@/app/features/TaskSlice";

const Airdrop = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("live");
  const pageSize = 9;
  const [searchInput, setSearchInput] = useState("");

  const filteredAirdrops = Object.values(airdrops).filter((airdrop) => {
    if (airdrop.status.toLowerCase() === activeFilter.toLowerCase()) {
      if (searchInput.length === 0) {
        return true;
      } else if (
        airdrop.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  const paginatedAirdrops = filteredAirdrops.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPage = Math.ceil(filteredAirdrops.length / pageSize);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <div>
            <h1
              onDoubleClick={() => {
                dispatch(setTaskReset());
              }}
              className="text-4xl font-bold"
            >
              Drophunting Dashboard
            </h1>
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
            onValueChange={setActiveFilter}
          >
            <TabsList className="bg-toggleBg border border-outline p-1 rounded-md">
              <TabsTrigger onClick={() => setCurrentPage(1)} value="live">
                Live
              </TabsTrigger>
              <TabsTrigger onClick={() => setCurrentPage(1)} value="upcoming">
                Upcoming
              </TabsTrigger>
              <TabsTrigger onClick={() => setCurrentPage(1)} value="ended">
                Ended
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center bg-white border border-[#E5E7EB] rounded-md px-3 py-2 max-w-sm w-full">
            <Search className="text-[#9CA3AF]" size={18} />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search airdrops..."
              className="ml-2 w-full outline-none text-sm text-black"
            />
          </div>
        </div>

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
